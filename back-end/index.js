const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())
var bodyParser = require('body-parser')
app.use(bodyParser.json())


const ItemSchema = new mongoose.Schema({
    title: String,
    desc: String,
    img: String,
    likeCount: Number
});

const ItemModel = mongoose.model('Blog', ItemSchema);


app.get('/items', async (req, res) => {
    try {
        const items = await ItemModel.find()
        res.send(items)
    }
    catch {
        res.send("cannot get all")
    }
})

app.get('/items/:id', async (req, res) => {
    try {
        const { id } = req.params
        const item = await ItemModel.findById(id)
        res.send(item)
    }
    catch {
        res.send("cannot find by id")
    }
})

app.delete('/items/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deitem = await ItemModel.findByIdAndDelete(id)
        res.send(deitem)
    }
    catch {
        res.send("cannot del")
    }
})

app.post('/items', async (req, res) => {
    try {
        const payload = new ItemModel(req.body)
        await payload.save()
        res.send(payload)
    }
    catch {
        res.send("cannot post")
    }
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})


mongoose.connect("mongodb+srv://Rena:Rena123@cluster0.zjbqkc0.mongodb.net/").then(res => {
    console.log('Connect to db')
})
