/*
get_URL_param( parameter_name, [url] )
This function gets the value for the specified parameter name in the specified
URL or the current URL string if no URL is provided. This allows JavaScript to
pull values from the a URL like:
http://pacioos.org/voyager/index.html?bounds=18.0310,-162.1637,23.0191,-152.7979&overlays=weath:1,benthicHabitatsBio:1+5+13
Author: http://www.netlobo.com/url_query_string_javascript.html
*/

function get_URL_param ( param, url ) {

  param = param.replace( /[\[]/, "\\\[" ).replace( /[\]]/, "\\\]" );

  var regexS  = '[\\?&]' + param + '=([^&#]*)';
  var regex   = new RegExp( regexS );

  var results;

  if ( url ) {
    results = regex.exec( url );
  }
  else {
    results = regex.exec( window.location.href );
  }

  if( results == null ) {
    return "";
  }
  else {
    return results[ 1 ];
  }

} // get_URL_param
