import express from 'express'

const app = express()
const port = 3000



app.set('views', './src/templates')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {
        message: 'Bem vindo ao site que usa o Pug com Express!'
    })
})

app.get('/sobre', (req, res) => res.render('sobre'))
app.get('/contato', (req, res) => res.render('contato'))
//-----------com mongo
 
//Get page posts
app.get('/posts', async (req, res) => {
  const dbConnect = require("./conectdb");
  const Posts = dbConnect.Mongoose.model('posts', dbConnect.PostSchema, 'posts');

  const posts = await Posts.find({}).lean().exec();
  res.render('posts', { posts });
});
//------------mongo end

app.listen(port, () => console.log(`App rodando na porta ${port}...`))

