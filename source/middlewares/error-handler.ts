import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

export const errorHandlerMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err.name)
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong try again later',
    }
    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.errors)
            .map((item: any) => item.message)
            .join(',')
        customError.statusCode = 400
    }
    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate value entered for ${Object.keys(
            err.keyValue
        )} field, please choose another value`
        customError.statusCode = 400
    }
    if (err.name === 'CastError') {
        customError.msg = `No item found with id : ${err.value}`
        customError.statusCode = 404
    }
    return res.status(customError.statusCode).json({ msg: customError.msg })
}

export const ErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err.name)
    const statusCode = err.statusCode || 500
    const data = err.data || err.message
    return res.status(statusCode).json(data)
}