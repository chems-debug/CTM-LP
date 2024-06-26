let inputName = document.getElementById('Empresa')
let inputEmail = document.getElementById('Correo')
let inputNumber = document.getElementById('Telefono')
let inputRol = document.getElementById('rol')
let inputCiudad = document.getElementById('Ciudad')
let selectCountrie = document.getElementById('paises')
let inputState = document.getElementById('Estado')
let btnRegistro = document.getElementById('btn_registro')

//Obtener paises de la API
fetch('https://virtualbusinessc.com/api/v1/paises')
.then(res=>res.json())
.then(json=>{
    json.paises.forEach(pais=>{
        selectCountrie.innerHTML += `<option>${pais.pais}</option>`
    })
})               
.catch(er=>(
    console.log(er)
))

btnRegistro.addEventListener("click",e=>{
    console.log('Prueba')
    let data = {
        display_name: inputName.value,
        email: inputEmail.value,
        numero_telefono: inputNumber.value,
        role: inputRol.value,
        pais: selectCountrie.value,
        ciudad: inputCiudad.value,
        estado: inputState.value, 
    }
    console.log(data)

    // let settings = {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //      },
    //     body:JSON.stringify(data)
    //   }
    
    // fetch("https://virtualbusinessc.com/api/v1/registroVisitanteWeb", settings)
    // .then(res=>res.json())
    // .then(json=>{
    //   console.log(json)
    // })
    // .catch(er=>{
    //    console.log(er)
    // })
})
