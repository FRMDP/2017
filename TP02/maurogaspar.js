
const objetoapi = {
  "resources": {
    "core": {
      "limit": 60,
      "remaining": 59,
      "reset": 1504380983
    },
    "search": {
      "limit": 30,
      "remaining": 18,
      "reset": 1504380983
    }
  },
  "rate": {
    "limit": 60,
    "remaining": 59,
    "reset": 1504380983
  }
  };

  function calculaIntervalo(objetoapi) {
  	const ahora = new Date();
    const reset = new Date(objetoapi.resources.core.reset * 1000);
    const lapso = (reset.getTime() - ahora.getTime())/1000;
    const intervalo =  lapso / objetoapi.resources.core.remaining ;
    return intervalo;
  }
