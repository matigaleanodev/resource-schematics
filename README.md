# Resource Schematics

[Español](README.es.md)

Experimental Angular schematic for generating a resource feature structure. Preserved as a tooling reference.

## Stack

TypeScript · Angular DevKit Schematics.

## Scope and configuration

The resource schematic generates standalone components, route files, resolver classes and service templates. Generated services include placeholders and require implementation; the Angular DevKit version is defined in package.json.

## Generator inputs

The collection exposes the `resource` schematic through [src/collection.json](src/collection.json). Its [schema](src/resource/schema.json) requires the string option `name` and accepts an optional string `path`. The [implementation](src/resource/index.ts) converts the name to dash case and generates under `<path>/<name>`, using `src/app` when `path` is omitted. Component and class generation delegates to `@schematics/angular`, which must be available in the host toolchain. The generated resolver classes are scaffolding and need their routing behavior implemented.

## Local development

Use a Node.js toolchain compatible with package.json and the dependency lockfile, when present.

```sh
npm install
npm run build
```
