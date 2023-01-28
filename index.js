"use strict";
/* object types
São dados do tipo objeto como OBJECT LITERALS e ARRAYS;
EXPLORAR: interfaces, readonly, tupla e outros;
*/
;
function showProductDetails(product) {
    console.log(`o nome do produto:${product.name} e seu preço é R$:${product.price}`);
    if (product.isAvailable) {
        console.log(`O produto está disponível`);
    }
    else {
        console.log(`Produto não disponível.`);
    }
}
;
const smartphone = {
    name: "xiaomi redmi 9",
    price: 1750.00,
    isAvailable: false
};
showProductDetails(smartphone);
;
function showMedDetails(med) {
    console.log(`o nome do medicamento: ${med.name} e seu preço é R$: ${med.price}
    com o lote: ${med.lote} e sua validade: ${med.validade}`);
    if (med.isAvailable) {
        console.log(`O medicamento está disponível`);
    }
    else {
        console.log(`O medicamento não está disponível`);
    }
}
;
const med1 = {
    name: "Cefaliv",
    price: 18.90,
    lote: "a54hn",
    validade: "10/2023",
    isAvailable: true
};
showMedDetails(med1);
;
function showUserDetails(user) {
    console.log(`O usuário possui o email: ${user.email} e senha: ${user.password}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
    ;
}
;
const u1 = {
    email: "hallysonrobson@gmail.com",
    password: "mitaeromero",
    role: "DBA"
};
const u2 = {
    email: "barbaraalves@gmail.com",
    password: "babypink",
};
showUserDetails(u1);
showUserDetails(u2);
;
function showDetailsCar(c) {
    console.log(`A marca: ${c.brand}, a cor do carro: ${c.color}, o preço: ${c.price},
    quantidade de rodas: ${c.wheels}`);
    if (c.isAvalieble) {
        console.log(`Carro DISPONÍVEL`);
    }
    else {
        console.log(`Carro INDISPONÍVEL`);
    }
}
;
const fusca = {
    brand: "Wv",
    color: "black",
    price: 12000.00,
    wheels: 4
};
;
let coords = {
    x: 10,
    y: 25,
    w: 45
};
console.log(coords);
;
;
const hallyson = {
    name: 'Hallyson',
    age: 27
};
console.log(hallyson);
const p1 = {
    name: "bakugo",
    age: 18,
    superPowers: ["Voa", "Teletransporte"],
    weakness: ["Voa baixo", "Mora na coreia do norte"]
};
console.log(p1);
console.log(p1.superPowers[0]);
const human1 = {
    name: "Ghost",
    type: "fuzil",
    caliber: 5.56
};
console.log(human1);
console.log(human1.caliber + " calibre do fuzil");
// 5 -ReadOnlyArray -  não pode alterar, apenas para informações fixas;
let myArray = ['São paulo', 'Santos', 'Palmeiras', 'Corinthians'];
let titleMundialAllTimesPaulistas = ['3', '2', '0', '1'];
myArray.forEach((item) => {
    // print all index 
    console.log("Clubes paulistas: " + item);
});
myArray = myArray.map((item) => {
    // map modifica os itens do array
    return `Time de futebol: ${item}`;
});
console.log(myArray);
const myFiveAnimeArr = ["one piece", "bleach", "my hero academy",
    "attack on titan", "jujutsu kaisen kaisen"];
console.log(myFiveAnimeArr);
myFiveAnimeArr.forEach((item) => {
    console.log("Top five de todos os tempos: " + item);
});
const user = ["Hallyson", 27];
//user[0] = "lalo";
// 7 - tuplas com ReadOnly
function showRanking(n) {
    //ERRO: n[0] = 10 NÃO PODEMOS ALTERAR !!!
    for (let i = 1; i <= 5; i++) {
        console.log("Posições" + n[i], n[i]);
    }
}
const topFiveNumber = [1, 2, 3, 4, 5];
const animes = ["one piece", "bleach", "my hero academy",
    "attack on titan", "jujutsu kaisen kaisen"];
showRanking([topFiveNumber, animes]);
