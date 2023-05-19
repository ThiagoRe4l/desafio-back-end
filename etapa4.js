class Discount {
    constructor(tipo, valor) {
        this.type = type; // Tipo de desconto (porcentagem ou valor fixo)
        this.value = value; // Valor do desconto
    }

    calculateDiscount(totalValue) {
        if (this.type === 'porcentagem') {
            const discount = (this.value / 100) * totalValue; //Calcula o valor do desconto em porcentagem
            return discount;
        } else if (this.type === 'valor fixo') {
            return this.value; // Retrona o valor do desconto fixo
        } else {
            return 0; // Retorna 0 caso o tipo de desconto não seja válido
        }
    }
}