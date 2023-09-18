/*function gotoIngreso(link){
    console.log(link.value);
    location.href = link.value;


function redireccionar(){
    
    location.href = "C:\Users\V&M Investing\Documents\Control Cafeteria\ingreso.html";
}*/

function gotoSalida(link){
    console.log(link.value);
    location.href = link.value;
}

const btnAbrirModal =
document.querySelector("#btn-abrir-modal");

const btnCerrarModal =
document.querySelector("#btn-cerrar-modal");

const pagos =
document.querySelector("#pagos");


btnAbrirModal.addEventListener("click",(e)=>{
    e.preventDefault();
   pagos.classList.add('pagos--show');
});

btnCerrarModal.addEventListener("click", (e)=>{
    e.preventDefault();
    pagos.classList.remove('pagos--show');
});

const btnAbrirConsumo =
document.querySelector("#btn-abrir-consumo");

const btnCerrarConsumo =
document.querySelector("#btn-cerrar-consumo");

const consumo =
document.querySelector("#consumo");

btnAbrirConsumo.addEventListener("click", (e)=>{
    e.preventDefault();
    consumo.classList.add('pagos--show');
});

btnCerrarConsumo.addEventListener("click", (e)=>{
    e.preventDefault();
    consumo.classList.remove('pagos--show');
});
