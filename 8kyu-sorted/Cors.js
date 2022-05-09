const url = 'https://api.pokemontcg.io/v2/cards/';
let h = new Headers();
h.append('Accept', 'application/json');

let req = new Request(url, {
    method: 'GET',
    headers: h,
    mode: 'cors'
});


/*Cross origin resource sharing (CORS) is a policy for determining weather or 
not you are allowed to get a resource back from one domain if you are on a diff.
 domain.

 CORS failures result in errors but for security reasons, specifics about the error 
 are not available to JavaScript. All the code knows is that an error occurred. The
  only way to determine what specifically went wrong is to look at the browser's 
  console for details.

 https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
 Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows
  a server to indicate any origins (domain, scheme, or port) other than its own from
   which a browser should permit loading resources. CORS also relies on a mechanism 
   by which browsers make a "preflight" request to the server hosting the 
   cross-origin resource, in order to check that the server will permit the actual
    request. In that preflight, the browser sends headers that indicate the HTTP 
    method and headers that will be used in the actual request.

short great video to explain cors
    //https://www.youtube.com/watch?v=YJ7ZgGnhN5k
*/





