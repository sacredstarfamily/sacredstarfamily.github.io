function submitComment(){
  var commentTitle = title=document.getElementById("title").value;
  commentTitle = "re "+commentTitle;
  var commentContent = document.getElementById("commentContent").value;
  var parentPermlink= document.getElementById("retrievedTitle").innerHTML;
  parentPermlink = parentPermlink.replace(/ /g, "-");
  parentPermlink = parentPermlink.toLowerCase();
  var author=document.getElementById("username").innerHTML;
  var permLink = "re-"+parentPermlink;

  api.comment(author, parentPermlink, author, permLink, "", commentContent, "", function (err, res) {


  steem.api.getDiscussionsByAuthorBeforeDate(author, permLink, '2019-05-01T00:00:00', 1, function(err, result) {
  console.log("printing comment JSON");
  console.log(err, result);

  document.getElementById("commentContentShow").innerHTML = result["0"].body;

  });


});
};