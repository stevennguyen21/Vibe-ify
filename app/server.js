const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('/node_modules'));


app.post('/api/playlist', (req, res) => {
    const auth = 'Bearer ' + req.body.access;
    console.log(auth);
    const details = "{\"name\":\"test\",\"public\":false}"
    axios.post('https://api.spotify.com/v1/users/steveenwin/playlists', {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: auth,
            data: details
        }
    })
    .then(() => {res.sendStatus(200)})
    .catch(() => {res.sendStatus(401)})
})

app.listen(port, () => console.log(`listening on port ${port}`));