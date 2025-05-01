import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  externalSchematic,
  apply,
  url,
  move,
  template,
  mergeWith
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import * as path from 'path';

export function resource(options: any): Rule {
  const name = strings.dasherize(options.name);
  const basePath = path.posix.join(options.path || 'src/app', name);

  return chain([
    // Componente principal
    externalSchematic('@schematics/angular', 'component', {
      name: name,
      path: basePath,
      standalone: true
    }),

    // Archivo de rutas
    mergeWith(
      apply(url('./files/routes'), [
        template({ ...strings, name }),
        move(basePath)
      ])
    ),

    // Estructura: components
    ...['list', 'form', 'details'].map(cmp =>
      externalSchematic('@schematics/angular', 'component', {
        name: `${name}/components/${cmp}`,
        path: basePath,
        standalone: true
      })
    ),

    // Estructura: resolvers
    ...['list', 'item'].map(res =>
      externalSchematic('@schematics/angular', 'class', {
        name: `${name}/resolvers/${res}.resolver`,
        path: basePath,
        type: 'resolver'
      })
    ),

    // Servicios
    mergeWith(
      apply(url('./files/services'), [
        template({ ...strings, name }),
        move(path.posix.join(basePath, 'services'))
      ])
    )
  ]);
}