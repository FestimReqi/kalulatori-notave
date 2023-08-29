let nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8,nota9,nota10,nota11,nota12,nota13,nota14,nota15,nota16,nota17,nota18,nota19,nota20,nota21,nota22;
let nota23,nota24,nota25,nota26,nota27,nota28,nota29,nota30,nota31,nota32,nota33,nota34;
let rezultati,Fullrezultati;
let Mesatarja;


document.getElementById("Kalkulo").onclick = function(){
    // nota1 
    nota1 = document.getElementById("nota1").value;
    nota1 = Number(nota1);
    //  nota 2
    nota2 = document.getElementById("nota2").value;
    nota2 = Number(nota2);
    
    nota3 = document.getElementById("nota3").value;
    nota3 = Number(nota3);
    
    nota4 = document.getElementById("nota4").value;
    nota4 = Number(nota4);

    nota5 = document.getElementById("nota5").value;
    nota5 = Number(nota5);

    nota6 = document.getElementById("nota6").value;
    nota6 = Number(nota6);

    nota7 = document.getElementById("nota7").value;
    nota7 = Number(nota7);

    nota8 = document.getElementById("nota8").value;
    nota8 = Number(nota8);

    nota9 = document.getElementById("nota9").value;
    nota9 = Number(nota9);

    nota10 = document.getElementById("nota10").value;
    nota10 = Number(nota10);

    nota11 = document.getElementById("nota11").value;
    nota11 = Number(nota11);

    nota12 = document.getElementById("nota12").value;
    nota12 = Number(nota12);

    nota13 = document.getElementById("nota13").value;
    nota13 = Number(nota13);

    nota14 = document.getElementById("nota14").value;
    nota14 = Number(nota14);

    nota15 = document.getElementById("nota15").value;
    nota15 = Number(nota15);

    nota16 = document.getElementById("nota16").value;
    nota16 = Number(nota16);
    
    nota17 = document.getElementById("nota17").value;
    nota17 = Number(nota17);

    nota18 = document.getElementById("nota18").value;
    nota18 = Number(nota18);

    nota19 = document.getElementById("nota19").value;
    nota19 = Number(nota19);

    nota20 = document.getElementById("nota20").value;
    nota20 = Number(nota20);

    nota21 = document.getElementById("nota21").value;
    nota21 = Number(nota21);
    
    nota22 = document.getElementById("nota22").value;
    nota22 = Number(nota22);

    nota23 = document.getElementById("nota23").value;
    nota23 = Number(nota23);

    nota24 = document.getElementById("nota24").value;
    nota24 = Number(nota24);

    nota25 = document.getElementById("nota25").value;
    nota25 = Number(nota25);

    nota26 = document.getElementById("nota26").value;
    nota26 = Number(nota26);

    nota27 = document.getElementById("nota27").value;
    nota27 = Number(nota27);

    nota28 = document.getElementById("nota28").value;
    nota28 = Number(nota28);

    nota29 = document.getElementById("nota29").value;
    nota29 = Number(nota29);

    nota30 = document.getElementById("nota30").value;
    nota30 = Number(nota30);

    nota31 = document.getElementById("nota31").value;
    nota31 = Number(nota31);
    
    nota32 = document.getElementById("nota32").value;
    nota32 = Number(nota32);

    nota33 = document.getElementById("nota33").value;
    nota33 = Number(nota33);
    
    nota34 = document.getElementById("nota34").value;
    nota34 = Number(nota34);

    Fullrezultati = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10 + nota11 + nota12 + nota13 + nota14 + nota15 + nota16 + nota17 + nota18 + nota19 + nota20 + nota21 + nota22 + nota23 + nota24 + nota25 + nota26 + nota27+ nota28+ nota29+ nota30 + nota31 + nota32 + nota33 + nota34 ;
    Mesatarja =  Fullrezultati / 34;

    document.getElementById("rezultati").innerHTML = Fullrezultati;
    document.getElementById("Mesatarja").innerHTML = Mesatarja;

    // nota 1
    if(nota1 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 1 - Permirso noten ");
    }else if (nota1 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 1 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 2
    if(nota2 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 2 - Permirso noten ");
    }else if (nota2 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 2 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 3
    if(nota3 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 3- Permirso noten ");
    }else if (nota3 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 3 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 4
    if(nota4 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 4 - Permirso noten ");
    }else if (nota4 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 4 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 5
    if(nota5 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 5 - Permirso noten ");
    }else if (nota5 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 5 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 6
    if(nota6 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 6 - Permirso noten ");
    }else if (nota6 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 6 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 7
    if(nota7 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 7 - Permirso noten ");
    }else if (nota7 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 7 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 8
    if(nota8 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 8 - Permirso noten ");
    }else if (nota8 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 8 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 9
    if(nota9 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 9 - Permirso noten ");
    }else if (nota9 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 9 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 10
    if(nota10 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 10 - Permirso noten ");
    }else if (nota10 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 10 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 11
    if(nota11 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 11 - Permirso noten ");
    }else if (nota11 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 11 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 12
    if(nota12 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 12 - Permirso noten ");
    }else if (nota12 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 12 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 13
    if(nota13 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 13 - Permirso noten ");
    }else if (nota13 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 13 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 14
    if(nota14 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 14 - Permirso noten ");
    }else if (nota14 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 14 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 15
    if(nota15 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 15 - Permirso noten ");
    }else if (nota15 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 15 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 16
    if(nota16 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 16 - Permirso noten ");
    }else if (nota16 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 16 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 17
    if(nota17 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 17 - Permirso noten ");
    }else if (nota17 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 17 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 18
    if(nota18 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 18 - Permirso noten ");
    }else if (nota18 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 18 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 19
    if(nota19 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 19 - Permirso noten ");
    }else if (nota19 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 19 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 20
    if(nota20 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 20 - Permirso noten ");
    }else if (nota20 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 20 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 21
    if(nota21 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 21 - Permirso noten ");
    }else if (nota21 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 21 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 22
    if(nota22 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 22 - Permirso noten ");
    }else if (nota22 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 22 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 23
    if(nota23 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 23 - Permirso noten ");
    }else if (nota23 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 23 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 24
    if(nota24 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 24 - Permirso noten ");
    }else if (nota24 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 24 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 25
    if(nota25 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 25 - Permirso noten ");
    }else if (nota25 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 25 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 26
    if(nota26 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 26 - Permirso noten ");
    }else if (nota26 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 26 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 27
    if(nota27 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 27 - Permirso noten ");
    }else if (nota27 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 27 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 28
    if(nota28 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 28 - Permirso noten ");
    }else if (nota28 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 28 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 29
    if(nota29 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 29 - Permirso noten ");
    }else if (nota29 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 29 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 30
    if(nota30 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 30 - Permirso noten ");
    }else if (nota30 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 30 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 31
    if(nota31 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 31 - Permirso noten ");
    }else if (nota31 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 31 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 32
    if(nota32 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 32 - Permirso noten ");
    }else if (nota32 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 32 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 33
    if(nota33 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 33 - Permirso noten ");
    }else if (nota33 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 33 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }
    // nota 34
    if(nota34 > 10){
        alert("Nota nuk mund të jete me e madhe se 10 - Nota e 34 - Permirso noten ");
    }else if (nota34 < 5){
        alert("Nota nuk mund të jete me e vogel se 5 - Nota e 34 - Permirso noten ");
    }else{
        console.log("nota eshet mir")
    }





}
