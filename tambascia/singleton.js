//Creamos una clase persona por ejemplo..
const ClassPersona = (() => {

    function ClassP() {
        var name;

        this.getName = function () {
            console.log(name);
            return name;
        };

        this.setName = function (n) {
            name = n;
        };
    }

    var instance;

    return {
        getInstance: () => {
            if (!instance) {
                // si no esta definida la variable le damos el valor que nos devuelve ClassP
                instance = new ClassP();
            }
            return instance;
        }

    }

})();

const consumidor1 = ClassPersona.getInstance();
const consumidor2 = ClassPersona.getInstance();