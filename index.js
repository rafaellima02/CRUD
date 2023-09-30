const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const path = require('path');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// Configuração do mecanismo de visualização handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

// Rota para renderizar o arquivo home.handlebars
app.get('/', (req, res) => {
  conn.query("SELECT * FROM registro", function (err, result, fields) {
    if (err) throw err;
    res.render('layouts/home', { registros: result });
  });
});

app.post('/teste/insertregistro', (req, res) => {
  const clube = req.body.clube
  const regiao =req.body.regiao
  const datafundacao =req.body.datafundacao
  const estadio = req.body.estadio
  

  const sql = ` INSERT INTO registro (clube, regiao, datafundacao, estadio ) VALUES  ('${clube}','${regiao}','${datafundacao}' ,'${estadio}') `
  conn.query(sql, function(err){
      if (err) {
          console.log(err);
        }
        res.redirect('/')
        
  })
})

app.post('/teste/excluir/:id', (req, res) =>{
  const id= req.params.id;

  const sql="DELETE FROM registro WHERE id=?";
  conn.query(sql,id, function(err){
    if (err) {
      console.log(err);
      return;
    }
    console.log("excluio com sucesso");
    res.redirect("/")
  })
});

app.get('/login', (req, res) => {
  res.render('layouts/login');
});

app.get('/cadastro', (req, res) => {
  res.render('layouts/cadastro');
});

app.post('/teste/insertteste', (req, res) => {
    const nome = req.body.username
    const email =req.body.email
    const senha =req.body.password
    

    const sql = ` INSERT INTO users (nome, email, senha) VALUES  ('${nome}','${email}','${senha}') `
    conn.query(sql, function(err){
        if (err) {
            console.log(err);
          }
          res.redirect('/')
    })
})
//selecionar os arquivos
app.get('/teste', (req, res)=> {
  const sql= "SELECT * FROM teste"

  conn.query(sql, function  (err, data){
    if (err) {
      console.log(err);
     return
    }
    const teste =data;
    console.log(teste);

    res.render('layouts/teste', {teste} );
  });
});
//selecionar a partir de Id especifico
app.get('/teste/:id', (req, res)=>{

  const id = req.params.id
  
  const sql = `SELECT * FROM teste WHERE id =${id} `

  conn.query(sql, function(err, data){
    if (err) {
      console.log(err);
     return
    }

    const teste = data[0]

    res.render('layouts/teste', {teste})

  })
})

//Editar os arquivos a partir de um ID 
app.get('/testes/editar/:id', (req, res)=>{
  const id = req.params.id
  
  const sql = `SELECT * FROM teste WHERE id = ${id}`
  
  conn.query(sql, function(err, data){
    if (err) {
      console.log(err);
     return
    }

    const teste = data[0]

    res.render('layouts/editar', {teste})

  })
})
//Atualizar a partir de um ID
app.post('/testes/editar/:id', (req, res) => {
  const id = req.params.id;
  const nome = req.body.nome;

  const sql = `UPDATE teste SET nome = '${nome}' WHERE id = ${id}`;

  conn.query(sql, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect('/teste');
  });
});



  
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'teste34',
});

conn.connect(function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Conectado ao MySQL');
  app.listen(3000);
});
