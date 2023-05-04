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