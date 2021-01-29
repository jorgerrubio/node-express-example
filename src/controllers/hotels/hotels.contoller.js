'use strict'
const fetch = require('node-fetch');
const Message = require('../../utils/messages');
const BASEPATH = 'http://localhost:3000/api';

class Hotels {
    async all(req, res) {
        try {
            const response = await fetch(`${BASEPATH}/hotels`);
            const hotels = await response.json();
            res.status(200).json(Message.success('', hotels));
        } catch (err) {
            res.status(500).json(Message.error('Hotels have not been able to be recovered'));
        }

    }

    async rooms(req, res) {
        const id = req.params.id;
        try {
            const response = await fetch(`${BASEPATH}/rooms/${id}`);
            const rooms = await response.json();
            res.status(200).json(Message.success('', rooms));
        } catch (error) {
            res.status(500).json(Message.error('Hotel rooms could not be recovered'));
        }
    }
}

module.exports = new Hotels();