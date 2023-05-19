// Etapa 1 do Desafio
class Product {
    constructor(name, description, price) {
        this.name = name; // Atributo para armazenar o name do produto
        this.description = description; // Atributo para armazenar a descrição do produto
        this.price = price; // Atributo para armazenar o preço do produto
    }

    getName() {
        return this.name; // Retorna o name do produto
    }

    setName(name) {
        this.name = name; // Define o name do produto
    }

    getDescription() {
        return this.description; // Retorna a descrição do produto
    }

    setDescription(description) {
        this.description = description; // Define a descrição do produto
    }

    getPrice() {
        return this.price; // Retorna o preço do produto
    }

    setPrice(price) {
        this.price = price; // Define o preço do produto
    }
}

const caramel = new Product('Caramel', 'Espresso, caramelo, leite e granulé (chocolate branco) (420 ml)', 15.5); // Cria uma instância da classe Produto com valores iniciais

console.log('Nome:', caramel.getName()); // Exibe o name do Produto
console.log('Descrição:', caramel.getDescription()); // Exibe a descrição do Produto
console.log('Preço:', caramel.getPrice()); // Exibe o preço do Produto

// Atualizando o preço do café
caramel.setPrice(15.9); // Define um novo preço para o produto
console.log('Novo preço: R$', caramel.getPrice()); // Exibe o novo preço do produto

// Etapa 2 do Desafio

class Order {
    constructor() {
        this.selectedProducts = []; //Lista de produtos selecionados
        this.totalValue = 0; // Valor total do pedido
        this.orderDateTime = ''; // Data/Hora do pedido
    }

    addProduct(product) {
        this.selectedProducts.push(product); // Adiciona um produto à lista
    }

    calculateTotalValue() {
        this.totalValue = 0; // Zera o valor total para recalcular

        for (const product of this.selectedProducts) {
            this.totalValue += product.getPrice(); // Soma o preço de cada produto ao valor total
        }
    }

    registerDateTime() {
        const currentDateTime = new Date();
        this.orderDateTime = currentDateTime.toISOString(); /// Armazena a data/hora atual do pedido como uma string
    }
}

const order = new Order();

const sensation = new Product('Sensação', 'Espresso, purê de morango, chocolate e leite (420 ml)', 15.9);
const cookie = new Product('Cookie', 'Cookie de chocolate com gotas de chocolate(1un)', 6.1);

order.addProduct(sensation);
order.addProduct(cookie);

order.calculateTotalValue();
order.registerDateTime();

console.log('Produtos selecionados:', order.selectedProducts);
console.log('Valor total do pedido: R$', order.totalValue);
console.log('Data/hora do pedido:', order.orderDateTime);
