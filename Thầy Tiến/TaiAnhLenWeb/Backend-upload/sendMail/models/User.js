// import {DataTypes} from 'sequelize'
// import sequelize from '../../db.js'

// const User = sequelize.define('User', {
//     id:{
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     username : {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     email : {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     role : {
//         type: DataTypes.ENUM('Customer', 'Employee', 'Admin'),
//         defaultValue: 'Customer',
//     },
//     lastLogin: {
//         type: DataTypes.DATE,
//         defaultValue: DataTypes.NOW,
//     },
//     isVerified : {
//         type: DataTypes.BOOLEAN,
//         defaultValue: false,
//     },
//     resetPasswordToken:{
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     resetPasswordTokenExpiresAt:{
//         type: DataTypes.DATE,
//         allowNull: true,
//     },
//     verificationToken:{
//         type: DataTypes.STRING,
//         allowNull: true,
//     },
//     verificationTokenExpiresAt:{
//         type: DataTypes.DATE,
//         allowNull: true,
//     }
// });

// export default User;


import { DataTypes } from 'sequelize';
import sequelize from '../../db.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.ENUM('Customer', 'Employee', 'Admin'),
        defaultValue: 'Customer',
    },
    lastLogin: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    resetPasswordToken: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    resetPasswordExpiresAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    verificationToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    verificationTokenExpiresAt: {
        type: DataTypes.DATE,
        allowNull: true
    }

});

export default User;