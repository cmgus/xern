import { Router } from 'express'
class GreetingRouter {
    private _path: string
    private _router: Router
    constructor(path: string) {
        this._path = path
        this._router = Router()
    }
    private config(): void {
        this._router.get(this._path, (req, res) => {
            res.json({ message: 'Hello, from backend :)' })
        })
    }
    router(): Router {
        this.config()
        return this._router
    }
}

export default GreetingRouter
