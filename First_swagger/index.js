const express = require('express')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerJsDocs = YAML.load('./api.yaml')
const fileUpload = require('express-fileupload')

const app = express()
app.use(express.json())
app.use(fileUpload())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))

let users = [
  {id: 1, name: 'Tom Cruise'},
  {id: 2, name: 'Timothy'}, 
  {id: 3, name: 'Brad Pitt'}
]

app.get('/string', (req, res) => {
  res.status(400).send('This is a String')
})

app.get('/user', (req, res) => {
  const obj = {id: 1, name: 'Tom Cruise'}
  res.status(200).send(obj)
})

app.get('/users', (req, res) => {
  res.status(200).send(users)
})

app.get('/users/:id', (req, res) => {
  const obj = users.find((x) => x.id === parseInt(req.params.id))
  res.status(200).send(obj)
})

app.post('/create', (req, res) => {
 users = [req.body, ...users];
 res.send(users)
})


app.get('/usersQuery', (req, res) => {
  const obj = users.find((x) => x.id === parseInt(req.query.id))
  res.status(200).send(obj)
})


app.post("/upload", (req, res) => {
  const file = req.files.file;
  let uploadPath = __dirname + "/upload/" + "file" + Date.now() + ".jpg";
  file.mv(uploadPath, (err) => {
    if (err) {
      return res.send(Err);
    }
  });
  res.send(200);
});


app.listen(4000, () => console.log('UP & Running'))