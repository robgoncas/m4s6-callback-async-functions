
// //#region EJEMPLO CALLBACK

// //Simular la verificación de autorización bancaria
// function verificarAutorizacion(callback) {
//     console.log('Verificando autorización bancaria...');

//     setTimeout(() => {
//         console.log('Autorización bancaria completada.');
//         callback();
//     }, 2000);
// }

// //Simular la verificación de saldo
// function verificarSaldo(callback) {
//     console.log('Verificando saldo disponible...');

//     setTimeout(() => {
//         console.log('Saldo verificado.');
//         callback();
//     }, 1500);
// }

// //Simular el procesamiento del pago
// function procesarPago(callback) {
//     console.log('Procesando el pago...');

//     setTimeout(() => {
//         console.log('Pago procesado con éxito.');
//         callback();
//     }, 3000);
// }

// //Función principal para realizar el pago
// function realizarPago() {
//     verificarAutorizacion(
//         () => {
//         verificarSaldo(
//             () => {
//             procesarPago(
//                 () => {
//                 console.log('Transacción completada. ¡Gracias por su compra!');
//             });
//         });
//     });
// }

// //Ejecutar la función para simular el proceso de pago
// realizarPago();

// console.log("Este mensaje debería mostrarse al final");

// //#endregion


//#region ASYNC


const setIntervalAsync = () => {
    let contador = 0;

    const intervalo = setInterval(() => {
        contador += 1;
        console.log(`Contador: ${contador}`);
        
        if (contador === 5) {
            //Detener el intervalo después de 5 repeticiones
            clearInterval(intervalo); 
            console.log('Intervalo detenido.');
        }
    }, 2000);

}

//Optiones para no utilizar XMLHttpResquet
//axios
//fetch
const httpRequestAsync = () => {
    const xhr = new XMLHttpRequest();
    
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu', true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('Datos recibidos:', xhr.responseText);

            const data = JSON.parse(xhr.responseText);
            console.log('Datos recibidos JSON:', data);
        }
    };
    xhr.send();
}

//setIntervalAsync();
//httpRequestAsync();


//#endregion

//#region Cuenta Progresiva

const contadorDiv = document.getElementById('contador');
const iniciarBtn = document.getElementById('iniciarCuenta');

let cuenta = 0;

iniciarBtn.addEventListener('click', () => {

    const intervalID = setInterval(() => {
        cuenta += 1;

        contadorDiv.textContent = cuenta;

        // Si la cuenta llega a 60, detén el intervalo
        if (cuenta === 60) {
            clearInterval(intervalID);
        }
    }, 1000);
});

//#endregion