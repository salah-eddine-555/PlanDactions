

// localStorage.setItem("name", "salah");
// localStorage.setItem("age", "22");
// localStorage.setItem("lastName", "zemrani");

// localStorage.removeItem("age");

// // pour recupere lister des cles dans localstorage est stoker dans un tableaux en js est le afficiher 

// let cles = []

// for(let i = 0; i < localStorage.length; i++){
//     cles.push(localStorage.key(i))
// }

// console.log(cles);

//=======================Partie 3 JSON ================

// let joeurs = [
//     {
//         name: "salah",
//         age: 22
//     },
//     {
//         name: "mohamed",
//         age: 30
//     },
//     {
//         name: "amine",
//         age: 50
//     }
// ]

// localStorage.setItem("joeurs", JSON.stringify(joeurs));

//////////Mini Projet /////////////////
// let joeurs = [
//     {
//         id: 1,
//         name: "salah",
//         age: 22
//     },
//     {
//         id: 2,
//         name: "mohamed",
//         age: 30
//     },
//     {
//         id: 3,
//         name: "amine",
//         age: 50
//     }
// ]

// localStorage.setItem('joeurs', JSON.stringify(joeurs));

// function supprimerJoeurID(id){
//     const idNum = Number(id);

//     let joeurs = JSON.parse(localStorage.getItem("joeurs"));

//     const misjoeurs = joeurs.filter((e) => e.id !== idNum);
//     console.log("the joeur is : ", misjoeurs);


//     localStorage.setItem("joeurs", JSON.stringify(misjoeurs));
//     console.log("Joueur supprimé avec succès.");

// }





// // let newName;
// // let newage;

// // function ModifierJoeur(id, newName, newage){
// //     let joeurs = JSON.parse(localStorage.getItem("joeurs"));

// //     let joeur = joeurs.find(e => e.id == id)

// //     if(!joeur){console.log("le joeur n'est pas existe dans localstorage")}

// //     joeur.name = newName
// //     joeur.age = newage

// //     console.log("le joeur est modifier ?");

// //     localStorage.setItem("joeurs", JSON.stringify(joeurs))

// // }

// // newName = 'omar';
// // newage = 34;

// // ModifierJoeur(2, newName, newage);

// ////////////////////DOM AVEC LOCALSTORAGE //////////////



// function ListerJoeurs(){
//     const ul = document.createElement('ul');

//     ul.innerHTML = '';
//     const joeurs = JSON.parse(localStorage.getItem("joeurs"));


//     joeurs.forEach(joeur => {
//         const li = document.createElement('li');
//         const btn =  document.createElement('button');
//         btn.textContent = 'supprimer';

//         btn.setAttribute('class', 'mybtn');

//         li.textContent += joeur.name + ' ' + joeur.age 
//         btn.setAttribute('id', joeur.id);
//         li.appendChild(btn);

//         ul.appendChild(li)
//     })


//     document.body.appendChild(ul);

// }
// ListerJoeurs()

// document.querySelectorAll('.mybtn').forEach(btn => {
//     btn.addEventListener('click', () => {
//         let id = btn.id 
//         console.log(id)
//         supprimerJoeurID(id)  
//         ListerJoeurs() 
//     })
// })


//////////   Mini projet pour la gestion des taches //////////////////////////////////////

