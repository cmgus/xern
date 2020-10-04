"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = require("path");
class AuthRouter {
    constructor(path) {
        this._router = express_1.Router();
        this._path = path;
    }
    config() {
        this._router.get(this._path, (req, res) => {
            res.sendFile(path_1.join(__dirname, '../../../../client/build/index.html'));
        });
    }
    router() {
        this.config();
        return this._router;
    }
}
exports.default = AuthRouter;
