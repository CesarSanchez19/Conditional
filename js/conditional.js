// Imprime una línea de separación en la consola.
console.log('-----------------------------------------')

// Declara una variable 'IsRaining' y la inicializa como verdadera (true).
let IsRaining  = true

// Comienza una estructura de control 'if' para verificar si está lloviendo.
if (IsRaining) {
    // Si 'IsRaining' es verdadero, imprime en la consola que se necesita un abrigo de lluvia.
    console.log('You need a rain coat')
} else {
    // Si 'IsRaining' es falso, imprime en la consola que no se necesita un abrigo de lluvia.
    console.log('No need for a rain coat')
} 

// Imprime una línea de separación en la consola.
console.log('-----------------------------------------')

// Declara una variable 'weather' y la inicializa con el valor 'cloudy'.
let weather = 'cloudy'

// Comienza una estructura de control 'if' para evaluar el estado del clima.
if (weather === 'rainy') {
    // Si el clima es lluvioso, imprime en la consola que se necesita un abrigo de lluvia.
    console.log('You need a rain coat')
} else if (weather === 'cloudy') {
    // Si el clima es nublado, imprime que podría hacer frío y se necesita una chaqueta.
    console.log('It might be cold, you need a jacket')
} else if (weather === 'sunny') {
    // Si el clima es soleado, imprime que se puede salir libremente.
    console.log('Go out freedly')
} else {
    // Para cualquier otro clima, imprime que no se necesita un abrigo de lluvia.
    console.log('No need for a rain coat')
}

// Imprime una línea de separación en la consola.
console.log('-----------------------------------------')

// Solicita al usuario que ingrese el día actual y almacena la respuesta en 'dayUserInput'.
let dayUserInput = prompt('What day is today?')

// Convierte el valor ingresado a minúsculas para facilitar la comparación.
let day = dayUserInput.toLowerCase()

// Comienza una estructura de control 'switch' para evaluar el día ingresado.
switch (day) {
    case 'monday':
        // Si el día es lunes, imprime que hoy es lunes.
        console.log('Today is Monday')
        break; // Sale del 'switch'.

    case 'tuesday':
        // Si el día es martes, imprime que hoy es martes.
        console.log('Today is Tuesday')
        break; // Sale del 'switch'.

    case 'whensday': // Nota: Debería ser 'wednesday'.
        // Si el día es miércoles (aunque hay un error tipográfico), imprime que hoy es miércoles.
        console.log('Today is Whensday')
        break; // Sale del 'switch'.

    case 'thursday':
        // Si el día es jueves, imprime que hoy es jueves.
        console.log('Today is Thursday')
        break; // Sale del 'switch'.

    case 'friday':
        // Si el día es viernes, imprime que hoy es viernes.
        console.log('Today is Friday')
        break; // Sale del 'switch'.

    case 'saturday':
        // Si el día es sábado, imprime que hoy es sábado.
        console.log('Today is Saturday')
        break; // Sale del 'switch'.

    case 'sunday':
        // Si el día es domingo, imprime que hoy es domingo.
        console.log('Today is Sunday')
        break; // Sale del 'switch'.

    default:
        // Si no coincide con ningún día de la semana, imprime que no es un día de la semana válido.
        console.log('It is not a week day')
}

// Imprime una línea de separación en la consola.
console.log('-----------------------------------------')

// Solicita al usuario que ingrese un número y lo almacena en la variable 'num'.
let num = prompt('Enter number')

// Comienza una estructura de control 'switch' usando 'true' para evaluar condiciones.
switch (true) {
    case num > 0:
        // Si 'num' es mayor que 0, imprime que el número es positivo.
        console.log('Number is positive')
        break; // Sale del 'switch'.
    case num == 0:
        // Si 'num' es igual a 0, imprime que el número es cero.
        console.log('Number is Zero')
        break; // Sale del 'switch'.
    case num < 0:
        // Si 'num' es menor que 0, imprime que el número es negativo.
        console.log('Number is negative')
        break; // Sale del 'switch'.
    default:
        // Si no se cumple ninguna de las condiciones anteriores, imprime que el valor ingresado no era un número.
        console.log('Entered value was not a number')
        break; // Sale del 'switch'.
}

// Imprime una línea de separación en la consola.
console.log('-----------------------------------------')
