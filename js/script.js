const nome = document.getElementById("Produto");
const qtd = document.getElementById("Quantidade");

let listaCompras = [];

function adicionarItem(item) {
    if (!listaCompras.includes(item)) {
        listaCompras.push(item);
        console.log(`${item} adicionado à lista.`);
    } else {
        console.log(`${item} já está na lista.`);
    }
}

function mostrarLista() {
    console.log("Lista de Compras:");
    listaCompras.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

adicionarItem("Pão");
mostrarLista();
