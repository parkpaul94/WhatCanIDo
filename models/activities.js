module.exports = (sequelize, DataTypes) => {
    var Activities = sequelize.define("Activities", {
        Category: DataTypes.STRING,
        Activity: DataTypes.STRING,
        Price: DataTypes.INTEGER,
        Description: DataTypes.STRING,
        RATING: DataTypes.INTEGER

    });
    return User;
}
