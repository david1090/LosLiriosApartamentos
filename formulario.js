const formulario=document.querySelector("#formulario")
const nombre= document.getElementById("Nombre")
const fechain= document.getElementById("fechain")
const email= document.getElementById("email")
const fechaout= document.getElementById("fechaout")
const consulta= document.getElementById("consulta")




formulario.addEventListener("submit", e => {
    e.preventDefault()
    if( nombre.value.trim() && email.value.trim() && consulta.value.trim()){
        console.log("formulario enviado")
    }
    else{
        console.log("completar bien los campos")
    }
})

