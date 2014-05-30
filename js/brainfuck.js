function brainfuck(code, input){
var memory = [0];
var byteInput = input.split('').map(function(char){return char.charCodeAt(0);});
var pointer = 0;
var output = '';
var commands = code.split('');

  for(var commandIndex = 0; commandIndex < commands.length; commandIndex++)
  {
    command = commands[commandIndex];
    switch(command) {
      case '>': 
        pointer++;
        memory[pointer] = memory[pointer]?memory[pointer]:0;
        break;
      case '<':
        pointer--;
        break;
      case '+':
          if(memory[pointer] === 255)
            memory[pointer] = 0;
          else
            memory[pointer] = memory[pointer] + 1;          
        break;
      case '-':
        if(memory[pointer] === 0)
            memory[pointer] = 255;
          else
            memory[pointer] = memory[pointer] - 1;          
        break;
      case '.':
        output += String.fromCharCode(memory[pointer]);
        break;
      case ',':
        memory[pointer] = byteInput.shift();
        break;
      case '[':
        if(memory[pointer] === 0)
          commandIndex = getNextCommandIndex(commandIndex,commands,1);
          
        break;
      case ']':
      if(memory[pointer] !== 0)
        commandIndex = getNextCommandIndex(commandIndex,commands, -1)
        break;
    }
  }
  return output;
}

function getNextCommandIndex(commandIndex,commands, pointerMove){
    var level = 1;
    while(level > 0)
    {
      commandIndex += pointerMove;
      if(commands[commandIndex] === '[')  level += pointerMove;
     
      if(commands[commandIndex] === ']') level += pointerMove*-1;
    }
    
    return commandIndex;
}
