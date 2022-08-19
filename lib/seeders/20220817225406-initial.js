'use strict';

module.exports = {
    // eslint-disable-next-line no-unused-vars
    async up (queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
        */
        queryInterface.bulkInsert('Authors', [
            {
                name: 'J.R.R. Tolkien'
            },
            {
                name: 'Frank Herbert'
            },
            {
                name: 'Dan Simmons'
            },
            {
                name: 'Terry Pratchett'
            },
            {
                name: 'Neil Gaiman'
            }
        ]);

        queryInterface.bulkInsert('Books', [
            {
                title: 'The Hobbit',
                releaseYear: 1937
            },
            {
                title: 'The Fellowship of the Ring',
                releaseYear: 1954
            },
            {
                title: 'The Two Towers',
                releaseYear: 1954
            },
            {
                title: 'The Return of the King',
                releaseYear: 1955
            },
            {
                title: 'Dune',
                releaseYear: 1965
            },
            {
                title: 'Dune Messiah',
                releaseYear: 1969
            },
            {
                title: 'Children of Dune',
                releaseYear: 1976
            },
            {
                title: 'God Emperor of Dune',
                releaseYear: 1981
            },
            {
                title: 'Hyperion',
                releaseYear: 1989
            },
            {
                title: 'The Fall of Hyperion',
                releaseYear: 1990
            },
            {
                title: 'Endymion',
                releaseYear: 1996
            },
            {
                title: 'The Rise of Endymion',
                releaseYear: 1997
            },
            {
                title: 'Good Omens',
                releaseYear: 1990
            },
            {
                title: 'Guards! Guards!',
                releaseYear: 1989
            },
            {
                title: 'Going Postal',
                releaseYear: 2004
            }
        ]);

        queryInterface.bulkInsert('BooksAuthors', [
            {
                AuthorId: 1,
                BookId: 1
            },
            {
                AuthorId: 1,
                BookId: 2
            },
            {
                AuthorId: 1,
                BookId: 3
            },
            {
                AuthorId: 1,
                BookId: 4
            },
            {
                AuthorId: 2,
                BookId: 5
            },
            {
                AuthorId: 2,
                BookId: 6
            },
            {
                AuthorId: 2,
                BookId: 7
            },
            {
                AuthorId: 2,
                BookId: 8
            },
            {
                AuthorId: 3,
                BookId: 9
            },
            {
                AuthorId: 3,
                BookId: 10
            },
            {
                AuthorId: 3,
                BookId: 11
            },
            {
                AuthorId: 3,
                BookId: 12
            },
            {
                AuthorId: 4,
                BookId: 13
            },
            {
                AuthorId: 4,
                BookId: 14
            },
            {
                AuthorId: 4,
                BookId: 15
            },
            {
                AuthorId: 5,
                BookId: 13
            },
        ]);
    },

    // eslint-disable-next-line no-unused-vars
    async down (queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
