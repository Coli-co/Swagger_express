const express = require('express')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerJsDocs = YAML.load('./stock_api.yaml')
const app = express()


app.use(express.json())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDocs))



app.listen(4000, () => console.log('UP & Running'))