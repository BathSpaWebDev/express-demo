const express = require('express');
const app = express();
const port = 4444;
const cors = require('cors');
app.use(express.json());
// Add headers before the routes are defined

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    
    console.log(`this is a post endpoint. This is the key: ${req.body.mykey}`);
    res.json({
        myresult: 'Hello world'
    });
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})