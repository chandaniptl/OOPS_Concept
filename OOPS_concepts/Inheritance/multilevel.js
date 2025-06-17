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
        return `Product: ${this.name} - Price: $${this.price} - Brand: ${this.present()}`;
    }
}

class Order extends Product {
    constructor(brand, name, price, quantity) {
        super(brand, name, price);
        this.quantity = quantity;
    }

    summary() {
        return `Order of ${this.quantity} x ${this.name} from brand ${this.present()} - Total: $${this.price * this.quantity}`;
    }
}

let product = new Product('Nike', 'Shoes', 100);
let order = new Order('Nike', 'Shoes', 100, 3);

console.log(product.show());
console.log(order.summary());
