

export function GetData(){
   
    try{
        const listTasks = localStorage.getItem('tasks');
        if (!listTasks) return [];

        return JSON.parse(listTasks);
    } catch(error){
        console.log('erreur lorsque le chargement du data puis localstorage', error);
        return [];
    }

};