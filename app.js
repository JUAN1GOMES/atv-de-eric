const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/bd');
const methodOverride = require('method-override');
const { Jogo } = require('./models/Jogo.model');
const { desenvolvedoras } = require('./models/desenvolvedoras.model');
const { genero } = require('./models/genero.model')

const app = express();

app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs.engine({defaultLayout: false}));

app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

  res.render('home', {
    titulo: 'Página Inicial'
  });

});


app.get('/Jogo', async (req, res) => {
  const jogo = await Jogo.findAll({raw: true});
  res.render('ListarJogo', { jogo });
});

app.get('/Devs', async (req, res) => {
  const Devs = await devs.findAll({raw: true});
  res.render('ListarDevs', { Devs });
});

app.get(
  '/Jogo/cadastrar', 
  (req, res) => res.render('cadastrarJogos')
);

app.get(
  '/Devs/cadastrar', 
  (req, res) => res.render('cadastrarDevs')
);


app.post('/Jogo', async (req, res) => {

  const nome = req.body.nome;
  const anoDelancamento = req.body.anoDelancamento;
  const genero = req.body.genero;
  const avaliacao = req.body.avaliacao;

  await Jogo.create({
    nome: nome, 
    anoDelancamento: anoDelancamento,
    genero: genero,
    avaliacao: avaliacao
  });

  res.redirect('/filmes');
});


app.post('/Desenvolvedoras', async (req, res) => {

  const nome = req.body.nome;
  const capital = req.body.capital;

  await Jogo.create({
    nome: nome, 
    capital: capital
  });

  res.redirect('/ListarDesenvolvedoras');
});


app.put(
  '/genero/:id', 
  async (req, res) => {
    const nome = req.body.nome
    
    const genero = await Genero.findByPk(id);
    genero.nome = nome;                                 
    await Jogo.save();

    res.redirect('/Jogo');
  }
);

app.put(
  '/Jogo/:id', 
  async (req, res) => {
    const id = req.params.id;
    const anoDelancamento = req.body.anoDelancamento;
    const genero = req.body.genero;
    const avaliacao = req.body.avaliacao;
    
    const JOGO = await Jogo.findByPk(id);
    
    JOGO.nome = nome;
    JOGO.anoDelancamento = anoDelancamento;
    JOGO.genero = genero;
    JOGO.avaliacao = avaliacao;
    await Jogo.save();

    res.redirect('/ListarJogos');
  }
);


async function conectarBD() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (erro) {
    console.error('Erro ao conectar:', erro);
  }
}

conectarBD();


app.listen(3000, () => {

  console.log('Servidor executando em http://localhost:3000');

});