const moment = require('moment');

module.exports = function (eleventyConfig) {
  // Copiar assets estáticos
  eleventyConfig.addPassthroughCopy("src/assets");

  // Filtros personalizados
  eleventyConfig.addFilter("dateFormat", function (date, format) {
    return moment(date).format(format || "DD/MM/YYYY");
  });

  eleventyConfig.addFilter("dateISO", function (date) {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter("excerpt", function (content, length = 150) {
    const text = content.replace(/(<([^>]+)>)/gi, "");
    return text.length > length ? text.substring(0, length) + "..." : text;
  });

  eleventyConfig.addFilter("slug", function (input) {
    if (!input) return "";
    return input.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  });

  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });

  eleventyConfig.addFilter("reverse", function (array) {
    return array.reverse();
  });

  eleventyConfig.addFilter("truncate", function (str, length) {
    if (str.length <= length) return str;
    return str.substring(0, length) + "...";
  });

  eleventyConfig.addFilter("unique", function (array) {
    return [...new Set(array)];
  });

  // Colecciones
  eleventyConfig.addCollection("recetas", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/recetas/*.md")
      .filter(item => !item.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  // Colección de recetas destacadas
  eleventyConfig.addCollection("destacadas", function (collectionApi) {
    const todas = collectionApi.getFilteredByGlob("src/recetas/*.md").sort((a, b) => b.date - a.date);
    const destacadas = todas.filter(receta => receta.data.destacada === true);
    // Si hay menos de 6 destacadas, completar con las más recientes no destacadas
    if (destacadas.length < 6) {
      const faltantes = todas.filter(receta => receta.data.destacada !== true).slice(0, 6 - destacadas.length);
      return destacadas.concat(faltantes);
    }
    return destacadas.slice(0, 6);
  });

  eleventyConfig.addCollection("libros", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/libros/*.md")
      .filter(item => !item.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("categorias", function (collectionApi) {
    const recetas = collectionApi.getFilteredByGlob("src/recetas/*.md")
      .filter(item => !item.data.draft);
    const categorias = new Set();

    recetas.forEach(receta => {
      if (receta.data.categoria) {
        categorias.add(receta.data.categoria);
      }
    });

    return Array.from(categorias);
  });

  eleventyConfig.addCollection("etiquetas", function (collectionApi) {
    const recetas = collectionApi.getFilteredByGlob("src/recetas/*.md")
      .filter(item => !item.data.draft);
    const etiquetas = new Set();

    recetas.forEach(receta => {
      if (receta.data.etiquetas && Array.isArray(receta.data.etiquetas)) {
        receta.data.etiquetas.forEach(etiqueta => etiquetas.add(etiqueta));
      }
    });

    return Array.from(etiquetas);
  });

  // Shortcode para fechas
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Configuración del servidor de desarrollo
  eleventyConfig.setServerOptions({
    port: 8080,
    showAllHosts: true,
  });

  const isDev = process.env.NODE_ENV === "development";

  return {
    dir: {
      input: "src",
      output: "docs"
    },
    pathPrefix: isDev ? "/" : "/mis-panes/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html", "liquid"]
  };
};