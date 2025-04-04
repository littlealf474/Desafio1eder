
let listaDeCompras = ["Frango", "Feijão", "Pão", "Ovos", "Arroz"]

const prompt = require('prompt-sync')();


let lista = [];

while (true) {
  console.log("\n--- MINHA LISTA DE COMPRAS ---");
  for (let i = 0; i < lista.length; i++) {
    console.log(`${i + 1}. ${lista[i].nome} ${lista[i].comprado ? '[COMPRADO]' : ''}`);
  }

  console.log("\n1. Adicionar item");
  console.log("2. Remover item");
  console.log("3. Marcar como comprado");
  console.log("4. Sair");

  const opcao = prompt("Escolha uma opção (1-4): ");

  if (opcao === "1") {
    const nome = prompt("Digite o nome do item: ");
    lista.push({ nome: nome, comprado: false });
  }
  else if (opcao === "2") {
    const num = parseInt(prompt("Digite o número do item para remover: ")) - 1;
    if (num >= 0 && num < lista.length) {
      lista.splice(num, 1);
    } else {
      console.log("Número inválido!");
    }
  }
  else if (opcao === "3") {
    const num = parseInt(prompt("Digite o número do item para marcar: ")) - 1;
    if (num >= 0 && num < lista.length) {
      lista[num].comprado = true;
    } else {
      console.log("Número inválido!");
    }
  }
  else if (opcao === "4") {
    console.log("Até logo!");
    break;
  }
  else {
    console.log("Opção inválida! Digite de 1 a 4");
  }
}