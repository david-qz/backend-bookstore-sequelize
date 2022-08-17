'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Book_Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        // eslint-disable-next-line no-unused-vars
        static associate(models) {
            // define association here
        }
    }
    Book_Author.init({
        bookId: DataTypes.STRING,
        authorId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Book_Author',
        timestamps: false
    });
    return Book_Author;
};
