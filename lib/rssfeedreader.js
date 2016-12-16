var feed = require("feed-read");

feed("https://news.google.com/?output=rss", function(err, articles) {
  if (err) throw err;
  for (var i = 0; i < articles.length; i++) {
      console.log(articles[i].title); 
  }  
});