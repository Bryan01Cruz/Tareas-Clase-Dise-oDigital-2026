const productos = [
    { nombre: "Televisor", precio: 500, categoria: "Electrónica" },
    { nombre: "Silla", precio: 100, categoria: "Muebles" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Mesa", precio: 200, categoria: "Muebles" },
    { nombre: "Auriculares", precio: 150, categoria: "Electrónica" }
]

const filtrados = productos.filter(producto => producto.categoria === "Electrónica")
console.log(filtrados)

const nombres = productos.map(producto => producto.nombre)
console.log(nombres)

const total = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0)
console.log(total)




