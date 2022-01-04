import { Request, Response } from 'express';

export class UserController {

    public getUser = async (req: Request, res: Response) => {
        res.send({
            result: true,
            message: 'mantab'
        });
    }
}