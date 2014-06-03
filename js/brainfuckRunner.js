function runBrainfuck()
{
  var instructions = document.getElementById("instructions").value;
  var input = document.getElementById("input").value;

  if(instructions === '')
  {
   showError('please enter some instructions');
  }
  else
  {
  var output = brainfuck(instructions,input);
  showOutput(output);
  }
   
   
}


function showOutput(output)
{
  var outputP = document.getElementById("output"); 
  var errorP = document.getElementById("error"); 
  outputP.innerHTML = 'Output: <br/>'+output;
  outputP.style.display = '';
  errorP.style.display = 'none';
}

function showError(error)
{
  var outputP = document.getElementById("output"); 
  var errorP = document.getElementById("error"); 
  errorP.innerHTML = 'Something went wrong: <br/>'+error;
  outputP.style.display = 'none';
  errorP.style.display = '';
}