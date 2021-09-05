function compute() {
  // DOM
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;
  var year = new Date().getFullYear() + parseInt(years);

  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  } else {
    // HTML Implementation
    document.getElementById("result").innerHTML =
      "If you deposit " +
      "<span class = 'highlighted'>" +
      principal +
      "</span>,<br>at an interest rate of " +
      "<span class = 'highlighted'>" +
      rate +
      "%<br></span>You will receive an amount of " +
      "<span class = 'highlighted'>" +
      interest +
      "</span>,<br>in the year " +
      "<span class = 'highlighted'>" +
      year +
      "</span><br>";
  }
}
function updateRate() {
  var rateval = document.getElementById("rate").value + "%";
  document.getElementById("rate_val").innerText = rateval;
}
