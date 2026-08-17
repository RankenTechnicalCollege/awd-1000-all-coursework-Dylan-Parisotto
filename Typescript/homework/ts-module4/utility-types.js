"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preview = {
    id: 1,
    name: "Laptop"
};
console.log(preview);
function applyUpdate(product, update) {
    return { ...product, ...update };
}
const product = {
    id: 1,
    name: "Laptop",
    price: 1000,
    description: "A laptop computer"
};
const update = {
    price: 900
};
console.log(applyUpdate(product, update));
const catalog = {
    "1": {
        id: 1,
        name: "Laptop",
        price: 1000,
        description: "A laptop computer"
    },
    "2": {
        id: 2,
        name: "Mouse",
        price: 25,
        description: "A wireless mouse"
    }
};
console.log(catalog["1"].name);
