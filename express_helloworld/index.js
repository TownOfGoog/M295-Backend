import express from "express";

const app = express();
const port = 3000;

// req und res stehen für request und response
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/now", (req, res) => {
    res.send(new Date().toISOString());
});

app.listen(port, () => {
    console.log("Server ist gestartet :)");
});

app.get("/zli", (req, res) => {
    window.location.replace("zli.ch");
});

app.get("/name", (req, res) => {
    let num = Math.floor(Math.random()*10);
    let names = ["Tim", "Tom", "Till", "Thomas", "Troy", "Manuel", "Elias", "Allessandro", "Joel", "Leli"]
    res.send(names[num]);
});

app.get("/html", (req, res) => {
    res.sendFile('/workspaces/M295 Backend/express_helloworld/Aufgabe4.html')
});

app.get("/image", (req, res) => {
    res.sendFile('/workspaces/M295 Backend/express_helloworld/PUCK.png')
});

app.get("/teapot", (req, res) => {
    res.sendStatus(418)
});

app.get("/user-agent", (req, res) => {
    res.send.req.header(user-agent)
});

app.get("/secret", (req, res) => {
    res.sendStatus(403)
});

app.get("/xml", (req, res) => {
    res.sendFile("/workspaces/M295 Backend/express_helloworld/Hotel sterne=5.xml")
});

app.get("/me", (req, res) => {
    res.sendFile("/workspaces/M295 Backend/express_helloworld/me.json")
});