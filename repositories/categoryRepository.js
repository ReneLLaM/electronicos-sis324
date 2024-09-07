const Category = require('../models/category');

class CategoryRepository {
    async getCategories() {
        return Category.findAll();
    }

    async addCategory(categoryData) {
        return Category.create(categoryData);
    }

    async updateCategory(id, updatedData) {
        const [updated] = await Category.update(updatedData, { where: { id } });
        return updated;
    }

    async deleteCategory(id) {
        return Category.destroy({ where: { id } });
    }
}

module.exports = new CategoryRepository();
