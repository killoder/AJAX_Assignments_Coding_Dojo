var cardsDiv = document.querySelector("#cards");
var currentUsername = "";

function getUsername(element) {
    console.log(element.value);
    currentUsername = element.value;
}

function getAdion(element) {
    console.log(element.value);
    currentUsername = element.value;
}

function makeCoderCard(data) {
    var res = `<div class="card nope">
                    <img src="${data.avatar_url}" alt="${data.login}">
                    <div class="flex-1">
                        <h3>${data.login} - ${data.name}</h3> 
                        <p>Location: ${data.location}</p>
                        <p>Repositories: ${data.public_repos}</p>
                    </div>
                </div>`
    return res;
}

async function search() {
    var response = await fetch("https://api.github.com/users/" + currentUsername);
    var coderData = await response.json();
    cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;
}

async function triggerAPI() {
    var response = await fetch("https://api.github.com/users/adion81");
    var coderData = await response.json();
    cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;
}

