import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { AuthPayload, VendorPayload } from '../dto'
import { AppSecret } from '../config'
import { Request } from 'express'

// const saltRounds = 10; // You can adjust the number of salt rounds as needed.

//Function to generate salt
export const generateSalt = async () => {
    return await bcrypt.genSalt()
}

// Function to hash a password
export const hashPassword = async (plainPassword: string, salt: string) => {
    return await bcrypt.hash(plainPassword, salt);
}

// Function to verify a password
export const verifyPassword = async (plainPassword: string, hashedPassword: string) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

export const generateSign = (payload: VendorPayload) => {
    return jwt.sign(payload, AppSecret,{expiresIn: '7d'})
}

export const validateSign = async (req: Request) => {
    const token = req.get('Authorization')
    if(token){
        const payload = jwt.verify(token.split(' ')[1], AppSecret) as AuthPayload
        req.user = payload
        return true
    }
    return false
}


