const totalNotes = 34;
const notas = new Array(totalNotes);

document.getElementById("Kalkulo").onclick = function () {
    for (let i = 0; i < totalNotes; i++) {
        notas[i] = document.getElementById(`nota${i + 1}`).value;
        notas[i] = Number(notas[i]);

        if (notas[i] > 10) {
            alert(`Nota nuk mund të jete me e madhe se 10 - Nota e ${i + 1} - Permirso noten `);
        } else if (notas[i] < 5) {
            alert(`Nota nuk mund të jete me e vogel se 5 - Nota e ${i + 1} - Permirso noten `);
        } else {
            console.log(`nota ${i + 1} eshet mir`);
        }
    }

    const Fullrezultati = notas.reduce((acc, nota) => acc + nota, 0);
    const Mesatarja = Fullrezultati / totalNotes;

    document.getElementById("rezultati").innerHTML = Fullrezultati;
    document.getElementById("Mesatarja").innerHTML = Mesatarja;
}
