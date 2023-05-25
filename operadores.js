/*

Operadores
Los operadores nos permiten realizar una operacion en una o varias operandos
(variantes o datos)
-Operadores de asignacion
-Operadores de cadena
-Operadores logicos
-Operadores de comparacion
-Operadores aritmeticos

//operadores de asignacion (=)
Los operadores de asignacion (=) se utilizan para asignarle valor a una varible. 
asigne un valor al operando de la ezquierda basado en el valor del operador de la derecha.


*/
//operadores de asignacion
let edadFelipe = 31;
var recipiente ="cafe";

/*

operadores de comparacion (<,>,<=,>=,==,===,!=,!==)



*/
let numero1 = 13;
let numero2 = 25;
let numero3 = 25;
let veinticinco ="veiticinco";
//operador menor que
console.log("El valor 13 es menor que el valor 25 " + (numero1<numero2));
//operador mayor que
console.log("el valor 13 es menor que el valor 25 " + (numero1>numero2));
//operador mayor o igual qué
console.log("el valor de 25 es menor o igual que el valor 25 " + (numero2>=numero3));
//operador de igualdad solo evalua valores
console.log("el valor 25 es igual que el valor 25? " + (numero2 == numero3));
//operador de igualdad estricta (evalua el valor y evalua el tipo de dato)
console.log("el valor 25 es igual que el valor 25? " + (numero2 === numero3));
 
console.log("El valor 25 es igual que el valor 25? " + (25 === veinticinco));
//operador de desigualdad (!=)
console.log("el valor 13 no es igual al valor 25? " + (numero1 != numero2));
//Operador de desigualdad estricta (!==)
console.log("el valor de 25 no es igual al valor 25? " + (numero2 !== numero3));

/*
Operadores logicos (&& (and), || (or), ! (not))

Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion. El resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (los podemos combinar, y ,los podemos poner en un orden especifico).


AND (&&)

Sirve para determinar si dos expresiones son verdaderas. 

    - Si ambas expresiones son verdaderas, el resultado es verdadero. 
    - Si una de las dos expresiones es falsa, todo el resultado es falso.




OR (||)

Sirve para determinar si dos expresiones son falsas.

    - Si cualquiera de esas afirmaciones es verdadera, todo es verdadero.
    - Si las dos afirmaciones son falsas, todo es falso.



NOT (!)

Sirve para mostrar lo contrario a lo que estamos devolviendo


*/
/*
var num1 = 12;
var num2 = 24;
 afirmacion1 =(num1 > num2);
 afirmacion2 =(num1 != num2);
 console.log (afirmacion1 && afirmacion2);

//ejemplo con OR ||
 afirmacion3 =(num1 > num2);
 afirmacion4 =(num1 != num2);
 console.log (afirmacion3 || afirmacion4); // true porque al

*/

num1 =12;
num2 = 24; 
num3 = 25; 
num4 = 92; 
num5 = 91; 
op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3); 
console.log(op);


//!Combinando operaciones2

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op2 = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);

 console.log(op2);

/*
Operadores aritmeticos (+, -, /, %, ++. **, --)
+ (suma): suma dos o mas valores numericos
//si pones signo de más, va a concatenar y presentará como string, pero si pones , va a respetar operacions.
- (resta) resta dos o mas valores nuemericos
* (multiplicacion): multiplica dos o más valores numericos
/ (division): divide dos o mas valores numericos
%(modulo o residuo); retorna el residuo de una division
** (exponenciacion) retorna el resultado de una potencia. Se escribe la base antes de los astericos, y el exponen después de los asteriscos
++ (incremento): incrementa el valor de uno en uno
-- (decremento): decrementa el valor de uno en uno
*/
let valor1 = 55;
let valor2 = 17;

console.log("Suma: " , valor1 + valor2);
console.log("Resta: " , valor1 - valor2);
console.log("Multiplicacion: " , valor1 * 17);
console.log("Divison: " , valor1 / valor2);
console.log("Residuo: " , valor1 % valor2);
console.log("Exponente: " , valor1 ** valor2);
console.log("Incremento: " , ++valor1);
console.log("Decremento: " , --valor2);

console.log(valor1);




/*
El IMC resulta a de la división de la masa del individuo (en kg) entre el cuadrado de la estatura (en metros). El índice de masa corporal es un indicador del peso de una persona en relación con su altura. 
Clasificación del IMC de acuerdo con la OMS de la ONU:
・Menor a 16: Criterio de ingreso.
・16 a 16.9: infrapeso.
・17 a 18.4: bajopeso
・18.5 a 24.9: peso normal.
・25 a 29.9: sobrepeso
・30 a 34.9: obesidad premórbida
・50 a 45: obesidad mórbida
・Mayor a 45: obesidad hipérmorbida

Escriba un programa que dado el peso de una persona en libras (1 libra = 0.453592 kg) y su estatura en centímetros, calcule su IMC e indique como salida el peso en kilogramos, el valor de IMC de la person a y la categoría en la cual fue clasificado.
*/

let pesoLibras = prompt("Ingrese su peso en libras");
let estaturaCM = prompt("Ingrese su estatura en centímetros");
     
function calculoIMC() {
    pesoKG = pesoLibras * 0.453592;
    estaturaMetros = estaturaCM / 100;
    indiceMasa = pesoKG / (estaturaMetros ** 2);
    console.log("Su peso en kilogramos es:", pesoKG);
    console.log("Su estatura en metros es:", estaturaMetros);
    console.log("Su IMC es", indiceMasa);
    if (indiceMasa < 16) {
        console.log("Criterio de ingreso");
    } else if (indiceMasa >= 16 && indiceMasa <= 16.9) {
        console.log("Infrapeso");
    } else if (indiceMasa >= 17 && indiceMasa <= 18.4) {
        console.log("Bajopeso");
    } else if (indiceMasa >= 18.5 && indiceMasa <= 24.9) {
        console.log("Peso normal");
    } else if (indiceMasa >= 25 && indiceMasa <= 29.9) {
        console.log("Sobrepeso");
    } else if (indiceMasa >= 30 && indiceMasa <= 34.9) {
        console.log("Obesidad premórbida");
    } else if (indiceMasa >= 35 && indiceMasa <= 45) {
        console.log("Obesidad mórbida");
    } else if (indiceMasa > 45) {
        console.log("Obesidad hipérmorbida");
    }
}

calculoIMC();
  


