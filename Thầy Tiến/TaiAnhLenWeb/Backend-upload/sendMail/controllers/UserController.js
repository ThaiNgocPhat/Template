import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {Op} from 'sequelize'
import crypto from 'crypto';
import { sendLoginSuccessEmail, sendVerificationEmail } from "../mail/emails.js";
import { sendPasswordResetEmail } from '../forgotPassword/resetPassword.js'

class UserController {
    async register(req, res) {
        try{
            const  {username, email, password} = req.body;
            const existingUser = await User.findOne({
                where:{
                    [Op.or]: [{username}, {email}]
                }
            });
            if(existingUser){
                return res.status(400).json({message: 'Username or Email already exists'});
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const verificationToken = Math.floor(10000 + Math.random() * 900000).toString();
            const newUser = await User.create({
                username,
                password:hashedPassword,
                email,
                verificationToken,
                verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000
            })
            await newUser.save();
            sendVerificationEmail(newUser.email, verificationToken);
            res.status(201).json({message: 'User registered successfully', data: newUser});
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }
    async verifyEmail(req, res) {
        const { code } = req.body;
        try {
            // Await the findOne operation to get the actual user object
            const user = await User.findOne({
                where: {
                    verificationToken: code,
                    verificationTokenExpiresAt: { 
                        [Op.gt]: new Date() 
                    }
                }
            });
    
            if (!user) {
                return res.status(400).json({ message: 'Invalid verification code or expired token' });
            }
    
            // Update the user's verification status and reset token fields
            user.isVerified = true;
            user.verificationToken = null;
            user.verificationTokenExpiresAt = null;
    
            // Save the changes
            await user.save();
    
            // Send a success email and respond with success message
            sendLoginSuccessEmail(user.email, user.username);
            return res.status(200).json({
                message: 'Verified email successfully',
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    isVerified: user.isVerified
                }
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async login(req, res){
        try{
            const {email, password} = req.body;
            const user = await User.findOne({where: {email}});
            if(!user || !await bcrypt.compare(password, user.password)){
                return res.status(400).json({message: 'Invalid credentials'});
            }
            const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1d'});
            user.lastLogin = new Date();
            await user.save();
            return res.status(200).json({ message:'Login success', token})
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

    async forgetPassword(req, res) {
        const { email } = req.body;
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(400).json({ error: 'User not found' });
            }
    
            // Create a reset token and expiration time
            const resetToken = crypto.randomBytes(32).toString('hex');
            const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour from now
    
            user.resetPasswordToken = resetToken;
            user.resetPasswordExpiresAt = resetTokenExpiresAt;
    
            await user.save();
    
            // Send password reset email
            await sendPasswordResetEmail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);
    
            res.json({ message: 'Password reset link sent to your email' });
        } catch (error) {
            console.error('Error in forgetPassword:', error);  // Log the error for debugging
            res.status(500).json({ success: false, message: "Server error" });
        }
    }
    

    async forgetPassword1(req, res){
        const {email} = req.body;
        try{
            const user = await User.findOne({
                where:{
                    email
                }
            })
            if(!user){
                return res.status(400).json({message: 'User not found'});
            }
            const resetToken = crypto.randomBytes(20).toString('hex');
            const resetPasswordExpiresAt = Date.now() + 1 * 60 * 60 * 1000;
            user.resetPasswordToken = resetToken;
            user.resetPasswordExpiresAt = resetPasswordExpiresAt;
            await user.save();
            await sendPasswordResetEmail(user.email, $`{process.env.CLIENT_URL}/reset-password/${resetToken}`);
            return res.status(200).json({message: 'Password reset link sent to your email'});
        }catch(error){
            res.status(500).json({ success: false, message: "Server error" });
        }
    }

    async resetPassword(req, res){
        const {resetToken} = req.params;
        const {password} = req.body;
        try{
            const user = await User.findOne({
                where:{
                    resetPasswordToken: resetToken,
                    resetTokenExpiresAt:{
                        [Op.gt]: new Date()
                    }
                }
            })
            if(!user){
                return res.status(400).json({message: 'Invalid reset token or expired token'});
            }
            const hashedPassword = await  bcrypt.hash(password, 10);
            user.password = hashedPassword;
            user.resetPasswordToken = null;
            user.resetTokenExpiresAt = null;
            await user.save();
            await sendPasswordResetSuccessEmail(user.email, user.username);
            return res.status(200).json({message: 'Password reset successfully'});
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }
}

export default new UserController();
