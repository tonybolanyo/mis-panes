// Búsqueda en tiempo real
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const recipeItems = document.querySelectorAll('.recipe-item');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();

            recipeItems.forEach(item => {
                const title = item.querySelector('.card-title a').textContent.toLowerCase();
                const content = item.querySelector('.card-text').textContent.toLowerCase();
                const category = item.querySelector('.badge').textContent.toLowerCase();

                if (title.includes(searchTerm) || 
                    content.includes(searchTerm) || 
                    category.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Filtros de categoría y dificultad
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