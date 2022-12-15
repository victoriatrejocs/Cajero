let user1 = ["joel Lozano ", "joel@gmail.com", "JJ123", 500];
let user2 = ["miguel Monterroso", "migue@gmail.com", "Migue123", 900];
let user3 = ["Paola Gutierrez", "paola@gmail.com", "Pao123", 600];

let users = [user1,user2, user3];
let userValido;

// ( Primero camino , mandar a otra pagina)
function login() {

    let cliente = document.getElementById("email").value;
    let contrasena = document.getElementById("password").value;

    let userValido = users.find((email) => (email[1] == cliente))

    console.log(userValido)
    if (userValido != undefined) {
        if (userValido[2] == contrasena) {
            // lamacenar sus datos 
            localStorage.clear();
            localStorage.setItem("cliente",userValido[0]);
            localStorage.setItem("correo",userValido[1]);
            localStorage.setItem("balance",userValido[3]);
            window.location.href = "Banca/Banca.html";
            // mandarlo a la pagina principal 
        } else {
            document.getElementById("error").textContent = "Datos incorrectos, inténtalo de nuevo"
        }
    } else {
        document.getElementById("error").textContent = "Datos incorrectos, inténtalo de nuevo"
    }

}



// Segundo camino  ( una sola pagina  )

// function login() {

//     let cliente = document.getElementById("email").value;
//     let contrasena = document.getElementById("password").value;

//     userValido = users.find((email) => (email[1] == cliente))
//     console.log(userValido)
//     if (userValido != undefined) {
//         if (userValido[2] == contrasena) {
//             console.log("Login Success")
//             let login = document.getElementById("divLogin")
//             login.className = "divLoginOculto";
//             let bancaDiv = document.getElementById("Banca")
//             bancaDiv.className = "showBanca";
//             document.getElementById("welcome").innerText = userValido[0]
//         } else {
//             document.getElementById("error").textContent = " Error, intentalo de nuevo"
//         }
//     } else {
//         document.getElementById("error").textContent = " Error,correo invlaido"
//     }
// }

// function depositar(){
//     let monto = userValido[3]
//     userValido[3] = monto + 500 // 1000
}