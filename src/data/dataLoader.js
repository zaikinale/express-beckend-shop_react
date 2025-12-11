// src/data/dataLoader.js
const fs = require('fs');
const path = require('path');

const loadJSON = (filename) => {
    try {
        const fullPath = path.join(__dirname, '../../data', filename);
        const raw = fs.readFileSync(fullPath, 'utf8');
        return JSON.parse(raw);
    } catch (err) {
        console.warn(`⚠️ Не удалось загрузить ${filename}: ${err.message}`);
        return null;
    }
};

// Загружаем основной data.json
const mainData = loadJSON('data.json') || {};
const characteristics = loadJSON('characteristics.json') || { products: [] };
const reviews = loadJSON('reviews.json') || { reviews: [] };
const users = loadJSON('user.json') || { users: [] };

module.exports = {
    products: mainData.products || [],
    categories: mainData.categories || [],
    specialParams: mainData.special_project_parameters_json || {},
    rawData: mainData,

    characteristics: characteristics.products || [],
    reviews: reviews.reviews || [],
    users: users.users || []
};