// Búsqueda en tiempo real para recetas y libros
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const recipeItems = document.querySelectorAll('.recipe-item');
    const bookItems = document.querySelectorAll('.book-item');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();

            // Buscar en recetas
            recipeItems.forEach(item => {
                const title = item.querySelector('.card-title a')?.textContent.toLowerCase() || '';
                const content = item.querySelector('.card-text')?.textContent.toLowerCase() || '';
                const category = item.querySelector('.badge')?.textContent.toLowerCase() || '';

                if (title.includes(searchTerm) || 
                    content.includes(searchTerm) || 
                    category.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Buscar en libros
            bookItems.forEach(item => {
                const title = item.dataset.title || '';
                const author = item.dataset.author || '';
                const content = item.dataset.content || '';

                if (title.includes(searchTerm) || 
                    author.includes(searchTerm) || 
                    content.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Filtros de categoría y dificultad para recetas
    const categoryFilter = document.getElementById('categoryFilter');
    const difficultyFilter = document.getElementById('difficultyFilter');

    function applyFilters() {
        const categoryValue = categoryFilter ? categoryFilter.value : '';
        const difficultyValue = difficultyFilter ? difficultyFilter.value : '';

        recipeItems.forEach(item => {
            const itemCategory = item.dataset.category || '';
            const itemDifficulty = item.dataset.difficulty || '';

            let showItem = true;

            if (categoryValue && itemCategory !== categoryValue) {
                showItem = false;
            }

            if (difficultyValue && itemDifficulty !== difficultyValue) {
                showItem = false;
            }

            item.style.display = showItem ? 'block' : 'none';
        });
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }

    if (difficultyFilter) {
        difficultyFilter.addEventListener('change', applyFilters);
    }
});

// Búsqueda global que incluye recetas y libros
function globalSearch(searchTerm) {
    if (!searchTerm) return;

    // Aquí se podría implementar una búsqueda más avanzada
    // que incluya tanto recetas como libros en una sola página de resultados

    const results = {
        recetas: [],
        libros: []
    };

    // Esta función se puede expandir para mostrar resultados unificados
    console.log('Búsqueda global:', searchTerm, results);
}