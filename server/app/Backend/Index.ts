import WebServer from "./WebServer";
abstract class Index {
    static run(): void {
        const web = new WebServer()
        web.lift()
    }
}

Index.run()
