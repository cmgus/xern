"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GreetingRouter {
    constructor(path) {
        this._path = path;
        this._router = express_1.Router();
    }
    config() {
        this._router.get(this._path, (req, res) => {
            res.json({ message: 'Hello, from backend :)' });
        });
    }
    router() {
        this.config();
        return this._router;
    }
}
exports.default = GreetingRouter;
