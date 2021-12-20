import { Server } from "../objects";

const PORT = 4444;

const crudUsers = new Server({
    port: PORT,
    message: `O servidor está iniciando na porta ${PORT}`
});

crudUsers.execute();