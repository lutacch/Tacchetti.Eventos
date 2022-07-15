let mililitrosIngresados = "";
let gramosIngresados = "";

let inputGramos = document.getElementById("input-gramos");
let inputMililitros = document.getElementById("input-mililitros");

inputGramos.addEventListener("input", () => {
  gramosIngresados = inputGramos.value;
});
inputMililitros.addEventListener("input", () => {
  mililitrosIngresados = inputMililitros.value;
});

let boton1 = document.getElementById("btnPrimario");
let boton2 = document.getElementById("btnSecundario");

let cup1 = 140;
let cup2 = 250;

boton1.addEventListener("click", () => {
  function dividirGramos() {
    resultado1 = Number(gramosIngresados) / cup1;
  }
  dividirGramos();
  alert("Tu conversion de gramos a Tazas es igual a: " + resultado1);
});

boton2.addEventListener("click", () => {
  function dividirMililitros() {
    resultado2 = Number(mililitrosIngresados) / cup2;
  }
  dividirMililitros();
  alert("Tu conversion de mililitros a Tazas es igual a: " + resultado2);
});
