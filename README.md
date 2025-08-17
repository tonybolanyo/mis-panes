# Mi Blog de Pan 🍞

Un blog estático de recetas de pan construido con Eleventy y diseñado con la estética de la plantilla Ranna. Publicación automática en GitHub Pages.

## 🚀 Configuración Inicial

### 1. Crear el repositorio en GitHub

1. Ve a GitHub.com e inicia sesión
2. Crea un nuevo repositorio llamado `mi-blog-de-pan` (o el nombre que prefieras)
3. **Importante**: Marca la casilla "Add a README file"
4. Haz clic en "Create repository"

### 2. Subir los archivos

1. Descarga y descomprime este ZIP
2. En tu repositorio de GitHub, haz clic en "uploading an existing file"
3. Arrastra todos los archivos y carpetas del ZIP
4. Escribe un mensaje de commit: "Configuración inicial del blog"
5. Haz clic en "Commit changes"

### 3. Habilitar GitHub Pages

1. Ve a Settings → Pages (en tu repositorio)
2. En "Source", selecciona "GitHub Actions"
3. Guarda los cambios

### 4. Personalizar el sitio

Edita el archivo `src/_data/site.json`:

```json
{
  "title": "Tu Nombre - Blog de Pan",
  "description": "Mi colección personal de recetas de pan casero",
  "author": "Tu Nombre Completo",
  "url": "https://tu-usuario.github.io/mi-blog-de-pan",
  "social": {
    "instagram": "https://instagram.com/tu-usuario",
    "facebook": "https://facebook.com/tu-perfil",
    "twitter": "https://twitter.com/tu-usuario"
  }
}
```

También actualiza el `pathPrefix` en `.eleventy.js`:
```javascript
pathPrefix: "/nombre-de-tu-repositorio/",
```

## 📝 Cómo Añadir una Nueva Receta

### Método 1: Desde GitHub (Web)

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

### Método 2: Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/mi-blog-de-pan.git
cd mi-blog-de-pan

# Instalar dependencias
npm ci

# Ejecutar en modo desarrollo
npm run dev

# Abrir http://localhost:8080 en tu navegador
```

## 📁 Estructura del Proyecto

```
mi-blog-de-pan/
├── .eleventy.js              # Configuración de Eleventy
├── package.json              # Dependencias del proyecto
├── README.md                 # Este archivo
├── .gitignore               # Archivos a ignorar por Git
├── 
├── src/                     # Código fuente
│   ├── index.njk           # Página principal
│   ├── recetas.njk         # Listado de recetas
│   ├── acerca-de.njk       # Página "Acerca de"
│   ├── 
│   ├── recetas/            # Carpeta de recetas (Markdown)
│   │   ├── pan-pita.md
│   │   ├── pan-de-centeno.md
│   │   └── pan-de-banana.md
│   │
│   ├── _includes/          # Plantillas y componentes
│   │   ├── base.njk       # Layout principal
│   │   ├── header.njk     # Cabecera
│   │   ├── footer.njk     # Pie de página
│   │   └── receta.njk     # Template para recetas
│   │
│   ├── _data/             # Datos globales
│   │   └── site.json      # Configuración del sitio
│   │
│   └── assets/            # Archivos estáticos
│       ├── css/
│       │   └── style.css  # Estilos principales
│       ├── js/
│       │   ├── main.js    # JavaScript principal
│       │   └── search.js  # Funcionalidad de búsqueda
│       └── images/        # Imágenes (vacía inicialmente)
│
├── .github/
│   └── workflows/
│       └── deploy.yml     # Configuración de despliegue automático
│
└── docs/                  # Carpeta de salida (generada automáticamente)
```

## 🎨 Personalización

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
  {"title": "Mi Nueva Página", "url": "/nueva-pagina/"},
  {"title": "Contacto", "url": "/contacto/"}
]
```

## 🏷️ Sistema de Categorías y Etiquetas

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

## 🔧 Comandos Útiles

```bash
# Desarrollo local
npm run dev          # Servidor de desarrollo

# Construcción
npm run build        # Genera el sitio en docs/
npm run clean        # Limpia la carpeta de salida

# Git
git add .
git commit -m "Nueva receta: Pan de..."
git push origin main  # Despliega automáticamente
```

## 🚀 Despliegue

El sitio se despliega automáticamente cada vez que haces push a la rama `main`. El proceso:

1. GitHub Actions detecta cambios
2. Instala dependencias (`npm ci`)
3. Construye el sitio (`npm run build`)
4. Publica la carpeta `docs/` en GitHub Pages
5. Tu sitio está disponible en: `https://tu-usuario.github.io/mi-blog-de-pan/`

## 🐛 Solución de Problemas

### Error: "Site not found"
- Verifica que GitHub Pages esté configurado correctamente
- Asegúrate de que el repositorio sea público

### Las recetas no aparecen
- Revisa que el archivo esté en `src/recetas/`
- Verifica que el front-matter tenga la sintaxis correcta
- Comprueba que la fecha esté en formato YYYY-MM-DD

### Estilos no se cargan
- Verifica que `pathPrefix` en `.eleventy.js` coincida con el nombre de tu repositorio

### GitHub Actions falla
- Revisa la pestaña "Actions" en tu repositorio
- Verifica que `package.json` tenga todas las dependencias necesarias

## 💡 Consejos y Mejores Prácticas

### Para las Recetas

1. **Sé específico**: Incluye tiempos, temperaturas y cantidades exactas
2. **Usa imágenes**: Una buena foto hace mucha diferencia
3. **Añade consejos**: Comparte trucos y variaciones
4. **Prueba antes**: Asegúrate de que la receta funciona

### Para el SEO

1. **Títulos descriptivos**: "Pan de Centeno Integral" mejor que "Pan de Centeno"
2. **Descripciones útiles**: Explica qué hace especial tu receta
3. **Etiquetas relevantes**: Ayudan a los usuarios a encontrar contenido

### Para la Organización

1. **Nombres de archivo**: Usa minúsculas y guiones: `pan-de-masa-madre.md`
2. **Categorías consistentes**: Mantén las mismas categorías
3. **Fechas cronológicas**: Usa fechas reales de cuando hiciste la receta

## 📞 Soporte

Si tienes problemas:

1. Revisa la sección "Issues" en GitHub
2. Consulta la documentación de [Eleventy](https://11ty.dev)
3. Verifica la [documentación de GitHub Pages](https://docs.github.com/es/pages)

---

¡Feliz horneado! 🥖✨

*Hecho con ❤️ y mucha harina*