Desafio de Arrays em JavaScript para Iniciantes  
Tema: Gerenciador de Lista de Compras 🛒  
Duração: 1 semana  
Dificuldade: Fácil  

 📌 Objetivo 
Criar um programa simples para gerenciar uma lista de compras usando arrays em JavaScript.  

---

🧩 Requisitos Básicos  

 1. Estrutura Inicial  
Crie um array chamado listaCompras que armazenará *strings* com os itens.  
Exemplo:  
javascript
let listaCompras = ["Maçã", "Leite", "Pão"];


 2. Funções para Implementar  

 *🛒 adicionarItem(item)*  
- Adiciona um novo item ao final da lista.  
- Exemplo: adicionarItem("Arroz") → listaCompras agora tem ["Maçã", "Leite", "Pão", "Arroz"]  

 *❌ removerItem(item)*  
- Remove um item da lista (se existir).  
- Se o item não for encontrado, exiba: "Item não está na lista!"  
- Exemplo: removerItem("Leite") → listaCompras volta a ser ["Maçã", "Pão", "Arroz"]  

 *📋 mostrarLista()*
- Exibe a lista no console, numerando os itens:  
  bash
  1. Maçã  
  2. Pão  
  3. Arroz  
    

 *✔ marcarComoComprado(item)*  
- Altera o item para mostrar que foi comprado.  
- Exemplo: marcarComoComprado("Pão") → O item vira "✅ Pão"  
- Saída:  
  bash
  1. Maçã  
  2. ✅ Pão  
  3. Arroz  
    

---

 🎯 *Bônus (Opcional)*  
🔹 *limparLista()*
- Remove todos os itens da lista.  

🔹 *procurarItem(item)* 
- Verifica se um item está na lista e retorna sua posição.  
- Exemplo: procurarItem("Arroz") → "Arroz está na posição 3"  

---

 📝 Exemplo de Uso  
javascript
adicionarItem("Café");
adicionarItem("Ovos");
mostrarLista();
marcarComoComprado("Ovos");
removerItem("Leite"); // Item não existe!

Saída esperada:  
bash
1. Maçã  
2. Pão  
3. Arroz  
4. Café  
5. ✅ Ovos  
"Item não está na lista!"


---

 ✅ Critérios de Avaliação  
✔ Todas as funções básicas funcionando.  
✔ Código limpo e organizado.  
✔ Tratamento de erros (ex: item não encontrado).  
✔ (Bônus) Funcionalidades extras implementadas.  

---

 💡 Dicas
- Usem listaCompras.length para ver o tamanho do array.  
- Usem for ou while para percorrer a lista.  
- Testem cada função separadamente!
