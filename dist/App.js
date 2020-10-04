"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GreetingRouter_1 = __importDefault(require("./routes/GreetingRouter"));
const HomeRouter_1 = __importDefault(require("./routes/HomeRouter"));
class App {
    constructor() {
        this._app = express_1.default();
        this.config();
    }
    config() {
        this._app.use(express_1.default.json());
        this._app.use(express_1.default.urlencoded({ extended: false }));
        this._app.use(express_1.default.static('client/build'));
        this._app.use(new HomeRouter_1.default('/').router());
        this._app.use(new GreetingRouter_1.default('/api/v1/greeting').router());
    }
    app() {
        return this._app;
    }
    setPort(port) {
        this._app.set('port', port);
    }
}
exports.default = App;
