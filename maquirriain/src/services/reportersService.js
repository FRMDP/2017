export default{
  allReporters(){
    const reporters = localStorage.getItem('reporters') || '[]';
    return JSON.parse(reporters);
  }

}
