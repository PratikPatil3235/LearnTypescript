type UserDetail = { id: number; name: string };
type Product = { id: number; price: number };

const raw = { id: 1, name: "Alice", price: 99 };

// const p = raw as Product; 


const product = raw as unknown as Product;

console.log(product.id);