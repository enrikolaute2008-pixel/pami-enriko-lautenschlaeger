// 1. Criando a interface
interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}

// 2. Criando o objeto do tipo Livro
const meuLivro: Livro = {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    anoPublicacao: 1943
};

// 3. Função para exibir as informações
function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano: ${livro.anoPublicacao}`);
}

exibirLivro(meuLivro);
