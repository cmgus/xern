import { Server } from "http";
import App from "./App";
class WebServer {
    private _port: number
    private _app: App
    private _server: Server
    constructor() {
        this._port = <number>this.normalizePort(process.env.PORT || '3001')
        this._app = new App()
        this._server = new Server(this._app.app())
        this._app.setPort(this._port)
    }
    lift(): void {
        this._server.listen(this._port)
        this._server.on('error', (error: any) => {
            if (error.syscall !== 'listen') {
                throw error;
            }
            var bind = typeof this._port === 'string'
                ? 'Pipe ' + this._port
                : 'Port ' + this._port;

            // handle specific listen errors with friendly messages
            switch (error.code) {
                case 'EACCES':
                    console.error(bind + ' requires elevated privileges');
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    console.error(bind + ' is already in use');
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        })
        this._server.on('listening', () => {
            var addr = this._server.address();
            var bind = typeof addr === 'string'
              ? 'pipe ' + addr
              : 'port ' + addr?.port;
            //debug('Listening on ' + bind);
            console.log('Listening on ' + bind);
          })
    }
    private normalizePort(val: string): number | boolean | string {
        var port = parseInt(val, 10);
        if (isNaN(port)) {
            // named pipe
            return val;
        }
        if (port >= 0) {
            // port number
            return port;
        }
        return false;
    }
}

export default WebServer
