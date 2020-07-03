document.querySelector('input#bin2dec').onclick = () => {
  let binary = String (document.getElementById('binary').value);
  let res = document.getElementById('res');

  if (binary.length > 8 | binary.length <= 0) return window.alert("Error, you tried insert more or less caracters than is possible!");
  
  if (/\b[01]+\b/g.test(binary)){ // Using Regex for verify binary number. 
    res.innerHTML = parseInt(binary,2); // Convert Binary number.
  }else {
    res.innerHTML = "_"
    alert("Please, enter a binary number") // Return erro alert. 
  }
}
