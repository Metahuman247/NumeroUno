function giphyURLWithSearchTerm(searchTerm) {
}

function appendImageToBody(srcURL) {
    $('#movies').html('<img src=' + srcURL + '/>');
    
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: "https://www.omdbapi.com/?s="+ searchTerm + "&apikey=5fa6d6c6&page=1",
      method: "GET",
      success: function(response) {
        console.log(response);
    for(var i=0; i< 10; i++) {
        var url = response.Poster;
           $('#movies').html('<img src=' + url + '/>');
        }
      },
    }); 
    
    // $.ajax({
      //url: "http://www.omdbapi.com/?t="+ searchTermTwo + "&apikey=5fa6d6c6",
     // method: "GET",
     // success: function(response) {
        // Log the whole response to the console
       // console.log(response);
        
        //var urltwo = response.data[0].images.original.url;
      //  $('#combine').html('<img src=' + urltwo + '/>');
     // },
    //}); 
}

$("#search").click(function(){
    var inputValue = $("input").val();
    callGiphyAPIWithSearchTerm(inputValue);
});