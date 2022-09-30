import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";

@Catch()
export class AllExceptionFiltter implements ExceptionFilter{

    private readonly logger = new Logger(AllExceptionFiltter.name);

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        const status = exception instanceof HttpException?
        exception.getStatus(): HttpStatus.INTERNAL_SERVER_ERROR;

        const msj = exception instanceof HttpException?
        exception.getResponse(): exception;

        this.logger.error(`Status: ${status} Error:${JSON.stringify(msj)}`);
        
        response.status(status).json({
            time: new Date().toISOString(),
            path: request.url,
            error: msj
        });
    }

}