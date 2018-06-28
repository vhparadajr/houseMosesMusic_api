const http = require('http');
const fs = require('fs')
const url = require('url');
var querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  var params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('artist' in params){
      if(params['artist']== 'rihanna'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Rihanna",
          song: "Needed Me",
          lyric: "Didn't they tell you that I was a savage? Fuck ya white horse and ya carriage, Bet you never could imagine, Never told you you could have it?"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['artist'] == 'ziggymarley'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Ziggy Marley",
          song: "Love Is My Religon",
          lyric: "So don't let nobody stop us, Free spirits have to soar, With you, I share the gift, The gift that we now know"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['artist'] == 'smokepurpp'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Smokepurpp",
          song: "Audi",
          lyric: "I don't want friends, I want audi's"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['artist'] == 'nickiminaj'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var objToJson = {
          name: "Nicki Minaj & Playboi Carti",
          song: "Poke it out",
          lyric: "All of my buddies on ten , all of my moneys in Yen, All of my work is sellin', Thank you, and please come again - Poke it out"
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
