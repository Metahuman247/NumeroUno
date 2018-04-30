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
        var url = response.Poster;
           $("#movies").html('<img src=' + url + '/>');
           for(i=0; i < response.Search.length; i++){
               console.log(response);
               var search = response.Search;
               $("#movies").append('<img src=' + search[i].Poster + '/>');
           }
        // for loop that goes through response.Search
        // inside the loop you want to grab response.Search[index].Poster as url
        // $("#movies").html('<img src=' + url + '/>');

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

$("#click").click(function(){
    $("#add").append(input);
});
