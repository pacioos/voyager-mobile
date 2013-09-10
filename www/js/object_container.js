/*
oc()
This function takes a list of strings and returns an object container ('oc').
This allows us to test whether a string is "in" this object rather than
doing a long series of || tests.
i.e.
  if ( name in oc( [ 'string1', 'string2', 'string3' ] ) )
instead of:
  if ( name == 'string1' || name == 'string2' || name=='string3' )
Also, each object item is set to its index number in the array for easy
retrieval.
i.e.
my_index = oc( [ 'string2' ] ) // my_index set to 1 in this example
*/

function oc ( a ) {

  var o = {};

  for( var i = 0; i < a.length; i++ ) {
    o[ a[ i ] ] = i;
  }

  return o;

} // oc()
