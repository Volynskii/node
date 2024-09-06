import { Logger, ILogObj, ISettingsParam } from 'tslog';

export class LoggerService {
    public logger: Logger<ILogObj>;

    constructor() {
        this.logger = new Logger<ILogObj>({
            hideLogPositionForProduction: true, // Скрывает информацию о позиции лога в production
            displayFilePath: 'hidden',  // 'hidden', 'display' или 'displayAll'
            displayFunctionName: false, // Скрывает имя функции
        } as ISettingsParam<ILogObj>); // Используем правильный тип для параметров
    }

    log(...args: unknown[]) {
        this.logger.info(...args);
    }

    error(...args: unknown[]) {
        // отправка в sentry / rollbar
        this.logger.error(...args);
    }

    warn(...args: unknown[]) {
        this.logger.warn(...args);
    }
}

export default LoggerService;

