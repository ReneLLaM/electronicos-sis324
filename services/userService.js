const userRepository = require('../repositories/userRepository');

class UserService {
    async getUsers() {
        return userRepository.getUsers();
    }

    async createUser(userData) {
        return userRepository.addUser(userData);
    }

    async updateUser(id, updatedData) {
        return userRepository.updateUser(id, updatedData);
    }

    async deleteUser(id) {
        return userRepository.deleteUser(id);
    }

    async authenticate(username, password) {
        const user = await userRepository.findByUsername(username);
        if (user && user.password === password) { // Aquí puedes usar bcrypt para comparar el password en un futuro
            return user;
        }
        return null;
    }
}

module.exports = new UserService();
