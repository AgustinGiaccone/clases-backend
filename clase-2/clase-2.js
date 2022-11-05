// let edad = 20
// if (edad >=18){
//     console.log('puedes entrar a la disco');
// }else{
//     console.log('lo siento, no podes pasar, sos menor de edad')
// }

// ---------------------------------------------------------------------------------------------------------------------------------------

// for (let i=0; i<=100; i++){
//     console.log(i);
// }

// ---------------------------------------------------------------------------------------------------------------------------------------

// clasic fuction ----------------------------->
// function mostrarLista (lista){
//     if (lista.length == 0) {
//         console.log('no ahi elemnetos en la lista');
//     } else {
//         console.log(lista)
//     }
// }
// mostrarLista ([]);
// mostrarLista([1,2,3,4,5])


// arrow fuction ------------------------------------------------>
// const showList = (lista) =>{
//     if (lista.length == 0) {
//         console.log('no se encontro nada');
//     } else {
//         console.log(lista)
//     }
// }

// showList([]);
// showList([123,345,567])


// iife ---------------------------------------------------------------->


// (function a (lista){
//     if (lista.length == 0) {
//         console.log('no ahi elemnetos en la lista');
//     } else {
//         console.log(lista)
//     }
// })([1231,2,3])

// -------------------------------------------------------------------------------------------

// function crearMultiplicador(numer, multiplicador) {
//      console.log(numer * multiplicador);
// }

// crearMultiplicador(9, 8);



// function crearMultiplicador (multiplicador){
//     return function(numero){
//         return numero ** multiplicador
//     }
// }

// const duplicar = crearMultiplicador(2)

// console.log(duplicar(8))
// console.log(duplicar(11))

// const tripicar = crearMultiplicador(3)
// console.log(tripicar(3))


//---------------------------------------------------------------CLASES---------------------------------------------------------------->

// class Contador {
//     static cuentaGlobal = 0

//     constructor (persona, edad){
//         this.cuentaIndividual = 0;
//         this.nombre = persona
//         this.edad = edad
//     }

//     obtenerNombre(){
//         return this.nombre
//     }

//     definirNombre(nombre){
//         this.nombre= nombre
//     }

//     obtenerCuentaIndividual(){
//         return this.cuentaIndividual;
//     }

//     obtenerCuentaGlobal() {
//         return Contador.cuentaGlobal;
        
//     }

//     contar(){
//         this.cuentaIndividual++
//         Contador.cuentaGlobal++
//     }
// }

// const cuenta1 = new Contador('agus', 54)
// const cuenta2 = new Contador("juan",67)

// cuenta1.contar();
// cuenta2.contar();

// cuenta2.contar();
// cuenta2.contar();
// cuenta2.contar();


// console.log(cuenta1)

// console.log(cuenta2)

// console.log(cuenta1.obtenerNombre())

// cuenta1.definirNombre('agustin')

// console.log('nombre definido: ' + cuenta1.obtenerNombre())

// console.log('cantidad de cuentas: '+cuenta1.obtenerCuentaGlobal())