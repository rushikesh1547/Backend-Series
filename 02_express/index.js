import express from 'express'

const app = express()

const port = 3000

// app.get('/' , (req,res) => {
//     res.send("Hello from Rishi!")
// });

// app.get('/ice-tea' , (req,res) => {
//     res.send("What kind of Ice - Tea would you prefer?")
// })

// app.get('/twitter' , (req,res) => {
//     res.send("rishidotcom")
// })

app.use(express.json())

let teaData = []
let nextId = 1
//add a new tea
app.post('/teas', (req,res) => {
    
    const {name,price}= req.body
    const newTea = {id: nextId++, name, price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})
app.get('/teas', (req,res) => {
    res.status(200).send(teaData)
})

app.get('/teas/:id', (req,res) => {
   const tea =  teaData.find(t => t.id === parseInt(req.params.id))

   if(!tea) {
    return res.status(400).send('Tea not found')
   }
   res.status(200).send(tea)
})

app.listen(port, () => {
    console.log(`Server is listening at port ${port}...`);
    
})