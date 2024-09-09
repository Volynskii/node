import express, { Express } from 'express';
import { userRouter } from './users/users';
import { Server } from 'http';
import LoggerService from "./logger/logger.service";
import {UserController} from "./users/users.controller";
import {ExceptionFilter} from "./errors/exception.filter";

export class App {
    app: Express;
    server: Server | null; // Инициализация как null
    port: number;
    logger: LoggerService;
    userController: UserController;
    exceptionFilter: ExceptionFilter;

    constructor(
        logger: LoggerService,
        userController: UserController,
        exceptionFilter: ExceptionFilter
    ) {
        this.app = express();
        this.port = 8001;
        this.server = null;
        this.logger = logger;
        this.userController = userController;
        this.exceptionFilter = exceptionFilter;
    }

    useRoutes() {
        this.app.use('/users', userRouter);
    }

    useExceptionFilters() {
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
    }

    public async init() {
        this.useRoutes();
        this.server = this.app.listen(this.port, () => {
            console.log(`Сервер запущен на http://localhost:${this.port}`);
        });
    }
}

export default App;
