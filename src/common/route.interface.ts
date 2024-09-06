import { NextFunction, Request, Response, Router } from 'express';

export interface IControllerRoute {
    path: string;
    func: (req: Request, res: Response, next: NextFunction) => void;
    method2: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
    method: 'get' | 'post' | 'delete' | 'patch' | 'put';
}
