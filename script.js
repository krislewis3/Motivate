console.log("javascript connected");

const quotes= [
"Do it for AMELIA.",
"Change doesn't happen just because you want it, it happens because you work for it.",
"PAY ALL YOUR BILLS AT ONCE.",
"Dont you want that new Jeep?!",
"Build something AMAZING!",
"Make your travel dreams possible"
]

//document.getElementById("displeyText") .innerHTML = quotes [1];

//console.log ("you have " + quotes.length + "quotes")

//console.log (Math.random() * quotes.length);

//console.log (Math.floor(Math.random * quotes.length))



function motivate() {
    let numberQuotes = quotes.length;
    let randomDecimal = Math.random ();
    let randomNumberwithDecimal = randomDecimal * numberQuotes;
    let randomIntegers = Math.floor (randomNumberwithDecimal);
    document.getElementById("displayText").innerHTML = quotes[randomIntegers];
    console.log("button is working")
}
