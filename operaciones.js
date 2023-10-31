const CUADRO_ESTUDIANTE=document.getElementById('Estudiante')
const CUADRO_TRAINEE=document.getElementById('Trainee')
const CUADRO_JUNIOR=document.getElementById('Junior')
const CALCULAR=document.getElementById('calcular') //boton resumen
const TEXTO=document.getElementById('cuadro_pagar').value
const PAGAR=document.getElementById('cuadro_pagar') //input Total a Pagar: $
const CATEGORIA=document.getElementById('opciones')
const NOMBRE=document.getElementById('nombre')
const APELLIDO=document.getElementById('apellido')
const CORREO=document.getElementById('correo')
const CANTIDAD=document.getElementById('cantidad')
const ENTRADA=200
const ESTUDIANTE=ENTRADA - (ENTRADA*80/100)
const TRAINEE=ENTRADA - (ENTRADA*50/100)
const JUNIOR=ENTRADA - (ENTRADA*15/100)
var personas=0

CUADRO_ESTUDIANTE.addEventListener('click' , () => {
    document.getElementById('opciones').value=1
    PAGAR.value=TEXTO
})

CUADRO_TRAINEE.addEventListener('click' , () => {
    document.getElementById('opciones').value=2
    PAGAR.value=TEXTO
})
CUADRO_JUNIOR.addEventListener('click' , () => {
    document.getElementById('opciones').value=3
    PAGAR.value=TEXTO
})

var selector=CATEGORIA.value
CATEGORIA.addEventListener('click', () => {
    var nuevoselector=CATEGORIA.value
    if(selector==nuevoselector){
    } else {
        selector=CATEGORIA.value
        PAGAR.value=TEXTO
    }
})

CALCULAR.addEventListener('click', () => {
    if(NOMBRE.value!=='' && APELLIDO.value!=='' && CORREO.value!=='' && CANTIDAD.value!==''){
        var buscandoArroba=CORREO.value.indexOf('@')
        if (buscandoArroba==-1) {
            alert('NO SE ENCUENTRA ARROBA DENTRO DEL CORREO, LA DIRECCION NO ES VALIDA')
            return
        }
        if(buscandoArroba<8){
            alert('INTENTA QUE EL CORREO ELECTRONICO NO SEA TAN MENTIROSO' + "\n" + 'PISTA: EL CORREO DEBE TENER UN MINIMO DE 9 CARACTERES HASTA EL "@"')
            return
        }
        personas=parseInt(CANTIDAD.value)
        if(document.getElementById('opciones').value==1){
            if(personas>1){
                PAGAR.value=TEXTO+ESTUDIANTE*personas+' para '+personas+' estudiantes ($' + ENTRADA + '*80%=$'+ (ENTRADA*80/100)+' de descuento)'
            } else {
                PAGAR.value=TEXTO+ESTUDIANTE+' para '+personas+' estudiante ($' + ENTRADA + '*80%=$'+ (ENTRADA*80/100)+' de descuento)'
            }
        }
        if(document.getElementById('opciones').value==2){
            if(personas>1){
                PAGAR.value=TEXTO+TRAINEE*personas+' para '+personas+' trainees ($' + ENTRADA + '*50%=$'+ (ENTRADA*50/100)+' de descuento)'
            } else {
                PAGAR.value=TEXTO+TRAINEE+' para '+personas+' trainee ($' + ENTRADA + '*50%=$'+ (ENTRADA*50/100)+' de descuento)'
            }
        }
        if(document.getElementById('opciones').value==3){
            if(personas>1){
                PAGAR.value=TEXTO+JUNIOR*personas+' para '+personas+' juniors ($' + ENTRADA + '*15%=$'+ (ENTRADA*15/100)+' de descuento)'
            } else {
                PAGAR.value=TEXTO+JUNIOR+' para '+personas+' junior ($' + ENTRADA + '*15%=$'+ (ENTRADA*15/100)+' de descuento)'
            }
        }
    } else if (NOMBRE.value=='' && APELLIDO.value=='' && CORREO.value=='' && CANTIDAD.value=='') {
        alert('Todos los CAMPOS se encuentran vacios, por favor completelos:' + "\n" + 'Nombre: ' + NOMBRE.value + "\n" + 'Apellido: ' + APELLIDO.value + "\n" + 'Correo: ' + CORREO.value + "\n" + 'Cantidad: ' + CANTIDAD.value)
    } else if (APELLIDO.value=='' && CORREO.value=='' && CANTIDAD.value=='') {
        alert('Hay CAMPOS vacios, por favor completelos:' + "\n" + 'Apellido: ' + APELLIDO.value + "\n" + 'Correo: ' + CORREO.value + "\n" + 'Cantidad: ' + CANTIDAD.value)
    } else if (CORREO.value=='' && CANTIDAD.value=='') {
        alert('Hay CAMPOS vacios, por favor completelos:' + "\n" + 'Correo: ' + CORREO.value + "\n" + 'Cantidad: ' + CANTIDAD.value)
    } else if (NOMBRE.value=='') {
        alert('Debe completar el campo NOMBRE que se encuentra vacio... ' + NOMBRE.value)
    } else if (APELLIDO.value==''){
        alert('Debe completar el campo APELLIDO que se encuentra vacio... ' + APELLIDO.value)
    } else if (CORREO.value==''){
        alert('Debe completar el campo CORREO que se encuentra vacio... ' + CORREO.value)
    } else if (CANTIDAD.value=='') {
        alert('Debe completar el campo CANTIDAD que se encuentra vacio... ' + CANTIDAD.value)
    }
})