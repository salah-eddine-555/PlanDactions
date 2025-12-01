
// console.log("je suis salah");

// let tables = ["ahmed", "salah", "aymane"];

// tables.shift();
// console.log(tables);

// tables.unshift("Omar");
// console.log(tables);

// // ==================> Partie 3 : Parcours des tableaux
// const listApprenantes = ['salah', 'ahmed', 'aymane', 'omar', 'yassire'];

// // for(let i = 0; i < listApprenantes.length; i++){
// //     console.log(listApprenantes[i]);
// // }

// // let i = 0;
// // while(i < listApprenantes.length){
// //     console.log(listApprenantes[i]);
// //     i++
// // }

// // listApprenantes.forEach(apprenante => {
// //     console.log(apprenante);
// // })

// // for(apprenante of listApprenantes){
// //     console.log(apprenante);
// // }

// // const numbers = [12, 3, 4, 5, 6];

// // const somme = numbers.reduce((acc, next) => {
// //     return acc + next;
// // });
// // console.log(somme);

// // //Affichage des nom plus de 5 lettre 
// // listApprenantes.forEach(apprenate => {
// //     if(apprenate.length <= 5){
// //         console.log(apprenate);
// //         return;
// //     }
// // })


// // ====================================> Partie 4 : Rechercher dans un tableau

// // console.log(listApprenantes.includes('Ali')); 

// const numbers = [1, 4, 5, 6, 8, 10, 12, 30, 3, 100];

// let premierPaireNombre = numbers.find(number =>  number % 2 === 0)
// console.log(premierPaireNombre);

// const listJoeurs = [
//     {id: 1 ,name:  "ali", post : 'GB'},
//     {id: 2 ,name:  "omar", POST: 'DC'},
//     {id: 3 ,name:  "salah", post: 'AC'},
//     {id: 3 ,name:  "ahmed", post: 'AC'}
// ]

// let joeur = listJoeurs.find(joeur => joeur.id == 1);
// console.log(joeur);

// //===================================> Partie 5 : Filtrer un tableau
// // filtrage des nombre superieur a 10 

// let numberSupereiur10 = numbers.filter(number => number > 10);
// console.log(numberSupereiur10);

// // filtrage par post pour le tableaus des objets

// let postAc = listJoeurs.filter(joeur => joeur.post == 'AC');
// console.log(postAc);


// //==================================> Partie 6 : Transformer un tableau

// const  listEtudiantes = [
//     {id: 1, name: 'salah'},
//     {id: 2, name: 'omar'},
//     {id: 3, name: 'ahmed'},
//     {id: 4, name: 'aymane'},
// ]

// let numberCarre = numbers.map(number => number * number);
// console.log(numberCarre);

// // retour just les name d'apres un tableaux des objets des etudiantes
// for(etu of listEtudiantes){
//     console.log(etu.name)
// }

// listEtudiantes.forEach(etu => {
//     etu.isActive = true
// })
     
// console.log(listEtudiantes);

// // ================================> Partie 7 : Trier et ordonner un tableau
// const listPersonnes = [{name: 'ahmed', age: 20}, {name: 'salah', age: 21}, {name: 'Omar', age: 35}]
// const  names  = ['salah','ahemd', 'amine', 'mohamed', 'omar']
// let numerbTriCroissante = numbers.sort((a, b) => a - b);
// console.log(numerbTriCroissante);

// console.log(names.sort());

// // trie par age 
// const personnesTrie = listPersonnes.sort((a, b) => a.age - b.age);
// console.log(personnesTrie);


// // ====================================> Partie 8 : Mise à jour et suppression dans un tableau d’objets

//  function ModifierEtudiante(id, newName, IsActuve){

//     let indexEtu = listEtudiantes.findIndex(etu => etu.id == id);
//     if(indexEtu == -1)  return;

//     listEtudiantes[indexEtu].name = newName
//     listEtudiantes[indexEtu].isActive = IsActuve

//  }

// ModifierEtudiante(1, 'yassir', false);
// console.log('tablaux apres la modificaiton : ', listEtudiantes);

// // suppression par la fonction filtre .
// function SuppresionParFiltre(id){
//     return listEtudiantes.filter(etu => etu.id !== id);
    
// }

// console.log(SuppresionParFiltre(1));

// // incrementation de chaqu'un par 5ans age 

// listPersonnes.map(per => per.age += 5);
// console.log("les des personnes apres l'incrementation: ", listPersonnes);




