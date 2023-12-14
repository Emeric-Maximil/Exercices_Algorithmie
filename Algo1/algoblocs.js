//Initialisation globale (initialisation la plus fréquente)
setPos(300, 300);
setLineWidth(5);
left(360);
up();
down();
/*exo A1
-------------------------------------------------------------
// Initialisation (ce qui est déjà fait quand on commence le niveau sur le site)
changeColor(color.red);
faceDown();

// Réalisation 
forward(100);
faceRight();
forward(50);
*/

/*exo A2
------------------------------------------------------------
// Initialisation
changeColor(color.yellow);
faceLeft();

// Réalisation 
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);
*/

/* exo A3
------------------------------------------------------------
// Initialisation
changeColor(color.yellow);
faceLeft();

// Réalisation 
forward(100);
backward(200);
forward(100);
faceUp();
forward(100);
backward(200);
*/

/*exo A4
----------------------------------------------------------
// Initialisation
setPos(200, 550);
changeColor(color.green);
faceRight();

// Réalisation 
forward(200);
arcLeft(100,180);
forward(100);
arcRight(100,180);
forward(200);
*/

/*exo A5
----------------------------------------------------------
// Initialisation
setPos(300, 100);
changeColor(color.fuchsia);
faceRight();

// Réalisation 
arcRight(200,360);
arcRight(100,180);
arcLeft(100,180);
*/

/*exo A6
-------------------------------------------------------------
// Initialisation
setPos(300, 500);
changeColor(color.aqua);
faceUp();

// Réalisation
forward(100);
up();
forward(100);
down();
forward(200);
*/

/*exo A7
-------------------------------------------------------------
// Initialisation
setPos(200, 300);
changeColor(color.green);
faceDown();

// Réalisation
forward(200);
arcLeft(100,180);
forward(100);
up();
forward(100);
down();
forward(200);
arcLeft(100,180);
forward(100);
*/

/*exo A8
-------------------------------------------------------------
// Initialisation
setPos(200, 100);
changeColor(color.fuchsia);
faceUp();

// Réalisation
forward(100);
faceRight();
forward(200);
faceDown();
forward(400);
faceLeft();
forward(100);
up();
forward(100);
faceUp();
forward(100);
down();
forward(100);
*/

/*exo A9
-------------------------------------------------------------
// Initialisation
setPos(100, 500);
changeColor(color.aqua);
faceRight();

// Réalisation
arcLeft(100,180);
arcRight(100,180);
forward(400);
arcRight(100,180);
arcLeft(100,180);
backward(400);*/

/*exo A10
-------------------------------------------------------------
// Initialisation
setPos(200, 400);
changeColor(color.red);
faceRight();

// Réalisation
arcLeft(100,180);
changeColor(color.green);
arcLeft(200,180);
changeColor(color.yellow);
arcLeft(400,180);*/

/*exo A11
-------------------------------------------------------------
// Initialisation
setPos(50, 150);
changeColor(color.aqua);
faceUp();

// Réalisation
//yeux
arcRight(100,180);
faceRight();
up();
forward(100);
faceUp();
down();
arcRight(100,180);

up();
forward(100);
faceLeft();
forward(50);
faceDown();
down();

//bouche
changeColor(color.fuchsia);
arcRight(200,180);
*/

/*exo A12
-------------------------------------------------------------
// Initialisation
setPos(0, 150);
changeColor(color.green);
faceUp();

// Réalisation
//S vert
arcRight(50,180);
forward(100);
arcLeft(50,180);

up();
arcRight(25,180);
down();

//S jaune
changeColor(color.yellow);
arcLeft(50,180);
forward(100);
arcRight(50,180);
*/

/*-------------------------------------------------------------
EXERCICES B
---------------------------------------------------------------
*/
/*exo B1
---------------------------------------------------------------
// Initialisation
setPos(100, 100);
changeColor(color.green);
faceRight();

// Réalisation
for( let i = 0; i < 4 ; i++){
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    } 
*/

/*exo B2
---------------------------------------------------------------
// Initialisation
setPos(10, 300);
changeColor(color.red);
faceUp();

// Réalisation
for(let i=0; i<4; i++){
    faceUp();
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
}*/

/*exo B3
---------------------------------------------------------------
// Initialisation
setPos(200, 200);
changeColor(color.fuchsia);
faceRight();

// Réalisation
for(let i = 0; i<4; i++){
    forward(100);
    right(90);
}*/

/*exo B4
---------------------------------------------------------------
// Initialisation
setPos(400, 200);
changeColor(color.aqua);
faceRight();

// Réalisation
for(let i=0; i<3; i++){
    forward(100);
    left(120);
}
*/

/*exo B5
---------------------------------------------------------------
// Initialisation
setPos(300, 400);
changeColor(color.yellow);
faceUp();

// Réalisation
forward(200);
changeColor(color.red);

for(let i=0; i<3; i++){
    forward(100);
    right(120);
}*/

/*exo B6
---------------------------------------------------------------
// Initialisation
setPos(100, 400);
changeColor(color.red);
faceRight();

// Réalisation
for(let i=0; i<2;i++){
    forward(50);
    faceUp();
    forward(50);
    faceRight();
}
changeColor(color.green);

for(let i=0; i<3;i++){
    faceRight();
    forward(50);
    faceDown();
    forward(50);
}
*/

/*exo B7
---------------------------------------------------------------
// Initialisation
setPos(200, 300);
changeColor(color.yellow);
faceRight();

// Réalisation
for(let i=0; i<4; i++){
    forward(100);
    right(90);
}
for(let i=0; i<3; i++){
    forward(100);
    left(120);
}
*/

/*exo B8
---------------------------------------------------------------
// Initialisation
setPos(200, 200);
changeColor(color.yellow);
faceRight();

// Réalisation
for(let i=0; i<8; i++){
    forward(200);
    right(135);
}
*/

/*exo B9
---------------------------------------------------------------
// Initialisation
setPos(100, 300);
changeColor(color.fuchsia);
faceRight();

// Réalisation
forward(100);
up();
forward(50);
down();
for(let i=0; i<3; i++){
    forward(100);
    right(120);
}*/


/*exo B10
---------------------------------------------------------------
// Initialisation
setPos(10, 300);
changeColor(color.aqua);
faceRight();

// Réalisation
for(let i =0 ; i<8; i++){
    forward(100);
    right(135);
}

up();
forward(200);
changeColor(color.yellow);
down();

for(let i =0 ; i<8; i++){
    forward(200);
    left(135);
}

right(90);
changeColor(color.fuchsia);
up();
forward(100);
down();

for(let i =0 ; i<8; i++){
    forward(100);
    left(135);
}

*//*exo B11
---------------------------------------------------------------
// Initialisation
setPos(200, 300);
changeColor(color.red);
faceRight();

// Réalisation
for(let i=0; i<4; i++){
    forward(100);
    left(90);
    forward(100);
    right(90);
    forward(100)
    right(90);
}

*//*exo B12
---------------------------------------------------------------
// Initialisation
setPos(400, 400);
changeColor(color.fuchsia);
faceRight();

// Réalisation
for(let i=0; i<3;i++){
    right(90);
    forward(100);
}

up();
forward(50);
down();
changeColor(color.green);

for(let i=0; i<3;i++){
    forward(100);
    right(90);
    
}

*//*exo B13
---------------------------------------------------------------
// Initialisation
setPos(200, 200);
changeColor(color.green);
faceRight();

// Réalisation
for(let i=0;i<8;i++){
    forward(100);
    left(135);
    forward(50);
    right(90);
    forward(50);
    right(90);
}
*//*exo B14
---------------------------------------------------------------
// Initialisation
setPos(50, 50);
changeColor(color.yellow);
faceRight();

// Réalisation
for(let i= 0; i<10;i++){
    forward(50);
    right(120);
    forward(100);
    left(120);
    forward(50);
}

*//*exo B15
---------------------------------------------------------------
// Initialisation
setPos(300, 300);
changeColor(color.red);
faceRight();

// Réalisation
for(let i=0; i<4; i++){
    forward(100);
    arcLeft(50,90);
}

*//*exo B16
---------------------------------------------------------------
// Initialisation
setPos(100, 400);
changeColor(color.green);
faceRight();

// Réalisation
arcLeft(200,90);
faceLeft();

for(let i=0;i<4;i++){
    arcLeft(25,90);
    arcRight(25,90);
}
*//*exo B17
---------------------------------------------------------------
// Initialisation
setPos(100, 400);
changeColor(color.aqua);
faceRight();

// Réalisation
for(let i=0; i<8; i++){
    arcLeft(100,180);
    left(120);
}

*//*exo B18
---------------------------------------------------------------
// Initialisation
setPos(100, 400);
changeColor(color.yellow);
faceRight();

// Réalisation
for (let i =0; i<8; i++){
    forward(200);
    left(90);
    forward(50);
    left(45);
}
*//*exo B19
---------------------------------------------------------------
// Initialisation
setPos(300, 500);
changeColor(color.aqua);
faceRight();

// Réalisation
for(let i=0; i<4;i++){
    arcLeft(50,180);
    faceRight();
}
faceUp();
up();
forward(50);
down();
faceLeft();

for(let i=0; i<4;i++){
    arcLeft(50,180);
    faceLeft();
}

*//*exo B20
---------------------------------------------------------------
// Initialisation
setPos(100, 200);
changeColor(color.aqua);
faceDown();

// Réalisation
for(let i=0; i<2; i++){
    forward(100);
    arcLeft(50,90);
}
forward(100);
faceLeft();
forward(200);
faceUp();
for(let i=0; i<2; i++){
    forward(50);
    arcRight(50,90);
    forward(50);
}

up();
forward(25);
faceLeft();
forward(100);
down();

arcLeft(50,360);

*//*exo B21
---------------------------------------------------------------
// Initialisation
setPos(400, 200);
shiftColor(2/3);
faceRight();

// Réalisation
for(let i=0; i<6; i++){
    down();
    forward(100);
    left(120);
    forward(50);
    left(120);
    forward(100);
    right(60);
    forward(50);
    right(120);
    forward(50);
    right(120);

    up();
    
    shiftColor(0.1);
    forward(100);
}

*//*exo B22
---------------------------------------------------------------
// Initialisation
setPos(300, 400);
changeColor(color.yellow);
faceRight();
left(30)

// Réalisation
for(let i=0; i<6; i++){
    forward(100);
    left(60);
}
changeColor(color.red);
right(90);
for(let i=0; i<3; i++){
    forward(100);
    right(120);
}

changeColor(color.green);
left(90);

for(let i=0; i<4;i++){
    forward(100);
    right(90);
}
left(120);
for (let index = 0; index < 4; index++) {
    forward(100);
    left(90);
    
}

*//*exo B23
---------------------------------------------------------------
// Initialisation
setPos(200, 300);
changeColor(color.fuchsia);
faceRight();
left(45)

// Réalisation
for (let index = 0; index < 3; index++) {
    forward(50);
    right(90);
    forward(50);
    left(90);
}

right(135);
forward(50);
right(45);

for (let index = 0; index < 3; index++) {
    forward(50);
    right(90);
    forward(50);
    left(90);    
}
right(135);
forward(50);
*//*exo B24
---------------------------------------------------------------
// Initialisation
setPos(250, 100);
changeColor(color.red);
faceRight();

// Réalisation
for (let i = 0; i < 8; i++) {
    forward(100);
    left(135);
}

forward(50);
changeColor(color.green);

 for (let i = 0; i < 3; i++) {
    right(135);
    forward(100);
    left(135);
    forward(50);
 }

 forward(50);
 right(90);

 for (let i = 0; i < 2; i++) {
    forward(25);
    left(90);
 }

 forward(25);
 right(90);
 forward(50);

 for (let i = 0; i < 3; i++) {
    forward(50);
    left(135);
    forward(100);
    right(135);
    
 }*/


 /*-------------------------------------------------------------
EXERCICES C
---------------------------------------------------------------
*/
/*exo C1
---------------------------------------------------------------
// Initialisation
setPos(10, 250);
changeColor(color.aqua);
faceRight();

// Réalisation
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        forward(100);
        right(120);
    }
    forward(100);
}

*//*exo C2
---------------------------------------------------------------
// Initialisation
setPos(250, 500);
changeColor(color.fuchsia);
faceUp();

// Réalisation
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}

*//*exo C3
---------------------------------------------------------------
// Initialisation
setPos(50, 250);
shiftColor(0.4);
faceRight();

// Réalisation
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 8; j++) {
        forward(100);
        left(135);        
    }
    shiftColor(0.1);
    up();
    forward(200);
    down();
    
}

*//*exo C4
---------------------------------------------------------------
// Initialisation
setPos(50, 250);
changeColor(color.red)
faceRight();

// Réalisation
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        forward(50);
        left(120);
    }
    changeColor(color.yellow);
    for (let j = 0; j < 4; j++) {
        forward(50);
        right(90);
    }

    changeColor(color.red);
    up();
    forward(100);
    down();
    
}

*//*exo C5
---------------------------------------------------------------
// Initialisation
setPos(300, 300);
shiftColor(0.2);
faceRight();

// Réalisation
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) {
        forward(200);
        left(135);
    };
    shiftColor(0.25);
    right(90);
    
}

*//*exo C6
---------------------------------------------------------------
// Initialisation
setPos(300, 300);
changeColor(color.yellow);
faceRight();

// Réalisation
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        forward(100);
        left(120);
    }
    forward(100);
}

*//*exo C7
---------------------------------------------------------------
// Initialisation
setPos(200, 400);
changeColor(color.yellow);
faceRight();

// Réalisation
for (let i = 0; i <8; i++) {
    for (let j = 0; j < 3; j++) {
        forward(50);
        right(120);        
    }
    forward(50);
    left(45);
}

*//*exo C8
---------------------------------------------------------------
// Initialisation
setPos(300, 500);
changeColor(color.green);
faceUp();

// Réalisation
forward(200);
right(45);

for (let i = 0; i < 4; i++) {
    changeColor(color.red);
    for (let j = 0; j <3; j++) {
        forward(100);
        right(120);
        
    }
    changeColor(color.yellow);
    forward(100);
    left(90);
}

*//*exo C9
---------------------------------------------------------------
// Initialisation
setPos(400, 400);
changeColor(color.green);
faceRight();

// Réalisation
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 4; k++) {
            right(90);
            forward(50);
        }
        forward(50);
        right( 120);
    }
    left(120);
    forward(200);
    
}

*//*exo C10
---------------------------------------------------------------
// Initialisation
setPos(300, 50);
changeColor(color.red);
faceDown();

// Réalisation
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
        forward(50);
        for (let k = 0; k < 4; k++) {
            left(90);
            forward(25);
        }
        right(90);
        
    }
    forward(100);
}
*//*exo C11
---------------------------------------------------------------
// Initialisation
setPos(200, 200);
shiftColor(1/2);
faceRight();

// Réalisation
for (let i = 0; i < 6; i++) {
    
for (let j = 0; j < 6; j++) {
    for (let k = 0; k < 4; k++) {
        forward(50);
        left(120);
    }
    right(60);
}
up();
shiftColor(0.1);
forward(100);
right(60);
down()
    
}
*//*exo C12
---------------------------------------------------------------
// Initialisation
setPos(300, 200);
changeColor(color.yellow);
faceRight();

// Réalisation
for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 2; k++) {
        arcLeft(50,90);
        forward(50);
        left(90);
    }
    arcRight(50,45);
}
changeColor(color.blue);
arcRight(50,180);
left(120);
arcLeft(100,300);

 *//*-------------------------------------------------------------
EXERCICES D
---------------------------------------------------------------
*/
/*exo D1
---------------------------------------------------------------
// Initialisation
setPos(200, 100);
changeColor(color.red);
faceRight();

// Réalisation
for (let i = 0; i < 8; i++) {
    forward(100);
    right(45);    
}
*/
/*exo D2
---------------------------------------------------------------
// Initialisation
setPos(100, 300);
changeColor(color.green);
faceRight();

// Réalisation
forward(50);
faceDown();
forward(100);
faceRight();
forward(150);
faceUp();
forward(50);
faceLeft();
forward(100);

*/
/*exo D3
---------------------------------------------------------------
// Initialisation
setPos(200, 200);
changeColor(color.fuchsia);
faceRight();

// Réalisation
forward(100);
right(135);
forward(150);
left(135);
forward(100);

*/
/*exo D4
---------------------------------------------------------------
// Initialisation
setPos(100, 550);
changeColor(color.blue);
faceRight();

// Réalisation
for (let i = 0; i <6; i++) {
    faceUp();
    forward(50);
    faceLeft();
    forward(50);
    faceUp();
    forward(25);
    faceRight();
    forward(100);
}

*/
/*exo D5
---------------------------------------------------------------
// Initialisation
setPos(300, 300);
changeColor(color.red);
faceDown();

// Réalisation
forward(150);
faceRight();
forward(50);
faceUp();
forward(150);
changeColor(color.yellow);
for (let i = 0; i < 4; i++) {
    forward(50);
    left(90);
}


*/
/*exo D6
---------------------------------------------------------------
// Initialisation
setPos(200, 200);
changeColor(color.aqua);
faceRight();

// Réalisation
let l = 50;
forward(l);
faceDown();

l=100;
forward(l);
faceRight();

l=150;
forward(l);

*/
/*exo D7
---------------------------------------------------------------
// Initialisation
setPos(300, 300);
changeColor(color.fuchsia);
faceUp();

// Réalisation
let l = 50;

forward(l);
faceRight();
forward(l);
faceUp();
l=100;
forward(l);
faceLeft();
forward(l);
faceDown();
l=50;
forward(l);

*/
/*exo D8
---------------------------------------------------------------
// Initialisation
setPos(200, 200);
changeColor(color.yellow);
faceRight();

// Réalisation
let l= 100;
forward(l);
faceDown();
forward(l);
faceLeft();

l=50;
for(let i=0; i<2 ; i++){
    forward(l);
    faceUp();
    forward(l);
    faceLeft();
}

*/
/*exo D9
---------------------------------------------------------------
// Initialisation
setPos(300, 300);
changeColor(color.blue);
faceRight();

// Réalisation
let l = 50;
for(let i=0; i<10 ; i++){
    forward(l);
    right(120);
    l=l+50;
}

*/
/*exo D10
---------------------------------------------------------------
// Initialisation
setPos(300, 300);
changeColor(color.yellow);
faceRight();

// Réalisation
let l = 50;
for(let i=0; i<10 ; i++){
    forward(l);
    right(90);
    l=l+50;
}

*/
/*exo D11
---------------------------------------------------------------
// Initialisation
setPos(10, 300);
changeColor(color.white);
faceRight();

// Réalisation
let l = 125;
for(let i = 0; i<5; i++){
    for(let j=0; j<3; j++){
        forward(l);
        left(120);
    }
    forward(l);
    l -=25;
}

*/
/*exo D12
---------------------------------------------------------------
// Initialisation
setPos(300, 300);
changeColor(color.aqua);
faceRight();

// Réalisation
let l=25;
for (let j = 0; j<6; j++){
    for(let i=0; i<4; i++){
        forward(l);
        left(120);
    }
    right(60);
    l+=25;
}
*/
/*exo D13
---------------------------------------------------------------
// Initialisation
setPos(300, 250);
changeColor(color.fuchsia);
faceRight();

// Réalisation
let r=50;
for (let i = 0; i < 8; i++) {
    arcRight(r,180);
    up();
    forward(25);
    down();  
    r+=25;  
}
*/
/*exo D14
---------------------------------------------------------------
// Initialisation
setPos(10, 300);
changeColor(color.green);
faceRight();
left(45);

// Réalisation
for(let j=0; j<4; j++){
    let l=25;
    for(let i =0; i<4; i++){
        forward(l);
        right(90);
        forward(l);
        left(90);
        l+=25;
    }
    right(180);
}
*/
/*exo D15
---------------------------------------------------------------
// Initialisation
setPos(300, 300);
changeColor(color.red);
faceDown();


// Réalisation
let l = 50;
let angle = 90;

for (let i = 0; i < 10; i++) {
    forward(l);
    left(angle);
    l+=25;
    angle-=5;

    
}
*/
/*exo D16
---------------------------------------------------------------
// Initialisation
setPos(300, 200);
changeColor(color.green);
faceDown();


// Réalisation
forward(100);
right(120);
forward(50);
left(30);
for(let i =0; i<3; i++){
    forward(50)
    right(90);
}

left(120);
forward(50);

up();
faceRight();
forward(25);
changeColor(color.yellow);

let rayon = 50;
for (let i = 0; i < 3; i++) {
    down();
    arcRight(rayon,180);
    rayon +=25;
    up();
    arcRight(rayon,180);
    rayon +=25;
}


 *//*-------------------------------------------------------------
 EXERCICES E
 ---------------------------------------------------------------
 */
 /*exo E1
 ---------------------------------------------------------------
 // Initialisation
 setPos(100, 300);
 changeColor(color.yellow);
 faceRight();
 
 // Réalisation
function etoile(){
    for (let i = 0; i <5; i++) {
        forward(75);
        right(180-36);        
    }
}
etoile();
forward(75);
etoile();
forward(175);
changeColor(color.green);
etoile();

*/
 /*exo E2
 ---------------------------------------------------------------
 // Initialisation
 setPos(300, 300);
 changeColor(color.blue);
 faceRight();
 
 // Réalisation
 function aile(){
    for (let i = 0; i <5; i++) {
        forward(200);
        for(let i=0; i<2; i++){
            right(120);
            forward(100);
        }    
        left(60);
        forward(100);  
    }
}

aile();
changeColor(color.red);
right(90);
aile();

*/
 /*exo E3
 ---------------------------------------------------------------
 // Initialisation
 setPos(200, 400);
 changeColor(color.yellow);
 faceRight();
 
 // Réalisation
 function carre(){
   for(let i=0; i<4; i++){
        forward(50);
        left(90);
   }
 }
for( let i=0; i<6; i++){
    carre();
    forward(100);
    left(60);
}
*/
 /*exo E4
 ---------------------------------------------------------------
 // Initialisation
 setPos(0, 500);
 changeColor(color.red);
 faceRight();
 
 // Réalisation
 function deuxMarches(){
    for(let i = 0; i<2; i++){
        forward(50);
        left(90);
        forward(50);
        right(90);
    }
    
 }
 deuxMarches();
 changeColor(color.yellow);
 forward(100);
 changeColor(color.blue);
 deuxMarches();
 changeColor(color.green);
 deuxMarches();
 forward(100);

 */
 /*exo E5
 ---------------------------------------------------------------
 // Initialisation
 setPos(300, 300);
 changeColor(color.blue);
 faceDown();
 
 // Réalisation
 function elle(){
    forward(100);
    left(90);
    forward(50);
 }
elle();
changeColor(color.green);
elle();
changeColor(color.yellow);
elle();
changeColor(color.fuchsia);
right(90);
elle();

*/
/*exo E6
---------------------------------------------------------------
// Initialisation
setPos(100, 200);
changeColor(color.green);
faceRight();

// Réalisation
function triangle(){
   for(let i=0; i<3; i++){
       forward(100);
       right(120);
   }
}
triangle();
forward(100);
changeColor(color.fuchsia);
triangle();
up();
forward(200);
down();
changeColor(color.yellow);
faceDown();
triangle();

*/
/*exo E7
---------------------------------------------------------------
// Initialisation
setPos(10, 300);
changeColor(color.red);
faceRight();

// Réalisation
function motif(){
    down();
    for (let i = 0; i < 2; i++) {
        forward(50);
        left(45);
        forward(100);
        left(135);        
    }
    up();
}

motif();
forward(100);
motif();

forward(100);
changeColor(color.blue);
for(let i=0; i<3;i++){
    motif();
    forward(50);
}

*/
/*exo E8
---------------------------------------------------------------
// Initialisation
setPos(100, 300);
changeColor(color.red);
faceRight();

// Réalisation
function triangles(){
    for (let i = 0; i < 3; i++) {
        forward(100);
        left(120);
    }
    for (let i = 0; i < 3; i++) {
        forward(50);
        right(120);
    }

}
triangles();
forward(100);
changeColor(color.aqua);
triangles();
forward(100);
faceDown();
changeColor(color.yellow);
triangles();
*/
/*exo E9
---------------------------------------------------------------
// Initialisation
setPos(0, 300);
changeColor(color.fuchsia);
faceRight();

// Réalisation
function maison(){
    faceUp();
    forward(100);
    right(45);
    forward(50);
    right(90);
    forward(50);
    right(45);
    forward(100);
    left(90);
}
forward(50);
maison();
forward(100);
maison();
forward(50);

changeColor(color.green);
maison();
forward(100);

*/
/*exo E10
---------------------------------------------------------------
// Initialisation
setPos(100, 400);
changeColor(color.red);
faceRight();

// Réalisation
function croix(){
    down();
    for (let i = 0; i < 4; i++) {
        for(let k=0; k<2; k++){
            forward(25);
            right(90);
        }
        forward(25);
        left(90);
    }
    up();
}

for(let i=0; i<3; i++){
    croix();
    forward(100);
    faceUp();
    croix();
    forward(100);
    faceRight();
    shiftColor(0.3);
}

*/
/*exo E11
---------------------------------------------------------------
// Initialisation
setPos(300, 300);
changeColor(color.red);
faceRight();

// Réalisation
function forme(){
    forward(100);
    right(60);
    forward(50);
    right(60);
    forward(50);
}
shiftColor(0.9);
for (let i = 0; i < 3; i++) {
    forme();
    up();
    forward(50);
    shiftColor(-0.1);
    down();
}
faceUp();
up();
forward(50);
down();
forward(50);
for(let i=0; i<3; i++){
    forme();
}

*/
/*exo E12
---------------------------------------------------------------
// Initialisation
setPos(100, 200);
shiftColor(0.5);
faceRight();

// Réalisation
function tripleCarre(){
    down();
    let l=50;
    for (let i = 0; i < 3; i++) {
        for(let k=0; k<4; k++){
            forward(l);
            arcLeft(50,90);            
        }
        l+=25;
    }
    up();
}

tripleCarre();
faceDown();
forward(100);
shiftColor(0.25);
tripleCarre();
faceRight();
forward(250);
shiftColor(0.25);
tripleCarre();

*/
/*dragon  
---------------------------------------------------------------
// Initialisation
setPos(100, 200);
shiftColor(0.5);
faceRight();

// Réalisation*/


