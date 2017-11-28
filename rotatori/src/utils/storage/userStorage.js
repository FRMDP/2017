const def = [
    {id: 1, name: 'admin', email:'admin', pass:'admin'}
]
export default {
    saveUser(user){
        const allUser = this.getAllUsers();
        let exist = false; //asumo no esta
        if(allUser.length != 0){
            allUser.forEach(u => {
                if(u.email == user.email)
                    exist = true; //lo encontre
            });
        }
        if(!exist){ //es falso
            user.id = allUser[allUser.length -1].id + 1 || 1;
            allUser.push(user);
            localStorage.setItem('users', JSON.stringify(allUser));
        }
        return !exist; //return lo contario a lo que tiene original para tomar que verdadero es que lo guardo y falso que no
    },
    getAllUsers(){
        if(localStorage.getItem('users') != null)
            return JSON.parse(localStorage.getItem('users'));
        else
            return [];
    },
    logUser(user){
        const allUser = this.getAllUsers();
        return allUser.find(u => (u.email == user.email && u.pass == user.pass)) || {};
    },
    putFirstUser(){
        if(localStorage.getItem('users') == null){
            localStorage.setItem('users', JSON.stringify(def));
        }
    },
    getUserById(userId){
        const allUser = this.getAllUsers();
        return allUser.find(u => u.id == userId) || {};
    },
    changeInfo(user){
        const allUser = this.getAllUsers();
        allUser.forEach(u => {
            if(u.id == user.id){
                u = user;
            }
        });
        localStorage.setItem('users', JSON.stringify(allUser));
    }
}