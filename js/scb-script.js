console.log("Ciao Cianuro... Oggi l'esercizio è Carosello Array di Oggetti ");

//********************
// CREO ARRAY DI FOTO
//******************** */
let foto = [
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
  "./img/img4.jpg",
  "./img/img5.jpg",
];

let indiceFotoAttuale = 0;

//********************
// RECUPERO DAL DOM IL CAROSELLO
//******************** */
const carosello = document.getElementById("carosello");
console.log(carosello);

//********************
// CICLO LE FOTO E LE INSERISCO DINAMICAMENTE NEL DOM
//******************** */
for (let i = 0; i < foto.length; i++) {
  const img = foto[i];
  console.log(img);

  let nomeClasse = "slide";
  if (i === indiceFotoAttuale) {
    nomeClasse += " selected";
  }

  const htmlFoto = `
    <div class="${nomeClasse}">
      <img src="${img}" alt="">
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
