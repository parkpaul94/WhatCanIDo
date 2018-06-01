const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define("User", {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firstname: {
            type:DataTypes.STRING(255),
            allowNull: false
        },
        lastname: {
            type:DataTypes.STRING(255),
            allowNull: false
        },
        pass: {
            type:DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type:DataTypes.STRING(255),
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        lastlogin_time: {
            type:DataTypes.DATE
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    },
    { timestamps: true },
    { classMethods: {
        validPassword: (pass, psswd, done, user) => {
            bcrypt.comparew(pass, passwd, (err, isMatch) => {
                if (err) console.log(err);
                if (isMatch) {
                    return done(null, user)
                }
                else {
                    return done(null, false)
                }
                });
            }
        }
    });
    return User;
}

