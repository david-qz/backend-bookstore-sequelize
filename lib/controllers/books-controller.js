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

router.get('/:id', async (req, res, next) =>  {
    try {
        const book = await db.Book.findByPk(req.params.id, {
            include: db.Author
        });
        res.json(book);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        // Create the book row
        let book = await db.Book.create(req.body);

        // Add join table rows
        if (req.body.authorIds) {
            for (const id of req.body.authorIds) {
                await db.BookAuthor.create({
                    BookId: book.id,
                    AuthorId: id
                });
            }
        }

        // Reload the book with relational data
        book = await db.Book.findByPk(book.id, {
            include: db.Author
        });

        res.json(book);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
