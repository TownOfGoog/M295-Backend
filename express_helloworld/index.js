import express from "express";

const app = express();
const port = 4000;
app.use(express.static('public'));

// req und res stehen für request und response
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/now", (req, res) => {
    res.send(new Date().toISOString());
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
    res.send(req.header["user-agent"])
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


app.get('/now2', (req, res) => {
  const timezone = req.query.tz || 'CET';
  const currentTime = new Date().toLocaleString('en-US', { timeZone: timezone });

  res.send(`Current time in ${timezone}: ${currentTime}`);
});




// Middleware für das Parsen von URL-Codierung und JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Beispiel-Namensliste
let names = ['Alice', 'Bob', 'Charlie'];

// POST-Endpunkt /name2
app.post('/name22', (req, res) => {
  const nameToAdd = req.body.name; // Name aus dem Formular

  // Überprüfen, ob der Name bereits in der Liste vorhanden ist
  if (names.includes(nameToAdd)) {
    res.status(409).send('Name already exists'); // Name existiert bereits
  } else {
    names.push(nameToAdd); // Name zur Liste hinzufügen
    res.sendStatus(201); // Statuscode 201 (Created) zurückgeben
  }
});





app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

app.get("/namez", (req, res) => {
    res.sendFile('/workspaces/M295 Backend/express_helloworld/nameform.html')
});

//WAAAAAAAAAAAAAAAAAAAAA

app.get("/Secret2", (req, res) => {
    const pass = req.query.tz
    if (pass == "a") {
    res.sendFile('/workspaces/M295 Backend/express_helloworld/nameform.html')
    } else {
        res.sendStatus(401)
    }
});






async function fetchJoke(category) {
  try {
    const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=sport`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch GitHub repositories for ${username}: ${error.message}`);
  }
}



// Usage example


  app.get("/Chuck", (req, res) => {

    const joke = response.data.value;
    res.send(joke);
    console.log(joke);
});