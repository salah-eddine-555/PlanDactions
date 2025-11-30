import { GetData } from "./GetData.js";
import { AfficherTaches } from "./AfficherTaches.js";


export function supprimerTache(idbtn){
        const listestasks = GetData();
        let index = listestasks.findIndex(e => e.id == idbtn)

        if(index !== -1){
            listestasks.pop(index);
            localStorage.setItem("tasks", JSON.stringify(listestasks))
            AfficherTaches()
        }

}