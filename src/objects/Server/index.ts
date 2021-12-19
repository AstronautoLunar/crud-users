class Server {
    private readonly _port: number;
    private readonly _message: string;
    private readonly _app: any;

    constructor({
        port,
        message
    }) {
        this._port = port;
        this._message = message;
        this._app = require("express")();
    }

    private get port() {
        return this._port;
    }

    private get message() {
        return this._message;
    }

    private get app() {
        return this._app;
    }

    public execute() {
        this.app.listen(
            this.port, 
            () => console.log(this.message)
        )
    }
}

export default Server;