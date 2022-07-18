

// LA API ES:   https://los-simpsons-quotes.herokuapp.com/v1/quotes

const API = "https://los-simpsons-quotes.herokuapp.com/v1/quotes/";

const devuelve = document.querySelector(".devuelve");
const form = document.querySelector(".form");
const input = document.querySelector(".form__input");

form.addEventListener("submit", (event) => {

    event.preventDefault();
    const number = input.value.trim();
    if (!number) return;
    getUserData(number);
});



async function getUserData(number) {
    try {
        const response = await fetch(API + number);
        if (!response.ok) {
            throw new Error(
                "dice la api, que le dijo sebastian, que te diga a vos que no hay nada con esos datos."
            );
        }
        const data = await response.json();
        showUserData(data, number);
    } catch (error) {
        console.log(error);
    }
}


function showUserData(data, number) {
    console.log(data);
    const { quote, author } = data[number - 1];


    const userData = `
    <div class='devuelve'>
    <img  width=80 height=80 src='/img/homero-cn-lentes.png'/>
    <div>
    <h3>Frase:${quote}</h3><br>
    <h3>Autor:${author}</h3></div></div>`;
    devuelve.innerHTML = userData;
}
