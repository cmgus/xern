import e, { Application } from "express";
import GreetingRouter from "./routes/GreetingRouter";
import HomeRouter from "./routes/HomeRouter";
class App {
    private _app: Application
    constructor() {
        this._app = e()
        this.config()
    }
    private config(): void {
        this._app.use(e.json())
        this._app.use(e.urlencoded({ extended: false }))
        this._app.use(e.static('client/build'))
        this._app.use(new HomeRouter('/').router())
        this._app.use(new GreetingRouter('/api/v1/greeting').router())
    }
    app(): Application {
        return this._app
    }
    setPort(port: number): void {
        this._app.set('port', port)
    }
}

export default App
