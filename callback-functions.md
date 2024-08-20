# Funciones Callback en JavaScript

Las **funciones callback** en JavaScript son funciones que se pasan como argumentos a otras funciones y que se ejecutan después de que la función principal ha terminado de ejecutarse. Esto permite una mayor flexibilidad y control sobre el flujo de ejecución del código, especialmente en operaciones asincrónicas como solicitudes de red, temporizadores, o procesamiento de eventos.

## Ejemplo básico de una función callback

```javascript
function procesar(callback) {
    console.log('Procesando...');
    //Llamar a la función callback
    callback();
}

function mostrarResultado() {
    console.log('Resultado mostrado.');
}

//Pasar 'mostrarResultado' como una función callback a 'procesar'
procesar(mostrarResultado);
``` 

### Explicación:

1. **`procesar(callback)`**: Es una función que recibe otra función como argumento (`callback`).
2. **`console.log('Procesando...');`**: Primero se ejecuta el código de la función `procesar`.
3. **`callback();`**: Luego se ejecuta la función callback que fue pasada como argumento (en este caso, `mostrarResultado`).
4. **`mostrarResultado()`**: Esta es la función que se ejecuta después de que la función `procesar` haya terminado.

## ¿Por qué usar funciones callback?

- **Manejo de asincronía**: En JavaScript, muchas operaciones como la lectura de archivos o las solicitudes de red son asincrónicas, es decir, no se ejecutan de manera secuencial. Las funciones callback permiten ejecutar código después de que estas operaciones han completado.
- **Modularidad**: Permiten dividir el código en partes más pequeñas y manejables.
- **Reutilización**: Puedes pasar diferentes funciones callback a la misma función principal, permitiendo reutilizar código de manera flexible.

## Ejemplo de callback en un temporizador
```javascript
function decirHola() {
    console.log('Hola después de 3 segundos');
}

//Usar setTimeout, que toma una función callback y un tiempo en milisegundos
setTimeout(decirHola, 3000);
```

En este ejemplo, la función `decirHola` es pasada como una callback a `setTimeout`. Después de 3 segundos, `setTimeout` ejecuta la función callback.

## Ejemplo de callback con funciones anónimas
```javascript
function procesar(callback) {
    console.log('Procesando...');
    callback();
}

procesar(function() {
    console.log('Resultado procesado.');
});

```
Aquí, en lugar de pasar una función definida previamente como `callback`, se pasa una función anónima directamente dentro de la llamada a `procesar`.

## Ejemplo de callback Simular verificarSaldo CuentaRUT

En este ejemplo, simularemos el procesamiento de un pago en línea, donde se necesita conectar a varios servicios antes de completar la transacción. Esto muestra cómo los callbacks pueden ayudar a manejar operaciones asincrónicas, que en la realidad pueden incluir tiempos de espera debido a la comunicación con servidores externos.

## Código JavaScript

```javascript
//Simular la verificación de autorización bancaria
function verificarAutorizacion(callback) {
    console.log('Verificando autorización bancaria...');
    setTimeout(() => {
        console.log('Autorización bancaria completada.');
        callback();
    }, 2000); //Simula 2 segundos de espera
}

//Simular la verificación de saldo
function verificarSaldo(callback) {
    console.log('Verificando saldo disponible...');
    setTimeout(() => {
        console.log('Saldo verificado.');
        callback();
    }, 1500); //Simula 1.5 segundos de espera
}

//Simular el procesamiento del pago
function procesarPago(callback) {
    console.log('Procesando el pago...');
    setTimeout(() => {
        console.log('Pago procesado con éxito.');
        callback();
    }, 3000); //Simula 3 segundos de espera
}

//Función principal para realizar el pago
function realizarPago() {
    verificarAutorizacion(() => {
        verificarSaldo(() => {
            procesarPago(() => {
                console.log('Transacción completada. ¡Gracias por su compra!');
            });
        });
    });
}

//Ejecutar la función para simular el proceso de pago
realizarPago();
```

## Explicación del Código

1. **`verificarAutorizacion(callback)`**: Esta función simula la verificación de la autorización bancaria. Utiliza `setTimeout` para simular una espera de 2 segundos antes de ejecutar el callback.
   
2. **`verificarSaldo(callback)`**: Simula la verificación del saldo disponible. Tras 1.5 segundos, ejecuta el callback para proceder al siguiente paso.

3. **`procesarPago(callback)`**: Simula el procesamiento del pago, que tarda 3 segundos antes de completar y ejecutar el callback.

4. **`realizarPago()`**: Es la función principal que orquesta todo el proceso. Llama a `verificarAutorizacion`, y cuando esta termina, procede a `verificarSaldo`, y finalmente a `procesarPago`.

## Beneficios de Usar Callbacks

- **Manejo de Asincronía**: Este ejemplo muestra cómo manejar una serie de operaciones que no se pueden completar inmediatamente y que dependen de la respuesta de servicios externos.
- **Control del Flujo**: Permite controlar el flujo de ejecución de manera secuencial, asegurando que cada paso se complete antes de pasar al siguiente.
- **Modularidad**: Cada función representa un paso independiente del proceso, facilitando la gestión y reutilización del código.


## Resumen

Las funciones callback son fundamentales en JavaScript para manejar operaciones asincrónicas, mejorar la modularidad y la reutilización de código. Son un concepto esencial para escribir código eficiente y manejable en JavaScript.

Este tipo de estructura es muy útil en situaciones del mundo real donde es necesario esperar la respuesta de varios servicios antes de proceder, como en el procesamiento de pagos en línea, confirmación de reservas, etc.