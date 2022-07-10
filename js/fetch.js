

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
        showUserData(data);
    } catch (error) {
        console.log(error);
    }
}

function showUserData(data) {
     console.log(data);
    const { quote, author} = data;

    const userData = `
    "<div class='devuelve'>"
     "<img class='cajafoto2' src='/img/homero-cn-lentes.png'/>"+
      "<p>Frase:${quote}</p>"
     "<h3>Autor:${author}</h3>""</div>"`;
     devuelve.innerHTML = userData;
}


