var Hexagrams = require('./controllers/hexCtrl');

module.exports = (app) => {
  app.get('/', (req, res)=>{
    console.log('sending index down to client');
    res.sendFile('index.html', {root: './public/html'});
  });

  app.get('/api/hexagrams', Hexagrams.get); // return all hexagrams
  app.get('/api/hexagrams/:id', Hexagrams.get); // return one hexagram
}
