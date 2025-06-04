export async function consultarUsuarios(){

    //1. URL DEL SERVICIO QUE QUIERO CONSUMIR
    //(ENDPOINT)
    const URL="http://localhost:8080/users"

    //2. CONFIGURCION DE LA PETICION
    // - QUÉ METODO HTTP SE VA A CONSUMIR
    // - QUE CABECERAS SE NECESITAN 
    // - SI APLICA QUE DATOS VAN EN EL BODY
    const PETICION={
        method:"GET" 
    }

    //3. UTILIZAR UNA PROMESA (FETCH) PARA CONSUMIR EL API
    let respuestaAPI=await fetch(URL,PETICION)
    let usuariosConsultados=await respuestaAPI.json()
    return usuariosConsultados

}

export async function agregarUsuario(datosUsuario){

    const URL="http://localhost:8080/users"
    const PETICION={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(datosUsuario)
    }
    let respuestaAPI=await fetch(URL,PETICION)
    let respuestaFinal=await respuestaAPI.json()
    return respuestaFinal


}

export async function buscarUsuarioPorId(id){

    const URL="http://localhost:8080/users/"+id
    const PETICION={
        method:"GET",
    }
    let respuestaAPI=await fetch(URL,PETICION)
    let respuestaFinal=await respuestaAPI.json()
    return respuestaFinal


}