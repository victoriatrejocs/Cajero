let cliente1=[2340456058907890, "Ana Cortés", "AC123", 450]
let cliente2=[4590678923789564, "Victoria Trejo", "VT123", 322]
let cliente3=[2378957837849057, "Rocío Noguez", "RN123", 764]

let clientes=[cliente1, cliente2, cliente3]

function login(){
    let numeroCuentaJs=document.getElementById("numeroCuenta").value
    let contraseñaJs=document.getElementById("contraseña").value
    let clienteValido=clientes.find((numeroCuenta) => (numeroCuenta[0]==numeroCuentaJs))

    if(clienteValido !=undefined){
        if(clienteValido[2]==contraseñaJs){
            localStorage.clear()
            localStorage.setItem("nombre", clienteValido[2])
            localStorage.setItem("número de cuenta", clienteValido[0])
            localStorage.setItem("balance", clienteValido [3])
            window.location.href = "banca.html"
        } else{
            document.getElementById("error").textContent="Datos incorrectos, inténtalo de nuevo"
        }
    }
}



