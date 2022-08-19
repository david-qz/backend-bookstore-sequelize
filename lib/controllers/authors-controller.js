const { Router } = require('express');
const db = require('../models');

const router = Router();

router.get('/', async (req, res, next) =>  {
    try {
        const author = await db.Author.findAll();
        res.json(author);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req, res, next) =>  {
    try {
        const author = await db.Author.findByPk(req.params.id, {
            include: db.Book
        });
        res.json(author);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        // Create the author row
        let author = await db.Author.create(req.body);

        // Add join table rows
        if (req.body.bookIds) {
            for (const id of req.body.bookIds) {
                await db.BookAuthor.create({
                    BookId: id,
                    AuthorId: author.id
                });
            }
        }

        // Reload the author with relational data
        author = await db.Author.findByPk(author.id, {
            include: db.Book
        });

        res.json(author);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
