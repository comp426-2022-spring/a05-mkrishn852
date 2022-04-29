// Focus div based on nav button click
let nav = document.getElementByTagName("nav");
let buttons = nav.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Flip one coin and show coin image to match result when button clicked
const coin = document.getElementById("coin")

coin.addEventListener("click", flipCoin)
	async function flipCoin(event) {
    event.preventDefault();
    }

const endpoint = "app/flip/"
const url = document.baseURI+endpoint
fetch(url, {mode: 'cors'})
    .then(function(response) {
        return response.json();
        })
        .then(function(result) {
            console.log(result);
            document.getElementById("result").innerHTML = result.flip;
            document.getElementById("quarter").setAttribute("src", result.flip+".png");
            })
// Flip multiple coins and show coin images in table as well as summary results
// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button
