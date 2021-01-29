'use strict';
const UserDb = require('./user.db');
const Message = require('../../utils/messages');
class User {
    all(req, res) {
        res.status(200).send(UserDb.all());
    }

    delete(req, res) {
        const id = req.params.id;
        if (id) {
            const users = UserDb.delete(id);
            const message = Message.success('user successfully deleted', users);
            res.status(200).json(message);
        } else {
            res.status(500).json({})
        }
    }

    edit(req, res) {
        const id = req.params.id;
        const {
            name,
            lastname
        } = req.body;
        if (id, name, lastname) {
            UserDb.edit(id, name, lastname);
            const user = UserDb.get(id);
            const message = Message.success(user ? 'User successfully edited' : 'User no found', user);
            res.status(200).json(message);
        } else {
            res.status(500).json(Message.error('Missing id parameter'));
        }
    }

    get(req, res) {
        const id = req.params.id;
        if (id) {
            const user = UserDb.get(id);
            const message = Message.success(user ? '' : 'User no found', user);
            res.status(200).json(message);
        } else {
            res.status(500).json(Message.error('Missing id parameter'));
        }
    }

    store(req, res) {
        const {
            name,
            lastname
        } = req.body;
        if (name, lastname) {
            const user = UserDb.add(name, lastname);
            res.status(200).json(Message.success('User successfully saved', user));
        } else {
            res.status(500).json(Message.error('Missing parameters'));
        }
    }
}

module.exports = new User();