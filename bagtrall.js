function calculateFactorial() {
  let num = document.getElementById("numInput").value;
  let result = 1;

  if (num < 0 || isNaN(num)) {
    document.getElementById("ur-dun").textContent = "Enter a non-negative number.";
    return;
  }

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  document.getElementById("ur-dun").textContent = num + "! = " + result;
}
