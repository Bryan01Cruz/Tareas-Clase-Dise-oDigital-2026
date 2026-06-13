const UsuarioCorreo = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const usuarios = await response.json()
        usuarios.forEach(usuario => {
            console.log(`Nombre: ${usuario.name}, Correo: ${usuario.email}`)
        })
    } catch(error) {
    console.log("Error: ",error)
}
}

UsuarioCorreo()