const express = require("express");

const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

const fs = require('fs');
const path = require('path');

const rawData = fs.readFileSync(path.join(__dirname, './data/data.json'), 'utf8');
const rawUsers = fs.readFileSync(path.join(__dirname, './data/user.json'), 'utf8');
const data = JSON.parse(rawData);
const data_categories = JSON.parse(rawData).categories;
const data_products = JSON.parse(rawData).products;
const users = JSON.parse(rawUsers).users;

app.get("/hello", (req, res) => {
    res.send("Hello World!");
});

app.get("/all", (req, res) => {
    res.json(data);
});

app.get("/categories", (req, res) => {
    res.json(data_categories);
});

app.get("/products", (req, res) => {
    res.json(data_products);
});

app.get("/login", (req, res) => {
    res.send('хз кто ты');
});

app.get("/register", (req, res) => {
    res.send('хз кто ты');
});

app.get("/product/:id", (req, res) => {
    const productId = Number(req.params.id);
    const foundProduct = data_products.filter(product => product.id === productId);

    if (foundProduct.length === 0) {
        return res.status(404).json({ error: "Product not found" });
    }

    res.json(foundProduct[0]);
});

app.get("/profile/:id", (req, res) => {
    const userId = Number(req.params.id);
    const foundUsers = users.filter(user => user.id === userId);

    if (foundUsers.length === 0) {
        return res.status(404).json({ error: "User not found" });
    }

    res.json(foundUsers[0]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});