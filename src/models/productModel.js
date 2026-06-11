const db = require("../config/db");

class product {
  constructor({ buyerName, buyerEmail, productName, price, description }) {
    this.buyerName = buyerName;
    this.buyerEmail = buyerEmail;
    this.productName = productName;
    this.price = price;
    this.description = description;
  }

  async save() {
    const [result] = await db.query(
      `INSERT INTO products 
      (buyerName, buyerEmail, productName, price, description) 
      VALUES (?, ?, ?, ?, ?)`,
      [
        this.buyerName,
        this.buyerEmail,
        this.productName,
        this.price,
        this.description,
      ]
    );

    return {
      id: result.insertId,
      buyerName: this.buyerName,
      buyerEmail: this.buyerEmail,
      productName: this.productName,
      price: this.price,
      description: this.description,
    };
  }

  // Static method to retrieve all products
  static async find() {
  const [rows] = await db.query("SELECT * FROM products");
  return rows;
}

  static async findById(id) {
    const [rows] = await db.query(
      "SELECT * FROM products WHERE id = ?",
      [id]
    );

    return rows[0];
  }
}

module.exports = product;