# SmartCity-Fix

## Descripción

SmartCity-Fix es una plataforma de reporte ciudadano que permite registrar incidentes urbanos mediante un formulario web, analizar imágenes con Inteligencia Artificial y almacenar la información para su posterior visualización en un mapa interactivo.

## Tecnologías

* HTML, CSS y JavaScript
* Leaflet.js
* n8n
* Docker Compose
* Ngrok
* Google Gemini Vision
* Google Sheets

## Funcionamiento

1. El ciudadano envía un reporte mediante un formulario.
2. Se captura la ubicación GPS y una fotografía.
3. n8n recibe la información mediante un Webhook.
4. Gemini analiza la imagen y clasifica el incidente.
5. Los datos se almacenan en Google Sheets.
6. Los reportes pueden consultarse mediante una API Webhook y visualizarse en un mapa.

## Estado Actual

✅ Formulario funcional.

✅ Captura de ubicación GPS.

✅ Integración con Google Gemini.

✅ Clasificación automática de incidentes.

✅ Almacenamiento en Google Sheets.

✅ API mediante Webhooks.

✅ Mapa base con Leaflet.

🔄 Integración completa de marcadores dinámicos en desarrollo.

## Objetivo

Facilitar la gestión de incidentes urbanos mediante automatización e Inteligencia Artificial, permitiendo una respuesta más rápida y organizada por parte de las autoridades.

## Autor

**Yeison Fernei Pallares Duque**

Proyecto académico desarrollado como propuesta tecnológica para la gestión inteligente de incidentes urbanos.
