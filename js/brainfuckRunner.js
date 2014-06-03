function runBrainfuck()
{
  var instructions = document.getElementById("instructions").value;
  var input = document.getElementById("input").value;

  
  var output = brainfuck(instructions,input);
  
  
  var outputP = document.getElementById("output");
  
  
  outputP.innerHTML = 'Output: <br/>'+output;
}