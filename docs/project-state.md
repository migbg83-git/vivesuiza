# ViveSuiza - Estado del Proyecto

## Objetivo

Crear un portal para españoles interesados en vivir, trabajar y prosperar en Suiza.

Modelo de negocio previsto:

* SEO
* Publicidad
* Afiliación
* Directorio profesional
* Servicios premium

Dominios registrados:

* vivesuiza.com
* vivesuiza.es

Repositorio GitHub:

* https://github.com/migbg83-git/vivesuiza

---

## Stack Tecnológico

Frontend:

* Angular 21
* Standalone Components
* SCSS
* SSR habilitado

Contenido:

* Markdown
* gray-matter
* marked

Build:

* Node.js
* Scripts ESM (.mjs)

---

## Arquitectura de Contenido

Fuente de verdad:

content/articles/article-XXX/article.md

Pipeline:

Markdown
→ build-content.mjs
→ public/content/articles.json
→ ContentService
→ Angular

---

## Estructura Actual

content/
scripts/
public/content/
src/app/core/models/
src/app/core/services/
src/app/pages/

---

## Funcionalidades Implementadas

### Content Pipeline

Implementado:

* Article model
* ContentService
* build-content.mjs
* Generación de articles.json

### Home

Implementado:

* Ruta /
* Lectura de artículos desde JSON

---

## Primer Artículo

article-001

Slug:

vivir-en-suiza-desde-espana

---

## Próximos Pasos

M2 - Diseño Base

* Bootstrap
* Layout principal
* Navbar
* Footer

M3 - Artículos

* Página listado
* Página detalle
* Routing por slug

M4 - SEO

* Meta tags
* Sitemap
* Robots

M5 - Monetización

* Directorio
* Herramientas
* Afiliación
