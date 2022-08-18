'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BookAuthor extends Model {
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
    BookAuthor.init({
        BookId: DataTypes.STRING,
        AuthorId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'BookAuthor',
        timestamps: false
    });
    return BookAuthor;
};
