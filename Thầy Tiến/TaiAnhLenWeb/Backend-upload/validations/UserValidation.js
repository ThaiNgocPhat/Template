import {body, param} from 'express-validator'

export const  registerValidation = [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min : 6}).withMessage('Password must be at least 6 characters')
]
export const loginValidation = [
    body('email').isEmail().withMessage('Email not null'),
    body('password').isLength({min : 6}).withMessage('Password must be at least 6 characters')
]

