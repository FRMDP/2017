

const Duck= function(settings){
    this.name=settings.name;
}
 
const birdBehaviors = function () {};
 
birdBehaviors.prototype = {
 
    whistle: function () {
        console.log( "pioo pioo" );
    },
 
    swim: function () {
        console.log( "I'm swimming" );
    },

    fly:function(){
        console.log("FLYING");
    },

    quack:function(){
        console.log("QUACK QUACK");
    },

    noSwim:function(){
        console.log("I can't swim :(");
    },

    noFly:function(){
        console.log("I can't fly :(");
    }
 
};
 
 
// Extiendo los metodos de un objeto, agregando los metodos de otro.
function augment( receivingClass, givingClass ) {
 
    // Agrega solo los metodos que se pasan por parametro
    if ( arguments[2] ) {
        for ( let i = 2, len = arguments.length; i < len; i++ ) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // Si no encuentra, agrega todos los existentes a la clase que recibe
    else {
        for ( let methodName in givingClass.prototype ) {
            if ( !Object.hasOwnProperty.call(receivingClass.prototype, methodName) ) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}

//Llamamos a la funcion para que agregue los comportamientos que le pasamos por parametro. 
augment( Duck, birdBehaviors , "quack", "swim" ,"noFly");

//Creamos un nuevo pato
const lakeDuck = new Duck({
    name: "Lake duck"
});

//Llamada a los metodos 
lakeDuck.quack();
lakeDuck.swim();
lakeDuck.noFly();
