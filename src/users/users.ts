
import { Router, Request, Response } from 'express';

// Создаем новый экземпляр роутера
const userRouter = Router();

// Простая модель данных пользователей (например, массив пользователей)
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

// Маршрут для получения всех пользователей
userRouter.get('/', (req: Request, res: Response) => {
    res.json(users);
});

// Маршрут для получения пользователя по ID
userRouter.get('/:id', (req: Request, res: Response) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find((u) => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Маршрут для создания нового пользователя
userRouter.post('/', (req: Request, res: Response) => {
    const newUser = req.body;
    newUser.id = users.length + 1; // Простой способ генерировать ID
    users.push(newUser);
    res.status(201).json(newUser);
});

// Маршрут для обновления существующего пользователя
userRouter.put('/:id', (req: Request, res: Response) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...req.body };
        res.json(users[userIndex]);
    } else {
        res.status(404).send('User not found');
    }
});

// Маршрут для удаления пользователя
userRouter.delete('/:id', (req: Request, res: Response) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
});

export { userRouter };
