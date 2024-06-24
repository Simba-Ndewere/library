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

function addBookButton() {
    const buttonConst = document.querySelector(".button");
    const left = document.querySelector(".left");
    buttonConst.style.display = "none";
    console.log("button removed");

    const modal = document.createElement("div");
    modal.classList.add("modal");

    const form = document.createElement("form");
    form.setAttribute("action","");
    const h1 = document.createElement("h1");
    h1.textContent = "book details"
    
    form.classList.add("form");

    h1.classList.add("h1");
            
    const formGroup = document.createElement("div");
    const authorLabel = document.createElement("label")
    authorLabel.textContent = "author";
    authorLabel.setAttribute("for", "");
    formGroup.appendChild(authorLabel);

    const authorInput = document.createElement("input");
    authorInput.setAttribute("type","text");
    authorInput.setAttribute("required","");
    authorInput.classList.add("form-control");
    formGroup.appendChild(authorInput);

    const formGroup2 = document.createElement("div");
    const titleLabel = document.createElement("label")
    titleLabel.textContent = "title";
    titleLabel.setAttribute("for", "");
    formGroup2.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("required","");
    titleInput.classList.add("form-control");
    formGroup2.appendChild(titleInput);

    const formGroup3 = document.createElement("div");
    const pagesLabel = document.createElement("label")
    pagesLabel.textContent = "pages";
    pagesLabel.setAttribute("for", "");
    formGroup3.appendChild(pagesLabel);

    const pagesInput = document.createElement("input");
    pagesInput.setAttribute("type","number");
    pagesInput.setAttribute("required","");
    pagesInput.classList.add("form-control");
    formGroup3.appendChild(pagesInput);

    const formGroup4 = document.createElement("div");
    const readLabel = document.createElement("label")
    readLabel.textContent = "read";
    readLabel.setAttribute("for", "");
    formGroup4.appendChild(readLabel);

    const readInput = document.createElement("input");
    readInput.setAttribute("type","checkbox");
    readInput.setAttribute("required","");
    readInput.classList.add("form-control");
    formGroup4.appendChild(readInput);

    const enterButton = document.createElement("button");
    enterButton.textContent = "Enter";
    enterButton.setAttribute("type","submit");
    enterButton.classList.add("btn");

    form.appendChild(h1);
    form.appendChild(formGroup);
    form.appendChild(formGroup2);
    form.appendChild(formGroup3);
    form.appendChild(formGroup4);
    form.appendChild(enterButton);

    modal.appendChild(form);
    left.appendChild(modal);
}