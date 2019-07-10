import { convertBinaryStringToHexString } from "../../helpers/convert-binary-string-to-hex-string";

export const generate_LD_A_from_memory_at_HL_and_decr_HL = () => {
  const instruction = {};

  instruction.mnemonic = "LD A, (HL-)";
  instruction.flags = {};
  instruction.cycles = 2;

  const opCodeInBinary = "00111010";
  instruction.opCode = convertBinaryStringToHexString(opCodeInBinary);

  return instruction;
}