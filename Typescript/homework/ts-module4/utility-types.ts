interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}


// Task 1 - Pick
type ProductPreview = Pick<Product, "id" | "name">;

const preview: ProductPreview = {
    id: 1,
    name: "Laptop"
};

console.log(preview);


// Task 2 - Partial
type ProductUpdate = Partial<Product>;

function applyUpdate(product: Product, update: ProductUpdate): Product {
    return { ...product, ...update };
}

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 1000,
    description: "A laptop computer"
};

const update: ProductUpdate = {
    price: 900
};

console.log(applyUpdate(product, update));


// Task 3 - Record
type ProductCatalog = Record<string, Product>;

const catalog: ProductCatalog = {
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