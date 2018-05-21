function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: "https://www.omdbapi.com/?s="+ searchTerm + "&apikey=5fa6d6c6&page=1",
      method: "GET",
      success: function(response) {
        console.log(response);
        var search = response.Search;
        var html = "";
        for(var i=0; i < response.Search.length; i++){
           if (search[i].Poster !== 'N/A') {
               html += "<div class='movie-items' data-id="+search[i].imdbID+">";
                   html +='<img src=' + search[i].Poster + '/>';
               html += "</div>";
           }
        }
        $("#movies").html(html);

      },
    }); 
}

$("#search-btn").click(function(){
    var inputValue = $("input").val();
    callGiphyAPIWithSearchTerm(inputValue);
});

$('#search').on('keydown', function(e) {
    if (e.keyCode === 13) {
        var inputValue = $("input").val();
        callGiphyAPIWithSearchTerm(inputValue);
    }
});

$("#click").click(function(){
    $("#add").append(input);
});

$("body").on("click",  ".movie-items",function(e){
    e.preventDefault();
    var movieId = $(this).data("id");
    console.log(movieId);
    // http://www.omdbapi.com/?i=tt0848228
     $.ajax({
      url: "https://www.omdbapi.com/?i=" + movieId + "&apikey=5fa6d6c6",
      method: "GET",
      success: function(response) {
        console.log(response);
        $("#movieModal").modal({ show: true });
        $(".modal-title").html(response.Title);
        $("#poster").attr("src", response.Poster);
        $("#ratings").html(response.Rated);
        $("genre").html(response.Genre);
        $("#plot").html(response.Plot);
        $("#runtime").html(response.Runtime);
        $("#year").html(response.Year);
      }
    });
});

