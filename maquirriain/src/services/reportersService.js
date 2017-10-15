const reporters = [
  {id: 1, name: "John Doe"},
  {id: 2, name: "Jane Doe"},
  {id: 3, name: "Chuck Norris"},
  {id: 4, name: "Barack Obama"}
]

export default{

  allReporters(){
    let auxReporters = [];
    const reporters = localStorage.getItem('reporters') || '[]';
    auxReporters = JSON.parse(reporters);

    return this.checkIfExistReporters(auxReporters);

  },

  checkIfExistReporters(auxReporters){
    if(!auxReporters.length){
      this.createReporters();
      return this.allReporters();
    }
    return auxReporters;
  },
  createReporters(){
    localStorage.setItem('reporters', JSON.stringify(reporters));
  }

}
