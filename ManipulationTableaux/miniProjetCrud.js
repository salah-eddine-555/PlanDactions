let count = 0
const listEtudiantes = [
    {
        id: 1,
        name: 'salah',
        age: 21,
        niveaux : '1er'
    },
     {
        id: 2,
        name: 'ahmed',
        age: 31,
        niveaux : '2eme'
    },
     {
        id: 3,
        name: 'amine',
        age: 25,
        niveaux : '1er'
    },
     {
        id: 4,
        name: 'ali',
        age: 30,
        niveaux : '3eme'
    },
     {
        id: 5,
        name: 'omar',
        age: 27,
        niveaux : '1er'
    },
    
]



function AjouterEtudiante(name, age, niveaux){
    count = listEtudiantes.length;
    let newEtu = {
        id: ++count,
        name: name,
        age, age,
        niveaux: niveaux,
    }
    listEtudiantes.push(newEtu);
}

console.log(listEtudiantes);

AjouterEtudiante('anoure', 44, '2eme');
console.log("list apres l'ajout : ", listEtudiantes);


function ModifierEtu(id, newName, newAge, newNiveaux){

    let index  = listEtudiantes.findIndex(etu => etu.id == id);
    listEtudiantes[index].name = newName;
    listEtudiantes[index].age = newAge;
    listEtudiantes[index].niveaux = newNiveaux;


}

ModifierEtu(1,'elhoussine', 33, '2eme');
console.log('apres la modification ', listEtudiantes)


function SupprimerEtu(id){
    return listEtudiantes.filter(etu => etu.id !== id)
}

console.log('apres la supression ', SupprimerEtu(1));


function FiltrerPar(niveaux){
    const listFiltresNiveaux = listEtudiantes.filter(etu => etu.niveaux == niveaux)
    console.log('la liste des etu filtre par niveaux :', listFiltresNiveaux);
}

FiltrerPar('1er');