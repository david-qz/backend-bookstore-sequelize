const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('sequelize bookstore routes', () => {
    beforeEach(async () => {
        try {
            const seeder = require('../lib/seeders/20220817225406-initial');
            const sequelize = db.sequelize;
            const queryInterface = sequelize.getQueryInterface();

            await sequelize.sync({ force: true });
            await seeder.up(queryInterface, sequelize);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    });
    afterAll(async () => {
        await db.sequelize.close();
    });

    // books routes

    it('GET /api/v1/books should return a list of books', async () => {
        const response = await request(app).get('/api/v1/books');
        expect(response.status).toEqual(200);

        const books = response.body;
        expect(books).toBeInstanceOf(Array);
        books.forEach(x => expect(x).toEqual({
            id: expect.any(Number),
            title: expect.any(String),
            releaseYear: expect.any(Number)
        }));
    });

    it('GET /api/v1/books/:id should return a book with authors', async () => {
        const response = await request(app).get('/api/v1/books/1');
        expect(response.status).toEqual(200);

        const book = response.body;
        expect(book).toEqual({
            id: expect.any(Number),
            title: expect.any(String),
            releaseYear: expect.any(Number),
            Authors: [
                {
                    id: expect.any(Number),
                    name: expect.any(String),
                    BookAuthor: expect.any(Object)
                }
            ]
        });
    });

    it('POST /api/v1/books should create a new book with authorIds', async () => {
        const response = await request(app).post('/api/v1/books').send({ title: 'Some Book', releaseYear: 2018, authorIds: [1, 2] });
        expect(response.status).toEqual(200);

        const book = response.body;
        expect(book).toEqual({
            id: expect.any(Number),
            title: expect.any(String),
            releaseYear: expect.any(Number),
            Authors: expect.any(Array)
        });
        expect(book.Authors.length).toEqual(2);
    });

    // authors routes

    it('GET /api/v1/authors should return a list of authors', async () => {
        const response = await request(app).get('/api/v1/authors');
        expect(response.status).toEqual(200);

        const authors = response.body;
        expect(authors).toBeInstanceOf(Array);
        authors.forEach(x => expect(x).toEqual({
            id: expect.any(Number),
            name: expect.any(String)
        }));
    });

    it('GET /api/v1/authors/:id should return an author with books', async () => {
        const response = await request(app).get('/api/v1/authors/1');
        expect(response.status).toEqual(200);

        const author = response.body;
        expect(author).toEqual({
            id: expect.any(Number),
            name: expect.any(String),
            Books: expect.any(Array)
        });
        expect(author.Books.length).toEqual(4);
    });

    it('POST /api/v1/authors should create a new author with bookIds', async () => {
        const response = await request(app).post('/api/v1/authors').send({ name: 'George', bookIds: [1, 2, 3] });
        expect(response.status).toEqual(200);

        const author = response.body;
        expect(author).toEqual({
            id: expect.any(Number),
            name: expect.any(String),
            Books: expect.any(Array)
        });
        expect(author.Books.length).toEqual(3);
    });
});
