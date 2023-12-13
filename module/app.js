const info = require('./pizzaria.js');

const getCategorias = function () {
    const categoriaLocal = [];
    const jsonCategorias = {};
    let status = false;

    info.categorias.forEach((categorias) => {
        categoriaLocal.push(categorias);
        status = true;
    });

    jsonCategorias.categorias = categoriaLocal;

    if (status == true) {
        return jsonCategorias;
    } else {
        return false;
    }
};

const getProdutos = function () {
    const produtosLocal = [];
    const jsonProdutos = {};
    let status = false;

    info.produtos.dados.forEach((produtos) => {
        produtosLocal.push(produtos);
        status = true;
    });

    jsonProdutos.dados = produtosLocal;

    if (status == true) {
        return jsonProdutos;
    } else {
        return false;
    }
};

const getCliente = function (nomeCliente) {
    const jsonCliente = {};
    let nomeLocal = nomeCliente.toLowerCase();
    let status = false;

    info.clientes.dados.forEach((clientes) => {
        if (nomeLocal == clientes.nome.toLowerCase()) {
            jsonCliente.nome = clientes.nome;
            jsonCliente.email = clientes.email;
            jsonCliente.telefone = clientes.telefone;
            jsonCliente.endereco = clientes.endereco;
            jsonCliente.cidade = clientes.cidade;
            jsonCliente.img = clientes.img;
            status = true;
        }
    });

    if (status == true) {
        return jsonCliente;
    } else {
        return false;
    }
};

const getComentarios = function () {
    const jsonComentarios = {};
    const arrayComentarios = [];
    let status = false;

    info.comentarios.dados.forEach((comentarios) => {
        arrayComentarios.push(comentarios);
        status = true;
    });
    jsonComentarios.dados = arrayComentarios;

    if (status == true) {
        console.log(jsonComentarios);
        return jsonComentarios;
    } else {
        return false;
    }
};

console.log(getCliente());

module.exports = {
    getCategorias,
    getCliente,
    getProdutos,
    getComentarios,
};
