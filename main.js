function myfunction() {
    let celcius = (document.getElementById('value').value - 32) * 5/9;
    document.getElementById('celciusformula').innerHTML = celcius;
}


//function myFunction() {
   // document.getElementById("") = "";
  //  let celsius = 5/9( document.getElementById("value") -32);
    //return (celsius);
    //display.textContent = celsius;
//}


// const celciusInput = document.getElementById("celcius");
// const fahrenheitInput = document.getElementById("fahrenheit");
// //const fahrenheitInput = document.getElementById("fahrenheit");

// const inputs = document.getElementsByClassName("input");

// for (let i = 0; i < inputs.length; i++) {
//     let input = inputs[i];

//     input.addEventListener("input", function (e) {
//         let value = e.target.value;
//         console.log(e.target.name + ":" + value)
//     });

// }

// function fToC(fahrenheit) 
// {
//   const fTemp = fahrenheit;
//   const fToCel = (fTemp - 32) * 5 / 9;
//   const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
//     console.log(message);