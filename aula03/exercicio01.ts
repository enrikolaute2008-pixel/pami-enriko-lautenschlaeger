// Criando as variáveis com tipos
let produto: string = 'Mouse';
let preco: number = 59.90;
let disponivel: boolean = true;

// Exibindo no console (usando um ternário simples para mostrar 'Sim' em vez de 'true')
console.log(`Produto: ${produto} - Preço: R$${preco.toFixed(2)} - Disponível: ${disponivel ? 'Sim' : 'Não'}`);
