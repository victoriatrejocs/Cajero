let cliente = localStorage.getItem("cliente");
document.getElementById("welcome").innerText = "Bienvenido a la banca electrónica " + numeroCuentaJs

let balanceActual = cliente[3]

let balanceJs = document.getElementById("balance")
balanceJs.innerText = balanceActual


function depositar() {
    let deposito = parseFloat(document.getElementById("depositar").value)
    if ((deposito+balanceActual) > 10000) {
        mostrarError("No puedes tener más de $990 en tu cuenta")
    } else {
        balanceActual += monto;
        balanceJs.innerText = balanceActual
    }
}

function retirar() {
    let monto = parseFloat(document.getElementById("retirar").value)
    if (monto>=balanceActual){
        mostrarError("Fondos insuficientes")
    } else if ( (balanceActual -monto) < 10) {
        mostrarError("Debes de tener al menos $10 en tu cuenta")
    } else {
        balanceActual -= monto;
        balanceEtiqueta.innerText = balanceActual
    }
}

function mostrarError(mensaje) {
    alert(mensaje)
}