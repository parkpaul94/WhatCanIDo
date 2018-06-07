module.exports = (sequelize, DataTypes) => {
    var Activity = sequelize.define("Activity", {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        category: {
            type:DataTypes.STRING(255),
            allowNull: false
        },
        activity: {
            type:DataTypes.STRING(255),
            allowNull: false
        },
        rating: {
            type:DataTypes.INTEGER(255),
            allowNull: false
        },
        price: {
            type:DataTypes.INTEGER(255),
            allowNull: false
        },
        description: {
            type:DataTypes.STRING(999),
            allowNull: false
        },

        // {timestamps: true }

    });

        return Activity;
    }
