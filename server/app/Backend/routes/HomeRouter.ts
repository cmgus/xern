import { Router } from "express";
import { join } from "path";
class AuthRouter {
    private _router: Router
    private _path: string
    constructor(path: string) {
        this._router = Router()
        this._path = path
    }
    private config(): void {
        this._router.get(this._path, (req, res) => {
            res.sendFile(join(__dirname, '../../../../client/build/index.html'))
        })
    }
    router(): Router {
        this.config()
        return this._router
    }
}

export default AuthRouter
