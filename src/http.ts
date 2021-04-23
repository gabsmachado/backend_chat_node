import express, { request, response } from "express";
import "./database";
import { routes } from "./routes";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

const app = express();

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
    console.log("Conectado", socket.id);
})

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
    return response.render("html/admin.html");
});


app.get("/", (request, response) => {
    //return response.send("Olá Teste");
    return response.json({
        message: "Olá teste"
    });
});

app.post("/", (resquest, response) => {
    return response.json({
        message: "Rota post"
    })
})

export { http, io };