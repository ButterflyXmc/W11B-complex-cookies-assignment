let selectionofBookJson = Cookies.get(`bookSelection`);
let selection = JSON.parse(selectionofBookJson);

document.getElementById(`cart`).insertAdjacentHTML(`afterbegin`, `<p>${selection.price}</p>`);
document.getElementById(`cart`).insertAdjacentHTML(`afterbegin`, `<img src = "${selection.imageUrl}"`);
document.getElementById(`cart`).insertAdjacentHTML(`afterbegin`, `<h2>${selection.name}</h2>`);