
// get button elements 
const buttons = document.querySelector("[data-modal-id]"); // button reset
const btnGo = document.getElementById("btnGo");         // button Go
const btnPrime = document.getElementById("btnPrime"); // button Is Prime?
const btnSqrt = document.getElementById("btnSqrt"); // button Sqrt

// reset name field and toggle name-input box
buttons.addEventListener("click", resetPage);

// when is Prime button is clicked:
btnPrime.addEventListener("click", () => {
  // get value from input box
  let n = document.getElementById("input-num").value;

  // validate input to accept only integers
  if (validateInput(n)) {
    const isPrime = test_prime(n) // function call to test for prime
      ? "Yes, prime number!"
      : "Nope, not pirme";
    document.getElementById("displayAnswer").innerHTML = isPrime;
    return true;
  } else {
    document.getElementById("displayAnswer").innerHTML = "";
    return false;
  }
});

// when sqrt button is clicked:
btnSqrt.addEventListener("click", () => {
  // get value from input box
  let n = document.getElementById("input-num").value;

  //validate input // call sqrt function
  let ansSqrt = "Sqrt of " + n + " is : ";
  validateInput(n) ? (ansSqrt += calculate_Sqrt(n)) : (ansSqrt = "");

  //display result
  document.getElementById("displayAnswer").innerHTML = ansSqrt;
});

function validateInput(n) {
  // validate input to accept only numbers
  var numbers = /^[0-9]+$/;
  if (n.match(numbers)) {
    return true;
  } else {
    // Alert if not numbers in input
    alert("Please input numeric characters only");
    document.getElementById("input-num").value = "";
    document.getElementById("input-num").focus();
    return false;
  }
}

// get guest name and toggle form
btnGo.addEventListener("click", () => {
  let modal = document.getElementById("idNameForm");
  modal.classList.toggle("hide"); // hide guest name form
  modal = document.getElementById("idNameDisplay");
  let userName = document.getElementById("guest-name").value;
  if (userName) {
    userName = "Hello " + userName + "!";
  } else {
    userName = "Hello Guest !";
  }
  modal.innerHTML = userName;
  modal.classList.toggle("hide"); // show the guest name
});

// toggle back guest unput div
function resetPage() {
  let modal = document.getElementById("idNameForm");
  modal.classList.toggle("hide");
  modal = document.getElementById("idNameDisplay");
  modal.classList.toggle("hide");
  document.getElementById("guest-name").value = "";
  document.getElementById("idNameDisplay").innerHTML = "Hello Guest!";
  document.getElementById("displayAnswer").innerHTML = "-Answer-";
}

// check for prime number
function test_prime(n) {
  console.log("prime clicked");
  console.log(n);

  if (n <= 1) {
    return false;
  } else if (n === 2 || n == 3) {
    return true;
  } else {
    for (var x = 2; x <= Math.floor(Math.sqrt(n)); x++) {
      if (n % x === 0) {
        console.log(x);
        return false;
      }
    }
    return true;
  }
}

function calculate_Sqrt(n) {
  return Math.sqrt(n).toFixed(3);
}
