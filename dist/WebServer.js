"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const App_1 = __importDefault(require("./App"));
class WebServer {
    constructor() {
        this._port = this.normalizePort(process.env.PORT || '3001');
        this._app = new App_1.default();
        this._server = new http_1.Server(this._app.app());
        this._app.setPort(this._port);
    }
    lift() {
        this._server.listen(this._port);
        this._server.on('error', (error) => {
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
        });
        this._server.on('listening', () => {
            var addr = this._server.address();
            var bind = typeof addr === 'string'
                ? 'pipe ' + addr
                : 'port ' + (addr === null || addr === void 0 ? void 0 : addr.port);
            //debug('Listening on ' + bind);
            console.log('Listening on ' + bind);
        });
    }
    normalizePort(val) {
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
exports.default = WebServer;
