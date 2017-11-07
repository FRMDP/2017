const apiKey = 'apikey=23859bca7afed7ac1b4ed666434bb118';
const url = 'http://api.musixmatch.com/ws/1.1/';
const boton = document.getElementById('btnBuscar');
const combo = document.getElementById("combobox");
const label = document.getElementById("lab");
const radio1 = document.getElementById("rb1");
const radio2 = document.getElementById("rb2");
const radio3 = document.getElementById("rb3");
const text = document.getElementById("busqueda");

let valor;

//Command Patern
const rutas = {
    getCanciones(dato){
        return url + 'track.search?' + apiKey + '&' + valor + '=' + dato 
    },
    getArtistas(dato){
        return url + 'artist.search?' + apiKey + '&' + valor + '=' + dato
    },
    getPorPais(dato){
        return url + 'chart.tracks.get?' + apiKey + '&' + valor + '=' + dato
    }
};
//asigancion de la funcion execute
rutas.execute = function(name){
    return rutas[name] && rutas[name].apply(rutas, [].slice.call(arguments,1));
}

function seleccionado(node) { 
    if(node.checked){
        valor = node.value;
        if(node.value == 'country'){
            text.disabled = true;
            combo.disabled = false;
        }else{
            text.disabled = false;
            combo.disabled = true;
        }
    }
};      

function busqueda(){
    if(radio1.checked){
        if(text.value!=""){
            console.log(rutas.execute('getCanciones',text.value));
            label.innerHTML = rutas.execute('getCanciones',text.value)
        }else{
            label.innerHTML = 'Debe ingresar algo para buscar'
        }
    }
    if(radio2.checked){
        if(text.value!=""){
            console.log(rutas.execute('getArtistas', text.value));
            label.innerHTML = rutas.execute('getArtistas',text.value)
        }else{
            label.innerHTML = 'Debe ingresar algo para buscar'
        }
    }
    if(radio3.checked){
        if(combo.value !=""){
            console.log(rutas.execute('getPorPais', text.value));
            label.innerHTML = rutas.execute('getPorPais',combo.value)
        }else{
            label.innerHTML = 'Debe seleccionar un pais'
        }
    }
    text.value = "";
};

boton.addEventListener('click', busqueda);