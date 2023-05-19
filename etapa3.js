class Product {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
    }
}

class Stock {
    constructor() {
      this.products = {}; // Dicionário de produtos em estoque, onde a chave é o nome do produto e o valor é a quantidade disponível (inicialmente vazio)
    }
  
    // Adiciona um produto ao estoque com a quantidade especificada
    addProduct(product, quantity) {
      if (this.products[product.name]) {
        this.products[product.name] += quantity; // Adiciona a quantidade ao estoque existente
      } else {
        this.products[product.name] = quantity; // Adiciona um novo produto ao estoque
      }
    }
  
    // Remove a quantidade especificada do estoque do produto
    removeProduct(product, quantity) {
      if (this.products[product.name]) {
        if (this.products[product.name] >= quantity) {
          this.products[product.name] -= quantity; // Remove a quantidade do estoque
        } else {
          console.log('Quantidade insuficiente em estoque.');
        }
      } else {
        console.log('Produto não encontrado em estoque.');
      }
    }
  
    // Verifica se a quantidade desejada está disponível no estoque para o produto
    checkAvailability(product, quantity) {
      if (this.products[product.name]) {
        return this.products[product.name] >= quantity;
      }
      return false;
    }
  
    // Exibe a lista de produtos em estoque com suas quantidades disponíveis
    updateStock() {
      console.log('Estoque:');
      for (const product in this.products) {
        console.log(`${product}: ${this.products[product]}`);
      }
    }
  }
  
  // Exemplo de uso da classe Estoque:
  
  const stock = new Stock();
  
  const product1 = new Product('Café', 'Café torrado e moído', 10);
  const product2 = new Product('Chá', 'Chá de ervas naturais', 5);
  
  stock.addProduct(product1, 20);
  stock.addProduct(product2, 15);
  
  stock.updateStock();
  
  stock.removeProduct(product1, 8);
  stock.removeProduct(product2, 10);
  
  console.log('Disponibilidade de Café:', stock.checkAvailability(product1, 5));
  console.log('Disponibilidade de Chá:', stock.checkAvailability(product2, 10));
  
  stock.updateStock();