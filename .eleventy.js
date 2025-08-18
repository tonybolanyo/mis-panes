const moment = require('moment');

module.exports = function (eleventyConfig) {
  // Copiar assets estáticos
  eleventyConfig.addPassthroughCopy("src/assets");

  // Filtros personalizados
  eleventyConfig.addFilter("dateFormat", function (date, format) {
    return moment(date).format(format || "DD/MM/YYYY");
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

  // Colecciones
  eleventyConfig.addCollection("recetas", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/recetas/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("categorias", function (collectionApi) {
    const recetas = collectionApi.getFilteredByGlob("src/recetas/*.md");
    const categorias = new Set();

    recetas.forEach(receta => {
      if (receta.data.categoria) {
        categorias.add(receta.data.categoria);
      }
    });

    return Array.from(categorias);
  });

  eleventyConfig.addCollection("etiquetas", function (collectionApi) {
    const recetas = collectionApi.getFilteredByGlob("src/recetas/*.md");
    const etiquetas = new Set();

    recetas.forEach(receta => {
      if (receta.data.etiquetas && Array.isArray(receta.data.etiquetas)) {
        receta.data.etiquetas.forEach(etiqueta => etiquetas.add(etiqueta));
      }
    });

    return Array.from(etiquetas);
  });

  // Configuración del servidor de desarrollo
  eleventyConfig.setServerOptions({
    port: 8080,
    showAllHosts: true,
  });

  const isProd = process.env.NODE_ENV === "production";

  return {
    dir: {
      input: "src",
      output: "docs"
    },
    pathPrefix: isProd ? "/mis-panes/" : "/", // Cambiar por el nombre de tu repositorio
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};