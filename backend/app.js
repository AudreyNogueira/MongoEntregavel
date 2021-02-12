const app = require('./src/config/server')
const connection = require('./src/config/connection')
const Produtos = require('./src/models/Produtos')
const Contato = require('./src/models/Contato')

app.get("/", async (req, res) => {
    const resultado = await Produtos.find()

    res.json(resultado)
})

// INSERT
app.post("/", async (req, res) => {
    const { nome, preco } = req.body

    let resultado = await Produtos.create({ nome, preco })

    res.json(resultado)
})

// UPDATE
app.put("/:id", async (req, res) => {
    const { id } = req.params
    const { nome, preco } = req.body

    // 1 - condição
    let resultado = await Produtos.updateOne({ _id: id }, {
        nome, preco
    })

    res.json(resultado)
})

// DELETE
app.delete("/", async (req, res) => {
    const { id } = req.body

    let resultado = await Produtos.deleteOne({ _id: id })

    res.json(
        resultado
    )
})


// 
app.get("/Contato", async (req, res) => {
    const resultado = await Contato.find()

    res.json(resultado)
})

// INSERT
app.post("/Contato", async (req, res) => {
    const { nome, msg } = req.body

    let resultado = await Contato.create({ nome, msg })

    res.json(resultado)
})

// UPDATE
app.put("/:id", async (req, res) => {
    const { id } = req.params
    const { nome, msg } = req.body

    // 1 - condição
    let resultado = await Contato.updateOne({ _id: id }, {
        nome, msg
    })

    res.json(resultado)
})

// DELETE
app.delete("/", async (req, res) => {
    const { id } = req.body

    let resultado = await Contato.deleteOne({ _id: id })

    res.json(
        resultado
    )
})