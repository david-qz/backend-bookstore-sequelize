'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            this.belongsToMany(models.Author, { through: models.BookAuthor });
        }
    }
    Book.init({
        title: DataTypes.STRING,
        releaseYear: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Book',
        timestamps: false
    });
    return Book;
};
