
var api = Initialize({
  app: 'sacredstarfamily',
  callbackURL: 'https://sacredstarfamily.com',
    accessToken: 'access_token',
    scope: ['vote', 'comment']
});
var link = api.getLoginURL(state);
console.log(link);
function vlink(){
  document.getElementById('viewlink').innerHTML(link)
};
