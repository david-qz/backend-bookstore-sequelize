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

        queryInterface.bulkInsert('Books_Authors', [
            {
                authorId: 1,
                bookId: 1
            },
            {
                authorId: 1,
                bookId: 2
            },
            {
                authorId: 1,
                bookId: 3
            },
            {
                authorId: 1,
                bookId: 4
            },
            {
                authorId: 2,
                bookId: 5
            },
            {
                authorId: 2,
                bookId: 6
            },
            {
                authorId: 2,
                bookId: 7
            },
            {
                authorId: 2,
                bookId: 8
            },
            {
                authorId: 3,
                bookId: 9
            },
            {
                authorId: 3,
                bookId: 10
            },
            {
                authorId: 3,
                bookId: 11
            },
            {
                authorId: 3,
                bookId: 12
            },
            {
                authorId: 4,
                bookId: 13
            },
            {
                authorId: 4,
                bookId: 14
            },
            {
                authorId: 4,
                bookId: 15
            },
            {
                authorId: 5,
                bookId: 13
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
