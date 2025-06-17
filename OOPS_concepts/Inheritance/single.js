class Shop {
  constructor(brand) {
    this.Shop = brand;
  }

  present() {
    return `Welcome to ${this.Shop} shop`;
  }
}

class Product extends Shop {
  constructor(brand, name, price) {
    super(brand);
    this.name = name;
    this.price = price;
  }

  show() {
    return `Product name is "${this.name}" & price is ₹${this.price}`;
  }
}

const product1 = new Product('Apple', 'iPhone', 10000);

console.log(product1.present());
console.log(product1.show());
