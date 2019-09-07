
//* Scritpt for process the text data for search
//!   THis is free to use and dont need any approval
let searchText = ' '
document.querySelector('#search').addEventListener('input', (e) => {
    searchText = e.target.value
})

let button = document.querySelector('#searchButton')
button.addEventListener('click', (e) => {
    let splitText = searchText.split(' ').join('+')
    let url = (`http://www.google.com/search?q=${splitText}`)
    window.location.href = url
})
