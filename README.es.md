# Resource Schematics

[English](README.md)

Schematic Angular experimental para generar la estructura de una funcionalidad de recursos. Se conserva como referencia de tooling.

## Stack

TypeScript · Angular DevKit Schematics.

## Alcance y configuración

El schematic resource genera componentes standalone, rutas, clases de resolver y plantillas de servicios. Los servicios generados contienen placeholders y requieren implementación; package.json define la versión de Angular DevKit.

## Desarrollo local

Usar un entorno Node.js compatible con package.json y el lockfile de dependencias, cuando exista.

```sh
npm install
npm run build
```
