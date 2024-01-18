const mybtn = document.getElementById('mybtn');
const main = document.getElementById('main');
const body = document.getElementById('body');

function openMain() {
    body.style.top = "-400px";
    main.style.top = "30%";
    main.style.position = "absolute";
}

mybtn.addEventListener('click', openMain);