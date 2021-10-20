const express = require('express');

const PORT = process.env.PORT || 3001;
const app  = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    });
});

app.use((req, res) => {
    res.status(404).end();
});