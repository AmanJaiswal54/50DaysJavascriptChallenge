let searchButton = document.getElementById('search-button');
let searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', ()=>{
    searchInput.classList.toggle('active');
    searchInput.focus();
});