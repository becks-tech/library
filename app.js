const container = document.querySelector('.container');
const addBtn = document.querySelector('.add-btn')
const submit = document.querySelector('.submit-btn')
const readStatus = document.querySelector('.read-status')
const isRead = document.querySelector('.is-read')
const myLibrary = []
const modal = document.querySelector('.modal-btn');
const close = document.querySelector('.close-btn');
const overlay = document.querySelector('.modal-overlay');
const confirm = document.querySelector('.confirmation');
const removeBtns = document.querySelectorAll('.remove-btn')
const inputs = document.querySelectorAll('input')
const errors = document.querySelectorAll('.error')


function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages

}

function dummyBooks() {
    const book = new Book('The Hobbit', 'J.R.R. Tolkien', 295)
    const book2 = new Book('I, Robot', 'Isaac Asimov', 245)

    myLibrary.push(book)
    myLibrary.push(book2)


}



function addBookToLibrary() {
        let title = document.querySelector('#title').value
        let author = document.querySelector('#author').value
        let pages = document.querySelector('#pages').value
        
        const userBook = new Book(`${title}`, `${author}`, `${pages}`)
        myLibrary.push(userBook)
        console.log(myLibrary)
        const libraryItem = document.createElement('div');
        libraryItem.setAttribute('class','library-item')
        libraryItem.innerHTML = `<button class="remove-btn">X</button>
        <div class="book-info">
                <h2>${title}</h2>
                <h3>${author}</h3>
                <p>Number of Pages: ${pages}</p>
                <input type="checkbox" class="read-status">
                <label for="title">Read</label>
                <p class="is-read"></p>
                </div>`
        container.appendChild(libraryItem)
        const removeBtn = libraryItem.getElementsByClassName('remove-btn')[0];
        removeBtn.addEventListener('click', () => {
        container.removeChild(libraryItem)
 })
        //displayLibraryItems(myLibrary)
    // Take user input and generate an ID based on the length of the list, dynamically change the ids when an item is removed
}


// Function to filter books - all, read, unread - if no books then display message

// ID each item in array


//const lastItem = myLibrary.length

//console.log(lastItem)

// Modal

addBtn.addEventListener('click', ()=>{
    overlay.classList.toggle('open-modal')
})

close.addEventListener('click', ()=>{
    overlay.classList.remove('open-modal')
})


// Toggle read

Book.prototype.read = false
if(readStatus.checked){
    isRead.textContent = 'Read'
    Book.prototype.read = true
}
//isRead.textContent = 'Unread'

// Disable sumbit button unless all require fields have been filled
const disableButton = () => {
    inputs.forEach((input)=>{
        if(input === '') {
            submit.disabled = true
        }
    })
    
}

disableButton()
// Form validation

submit.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary()
    inputs.forEach((input)=>{
        if (input.value === '') {
            input.style.border = '2px solid red';
            input.style.borderRadius = '5px';
            confirm.textContent = ''
            errors.forEach((error)=>{
                //error.textContent = 'This is a required field';
                error.style.color = 'red';
                error.style.visibility = 'visible'
            })
        }
        else if(input.value !== '') {
            inputs.forEach((input) => {
                input.addEventListener('keypress', ()=>{
                    input.style.border = '2px solid green';
                    input.style.borderRadius = '5px';
                    errors.forEach((error)=>{
                        //error.textContent = 'This is a required field';
                        error.style.color = 'red';
                        error.style.visibility = 'hidden'
                        
                        
                    })
                })
            })
        }
    })
})