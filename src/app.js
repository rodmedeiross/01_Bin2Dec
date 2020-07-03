function bin2dec(){
  let binary = String (document.getElementById('binary').value);
  let res = document.getElementById('res');

  if (binary.length > 8 | binary.length <= 0) return window.alert("Error, you tried insert more or less caracters than is possible!");
  
  binary.split('').map((char) => { // Using method Split for tranform string in array and mathod map for read this. 
    if (char !== '0' && char !== '1') {
      alert('Please, enter a binary number'); // Return erro alert.
    } else {
      res.innerHTML = parseInt(binary,2); // Convert Binary number.
    }
  });
}