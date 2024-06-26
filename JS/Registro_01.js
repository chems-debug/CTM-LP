document.addEventListener('DOMContentLoaded', ()=>{

    let selectSector = document.getElementById('sectores')
    let selectCountrie = document.getElementById('paises')
    let inputName = document.getElementById('Empresa')
    let inputGiro = document.getElementById('Giro')
    let inputEmail = document.getElementById('Correo')
    let inputNumber = document.getElementById('Telefono')
    let inputDescription = document.getElementById('Descripcion')
    let inputState = document.getElementById('Estado')
    let inputCP = document.getElementById('CP')
    let inputDireccion = document.getElementById('Direccion')
    let btnRegistro = document.getElementById('btn_registro')

    //Obtener sectores de la API
    fetch('https://virtualbusinessc.com/api/v1/sectores')
    .then(res=>res.json())
    .then(json=>{
    json.sectores.forEach(nombre=>{
        selectSector.innerHTML += `<option value="${nombre.nombre}">${nombre.nombre}</option>`
        })
    })               
    .catch(er=>(
        console.log(er)
    ))     

    //Obtener paises de la API
    fetch('https://virtualbusinessc.com/api/v1/paises')
    .then(res=>res.json())
    .then(json=>{
        json.paises.forEach(pais=>{
            selectCountrie.innerHTML += `<option value="${pais.id}">${pais.pais}</option>`
        })
    })               
    .catch(er=>(
        console.log(er)
    ))

    btnRegistro.addEventListener("click",e=>{
        e.preventDefault()
        let data = {
            display_name: inputName.value,
            email: inputEmail.value,
            sector: selectSector.value,
            numero_telefono: inputNumber.value,
            descripcion: inputDescription.value,
            direccion: inputDireccion.value,
            pais: selectCountrie.value,
            estado: inputState.value, 
            giro: inputGiro.value,
            codigo_postal: inputCP.value
        }
        console.log(data)
        let settings = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        }
        
        fetch("https://virtualbusinessc.com/api/v1/registroEmpresaWeb", settings)
        .then(res=>res.json())
        .then(json=>{
        console.log(json)
        })
        .catch(er=>{
            console.log(er)
        })
    })    
});
