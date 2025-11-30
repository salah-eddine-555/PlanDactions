import { GetData } from "./GetData.js";

export function AfficherTaches(){
    const listestasks = GetData();
     const tasks = document.getElementById('taches');
 

     let content = '';

     listestasks.forEach(task => {
        content += `
         <div class='d-flex flex-raw gap-5 mt-2'>
            <p class=" col-6 bg-info zonetask" data-id=${task.id}>${task.name}</p>
             <button class="col-2 btn btn-danger supprimer" data-id=${task.id}>supprimer</button>
         </div>
           
        `
     })
     tasks.innerHTML = content
}