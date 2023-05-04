import express from "express";

const app = express();
const port = 4000;



//GUT
function findALL() {
    return books;
}

//GUT
function findONE(isbn) {
    return books.find(book => book.isbn === isbn);
}



let books=[{
    isbn: "1",
    title: "Python Buch",
    year: 2020,
    author: "tom"
},
{
    isbn: "2",
    title: "One Piece 1",
    year: 1999,
    author: "oda"
}
]

let lends = [
    {
        "LendID": "1",
        "CustomerID": "1",
        "BookID": "1",
        "borrowed_at": "2011-11-11",
        "returned_at": "2022-02-22"
    },
    {
        "LendID": "2",
        "CustomerID": "3",
        "BookID": "323",
        "borrowed_at": "2023-06-04",
        "returned_at": null
    }
]


//GUT
app.get("/books", (req, res) => {
    res.send(findALL())
})

//GUT
app.get("/books/:isbn", (req, res) => {
    let isbn = req.params.isbn
    res.send(findONE(isbn))
})

//GUT
app.get("/booksdel/:isbn", (req, res) => {
    let isbn = req.params.isbn
    res.send(remove(isbn))
})


function replace (book) {
    books = books.map((b) => b.isbn == book.isbn ? book : b);
} 


app.post("/bookscre", (req, res) => {
    let newBook = {
        
    }
    insert(newBook)
    res.send(remove(isbn))
    res.sendStatus(201);
})


app.put("/booksrep/:isbn", (req, res) => {
    let isbn = req.params.isbn
    let newbook = 
        {
            isbn: isbn,
            title: "Oshi no ko 1",
            year: 2020,
            author: "aka akasaka"
        }
    
    replace(newbook)
    res.send(findALL())
})



export function insert (book) {
    books = [... books, book];
}






app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });


app.get("/", (req, res) =>{
    res.send("Library")
})

//GUT
export function remove(isbn){
    books = books.filter((b) => b.isbn !== isbn);
}




//-- .. .- -- .. .- -- .. .- -- .. .- -- .. .- -- .. .- -- .. .- -- .. .- -- .. .- -- .. .- -- .. .- -- .. .- -- .. .- -- .. .-


function findALLLends(){
    return lends
}

app.get("/lend", (req, res) => {
    res.send(findALLLends())
})

app.get("/lend/:lendid", (req, res) =>{
    let id = res.params.lendid
    res.send(findONELend(id))
})


app.put("/lend/:lendid", (req, res) => {
    let lendid = req.params.lendid
    var currentDate = new Date();
    var currentDateJson = currentDate.toJSON();
    let newlend = 
    {
        "LendID": lendid,
        "CustomerID": "6",
        "BookID": "123",
        "borrowed_at": currentDateJson,
        "returned_at": null
    }
    
    replaceLend(newlend)
    res.send(findALLLends())
})



app.post("/lend", (req, res) => {
    var currentDate = new Date();
    var currentDateJson = currentDate.toJSON();
    let lendNew = 
        {
            "LendID": 7,
            "CustomerID": "9",
            "BookID": "123",
            "borrowed_at": currentDateJson,
            "returned_at": null
        }
    
    insertLend(lendNew)
    
    res.sendStatus(201);
})

function findONELend(LendID) {
    return lends.find(lend => lend.LendID === LendID)
}

function replaceLend (book) {
    lends = lends.map((b) => b.LendID == book.LendID ? book : b);
} 



export function insertLend (book) {
    lends = [... lends, book];
}



