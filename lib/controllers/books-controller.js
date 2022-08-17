const { Router } = require('express');
const db = require('../models');

const router = Router();

router.get('/', async (req, res, next) =>  {
    try {
        const books = await db.Book.findAll();
        res.json(books);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
