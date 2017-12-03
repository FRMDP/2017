let personPrototype = {
 
  init: ( personName ) => {this.name = personName},

  getName: () => console.log( "The name of this person is " + this.name)
};
 
 
function person( name ) {
 
  function P() {};
  P.prototype = personPrototype;
 
  let p = new P();
 
  p.init( name );
  return p;
 
}
 
let someOne = person( "Daniel Schaerer" );
someOne.getName();