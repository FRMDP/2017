// The Observer
function Observer(name) {
    this.name = name;
    this.update = function (context) {
        console.log(this.name, context);
    };
}

exports.Observer = Observer;
