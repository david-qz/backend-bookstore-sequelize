'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Books', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            releaseYear: {
                type: Sequelize.INTEGER
            }
        });

        await queryInterface.createTable('Authors', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            }
        });

        await queryInterface.createTable('Books_Authors', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            bookId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Books',
                    key: 'id'
                }
            },
            authorId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Authors',
                    key: 'id'
                }
            }
        });
    },
    // eslint-disable-next-line no-unused-vars
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Books_Authors');
        await queryInterface.dropTable('Books');
        await queryInterface.dropTable('Authors');
    }
};
