import {GetData} from './GetData.js';
import { AfficherTaches } from './AfficherTaches.js';


export async function createTasks(){
    const listTasks = await GetData();

     const form = document.getElementById("formtask");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let task = form.task.value.trim();
        if(task.trim() == ''){
            alert('ajouter le task');
            return;
        }
        let newtask = {
            id: Date.now(),
            name: task
        }
        listTasks.push(newtask);
        localStorage.setItem('tasks', JSON.stringify(listTasks));

        AfficherTaches();
        form.reset(); 
       
    })
}