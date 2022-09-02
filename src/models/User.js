const fs = require('fs');


const User = {
    fileName: './src/data/usersDataBase.json',

    create: function(userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }

        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return true;
    },

    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();

        if(lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    findAll: function() {
        return this.getData();
    },

    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

    delete: function(id) {
        let allUsers = this.findAll();
        let usersAfterDelete = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(usersAfterDelete, null, ' '));
        return true;

    }

}





module.exports = User;