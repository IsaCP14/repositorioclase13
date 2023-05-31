let dia = function (){
    let fechaActual = new Date();
    let opcionesFecha = { weekday: 'long' };
    let diaActual = fechaActual.toLocaleDateString('es-ES', opcionesFecha);
    return diaActual;
    
}
module.exports = dia;