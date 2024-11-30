import nodemailer from 'nodemailer';
import './config.js'

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    host:"smtp.gmail.com",
    port: 587,
    auth: {
        user: "thaingocphat231@gmail.com",
        pass: "gzmd fije jhby juma"
    }
})