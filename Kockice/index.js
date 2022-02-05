var jedan = document.createElement("img");
jedan.src = "dice1.png";
var dva = document.createElement("img");
dva.src = "dice2.png";
var tri = document.createElement("img");
tri.src = "dice3.png";
var cetiri = document.createElement("img");
cetiri.src = "dice4.png";
var pet = document.createElement("img");
pet.src = "dice5.png";
var sest = document.createElement("img");
sest.src = "dice6.png";

var niz = [];
niz.push(jedan);
niz.push(dva);
niz.push(tri);
niz.push(cetiri);
niz.push(pet);
niz.push(sest);


function menja()
{
    var broj = Math.floor(Math.random()*6);
    var put = niz[broj].getAttribute("src");
    return put;

}

function ko()
{
    document.querySelector("#slika1").src = menja();
    document.querySelector("#slika2").src = menja();

    if(document.querySelector("#slika1").getAttribute("src").localeCompare(document.querySelector("#slika2").getAttribute("src")) === 1)
    {
        document.querySelector(".pobeda").innerHTML = "Pobedio je prvi!";
    }else if (document.querySelector("#slika1").getAttribute("src").localeCompare(document.querySelector("#slika2").getAttribute("src")) === -1){
        document.querySelector(".pobeda").innerHTML = "Pobedio je drugi!";
    }else{
        document.querySelector(".pobeda").innerHTML = "Nereseno!";
    }
}

document.onload = ko();

/*function menja()
{
    var broj = Math.floor(Math.random()*3);
    var slika= document.createElement("img");
    slika.appendChild(niz[broj]);
    return slika;
}*/
