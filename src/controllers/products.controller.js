const {
    products,
    characteristics,
    reviews,
    categories,
    specialParams,
    rawData
} = require('../data/dataLoader');

const { calculateAverageRating } = require('../utils/raiting');

exports.getAllProducts = (req, res) => {
    res.json(products);
};

exports.getProductById = (req, res) => {
    const productId = Number(req.params.id);
    const product = products.find(p => p.id === productId);
    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    const details = characteristics.find(d => d.id_product === productId);
    const reviewData = reviews.find(r => r.id_product === productId);

    const mergedProduct = {
        ...product,
        desc: details?.desc || '',
        characteristics: details?.characteristics || [],
        reviews: reviewData?.reviews_product || [],
        average_raiting: calculateAverageRating(productId, reviews)
    };

    res.json(mergedProduct);
};

exports.getCategories = (req, res) => {
    res.json(categories);
};

exports.getAllData = (req, res) => {
    res.json(rawData);
};