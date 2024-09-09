import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../common/base.controller';
import { LoggerService } from '../logger/logger.service';
import {HTTPError} from "../errors/http-error.class";

export class UserController extends BaseController {
    constructor(logger: LoggerService) {
        super(logger);
        this.bindRoutes([
            { path: '/login', method: 'post', method2: 'post', func: this.login },
            { path: '/register', method: 'post', method2: 'post', func: this.register }
        ]);
    }

    login(req: Request, res: Response, next: NextFunction) {
        next(new HTTPError(401, 'ошибка авторизации!'));

    }

    register(req: Request, res: Response, next: NextFunction) {
        this.ok(res, 'register');
    }
}
