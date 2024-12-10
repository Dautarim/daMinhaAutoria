


import express from 'express'; 
const app = express()
app.use(express.json())
const produt = [
                    {
                        num: 12239,
                        nome: "Gril Ameria",
                        preço: 96.30,
                        ingrediente: [
                            "Frango grelhado",
                            "salada",
                        ],
                        acompanhamento: [
                            "arroz",
                            "baião"
                        ]
                    },
                        {
                            "num": 12240,
                            "nome": "Picanha na Chapa",
                            "preço": 129.90,
                            "ingrediente": [
                                "Picanha",
                                "Alho",
                                "Cebola"
                            ],
                            "acompanhamento": [
                                "Farofa",
                                "Vinagrete"
                            ]
                        },
                        {
                            "num": 12241,
                            "nome": "Feijoada Completa",
                            "preço": 84.50,
                            "ingrediente": [
                                "Feijão preto",
                                "Carne seca",
                                "Linguíça"
                            ],
                            "acompanhamento": [
                                "Arroz branco",
                                "Couve refogada"
                            ]
                        },
                        {
                            "num": 12242,
                            "nome": "Lasanha à Bolonhesa",
                            "preço": 72.00,
                            "ingrediente": [
                                "Massa fresca",
                                "Molho bolonhesa",
                                "Queijo mussarela"
                            ],
                            "acompanhamento": [
                                "Pão de alho",
                                "Salada Caesar"
                            ]
                        },
                        {
                            "num": 12243,
                            "nome": "Sushi Combinado",
                            "preço": 98.00,
                            "ingrediente": [
                                "Arroz japonês",
                                "Peixe cru",
                                "Nori"
                            ],
                            "acompanhamento": [
                                "Molho shoyu",
                                "Gengibre"
                            ]
                        },
                        {
                            "num": 12244,
                            "nome": "Hambúrguer Artesanal",
                            "preço": 56.90,
                            "ingrediente": [
                                "Pão brioche",
                                "Carne bovina",
                                "Queijo cheddar"
                            ],
                            "acompanhamento": [
                                "Batata frita",
                                "Maionese de alho"
                            ]
                        },
                        {
                            "num": 12245,
                            "nome": "Pizza Margherita",
                            "preço": 69.90,
                            "ingrediente": [
                                "Massa de pizza",
                                "Molho de tomate",
                                "Manjericão fresco"
                            ],
                            "acompanhamento": [
                                "Azeite de oliva",
                                "Refrigerante"
                            ]
                        },
                        {
                            "num": 12246,
                            "nome": "Frango Xadrez",
                            "preço": 64.50,
                            "ingrediente": [
                                "Frango em cubos",
                                "Molho shoyu",
                                "Pimentão"
                            ],
                            "acompanhamento": [
                                "Arroz branco",
                                "Rolinho primavera"
                            ]
                        },
                        {
                            "num": 12247,
                            "nome": "Tacos Mexicanos",
                            "preço": 58.00,
                            "ingrediente": [
                                "Tortilla de milho",
                                "Carne moída",
                                "Guacamole"
                            ],
                            "acompanhamento": [
                                "Pico de gallo",
                                "Chips de nachos"
                            ]
                        },
                        {
                            "num": 12248,
                            "nome": "Risoto de Camarão",
                            "preço": 88.00,
                            "ingrediente": [
                                "Arroz arbóreo",
                                "Camarão",
                                "Parmesão"
                            ],
                            "acompanhamento": [
                                "Salada verde",
                                "Vinho branco"
                            ]
                        },
                        {
                            "num": 12249,
                            "nome": "Churrasco Gaúcho",
                            "preço": 139.90,
                            "ingrediente": [
                                "Picanha",
                                "Costela bovina",
                                "Linguiça"
                            ],
                            "acompanhamento": [
                                "Vinagrete",
                                "Farofa"
                            ]
                        },
                        {
                            "num": 12250,
                            "nome": "Strogonoff de Carne",
                            "preço": 62.00,
                            "ingrediente": [
                                "Carne bovina",
                                "Creme de leite",
                                "Champignon"
                            ],
                            "acompanhamento": [
                                "Arroz branco",
                                "Batata palha"
                            ]
                        },
                        {
                            "num": 12251,
                            "nome": "Ceviche Peruano",
                            "preço": 74.50,
                            "ingrediente": [
                                "Peixe branco",
                                "Limão",
                                "Cebola roxa"
                            ],
                            "acompanhamento": [
                                "Batata doce",
                                "Milho"
                            ]
                        }
                    
                    
 
] 
function filterID(id){ return produt.filter(e =>{ return e.num == id })}

app.get("/",(req, res)=>{ res.status(200).json(produt) })
app.get("/:id",(req, res)=>{ res.status(200).json(filterID(req.params.id))})

app.post("/",(req, res)=>{
    produt.push(req.body)
    res.status(201).json(produt) })

app.delete("/:id", (req, res )=>{
    const id = req.params.id
    const index = produt.findIndex(produt => id == produt.num) 
    const eliminado = produt[index] // console.log(index)
    if(index != -1){ 
        produt.splice(index,1) 
        res.status(200).json(eliminado)}
    else { res.status(404).json({message: "NÃO ENTCONTRADO"})} })

app.put("/id",(req, res)=>{
    const id = req.params.id
    produt[id].num = req.body.num
    produt[id].nome = req.body.nome
    produt[id].preço = req.body.preço
    produt[id].ingrediente = req.body.ingrediente
    produt[id].acompanhamento = req.body.acompanhamento
    res.status(200).produt[id] })

export default app