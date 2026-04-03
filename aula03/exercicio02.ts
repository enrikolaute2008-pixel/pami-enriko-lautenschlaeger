// Array de cidades
let cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Salvador', 'Manaus'];

// Função que recebe o array e lista cada uma
function listarCidades(lista: string[]): void {
    lista.forEach(cidade => {
        console.log(cidade);
    });
}

listarCidades(cidades);
