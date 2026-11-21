# Resource Schematics

[Español](README.es.md)

Experimental Angular schematic for generating a resource feature structure. Preserved as a tooling reference.

## Stack

TypeScript · Angular DevKit Schematics.

## Scope and configuration

The resource schematic generates standalone components, route files, resolver classes and service templates. Generated services include placeholders and require implementation; the Angular DevKit version is defined in package.json.

## Local development

Use a Node.js toolchain compatible with package.json and the dependency lockfile, when present.

```sh
npm install
npm run build
```
