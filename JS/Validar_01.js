document.addEventListener('DOMContentLoaded', ()=>{  
    const formulario = {
        Empresa: '',
        Correo: '',
        Telefono: '',
        Descripcion: '',
        Direccion: '',
        Estado: '',
        Giro: '',
        CP: ''
    }

    const inputName = document.querySelector('#Empresa')
    const inputEmail = document.querySelector('#Correo')
    const inputTelefono = document.querySelector('#Telefono')
    const inputDescripcion = document.querySelector('#Descripcion')
    const inputDirection = document.querySelector('#Direccion')
    const inputState = document.querySelector('#Estado')
    const inputGiro = document.querySelector('#Giro')
    const inputCP = document.querySelector('#CP')
    const Form = document.querySelector('#Formulario')
    const btnEnviar = document.querySelector('#Formulario button[type="submit"]')

    inputName.addEventListener('input', Validar)
    inputEmail.addEventListener('input', Validar)
    inputTelefono.addEventListener('input', Validar)
    inputDescripcion.addEventListener('input', Validar)
    inputDirection.addEventListener('input', Validar)
    inputState.addEventListener('input', Validar)
    inputGiro.addEventListener('input', Validar)
    inputCP.addEventListener('input', Validar)

    //Eventos
    function Validar(event){
        if(event.target.value.trim() === ''){
            showAlert(`El campo ${event.target.id} es obligatorio`, event.target.parentElement)
            formulario[event.target.id] = ''
            comprobarEmail()
            return
        }

        if (event.target.id==='Correo' && !validarEmail(event.target.value)){
            showAlert('El email no es valido',event.target.parentElement )
            formulario[event.target.id] = ''
            comprobarEmail()
            return
        }
        limpiarAlerta(event.target.parentElement)
        //Asignar valores
        formulario[event.target.id] = event.target.value.trim().toLowerCase()
        //Comprobar el objeto de  email
        comprobarEmail()
    }

    function showAlert(mensaje, referencia){
        limpiarAlerta(referencia)

        //Generar HTML alerta
        const msjError = document.createElement('p')
        msjError.textContent = mensaje
        msjError.classList.add('text-rose-500' ,'text-sm', 'text-center', 'alerta')
        //Inyectar error
        referencia.appendChild(msjError)
    }

    function limpiarAlerta(remove){
        //Comprueba si existe una alerta
        const alerta = remove.querySelector('.alerta')
        if(alerta){
            alerta.remove()
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email)
        return resultado
    }

    function comprobarEmail(){
        if(Object.values(formulario).includes('')){
            btnEnviar.classList.add('opacity-50')
            btnEnviar.disabled = true
            return
        }
            btnEnviar.classList.remove('opacity-50')
            btnEnviar.disabled = false
        
    }
    
});
