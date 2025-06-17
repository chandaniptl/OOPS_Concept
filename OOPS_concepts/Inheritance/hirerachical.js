class Shop {
    constructor(brand) {
        this.Shop = brand;
    }

    present() {
        return this.Shop;
    }
}

class Product extends Shop {
    constructor(brand, name, price) {
        super(brand);
        this.name = name;
        this.price = price;
    }

    show() {
        return `Product: ${this.name} - Price: ₹${this.price} - Brand: ${this.present()}`;
    }
}

class Order extends Shop {
    constructor(brand, name, price, quantity) {
        super(brand);
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

let product = new Product('Nike', 'Shoes', 100);
console.log(product.show()); 