// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.


let imc = 0;
let area = 0;
let perimetro = 0;  

function calcularIMC(peso, altura) {
     
    imc = peso/(altura*altura);
    return imc;

}

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;

}
//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.


function rectangular(altura, ancho) {

    area = altura*ancho;
    perimetro = 2*(altura+ancho);
     
}return area, perimetro;

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function salaCircular(radio) {
    area = 3.14*radio*radio;
    perimetro = 2*3.14*radio;

   
  
    return area, perimetro;

}


//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tabla(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}




//Crea una lista vacía llamada "listaGenerica".
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarLista() {
    let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
    lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
    
    console.log(lenguagesDeProgramacion);
    console.log(lenguagesDeProgramacion.reverse());
   
}

// Crea una función que devuelva la suma de todos los elementos en una lista.


function sumaLista(lista) {
   let suma=0;
    for (let i = 0; i < lista.length; i++) {
         suma += lista[i];
    }
    return suma;
   
}
//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarElemento(lista, elemento) {

    if(lista.includes(elemento)){
        return lista.indexOf(elemento);
    }else {
        return -1;
    }
    
}

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumarListas(lista1, lista2) {
    let lista3 = [];
    for (let i = 0; i < lista1.length; i++) {
        lista3.push(lista1[i] + lista2[i]);
    }
    return lista3;
}

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function cuadradoLista(lista) {

   let listaN = [];

   for(let i = 0; i < lista.length; i++){
       listaN.push(lista[i]*lista[i]);
   }

   return listaN; 
}