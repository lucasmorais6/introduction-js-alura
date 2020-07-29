var titulo = document.querySelector(".titulo") //buscar um elemento dentro do document
      console.log(titulo); 
			console.log(titulo.textContent); //apenas o conteudo de texto
      titulo.textContent = "Novo nome"; //alterar o "valor" da variavel
 
//calculo do IMC
var paciente = document.querySelector("#primeiro");
console.log(paciente);

var tdPeso = paciente.querySelector(".info-peso");
console.log(tdPeso);
var peso = tdPeso.textContent;
console.log(peso);

var tdAltura= paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 1000){
  console.log("peso invalido");
  pesoValido = false;
  tdImc.textContent= "peso inválido";
}

if(altura <= 0 || altura >=  1000){
  console.log("altura invalida");
  alturaValida = false;
  tdImc.textContent= "altura inválido";
}

var imc = peso/(Math.pow(altura,altura));
console.log(imc);

if( alturaValida && pesoValido) {
  var tdImc= paciente.querySelector(".info-imc");
  tdImc.textContent= imc; 
}