/* object types
São dados do tipo objeto como OBJECT LITERALS e ARRAYS;
EXPLORAR: interfaces, readonly, tupla e outros;
*/

// 1 - tipo de objeto para função com interface
interface Product {
    name:string
    price:number
    isAvailable: boolean
};

function showProductDetails(product: Product ){
    console.log(`o nome do produto:${product.name} e seu preço é R$:${product.price}`);
    if(product.isAvailable){
        console.log(`O produto está disponível`);
    } else {
        console.log(`Produto não disponível.`);
    }
};

const smartphone:Product = {
    name:"xiaomi redmi 9",
    price:1750.00,
    isAvailable: false
};

showProductDetails(smartphone);

interface Medicamento{
    name:string
    price:number
    lote:string
    validade:string
    isAvailable?:boolean
};



function showMedDetails(med:Medicamento){
    console.log(`o nome do medicamento: ${med.name} e seu preço é R$: ${med.price}
    com o lote: ${med.lote} e sua validade: ${med.validade}`);
    if(med.isAvailable){
        console.log(`O medicamento está disponível`);
    } else {
        console.log(`O medicamento não está disponível`);
    }
};

const med1: Medicamento = { 
    name:"Cefaliv",
    price:18.90,
    lote:"a54hn",
    validade:"10/2023",
    isAvailable:true
};

showMedDetails(med1);


interface User {
    email:string
    password:string
    role?:string // role == função
};

function showUserDetails(user:User) {
    console.log(`O usuário possui o email: ${user.email} e senha: ${user.password}`);
    if(user.role){
        console.log(`A função do usuário é: ${user.role}`);
    };
};

const u1:User = {
    email:"hallysonrobson@gmail.com",
    password:"mitaeromero",
    role:"DBA"
};

const u2:User = {
    email:"barbaraalves@gmail.com",
    password:"babypink",
};

showUserDetails(u1);
showUserDetails(u2);

// 2 - propriedades readonly
/*
-inicia com algum valor e podem ser alteradas apenas uma vez na criação
de um novo dado;
-forma de criar um valor constante em um object
*/

interface Car {
    brand:string //marca
    color:string
    price:number
    isAvalieble?:boolean
    readonly wheels: number// rodas
};

function showDetailsCar(c:Car) {
    console.log(`A marca: ${c.brand}, a cor do carro: ${c.color}, o preço: ${c.price},
    quantidade de rodas: ${c.wheels}`);

    if(c.isAvalieble){
        console.log(`Carro DISPONÍVEL`);
    } else {
        console.log(`Carro INDISPONÍVEL`);
    }
};

const fusca:Car = {
    brand:"Wv",
    color:"black",
    price:12000.00,
    wheels:4
};
// ERROR:READ ONLY: fusca.wheels = 5;

/*
3 - INDEX SIGNATURE
-UTILIZADO QUANDO NÃO SE SABE O NOME DAS CHAVES, MAS SABEMOS OS TIPOS DE 
UM OBJETO OU ARRAY;
-RESTRINGE A TIPOS QUE NÃO DEVEM SER UTILIZADOS; 
*/

interface CoordObjetc {
   [index:string]: number // o nome da var. em string e o valor em number
};

let coords: CoordObjetc = {
    x:10,
    y:25,
    w:45
};

console.log(coords);

// 4 -EXTENDING  TYPES usando interfaces

interface Human {
    name:string
    age:number
    
};

interface SuperHuman extends Human {
    superPowers: string[]
    weakness:string[]
};


const hallyson:Human = {
    name:'Hallyson',
    age: 27
};
console.log(hallyson);


const p1 : SuperHuman = {
    name:"bakugo",
    age:18,
    superPowers:["Voa", "Teletransporte"],
    weakness:["Voa baixo", "Mora na coreia do norte"]
};

console.log(p1);
console.log(p1.superPowers[0]);

// 5 -intersection types (&), apartir de 2 interfaces cria tipos complexos

interface Character {
    name:string
}

interface Gun {
    type:string
    caliber:number
}
// new type
type humanWithGun = Character & Gun

const human1: humanWithGun = {
    name:"Ghost",
    type:"fuzil",
    caliber:5.56
};

console.log(human1);
console.log(human1.caliber +" calibre do fuzil")

// 5 -ReadOnlyArray -  não pode alterar, apenas para informações fixas;

let myArray: ReadonlyArray<string> = ['São paulo', 'Santos', 'Palmeiras', 'Corinthians']
let titleMundialAllTimesPaulistas: ReadonlyArray < string > = ['3','2','0','1'];

myArray.forEach((item) => {
    // print all index 
    console.log("Clubes paulistas: " + item);
});

myArray = myArray.map((item) => {
    // map modifica os itens do array
    return `Time de futebol: ${item}` 
});

console.log(myArray);

/* 6 - TUPLAS, tipo de array criamos um novo type e
 inserimos um array com os tipos necessários 
*/
type fiveName = [string,string,string,string,string]

const myFiveAnimeArr:fiveName = ["one piece","bleach","my hero academy",
"attack on titan","jujutsu kaisen kaisen"]
console.log(myFiveAnimeArr);

myFiveAnimeArr.forEach( (item) => {
    console.log("Top five de todos os tempos: " + item)
})

type nameAndAge = [string, number]
const user = ["Hallyson", 27];
//user[0] = "lalo";

// 7 - tuplas com ReadOnly

function showRanking(n:readonly [number[], string[] ]){
    //ERRO: n[0] = 10 NÃO PODEMOS ALTERAR !!!
    for(let i = 1; i <= 5; i++){
        console.log("Posições" + n[i],n[i]);
    }
}

const topFiveNumber = [1,2,3,4,5]
const animes =["one piece","bleach","my hero academy",
"attack on titan","jujutsu kaisen kaisen"]

showRanking([topFiveNumber,animes]);











