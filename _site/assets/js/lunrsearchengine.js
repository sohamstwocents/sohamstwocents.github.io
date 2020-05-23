
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Who is Soham?",
    "body": "  An engineer trying to put his experiences, thoughts, and a handful of emotions into words. Currently Soham is a computer science masters student at University of Southern California in Los Angeles. If you wish to stay updated, subscript to the newsletter. Here is a collection of some of his favourite clicks. . .                                                                                "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Listen. . .                                                  1 2 3 4 5                                              :               After a couple of years of contemplating, this is the first time I have actually tried to pen down my thoughts. Because what else would. . . :                                                                                                                                                                       Soham                                23 May 2020                                                                                                                      All Stories:                                                                                                     Listen. . .                          1 2 3 4 5                      :       After a couple of years of contemplating, this is the first time I have actually tried to pen down my thoughts. Because what else would you do with all those. . . :                                                                               Soham                23 May 2020                                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/listen/",
    "title": "Listen...",
    "body": "2020/05/23 - After a couple of years of contemplating, this is the first time I have actually tried to pen down my thoughts. Because what else would you do with all those thoughts in your head during this quarantine? For someone to whom writing doesn’t come naturally (you’ll see as you read along), writing this post with close to 500 words has been a monstrous task. The main reason for choosing this topic for the first post is that it is something I am able to relate to very deeply. So deeply that I have got it tattooed on my forearm. So here we go… In a world where everyone is busy pushing their opinions forward, we have left our ability to listen far, far behind. We do hear, we hear the words falling on our eardrums while we are busy coming up with more words to put forth our point of view. As an introvert, (that’s what I like to call myself, though some of my friends may not agree with it entirely) I have never been particularly comfortable in social situations. While it’s difficult for me to greet people with a ‘Hi’ or ‘Hello’, small talk is totally off the table. When it comes to being in large groups, I often try to be the silent spectator who isn’t noticed that often so that I don’t have to speak much or answer questions. But, these social gatherings have always given me a chance to observe and listen to people. Closely listening to someone stating their beliefs and observing them react to normal situations provides a lot of insight into their way of thinking. Being a good-ish listener often helps me escape awkward social situations. I have realised that asking the right questions, coming up with timely acknowledgements and showing a slight bit of interest in what someone else is speaking works wonders for me. It makes people think I’m really interested in what they are saying. Though I have faked having an interest at times (when someone goes on boasting about their achievements), on most occasions I did get to know a lot about a person. Patiently watching them talk about their passion, experiences, likes, and dislikes with that sparkle in their eye reveals a lot about their nature and personality. It made me apprehend the fact that there is so much each of us has to share and all we are looking for is someone who would just listen to us with interest and without any judgement. After using this listening skill as an escape all this while, I have understood how important and underrated it is. As I continue to observe and listen to find more content for future posts, I hope this one doesn’t end up being the first and last one I write. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});