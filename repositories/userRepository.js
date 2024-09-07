const User = require('../models/user');

class UserRepository {
    async getUsers() {
        return User.findAll();
    }

    async addUser(userData) {
        return User.create(userData);
    }

    async updateUser(id, updatedData) {
        const [updated] = await User.update(updatedData, { where: { id } });
        return updated;
    }

    async deleteUser(id) {
        return User.destroy({ where: { id } });
    }

    async findByUsername(username) {
        return User.findOne({ where: { username } });
    }
}

module.exports = new UserRepository();
