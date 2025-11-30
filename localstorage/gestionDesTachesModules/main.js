import { GetData } from "./GetData.js";
import { createTasks } from "./createTasks.js";
import { AfficherTaches } from "./AfficherTaches.js";
import { supprimerTache } from "./supprimerTache.js";
import { ModififierTache } from "./ModififierTache.js";

GetData();
AfficherTaches();
createTasks();


document.querySelectorAll(".supprimer").forEach(btn => {
    btn.addEventListener("click", ()=> {
        let idbtn = btn.dataset.id

        console.log(idbtn);
        supprimerTache(idbtn)
    })
})


document.querySelectorAll('.zonetask').forEach(zone => {
    zone.addEventListener('click', () => {
        console.log('event');
        let id = zone.dataset.id;
        let content = zone.textContent
        
       
        ModififierTache(id, content);
    })
})