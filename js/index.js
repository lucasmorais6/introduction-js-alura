var titulo = document.querySelector(".titulo") //buscar um elemento dentro do document
      console.log(titulo); 
			console.log(titulo.textContent); //apenas o conteudo de texto
      titulo.textContent = "Novo nome"; //alterar o "valor" da variavel
 
//calculo do IMC
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);


tamPacientes = pacientes.length

for(  var i= 0; i< tamPacientes ; i++){
  
  var paciente = pacientes[i];

  console.log(pacientes[i]);
  
  var tdPeso = paciente.querySelector(".info-peso");
  console.log(tdPeso);
  var peso = tdPeso.textContent;
  console.log(peso);
  
  var tdAltura= paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  console.log(altura);
  
  var pesoValido = true;
  var alturaValida = true;
  
  
  var imc = peso/(Math.pow(altura,altura));
  console.log(imc);
  
  if( alturaValida && pesoValido) {
    var tdImc= paciente.querySelector(".info-imc");
    tdImc.textContent= imc.toFixed(2); // para ficar duas casas decimais 
  }
  
  if(peso <= 0 || peso >= 1000){
    console.log("peso invalido");
    tdImc.textContent = "peso inválido";
    pesoValido = false;

    paciente.classList.add("paciente-invalido");
  }
  
  if(altura <= 0 || altura >=  1000){
    console.log("altura invalida");
    tdImc.textContent = "Altura inválida!";
    alturaValida = false;

    paciente.classList.add("paciente-invalido");

  }
}