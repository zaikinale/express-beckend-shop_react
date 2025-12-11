const { users } = require('../data/dataLoader');

exports.getUserById = (req, res) => {
    const userId = Number(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
};