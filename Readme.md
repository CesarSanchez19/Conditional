# Condicionales en JavaScript.

## Descripción del Proyecto

Este proyecto consiste en un conjunto de ejercicios en JavaScript que demuestran la implementación de estructuras condicionales para interactuar con el usuario y procesar datos. A través de una serie de entradas y evaluaciones, el programa guía al usuario para determinar su elegibilidad para conducir, compara edades, evalúa temporadas del año, califica puntuaciones académicas, y proporciona mensajes basados en condiciones específicas. Estas funcionalidades permiten al usuario entender y practicar conceptos de programación, especialmente el uso de condicionales.

### Estructuras Condicionales Utilizadas

1. **Condicional `if`:**
   - **Descripción:** Se utiliza para ejecutar un bloque de código si una condición especificada es verdadera.
   - **Ejemplo:** En el primer ejercicio, se verifica si el usuario tiene 18 años o más para permitir la conducción:
     ```javascript
     if (age >= 18) {
         alert('Tiene la edad suficiente para conducir.');
     }
     ```

2. **Condicional `if-else`:**
   - **Descripción:** Permite ejecutar un bloque de código si la condición es verdadera y otro bloque si es falsa.
   - **Ejemplo:** En el segundo ejercicio, se compara la edad del usuario con la edad fija (19 años) y se determina quién es mayor:
     ```javascript
     if (yourAge > myAge) {
         alert(`Eres ${yourAge - myAge} años mayor que yo.`);
     } else {
         alert(`Yo soy ${Math.abs(myAge - yourAge)} años mayor que tú.`);
     }
     ```

3. **Condicional `switch`:**
   - **Descripción:** Se utiliza para evaluar una expresión contra múltiples casos. Es ideal cuando hay múltiples condiciones que dependen del mismo valor.
   - **Ejemplo:** En el cuarto ejercicio, se evalúa el mes ingresado para determinar la estación del año:
     ```javascript
     switch (seasons) {
         case 'septiembre':
         case 'octubre':
         case 'noviembre':
             alert(`La temporada del mes de ${seasons} es Otoño`);
             break;
     }
     ```

4. **Operador Ternario:**
   - **Descripción:** Es un condicional compacto que evalúa una condición y retorna uno de dos valores.
   - **Ejemplo:** Se utiliza para asignar un mensaje basado en la comparación de dos valores:
     ```javascript
     let message = a > b ? 'a es mayor que b' : 'a es menor que b';
     ```

5. **Condicional `if-else if-else`:**
   - **Descripción:** Permite manejar múltiples condiciones de forma secuencial, ejecutando el bloque correspondiente a la primera condición verdadera.
   - **Ejemplo:** En la evaluación del clima, se determina el tipo de abrigo que se necesita según la condición del tiempo:
     ```javascript
     if (weather === 'rainy') {
         console.log('You need a rain coat');
     } else if (weather === 'cloudy') {
         console.log('It might be cold, you need a jacket');
     } else {
         console.log('No need for a rain coat');
     }
     ```

### Funcionamiento de las Estructuras Condicionales

- **`if`:** Evalúa una condición y ejecuta el bloque de código asociado si la condición es verdadera.
- **`if-else`:** Permite una bifurcación simple: si la condición es verdadera, se ejecuta un bloque, de lo contrario, se ejecuta otro.
- **`switch`:** Compara una expresión con múltiples casos y ejecuta el bloque correspondiente al primer caso que coincide.
- **Operador Ternario:** Ofrece una manera concisa de escribir una evaluación condicional que asigna un valor basado en la verdad de la condición.
- **`if-else if-else`:** Maneja múltiples condiciones de forma secuencial, donde solo se ejecuta el bloque del primer caso verdadero.
