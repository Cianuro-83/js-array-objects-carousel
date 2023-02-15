console.log("Ciao Cianuro... Oggi l'esercizio è Carosello Array di Oggetti ");

//********************
// CREO ARRAY DI FOTO
//******************** */
let fotoSlides = [
  {
    titolo: "Seduto sul pontile",
    descrizione:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi repellendus, quos aliquam dolore placeat",
    img: "./img/img1.jpg",
  },
  {
    titolo: "Campanile sul fiume",
    descrizione:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi repellendus, quos aliquam dolore placeat",
    img: "./img/img2.jpg",
  },
  {
    titolo: "Battello sul fiume",
    descrizione:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi repellendus, quos aliquam dolore placeat",
    img: "./img/img3.jpg",
  },
  {
    titolo: "La città riflessa nel fiume",
    descrizione:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi repellendus, quos aliquam dolore placeat",
    img: "./img/img4.jpg",
  },
  {
    titolo: "Finalmente un po' di vacanza",
    descrizione:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi repellendus, quos aliquam dolore placeat",
    img: "./img/img5.jpg",
  },
];
console.log(fotoSlides);

//---------------------------------------------------------------------------
// INIZIALIZZO LE FUNZIONI
//---------------------------------------------------------------------------
let indiceFotoAttuale = 0;

//********************
// RECUPERO DAL DOM IL CAROSELLO
//******************** */
const carosello = document.getElementById("carosello");
console.log(carosello);
//********************
// STAMPO IN CONSOLE LE INFORMAZIONI DI OGNI FOTO
//******************** */
for (let Key in fotoSlides) {
  console.log(fotoSlides[Key]);
}
//********************
// CICLO LE FOTO E LE INSERISCO DINAMICAMENTE NEL DOM
//******************** */
for (let i = 0; i < fotoSlides.length; i++) {
  let indiceFotoAttuale = fotoSlides[i];
  let titolo = indiceFotoAttuale.titolo;
  let descrizione = indiceFotoAttuale.descrizione;
  let img = indiceFotoAttuale.img;

  console.log(titolo, descrizione, img);

  let nomeClasse = "slide";
  if (i === indiceFotoAttuale) {
    nomeClasse += "selected";
  }

  const htmlFoto = `
  <div class="${nomeClasse}">
    <img class"selected" src="${img}" alt="">
    <div class="descrizione text-end">
      <h2 class="scb-descrizione">${titolo}</h2>
      <p class="scb-descrizione">${descrizione}</p>
    </div>
  </div>
  `;

  carosello.innerHTML += htmlFoto;
}

//********************
// RECUPERO LE FOTO DAL CAROSELLO
//******************** */
let fotoElements = document.querySelectorAll(".carosello .slide");
console.log(fotoElements);

//********************
// RECUPERO FRECCE DAL DOM
//******************** */
const frecciaSnElement = document.getElementById("freccia-sn");
const frecciaDxElement = document.getElementById("freccia-dx");

console.log(frecciaSnElement, frecciaDxElement);

//********************
// ADD EVENT LISTENER FRECCIA DESTRA
//******************** */
frecciaDxElement.addEventListener("click", function () {
  console.log("FOTO SUCCESSIVA");
  console.log(indiceFotoAttuale);

  const lastIndex = fotoElements.length - 1;

  console.log(fotoElements[indiceFotoAttuale]);
  fotoElements[indiceFotoAttuale].classList.remove("selected");

  if (indiceFotoAttuale < lastIndex) {
    indiceFotoAttuale += 1;
  } else {
    indiceFotoAttuale = 0;
  }

  console.log(fotoElements[indiceFotoAttuale]);
  fotoElements[indiceFotoAttuale].classList.add("selected");
});
//  FINE ADD EVENT LISTENER FRECCIA DESTRA

//********************
// ADD EVENT LISTENER FRECCIA SINISTRA
//******************** */

frecciaSnElement.addEventListener("click", function () {
  console.log("FOTO PRECEDENTE");

  console.log(fotoElements[indiceFotoAttuale]);
  fotoElements[indiceFotoAttuale].classList.remove("selected");

  if (indiceFotoAttuale > 0) {
    indiceFotoAttuale--;
  } else {
    indiceFotoAttuale = fotoElements.length - 1;
  }

  console.log(fotoElements[indiceFotoAttuale]);
  fotoElements[indiceFotoAttuale].classList.add("selected");
  //  FINE ADD EVENT LISTENER FRECCIA SINISTRA
});
