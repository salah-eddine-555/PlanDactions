
let listesjoeurs = [];
let count = 0;

window.addEventListener('load', () => {
    listesjoeurs = JSON.parse(localStorage.getItem('joeurs')) || [];
    AfficherListeJoeurs();

    count = listesjoeurs.length;
})




function AjouterJoeur() {
    const form = document.getElementById("formmulaire");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(22)

        let newjoeur = {};

        let nameJoeur = form.joeur.value;
        let postJoeur = form.post.value;
        console.log(nameJoeur);
        console.log(postJoeur);

        if (nameJoeur == '' || postJoeur == '') return;

        newjoeur = {
            id: ++count,
            name: nameJoeur,
            post: postJoeur
        }

        listesjoeurs.push(newjoeur);
        console.log(listesjoeurs);
        localStorage.setItem("joeurs", JSON.stringify(listesjoeurs));
        AfficherListeJoeurs();

        form.reset();
      
    })
}

AjouterJoeur();
  



function AfficherListeJoeurs(){
    console.log('function afficher')
    let content = '';  

    for(joeur of listesjoeurs){
         if(!joeur) return;
        content += `
                 <div class='col-3 border bg-info mt-4 card'>
                     <h5 class="card-title">${joeur.name}</h5>
                     <p class="card-body">${joeur.post}</p>
                    <button class="btn btn-danger btn-sm supprimer" data-id=${joeur.id}>supprimer</button>
                    <button class="btn btn-success btn-sm modifier" data-id=${joeur.id}>modifier</button>
                </div>
                <div class='col-1'></div>
        `
    
    }
    document.getElementById('contentjoeurs').innerHTML = content;

}
// pour la suppression
document.getElementById('contentjoeurs').addEventListener('click', (e)=> {
    if(e.target.classList.contains('supprimer')){
        let idsupression = e.target.dataset.id
        console.log(idsupression);
        SupprimerJoeur(idsupression);
    }
})

function SupprimerJoeur(idsupression){
    console.log('function supprimer ', idsupression);

    idsupression = Number(idsupression);

    let newList = listesjoeurs.filter(e => e.id !== idsupression);
    listesjoeurs  = newList;

    localStorage.setItem('joeurs', JSON.stringify(listesjoeurs));
    AfficherListeJoeurs();
}



// // pour la modification 
document.getElementById("contentjoeurs").addEventListener('click', (e) => {
    if(e.target.classList.contains('modifier')){
        let idModification = e.target.dataset.id
        let parent = e.target.closest('.card');

        let contentModifier = parent.querySelector('.card-title').textContent;
        let contentPost = parent.querySelector('.card-body').textContent;
            
        ModifierJoeur(idModification, contentModifier, contentPost)
    }
})

function ModifierJoeur(idModification, contentModifier, contentPost){
    
    

    idModification = Number(idModification);

    document.getElementById("joeurs").value = contentModifier;
    document.getElementById('post').value =  contentPost;

    listesjoeurs = listesjoeurs.filter(j => j.id !== idModification);
    localStorage.setItem("joeurs", JSON.stringify(listesjoeurs));

    AfficherListeJoeurs()
    console.log("Modififcation de : ", idModification, contentModifier);
  
 };

 document.getElementById('filtre').addEventListener("click", () => {
   
    let filtrepost = document.getElementById("recherche").value;
    console.log(filtrepost);

    Filtrepost(filtrepost);
 })

 function Filtrepost(filtrepost){
     document.getElementById('contentjoeurs').innerHTML  = '';

    if(!listesjoeurs.find(e => e.post == filtrepost)){
        alert("ce post n'existe pas dans la liste");
        return;
    }
    let card = '';
    const joeursParPost = listesjoeurs.filter(e => e.post == filtrepost)

    joeursParPost.forEach(J => {
        card += `
          <div class='col-3 border bg-info mt-4 card'>
                     <h5 class="card-title">${J.name}</h5>
                     <p class="card-body">${J.post}</p>
                    <button class="btn btn-danger btn-sm supprimer" data-id=${J.id}>supprimer</button>
                    <button class="btn btn-success btn-sm modifier" data-id=${J.id}>modifier</button>
                </div>
                <div class='col-1'></div>
        `
    })
    document.getElementById('contentjoeurs').innerHTML += card;
  
 }


