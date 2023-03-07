const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define("User",{
        firstName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:false
            }
        },
        lastName:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                notEmpty:false
            }
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:false
            }
        },
        roll_no:{
            type:DataTypes.INTEGER,
            allowNull:false,
            validate:{
                notEmpty:false
            }
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:true,
            validate:{
                notEmpty:true
            }
        }
    });
    return User;
}