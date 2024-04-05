function Book(title,author,totalPages,read){
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.read = read;
    this.info = function(){
        return this.title + " by " + this.author + ", " + this.totalPages + " , "
        + this.read;
    }
}

const book1 = new Book('Two Weeks in Novemeber', 'Douglas Rodgers', '241 pages', 'finished book');

console.log(book1.info());