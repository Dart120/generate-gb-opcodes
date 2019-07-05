import instructionGenerators from './generators';
import { createInitialOpCodesGrid, setCellForOpCode, printGrid } from './helpers/grid-helpers';

// Set up:
const opCodesGrid = createInitialOpCodesGrid(); // opCodesGrid: Array[17][17]

// call each generator function
const generateAllInstructions = () => {
  let instructions = [];

  for (let generatorFunction of instructionGenerators) {
    instructions = instructions.concat(generatorFunction());
  }
  
  return instructions; // list containing all instruction objects
}

const instructions = generateAllInstructions();

// iterate over opcodes to place objects into opCodesGrid
instructions.forEach(instruction => {
  setCellForOpCode(instruction.opCode, instruction, opCodesGrid);
});

printGrid(opCodesGrid);

// use opCodesGrid to generate an HTML table