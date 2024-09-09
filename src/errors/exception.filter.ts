
import {NextFunction, Request, Response} from "express";
import {IExceptionFilterInterface} from "./exception.filter.interface";
import LoggerService from "../logger/logger.service";
import {HTTPError} from "./http-error.class";


export class ExceptionFilter implements IExceptionFilterInterface {
    logger: LoggerService;
    constructor(logger: LoggerService) {
        this.logger = logger;
    }
    catch(err: Error | HTTPError, req: Request,  res: Response, next: NextFunction) {
        if(err instanceof HTTPError) {
            this.logger.error(`[${err.context}] Error occurred [StatusCode: ${err.statusCode}]  :${err.message}`)
        } else {
            this.logger.error(`Error occurred: ${err.message}`);
            res.status(500).send(err.message);
        }

    }
}