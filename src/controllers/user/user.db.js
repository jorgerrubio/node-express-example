'use strict';

let usersDb = require('./../../db/user.json');

class UsersDb {
    add(name, lastname) {
        const user = {
            id: Date.now(),
            name: name,
            lastname: lastname
        };
        usersDb.push(user);
        return user;
    }

    all() {
        return usersDb;
    }

    edit(id, name, lastname) {
        usersDb.forEach(user => {
            if(user.id == id){
                user.name = name;
                user.lastname = lastname;
            }
        })
        return usersDb;
    }

    delete(id) {
        usersDb = usersDb.filter(u => u.id != id);
        return usersDb;
    }

    get(id) {
        return usersDb.find(u => u.id == id);
    }
}
module.exports = new UsersDb();