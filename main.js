
let lista = [];

function elvegzett(e) {
    e.target.parentElement.classList.toggle("athuz");
}

function torles(e) {
    e.target.parentElement.remove();
}

function general() {
    document.getElementById("kiir").innerHTML = "";

    let szoveg = document.getElementById("szoveg");
    lista.push(szoveg.value);
    szoveg.value = "";

    let ul = document.createElement("ul");

    for (let i = 0; i < lista.length; i++) {
        let li = document.createElement("li");

        let xElem = document.createElement("span");
        xElem.innerHTML = "X";
        xElem.classList.add("jobbra");

        li.innerHTML = "<input type='checkbox'>" + lista[i];

        li.appendChild(xElem);

        xElem.addEventListener("click", torles);
        li.addEventListener("change", elvegzett);

        li.classList.add("border-bottom");
        li.classList.add("p-2");
        li.classList.add("list-unstyled");

        ul.appendChild(li);
    }
    document.getElementById("kiir").appendChild(ul);
}

function init() {
    document.getElementById("gomb").addEventListener("click", general);
}

document.addEventListener("DOMContentLoaded", init);

function searchBar() {
    let keresesId = document.getElementById("keresesId");
    let szuro = keresesId.value.toUpperCase();
    let div = document.getElementById("keres");
    let lista_li = div.getElementsByTagName("li");
    let jo;

    for (let i = 0; i < lista_li.length; i++) {
        jo = lista_li[i].innerText;
        // Egy X mindig benne van.
        if (jo.toUpperCase().indexOf(szuro) > -1) {
            lista_li[i].style.display = "";
        }
        else {
            lista_li[i].style.display = "none";
        }
    }
}
