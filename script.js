$(document).ready(function() {
  // Get news articles from News API
  var apiKey = "Yb0ac5fcb02fb45f4aa92ccba7946bb5b";
  var apiUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b0ac5fcb02fb45f4aa92ccba7946bb5b";

  $.get(apiUrl, function(data) {
    var articles = data.articles;

    // Display articles in the newsContainer
    var newsContainer = $("#newsContainer");

    for (var i = 0; i < articles.length; i++) {
      var article = articles[i];
      var articleElement = $("<div>").addClass("article");
      var imageElement = $("<img>").attr("src", article.urlToImage).appendTo(articleElement);
      var headingElement = $("<h3>").text(article.title).appendTo(articleElement);
      var paragraphElement = $("<p>").text(article.description).appendTo(articleElement);

      articleElement.appendTo(newsContainer);
    }
  });
});
