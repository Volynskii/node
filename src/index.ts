import App from "./app";
import LoggerService from "./logger/logger.service";

async function bootstrap() {
    const app = new App(new LoggerService()); // Создаем экземпляр класса App
    await app.init(); // Вызываем метод init на экземпляре, а не на классе
}

bootstrap();
