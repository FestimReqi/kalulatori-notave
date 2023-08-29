console.log('kalkulatori');


let kal = "kal";

let kal = "kal";

let kal = "kal";


// Define the total number of notes
const totalNotes = 34;

// Create an array to store the notes
const notas = new Array(totalNotes);

// Trigger the calculation when the button is clicked
document.getElementById("Kalkulo").onclick = function () {
    // Iterate through each note input
    for (let i = 0; i < totalNotes; i++) {
        // Get the value of the note and convert it to a number
        notas[i] = document.getElementById(`nota${i + 1}`).value;
        notas[i] = Number(notas[i]);

        // Check if the note is within valid range
        if (notas[i] > 10) {
            alert(`Nota nuk mund të jete me e madhe se 10 - Nota e ${i + 1} - Permirso noten `);
        } else if (notas[i] < 5) {
            alert(`Nota nuk mund të jete me e vogel se 5 - Nota e ${i + 1} - Permirso noten `);
        } else {
            console.log(`nota ${i + 1} eshet mir`);
        }
    }

    // Calculate the total result and average
    const Fullrezultati = notas.reduce((acc, nota) => acc + nota, 0);
    const Mesatarja = Fullrezultati / totalNotes;

    // Display the results on the webpage
    document.getElementById("rezultati").innerHTML = Fullrezultati;
    document.getElementById("Mesatarja").innerHTML = Mesatarja;
}

console.log("kalui")




