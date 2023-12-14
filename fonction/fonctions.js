// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1(){
    console.log(17);
}
// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 18.
function f2(){
    return 18;
}
// Utiliser la fonction f2 pour afficher 18 dans la console.
console.log(f2());

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
//On peut enregistrer la valeur dans une variable. Ou l'utiliser dans autre chose.

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n){
    console.log(2*n);
}
// Utiliser la fonction f3 pour écrire dans la console le double de 97.
f3(97);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(n){
    return 2*n;
}
// Utiliser la fonction f4 pour écrire dans la console le double de 98.
console.log(f4(98));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a = f4(99);

// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(n1,n2){
    console.log(n1+n2);
}
// Utiliser la fonction f5 pour écrire dans la console la somme de 40 et 75.
f5(40,75);

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(n1,n2){
    return n1+n2;
}
// Utiliser la fonction f6 pour écrire dans la console la somme de 41 et 76.
console.log(f6(41,76));

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a = f6(a , f6(42,77));

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(n1,n2){
    if(n1>=n2){
        return n1;
    }else {
        return n2;
    }

}
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8(n1,n2,n3){
    if(n1>n2){
        if(n1>n3){
            return n1;
        }else{
            return n3;
        }

    }else if(n2>n3){
        return n2;

    }else{
        return n3
    }
}

function f8bis(n1,n2,n3){
    return f7(f7(n1,n2),n3);
}

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(n,mot){
    if(n>0){
        console.log(mot);
        f9(n-1, mot);
    }
}


/*===
Écrire une fonction récursive "allWords" qui prend en entrée un nombre n et retourne un tableau de toutes les chaînes de caractères de taille n composées uniquement de A ou B.
Exemple :
`allWords(3)` retourne `["AAA","AAB","ABA","ABB","BAA","BAB","BBA","BBB"]` (pas forcément dans cet ordre).

===*/
function allWords(n){
    if(n==1){
        return ['A','B','C'];
    }else {
        let res = [];
        for(let i = 0; i<allWords(n-1).length; i++){
            res.push(allWords(n-1)[i] + 'A');
            res.push(allWords(n-1)[i] + 'B');
            res.push(allWords(n-1)[i] + 'C');
        }
        return res; 
    }
}

console.log(allWords(4));

function areEqual(a,b){
    if(a.length == b.length){
        if(a.length == 0){
            return true;
        }
        if(a[a.length-1] == b[b.length-1]){
            a.pop();
            b.pop();
            console.log(a,b);
            return areEqual(a,b);
        }else{
            return false;
        }
    }else{
        return false;
    }
}

function areEqual2(a,b){
    if(a.length == b.length){

        for(let i=0; i<a.length;i++){
            if(Array.isArray(a[i]) && Array.isArray(b[i])){
                let ok = areEqual2(a[i],b[i]);
                if(!ok){
                    return false;
                }
            }
            else if(a[i]!=b[i]){
                return false;
            }
        }
        return true;
    }else{
        return false;
    }
}

console.log("Place a la récursivité");
console.log(areEqual([0,0,2,3],[1,2,3,4]));
console.log([1,[2,0],3,4].length)
console.log(areEqual2([1,[2,4],5],[1,[2,3],5]));
console.log("Place aux arbres");


function hauteur(arbre){
    if(arbre.length == 0){
        return -1;
    }else{
        return 1 + f7( hauteur(arbre[0]),  hauteur(arbre[2]));
    }
}

console.log(hauteur([[[[],4,[]],2,[[[],7,[]],5,[[],8,[]]]],1,[[],3,[[[],9,[]],6,[]]]]));
