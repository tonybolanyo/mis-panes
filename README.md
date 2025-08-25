# Mis recetas de pan

Un blog estático de recetas de pan y biblioteca de libros de panadería construido con Eleventy. Incluye recetas artesanales detalladas y reseñas de libros especializados en panadería. Publicación automática en GitHub Pages.

## Añadir Contenido

### Añadir Recetas

#### Método 1: Desde GitHub (Web)

1. Ve a la carpeta `src/recetas/` en tu repositorio
2. Haz clic en "Add file" → "Create new file"
3. Nombra el archivo: `mi-nueva-receta.md`
4. Usa esta plantilla:

```markdown
---
layout: receta.njk
title: Nombre de tu Receta
date: 2025-08-17
categoria: Tipo de Pan
etiquetas: [ingrediente1, ingrediente2, característica]
tiempo: X horas
porciones: X unidades
dificultad: Fácil/Intermedio/Difícil
descripcion: Descripción breve de la receta
imagen: /assets/images/tu-imagen.jpg (opcional)
---

## Ingredientes

- Ingrediente 1
- Ingrediente 2
- etc.

## Preparación

### Paso 1: Título del paso
1. Instrucción detallada
2. Otra instrucción

### Paso 2: Siguiente paso
1. Más instrucciones...

## Consejos del Chef

- Tip importante 1
- Tip importante 2
```

5. Haz clic en "Commit changes"

#### Método 2: Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/mis-panes.git
cd mis-panes

# Instalar dependencias
npm ci

# Ejecutar en modo desarrollo
npm run dev

# Abrir http://localhost:8080 en tu navegador
```

## Estructura del Proyecto

```
mis-panes/
├── .eleventy.js              # Configuración de Eleventy
├── package.json              # Dependencias del proyecto
├── README.md                 # Este archivo
├── COLOR_PALETTE.md          # Documentación de paleta de colores
├── .gitignore               # Archivos a ignorar por Git
├── 
├── src/                     # Código fuente
│   ├── index.njk           # Página principal
│   ├── recetas.njk         # Listado de recetas
│   ├── libros.njk          # Listado de libros
│   ├── categorias.njk      # Listado de categorías
│   ├── categoria.njk       # Página de categoría individual
│   ├── acerca-de.njk       # Página "Acerca de"
│   │
│   ├── recetas/            # Carpeta de recetas (Markdown)
│   │   ├── hogaza-basica.md
│   │   ├── pan-de-centeno.md
│   │   └── pan-pita.md
│   │
│   ├── libros/             # Carpeta de libros (Markdown)
│   │   ├── el-pan-artesano.md
│   │   ├── flour-water-salt-yeast.md
│   │   └── masa-madre-yarza.md
│   │
│   ├── _includes/          # Plantillas y componentes
│   │   ├── base.njk       # Layout principal
│   │   ├── header.njk     # Cabecera
│   │   ├── footer.njk     # Pie de página
│   │   ├── receta.njk     # Template para recetas
│   │   └── libro.njk      # Template para libros
│   │
│   ├── _data/             # Datos globales
│   │   └── site.json      # Configuración del sitio
│   │
│   └── assets/            # Archivos estáticos
│       ├── css/
│       │   ├── style.css    # Estilos principales
│       │   └── variables.css # Variables CSS personalizadas
│       ├── js/
│       │   ├── main.js      # JavaScript principal
│       │   └── search.js    # Funcionalidad de búsqueda
│       └── images/          # Imágenes y recursos
│
├── .github/
│   └── workflows/
│       └── deploy.yml     # Configuración de despliegue automático
│
└── docs/                  # Carpeta de salida (generada automáticamente)
```

## Personalización

### Cambiar Colores

Edita las variables CSS en `src/assets/css/style.css`:

```css
:root {
    --primary-color: #ff6b35;    /* Color principal (naranja) */
    --secondary-color: #004e89;  /* Color secundario (azul) */
    --accent-color: #f7931e;     /* Color de acento */
}
```

### Añadir Imágenes

1. Sube tus imágenes a `src/assets/images/`
2. En el front-matter de tu receta, añade:

   ```yaml
   imagen: /assets/images/nombre-imagen.jpg
   ```

### Modificar la Navegación

Edita `src/_data/site.json`:

```json
"navigation": [
  {"title": "Inicio", "url": "/"},
  {"title": "Recetas", "url": "/recetas/"},
  {"title": "Libros", "url": "/libros/"},
  {"title": "Categorías", "url": "/categorias/"},
  {"title": "Acerca de", "url": "/acerca-de/"}
]
```

## Sección de Libros

El proyecto incluye una biblioteca de libros de panadería con reseñas detalladas y enlaces de compra.

### Añadir un Nuevo Libro

1. Crea un archivo en `src/libros/` con nombre descriptivo: `mi-libro-panaderia.md`
2. Usa esta plantilla:

```markdown
---
layout: libro.njk
titulo: "Título del Libro"
autor: "Nombre del Autor"
editorial: "Editorial"
año: 2023
paginas: 300
isbn: "978-84-XXXXXXX-X"
imagen: "/assets/images/libros/portada.jpg"
enlace_amazon: "https://amzn.to/tu-enlace"
enlace_casa_libro: "https://www.casadellibro.com/tu-enlace"
date: 2025-08-18
description: "Breve descripción del libro"
seo_title: "Título para SEO"
seo_description: "Descripción para motores de búsqueda"
indice: |
  <ul>
    <li><strong>Capítulo 1:</strong> Introducción</li>
    <li><strong>Capítulo 2:</strong> Técnicas básicas</li>
  </ul>
---

## Mi Reseña Personal

Tu reseña completa del libro...

### Lo que más me ha gustado

- Punto destacado 1
- Punto destacado 2

### Conclusión

Tu valoración final...
```

### Características de los Libros

- **Portadas automáticas**: Sube imágenes a `src/assets/images/libros/`
- **Enlaces de compra**: Compatibles con Amazon y Casa del Libro
- **Búsqueda y filtros**: Los usuarios pueden buscar por título, autor o contenido
- **Índice expandible**: Incluye tabla de contenidos opcional
- **Compartir en redes**: Botones automáticos para redes sociales

## Sistema de Categorías y Etiquetas

### Categorías Disponibles

- **Panes Básicos**: Pan blanco, integral, etc.
- **Panes Integrales**: Centeno, avena, etc.
- **Panes Dulces**: Con frutas, chocolate, etc.
- **Panes Planos**: Pita, focaccia, etc.
- **Panes Especiales**: Masa madre, brioche, etc.

### Etiquetas Recomendadas

- **Por ingrediente**: levadura, masa-madre, integral, etc.
- **Por dificultad**: fácil, rápido, avanzado
- **Por ocasión**: desayuno, merienda, cena
- **Por origen**: italiano, francés, medio-oriente

## Comandos Útiles

```bash
# Desarrollo local
npm run dev          # Servidor de desarrollo

# Construcción
npm run build        # Genera el sitio en docs/
npm run clean        # Limpia la carpeta de salida

# Git
git add .
git commit -m "Nueva receta: Pan de..." # o "Nuevo libro: Título del libro"
git push origin main  # Despliega automáticamente
```

## Despliegue

El sitio se despliega automáticamente cada vez que haces push a la rama `main`. El proceso:

1. GitHub Actions detecta cambios
2. Instala dependencias (`npm ci`)
3. Construye el sitio (`npm run build`)
4. Publica la carpeta `docs/` en GitHub Pages
5. Tu sitio está disponible en: `https://tu-usuario.github.io/mis-panes/`

## Solución de Problemas

### Error: "Site not found"

- Verifica que GitHub Pages esté configurado correctamente
- Asegúrate de que el repositorio sea público

### Las recetas o libros no aparecen

- Revisa que el archivo esté en `src/recetas/` o `src/libros/` respectivamente
- Verifica que el front-matter tenga la sintaxis correcta
- Comprueba que la fecha esté en formato YYYY-MM-DD
- Para libros, asegúrate de usar `layout: libro.njk`

### Estilos no se cargan

- Verifica que `pathPrefix` en `.eleventy.js` coincida con el nombre de tu repositorio

### GitHub Actions falla

- Revisa la pestaña "Actions" en tu repositorio
- Verifica que `package.json` tenga todas las dependencias necesarias

## Consejos y Mejores Prácticas

### Para las Recetas

1. **Sé específico**: Incluye tiempos, temperaturas y cantidades exactas
2. **Usa imágenes**: Una buena foto hace mucha diferencia
3. **Añade consejos**: Comparte trucos y variaciones
4. **Prueba antes**: Asegúrate de que la receta funciona

### Para los Libros

1. **Reseñas honestas**: Comparte tu experiencia real con el libro
2. **Detalles técnicos**: Incluye información sobre nivel de dificultad y contenido
3. **Imágenes de portada**: Añade imágenes de buena calidad en `src/assets/images/libros/`
4. **Enlaces actualizados**: Verifica que los enlaces de compra funcionen correctamente

### Para el SEO

1. **Títulos descriptivos**: "Pan de Centeno Integral" mejor que "Pan de Centeno"
2. **Descripciones útiles**: Explica qué hace especial tu receta o libro
3. **Etiquetas relevantes**: Ayudan a los usuarios a encontrar contenido

### Para la Organización

1. **Nombres de archivo**: Usa minúsculas y guiones: `pan-de-masa-madre.md`, `libro-panaderia.md`
2. **Categorías consistentes**: Mantén las mismas categorías para recetas
3. **Fechas cronológicas**: Usa fechas reales de cuando hiciste la receta o leíste el libro

## Soporte

Si tienes problemas:

1. Revisa la sección "Issues" en GitHub
2. Consulta la documentación de [Eleventy](https://11ty.dev)
3. Verifica la [documentación de GitHub Pages](https://docs.github.com/es/pages)

---

¡Feliz horneado!

*Hecho con ❤️ y mucha harina*
