const tareas = []

function agregarTarea(descripcion) {
    tareas.push({descripcion, completada: false})
}

function marcarCompletada(descripcion) {
    const tarea = tareas.find(tarea => tarea.descripcion === descripcion)
    if (tarea) {
        tarea.completada = true
    }
}

function listarTareasPendientes() {
    const pendientes = tareas.filter(tarea => !tarea.completada)
    console.log("Tareas pendientes: ",pendientes)
}

function listarTareasCompletadas() {
    const completadas = tareas.filter(tarea => tarea.completada)
    console.log("Tareas completadas: ",completadas)
}

agregarTarea("Comprar leche")
agregarTarea("Llamar al médico")
agregarTarea("Estudiar JavaScript")
marcarCompletada("Comprar leche")
listarTareasPendientes()
listarTareasCompletadas()





