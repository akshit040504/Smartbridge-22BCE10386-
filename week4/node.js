const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];
let idCounter = 1;

// GET /users - Retrieve all users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST /users - Add a new user
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    const newUser = { id: idCounter++, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT /users/:id - Update user by ID
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    users[userIndex] = { ...users[userIndex], name, email };
    res.json(users[userIndex]);
});

// DELETE /users/:id - Delete user by ID
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== parseInt(id));
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
