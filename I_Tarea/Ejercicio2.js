function consultarBaseDeDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random()*10)

            if (numero % 2 === 0) {
                resolve("Consulta exitosa")
            }else {
                reject("Error en la consulta")
            }
        },3000)
    })
}

consultarBaseDeDatos()
.then(mensaje => console.log(mensaje))
.catch(error => console.error(error))



