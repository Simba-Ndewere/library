const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);
const book1 = {title: "The Hobbit", author: "J.R.R Tolkien", pages: 311, read: true};
const book2 = new Book("Two Weeks In November", "Douglas Rogers", 241, false);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createBook(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
}

function displayBooks() {
    createCard(myLibrary[myLibrary.length-1]);
}

window.onload = function () {
    createCard(book1);
    createCard(book2);
};

function createCard(book) {

    const right = document.querySelector(".right");

    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", "1");
    const cardTitle = document.createElement("div");
    cardTitle.textContent = book.title;
    const cardAuthor = document.createElement("div");
    cardAuthor.textContent = book.author;
    const cardPages = document.createElement("div");
    cardPages.textContent = book.pages + " " + "pages";

    const checkBoxRead = document.createElement("div");
    checkBoxRead.classList.add("checkBox-Read");

    const read = document.createElement("div");
    read.textContent = "Read";
    read.classList.add("readLabel");
    const switchLabel = document.createElement("label");
    switchLabel.classList.add("switch");
    const switchInput = document.createElement("input");
    switchInput.setAttribute("type", "checkbox");
    switchInput.checked = book.read;
    const span = document.createElement("span");
    span.classList.add("slider");

    switchLabel.appendChild(switchInput);
    switchLabel.appendChild(span);

    checkBoxRead.appendChild(read);
    checkBoxRead.appendChild(switchLabel);

    const buttonCard = document.createElement("div");
    buttonCard.classList.add("buttonCard");
    const buttonInput = document.createElement("input");
    buttonInput.setAttribute("class", "btn");
    buttonInput.setAttribute("type", "submit");
    buttonInput.setAttribute("value", "Delete");
    buttonCard.appendChild(buttonInput);

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(checkBoxRead);
    card.appendChild(buttonCard);

    right.appendChild(card);

    buttonInput.addEventListener("click", function(event) {
        event.preventDefault();
        right.removeChild(card);
    });
}

function addBookButton() {

    const buttonConst = document.querySelector(".button");
    const left = document.querySelector(".left");
    buttonConst.style.display = "none";

    const modal = document.createElement("div");
    modal.classList.add("modal");

    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("id", "custom-form");
    const h1 = document.createElement("h1");
    h1.textContent = "book details";
    form.classList.add("form");
    h1.classList.add("h1");

    const formGroup2 = document.createElement("div");
    const titleLabel = document.createElement("label")
    titleLabel.textContent = "title";
    titleLabel.setAttribute("for", "");
    formGroup2.appendChild(titleLabel);

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("required", "");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("maxLength", "40");
    titleInput.classList.add("form-control");
    formGroup2.appendChild(titleInput);

    const formGroup = document.createElement("div");
    const authorLabel = document.createElement("label")
    authorLabel.textContent = "author";
    authorLabel.setAttribute("for", "");
    formGroup.appendChild(authorLabel);

    const authorInput = document.createElement("input");
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("required", "");
    authorInput.setAttribute("name", "author");
    authorInput.setAttribute("maxLength", "40");
    authorInput.classList.add("form-control");
    formGroup.appendChild(authorInput);

    const formGroup3 = document.createElement("div");
    const pagesLabel = document.createElement("label")
    pagesLabel.textContent = "pages";
    pagesLabel.setAttribute("for", "");
    formGroup3.appendChild(pagesLabel);

    const pagesInput = document.createElement("input");
    pagesInput.setAttribute("type", "number");
    pagesInput.setAttribute("required", "");
    pagesInput.setAttribute("name", "pages");
    pagesInput.setAttribute("min", "1");
    pagesInput.classList.add("form-control");
    formGroup3.appendChild(pagesInput);

    const formGroup4 = document.createElement("div");
    const readLabel = document.createElement("label")
    readLabel.textContent = "read";
    readLabel.setAttribute("for", "");
    formGroup4.appendChild(readLabel);

    const readInput = document.createElement("input");
    readInput.setAttribute("type", "checkbox");
    readInput.classList.add("form-control");
    readInput.setAttribute("name", "read");
    readInput.setAttribute("id", "readCheckBox");
    formGroup4.appendChild(readInput);

    const enterButton = document.createElement("button");
    enterButton.textContent = "Enter";
    enterButton.setAttribute("type", "submit");
    enterButton.classList.add("btn");

    form.appendChild(h1);
    form.appendChild(formGroup2);
    form.appendChild(formGroup);
    form.appendChild(formGroup3);
    form.appendChild(formGroup4);
    form.appendChild(enterButton);

    modal.appendChild(form);
    left.appendChild(modal);
    const checkBox = document.getElementById("readCheckBox");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let data = new FormData(e.target);
        const author = data.get("author");
        const title = data.get("title");
        const pages = data.get("pages");
        const read = checkBox.checked

        createBook(title, author, pages, read);
        displayBooks();
        const modal = document.querySelector(".modal");
        const left = document.querySelector(".left");
        left.removeChild(modal);
        const buttonConst = document.querySelector(".button");
        buttonConst.style.display = "block";
    });
}