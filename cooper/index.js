//creo un objeto, le asigno propiedades
let band = {};
band["name"] = "Deranged";
band.description = "death metal band from the 90's";

console.log(band.name + " is a " + band["description"]);


//constructor
function Car(marca_modelo, anio, kms){
  this.marca_modelo = marca;
  this.anio = anio;
  this.kms = kms;
 
  this.mostrar_kms = function () {
    return this.marca_modelo + " ha recorrido " + this.kms + " kilometros";
  };
}
 
var falcon = new Car("Ford Falcon", 1980, 450000);
var duna = new Car("Fiat Duna", 1992, 50000);
 
console.log(falcon.mostrar_kms());
console.log(duna.mostrar_kms());


//constructor con prototipo
function PC(ram, cpu, hdd) {
  this.ram = ram;
  this.cpu = cpu;
  this.hdd = hdd;
}

PC.prototype.toString = function () {
  return "PC specs - RAM: " + this.ram + ", CPU: " + this.cpu + ", hard drive: " + this.hdd;
};
 
var pc1 = new PC("64mb", "800 MHz Athlon", "25gb");
var pc2 = new PC("32mb", "Celeron 533 MHz", "22gb");
 
console.log(pc1.toString());
console.log(pc2.toString());