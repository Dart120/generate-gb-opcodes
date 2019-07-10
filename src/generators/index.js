import { generate_LD_r_from_rPrime } from './8-bit-transfer-and-io/LD_r_from_rPrime';
import { generate_LD_r_from_d8 } from './8-bit-transfer-and-io/LD_r_from_d8';
import { generate_LD_r_from_value_at_HL } from './8-bit-transfer-and-io/LD_r_from_value_at_HL';
import { generate_LD_memory_at_HL_from_r } from './8-bit-transfer-and-io/LD_memory_at_HL_from_r';
import { generate_LD_memory_at_HL_from_d8 } from './8-bit-transfer-and-io/LD_memory_at_HL_from_d8';
import { generate_LD_A_from_memory_at_BC } from './8-bit-transfer-and-io/LD_A_from_memory_at_BC';
import { generate_LD_A_from_memory_at_DE } from './8-bit-transfer-and-io/LD_A_from_memory_at_DE';
import { generate_LD_A_from_memory_at_C } from './8-bit-transfer-and-io/LD_A_from_memory_at_C';
import { generate_LD_memory_at_C_from_A } from './8-bit-transfer-and-io/LD_memory_at_C_from_A';
import { generate_LD_A_from_memory_at_a8 } from './8-bit-transfer-and-io/LD_A_from_memory_at_a8';
import { generate_LD_memory_at_a8_from_A } from './8-bit-transfer-and-io/LD_memory_at_a8_from_A';

export default [
  generate_LD_r_from_rPrime,
  generate_LD_r_from_d8,
  generate_LD_r_from_value_at_HL,
  generate_LD_memory_at_HL_from_r,
  generate_LD_memory_at_HL_from_d8,
  generate_LD_A_from_memory_at_BC,
  generate_LD_A_from_memory_at_DE,
  generate_LD_A_from_memory_at_C,
  generate_LD_memory_at_C_from_A,
  generate_LD_A_from_memory_at_a8,
  generate_LD_memory_at_a8_from_A
];
