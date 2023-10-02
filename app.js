const container = document.querySelector('.container');
const addBtn = document.querySelector('.add-btn')
const submit = document.querySelector('.submit-btn')
const readStatus = document.querySelector('.read-status')
const myLibrary = []
const modal = document.querySelector('.modal-btn');
const close = document.querySelector('.close-btn');
const overlay = document.querySelector('.modal-overlay');
const confirm = document.querySelector('.confirmation')

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function dummyBooks() {
    const book = new Book('The Hobbit', 'J.R.R. Tolkien', 295)
    const book2 = new Book('I, Robot', 'Isaac Asimov', 245, 'read')

    myLibrary.push(book)
    myLibrary.push(book2)
}

dummyBooks()

function addBookToLibrary() {
        let title = document.querySelector('#title').value
        let author = document.querySelector('#author').value
        let pages = document.querySelector('#pages').value
        confirm.textContent = 'Book added'
        const userBook = new Book(`${title}`, `${author}`, `${pages}`)
        myLibrary.push(userBook)
        console.log(myLibrary)
    // Take user input and generate an ID based on the length of the list, dynamically change the ids when an item is removed
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary()
})


window.addEventListener('DOMContentLoaded', () => {
    displayLibraryItems(myLibrary)
})

function displayLibraryItems(libraryItems) {
    let displayItems = libraryItems.map((item) => {
        return `<article class="library-item">
        <button class="remove-btn">X</button>
        <div class="book-info">
                <h2>${item.title}</h2>
                <h3>${item.author}</h3>
                <p>Number of Pages: ${item.pages}</p>
                <!--<p class="read-status">${item.read}</p>
                toggle-read input and label--->
                </div>
            </article>`
    })
    displayItems = displayItems.join('');
    container.innerHTML = displayItems
}

// Function to filter books - all, read, unread - if no books then display message

// ID each item in array
myLibrary.forEach((item, i) => {
    item.id = i + 1;
})

// Modal

addBtn.addEventListener('click', ()=>{
    overlay.classList.toggle('open-modal')
})

close.addEventListener('click', ()=>{
    overlay.classList.remove('open-modal')
})
/*

// Toggle read
    // Initialise Read constructor
    function Read(title, author, pages, read) {
        Book.call(this, title, author, pages)
        // Add read property
        this.read = read
    }
    // if checkbox checked then  call this function, update array
    const book2 = new Read('I, Robot', 'Isaac Asimov', 245, 'read')
    const book3 = new Read('A Game of Thrones', 'George R.R. Martin', 694, 'read')
    const book4 = new Read('I, Robot', 'Isaac Asimov', 245)
    //console.log(this.read)
    if(this.read === 'undefined'){
        readStatus.textContent = 'unread'
    }
   // const userBook = new Read
   */

   // Form validation