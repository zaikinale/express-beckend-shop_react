// src/utils/rating.js
function calculateAverageRating(productId, reviewsData) {
    const reviewEntry = reviewsData.find(entry => entry.id_product === productId);
    const reviews = reviewEntry?.reviews_product || [];

    if (reviews.length === 0) return 0;

    const validRatings = reviews
        .map(r => r.raiting)
        .filter(r => typeof r === 'number' && !isNaN(r));

    if (validRatings.length === 0) return 0;

    const sum = validRatings.reduce((a, b) => a + b, 0);
    return Number((sum / validRatings.length).toFixed(1));
}

module.exports = { calculateAverageRating };