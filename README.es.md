# Resource Schematics

[English](README.md)

Schematic Angular experimental para generar la estructura de una funcionalidad de recursos. Se conserva como referencia de tooling.

## Stack

TypeScript · Angular DevKit Schematics.

## Alcance y configuración

El schematic resource genera componentes standalone, rutas, clases de resolver y plantillas de servicios. Los servicios generados contienen placeholders y requieren implementación; package.json define la versión de Angular DevKit.

## Opciones del generador

La colección expone el schematic `resource` mediante [src/collection.json](src/collection.json). Su [schema](src/resource/schema.json) exige la opción string `name` y admite el string opcional `path`. La [implementación](src/resource/index.ts) convierte el nombre a formato con guiones y genera bajo `<path>/<name>`, usando `src/app` si se omite `path`. La generación de componentes y clases se delega a `@schematics/angular`, que debe estar disponible en la toolchain anfitriona. Las clases de resolver generadas son scaffolding y requieren implementar su comportamiento de routing.

## Desarrollo local

Usar un entorno Node.js compatible con package.json y el lockfile de dependencias, cuando exista.

```sh
npm install
npm run build
```
