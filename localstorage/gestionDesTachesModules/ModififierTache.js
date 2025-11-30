import { GetData } from "./GetData.js";
import { AfficherTaches } from "./AfficherTaches.js";


export function ModififierTache(id, content){
    const listestasks = GetData();
     document.getElementById("taskinput").value = content;
     const form = document.getElementById("formtask");
 
   
     form.addEventListener('submit', (e)=> {
        e.preventDefault();
        
        let newContent = form.task.value;
        console.log('the new content', newContent);
        
        
        let index = listestasks.findIndex(t => t.id == id)
        console.log(44);
        
    
        
     
        listestasks[index].name = newContent;
        
        localStorage.setItem("tasks", JSON.stringify(listestasks));
        AfficherTaches()
        

        form.reset()
      
     })

         

}