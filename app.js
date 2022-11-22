//when nothing is selected
Cookies.set(`bookSelection`, `Select`);


//Cookies per book
function selectBooks(event){
    let parent = event.target.parentElement;
    if(parent.id == `bookone`){
        let bookJson = JSON.stringify(bookone);
        Cookies.set(`bookSelection`, bookJson)
    } else if (parent.id == `booktwo`){
        let bookJson = JSON.stringify(booktwo);
        Cookies.set(`bookSelection`, bookJson)
    } else if(parent.id == `bookthree`){
        let bookJson = JSON.stringify(bookthree);
        Cookies.set(`bookSelection`, bookJson)
    } else if(parent.id == `bookfour`){
        let bookJson = JSON.stringify(bookfour);
        Cookies.set(`bookSelection`, bookJson)
    }
}



let bookone = {
    name: `RICH DAD POOR DAD`,
    img: `"https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg`,
    price: 12.67
}
let booktwo = {
    name: `THINK AND GROW RICH`,
    img: `"https://dynamic.indigoimages.ca/v1/books/books/0449214923/1.jpg?quality=10&sale=0`,
    price: 10.67
}
let bookthree = {
    name: `THE INTELLIGENT INVESTOR`,
    img: `"https://m.media-amazon.com/images/I/919mmNCTaaL.jpg`,
    price: 13.67
}
let bookfour = {
    name: `THE PSYCHOLOGY OF MONEY`,
    img: `"https://i.ebayimg.com/images/g/iFsAAOSwnDdhnO20/s-l500.jpg`,
    price: 14.67
}

let checkout = []
let selectionOne = document.getElementById(`bookone`);
selectionOne.querySelector(`button`).addEventListener(`click`, selectBooks);

let selectionTwo = document.getElementById(`booktwo`);
selectionTwo.querySelector(`button`).addEventListener(`click`, selectBooks);

let selectionThree = document.getElementById(`bookthree`);
selectionThree.querySelector(`button`).addEventListener(`click`, selectBooks);

let selectionFour = document.getElementById(`bookfour`);
selectionFour.querySelector(`button`).addEventListener(`click`, selectBooks);
