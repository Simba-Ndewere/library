const myLibrary = [];

function Book(title, author, pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function createBook(title, author, pages,read){
    const book = new Book(title,author,pages,read);
    addBookToLibrary(book);
}

function displayBooks(){
    for(let a = 0; a < myLibrary.length; a++){
        console.log(myLibrary[a]);
    }
}