import { Response } from 'express';
import { HttpMessage, HttpStatus } from '../common/enums';

export const sendResponseSuccess = (res: Response, data: any) => {
    return res.status(HttpStatus.Error).json({ message: HttpMessage.Sucess, data: data });
}

export const sendResponseError = (res: Response, message: string) => {
    return res.status(HttpStatus.Error).json({ message: HttpMessage.Error, data: message});
}

export const sendResponseServerError = (res: Response, error: any) => {
    return res.status(HttpStatus.ErrorServer).json({ message: HttpMessage.ErrorServer,error: error});
}