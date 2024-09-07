const categoryRepository = require('../repositories/categoryRepository');

class CategoryService {
    async getCategories() {
        return categoryRepository.getCategories();
    }

    async createCategory(categoryData) {
        return categoryRepository.addCategory(categoryData);
    }

    async updateCategory(id, updatedData) {
        return categoryRepository.updateCategory(id, updatedData);
    }

    async deleteCategory(id) {
        return categoryRepository.deleteCategory(id);
    }
}

module.exports = new CategoryService();
