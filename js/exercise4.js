console.log('-----------------------------------------');
//  1.- Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18

// Ingrese su edad: 30  ---> Tiene la edad suficiente para conducir.

// Ingrese su edad: 15 ----> Te faltan 3 años para conducir.

// Solicita al usuario que ingrese su edad y guarda la entrada en la variable 'age'.
let age = prompt('Escriba tu Edad', 'Escriba aqui su edad');

// Verifica si la edad ingresada es mayor o igual a 18.
if (age >= 18) {
    // Si la condición es verdadera, muestra un mensaje de alerta indicando que el usuario puede conducir.
    alert('Tiene la edad suficiente para conducir.');

    // También imprime en la consola el mismo mensaje para registro.
    console.log('Tiene la edad suficiente para conducir.');
} else {
    // Si la condición es falsa (edad menor de 18), calcula cuántos años faltan para llegar a 18 y muestra un mensaje de alerta.
    alert(`Te faltan ${18 - age} años para conducir.`);

    // Imprime en la consola el mensaje que indica cuántos años faltan para poder conducir.
    console.log(`Te faltan ${18 - age} años para conducir.`);
}


console.log('-----------------------------------------');

//  2.- Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.

//Ingrese su edad: 30

//Eres 5 años mayor que yo.

// Declara una variable 'myAge' y la inicializa con el valor 19.
let myAge = 19;

// Solicita al usuario que ingrese su edad y convierte la entrada a un número, guardándolo en la variable 'yourAge'.
let yourAge = Number(prompt('Ingrese su edad', 'Escriba aqui la edad'));

// Verifica si la edad ingresada por el usuario es mayor que la edad almacenada en 'myAge'.
if (yourAge > myAge) {
    // Si la condición es verdadera, calcula cuántos años es mayor el usuario y muestra un mensaje de alerta.
    alert(`Eres ${yourAge - myAge} años mayor que yo.`);

    // También imprime en la consola el mismo mensaje para registro.
    console.log(`Eres ${yourAge - myAge} años mayor que yo.`);
} else {
    // Si la condición es falsa (la edad del usuario es menor o igual a 'myAge'), calcula cuántos años mayor es 'myAge' y muestra un mensaje de alerta.
    alert(`Yo soy ${Math.abs(myAge - yourAge)} años mayor que tú.`);

    // Imprime en la consola el mensaje que indica cuántos años es mayor 'myAge'.
    console.log(`Yo soy ${Math.abs(myAge - yourAge)} años mayor que tú.`);
}

console.log('-----------------------------------------');

// 3.- Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes

//Usando if else 

// Solicita al usuario que ingrese un valor para 'a' y convierte la entrada a un número, almacenándolo en la variable 'a'.
let a = Number(prompt('Ingrese el valor A', 'Escriba aquí el número'));

// Solicita al usuario que ingrese un valor para 'b' y convierte la entrada a un número, almacenándolo en la variable 'b'.
let b = Number(prompt('Ingrese el valor B', 'Escriba aquí el número'));

// Compara los valores de 'a' y 'b'.
if (a > b) {
    // Si 'a' es mayor que 'b', muestra un mensaje de alerta y registra en la consola que 'a' es mayor que 'b'.
    alert('a es mayor que b');
    console.log('a es mayor que b');
} else {
    // Si 'a' no es mayor que 'b' (lo que incluye ser igual), muestra un mensaje de alerta y registra en la consola que 'a' es menor que 'b'.
    alert('a es menor que b');
    console.log('a es menor que b');
}

console.log('-----------------------------------------');

//Operador ternario

// Utiliza el operador ternario para asignar un mensaje a la variable 'message' basado en la comparación de 'a' y 'b'.
let message = a > b
    // Si 'a' es mayor que 'b', se asigna el mensaje correspondiente.
    ? 'a es mayor que b'
    // Si 'a' no es mayor que 'b' (es decir, 'a' es menor o igual), se asigna un mensaje diferente.
    : 'a es menor que b';

// Imprime el mensaje resultante en la consola.
console.log(message);

console.log('-----------------------------------------');

// 4.- Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :

//Septiembre, Octubre o Noviembre, la temporada es Otoño.
// Diciembre, Enero o Febrero, la temporada es Invierno.
// Marzo,Abril o Mayo, la temporadaes Primavera.
// Junio,Julio o Agosto, la temporadaes Verano.

//Switch

// Solicita al usuario que ingrese el nombre de un mes y lo almacena en la variable 'month'.
let month = prompt('¿Cuál es la estación del año de este mes?', 'Escriba aquí el mes');

// Convierte el valor ingresado a minúsculas y lo almacena en la variable 'seasons' para facilitar la comparación.
let seasons = month.toLowerCase();

// Inicia una estructura de control 'switch' para evaluar la variable 'seasons'.
switch (seasons) {
    // Caso para los meses de otoño.
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
        // Si el mes es uno de estos, muestra un mensaje de alerta y lo registra en la consola.
        alert(`La temporada del mes de ${seasons} es Otoño`);
        console.log(`La temporada del mes de ${seasons} es Otoño`);
        break;

    // Caso para los meses de invierno.
    case 'diciembre':
    case 'enero':
    case 'febrero':
        // Si el mes es uno de estos, muestra un mensaje de alerta y lo registra en la consola.
        alert(`La temporada del mes de ${seasons} es Invierno`);
        console.log(`La temporada del mes de ${seasons} es Invierno`);
        break;

    // Caso para los meses de primavera.
    case 'marzo':
    case 'abril':
    case 'mayo':
        // Si el mes es uno de estos, muestra un mensaje de alerta y lo registra en la consola.
        alert(`La temporada del mes de ${seasons} es Primavera`);
        console.log(`La temporada del mes de ${seasons} es Primavera`);
        break;

    // Caso para los meses de verano.
    case 'junio':
    case 'julio':
    case 'agosto':
        // Si el mes es uno de estos, muestra un mensaje de alerta y lo registra en la consola.
        alert(`La temporada del mes de ${seasons} es Verano`);
        console.log(`La temporada del mes de ${seasons} es Verano`);
        break;

    // Caso por defecto si el mes ingresado no es válido.
    default:
        // Muestra un mensaje de alerta y lo registra en la consola indicando que no es un mes válido.
        alert('No es un mes válido');
        console.log('No es un mes válido');
}

console.log('-----------------------------------------');

// link sobre esta estructura: https://es.stackoverflow.com/questions/374027/multiples-opciones-en-un-case-de-un-switch-javascript

// 5.- Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes

// Solicita al usuario que ingrese su puntuación y la convierte a un número, almacenándolo en la variable 'calificacion'.
let calificacion = Number(prompt('Ingrese la puntuación obtenida: ', 'Escriba aquí el número'));

// Inicia una estructura de control 'switch' usando 'true' para evaluar múltiples condiciones.
switch (true) {
    // Caso para calificaciones mayores o iguales a 90.
    case (calificacion >= 90):
        // Si la condición es verdadera, muestra un mensaje de alerta y lo registra en la consola.
        alert(`Tu calificación es: A`);
        console.log(`Tu calificación es: A`);
        break; // Sale del 'switch'.

    // Caso para calificaciones entre 70 y 89.
    case (calificacion >= 70 && calificacion <= 89):
        alert(`Tu calificación es: B`);
        console.log(`Tu calificación es: B`);
        break;

    // Caso para calificaciones entre 60 y 69.
    case (calificacion >= 60 && calificacion <= 69):
        alert(`Tu calificación es: C`);
        console.log(`Tu calificación es: C`);
        break;

    // Caso para calificaciones entre 50 y 59.
    case (calificacion >= 50 && calificacion <= 59):
        alert(`Tu calificación es: D`);
        console.log(`Tu calificación es: D`); 
        break;

    // Caso para calificaciones entre 0 y 49.
    case (calificacion >= 0 && calificacion <= 49):
        alert(`Tu calificación es: F`);
        console.log(`Tu calificación es: F`);   
        break;

    // Caso por defecto si la calificación no es válida (menor que 0).
    default:
        alert('Calificación inválida');
        console.log('Calificación inválida');
}

// link sobre esta estructura: https://es.stackoverflow.com/questions/253362/comparar-en-un-case-de-switch-en-javascript 

console.log('-----------------------------------------');