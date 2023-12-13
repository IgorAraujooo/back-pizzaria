var clientes = {
    dados: [
        {
            id: '1',
            nome: 'Carlos',
            email: 'carlos@gmail.com',
            senha: 'carlos123',
            telefone: '8512345678',
            endereco: 'Rua XYZ, Bairro A, São Paulo',
            cidade: 'São Paulo-SP',
            img: './img/carlos.png'
        },
        {
            id: '2',
            nome: 'Julia Paiva',
            email: 'juliapaiva@gmail.com',
            senha: 'julia456',
            telefone: '1898765432',
            endereco: 'Rua ABC, Bairro B, Osasco',
            cidade: 'Osasco-SP',
            img: './img/julia.png'
        },
        {
            id: '3',
            nome: 'Igor Araujo',
            email: 'igoaraujo5154@gmail.com',
            senha: 'igor1504',
            telefone: '2197778888',
            endereco: 'Rua UVW, Bairro C, Cotia',
            cidade: 'Cotia-SP',
            img: './img/igor.png'
        },
        {
            id: '4',
            nome: 'Luan Oliveira',
            email: 'luandso@gmail.com',
            senha: 'dso456',
            telefone: '112226666',
            endereco: 'Rua LMN, Bairro D, Barueri',
            cidade: 'Barueri-SP',
            img: './img/luan.png'
        },
        {
            id: '5',
            nome: 'Giovana Viera',
            email: 'givdc@gmail.com',
            senha: 'vdc007',
            telefone: '8290001111',
            endereco: 'Rua XYZ, Bairro E, São Roque',
            cidade: 'São Roque-SP',
            img: './img/giovana.png'
        }
    ]
}

var categorias = [
    { id: '1', nome_categoria: 'Pizzas', img_categoria: './img/icone-pizzas' },
    { id: '2', nome_categoria: 'Bebida', img_categoria: './img/icone-bebidas' },
    { id: '3', nome_categoria: 'Frutas', img_categoria: './img/icone-frutas' },
    { id: '4', nome_categoria: 'Sorvetes', img_categoria: './img/icone-sorvetes' }
]

var comentarios = {
    dados: [
        {
            id: '1',
            img_cliente: './img/julia-paiva.png',
            nome_cliente: 'Julia Paiva',
            data_comentario: '15/03/2022',
            titulo_comentario: 'Uma das melhores pizzas!',
            conteudo_comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            numero_estrelas: 4
        },
        {
            id: '2',
            img_cliente: './img/igor-araujo.png',
            nome_cliente: 'Igor Araujo',
            data_comentario: '21/05/2022',
            titulo_comentario: 'Recomendo a todos!',
            conteudo_comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
            numero_estrelas: 5
        }
    ]
}

var produtos = {
    dados: [
        {
            id: '1',
            titulo: 'Hambúrguer Deluxe',
            descricao: 'Delicioso hambúrguer com ingredientes premium.',
            preco: 'R$ 20,00',
            imagem: './img/hamburguer-deluxe.svg',
            categoria: categorias[0],
            qtd_estrela: 5
        },
        {
            id: '2',
            titulo: 'Coca-Cola 500ml',
            descricao: 'Refrigerante em garrafa de 500ml.',
            preco: 'R$ 5,00',
            imagem: './img/coca-cola-500ml.svg',
            categoria: categorias[1],
            qtd_estrela: 4
        },
        {
            id: '3',
            titulo: 'Maçã',
            descricao: 'Fruta fresca e suculenta.',
            preco: 'R$ 3,00',
            imagem: './img/maca.svg',
            categoria: categorias[2],
            qtd_estrela: 5
        },
        {
            id: '4',
            titulo: 'Sundae de Morango',
            descricao: 'Sorvete delicioso com calda de morango.',
            preco: 'R$ 12,00',
            imagem: './img/sundae-morango.svg',
            categoria: categorias[3],
            qtd_estrela: 5
        },
        {
            id: '5',
            titulo: 'Pizza Vegetariana',
            descricao: 'Pizza com uma variedade de vegetais frescos.',
            preco: 'R$ 25,00',
            imagem: './img/pizza-vegetariana.svg',
            categoria: categorias[0],
            qtd_estrela: 4
        },
        {
            id: '6',
            titulo: 'Água Mineral 1L',
            descricao: 'Garrafa de água mineral pura.',
            preco: 'R$ 2,00',
            imagem: './img/agua-mineral-1l.svg',
            categoria: categorias[1],
            qtd_estrela: 5
        }
    ]
}

module.exports = {
    clientes,
    categorias,
    comentarios,
    produtos
}
