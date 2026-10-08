// // if e else, else if, switch
// // looping
// // array(funções nativas)
// // objeto
// // funções
// // var, let e const
// // dica: +=
// // concatenação
// // defer

// // condicionais
// let nome = "Fernanda"
// let idad = 18
// let maiorDeIdade = true
// let saldo = 100000

// //condicional simples
// if(idade >= 18){
//     console.log("Sou maior de idade")
// }
// else{
//     console.log("Sou menor de idade")
// }

// // condicional composta
// if(saldo < 1000){
//     console.log("Fique em casa")
// }
// else if(saldo >= 1000 && saldo < 5000){
//     console.log("Sair pra festa")
// }
// else{
//     console.log("Guardar dinheiro");
// }

// // atividade
// if(idade > 14){
//      console.log("Sou menor de idade")
// }
// else{
//     console.log("Sou maior de idade")
// }
// // condicional composta
// if(saldo >= 1000 && saldo < 500){
//     console.log("Sair para festa");
// } 
// else{
//     console.log("Guardar dinheiro");
// }

// atividade 
// let userAge = Number(prompt("Digite a sua idade: "));

// if (userAge <= 0) {
//     alert("Número inválido");
// }
// else if (userAge > 0 && userAge < 12) {
//     alert("Você é uma criança");
// }
// else if (userAge >= 12 && userAge < 18) {
//     alert("Você é um adolescente");
// }
// else if (userAge >= 18 && userAge < 60) {
//     alert("Você é um adulto");
// }
// else if (userAge >= 60) {
//     alert("Você é um idoso");
// }

// //atividade2
// let peso = Number(prompt("Digite seu peso: ex 70.5 kg"));
// let altura = Number(prompt("Digite sua altura: ex 1.75")); 

// let imc = peso / (altura * altura);

// if (imc < 18.5) {
//     alert("Abaixo do peso");
// } else if (imc >= 18.5 && imc < 24.9) {
//     alert("Peso normal");
// } else if (imc >= 24.9 && imc < 29.9) { 
//     alert("Acima do peso");
// } else if (imc >= 29.9 && imc < 34.9) { 
//     alert("Obesidade grau 1");
// } else if (imc >= 34.9 && imc < 39.9) { 
//     alert("Obesidade grau 2");
// } else if (imc >= 39.9) {                
//     alert("Obesidade grau 3");
// }

// let opcao = Number(prompt("Digite uma opção de 1 a 3:"));
// switch (opcao) {
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda");
//         break
//     case 3:
//         console.log("Terça");
//         break
//     default:
//         console.log("Quarta")
//         break
//     case 4:
//         console.log("Quinta");
//         break
//     case 5:
//         console.log("Sexta");
//         break
//     case 7:
//         console.log("Sábado");
//         break
//     case 8:
//         console.log("Opção inválida");
//         break

// }

let height = Number(prompt("Digite a sua altura(em metros)"));
let weight = Number(prompt("Digite o seu peso(em quilogramas)"));


let imc = weight / (height * height);

switch (true) {
    case (imc < 18.5):
    
        alert("Abaixo do peso normal. Seu IMC é: " + imc.toFixed(2));
        break;

    case (imc >= 18.5 && imc <= 24.9):
        alert("Peso normal. Seu IMC é: " + imc.toFixed(2));
        break;

    case (imc >= 25 && imc <= 29.9):
        alert("Excesso de peso. Seu IMC é: " + imc.toFixed(2));
        break;

    case (imc >= 30 && imc <= 34.9):
        alert("Obesidade classe 1. Seu IMC é: " + imc.toFixed(2));
        break;

    case (imc >= 35 && imc <= 39.9):
        alert("Obesidade classe 2. Seu IMC é: " + imc.toFixed(2));
        break;

    case (imc >= 40):
        alert("Obesidade classe 3. Seu IMC é: " + imc.toFixed(2));
        break;

    default:
        alert("Valor inválido inserido.");
}

