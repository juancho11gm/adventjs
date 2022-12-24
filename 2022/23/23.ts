import assert from 'assert';

function executeCommands(commands: string[]) {
  const result = new Array(8).fill(0);
  const INSTRUCTIONS: Instructions = {
    'MOV': (reg1: string, reg2: string) => {
      const isCopy = reg1?.includes('V');

      if (isCopy) {
        const index1 = +reg1.charAt(reg1.length - 1);
        const index2 = +reg2.charAt(reg2.length - 1);
        result[index2] = result[index1];
        return;
      }

      const n = +reg1;
      const index2 = +reg2.charAt(reg2.length - 1);
      result[index2] = n;
    },
    'ADD': (reg1: string, reg2: string) => {
      const index1 = +reg1.charAt(reg1.length - 1);
      const index2 = +reg2.charAt(reg2.length - 1);
      result[index1] = (result[index1] + result[index2]) % 256;
    },
    'DEC': (reg: string) => {
      const index = +reg.charAt(reg.length - 1);
      if (result[index] === 0) result[index] = 255;
      else result[index]--;
    },
    'INC': (reg: string) => {
      const index = +reg.charAt(reg.length - 1);
      result[index] = (result[index] + 1) % 256;
    },
    'JMP': (jumps: string, _, i: number) => {
      const repeatInstructions = commands.slice(+jumps, i);
      while (result[0] !== 0) {
        repeatInstructions.forEach((c, i) => exec(c, i))
      }
    }
  }

  const exec = ((c: string, i: number) => {
    const [instruction, registers] = c.split(' ');
    const [r1, r2] = registers.split(',');
    INSTRUCTIONS[instruction](r1, r2, i);
  });

  commands.forEach((c, i) => exec(c, i));

  return result;
}

type Instructions = {
  [key: string]: (reg1: string,
    reg2: string,
    i: number) => void;
}

try {
  assert.deepEqual(
    executeCommands([
      'MOV 5,V00', // V00 es 5
      'MOV 10,V01', // V01 es 10
      'DEC V00', // V00 ahora es 4
      'ADD V00,V01', // V00 = V00 + V01 = 14
    ]),
    [14, 10, 0, 0, 0, 0, 0, 0]
  );

  assert.deepEqual(
    executeCommands([
      'MOV 255,V00', // V00 es 255
      'INC V00', // V00 es 256, desborda a 0
      'DEC V01', // V01 es -1, desborda a 255
      'DEC V01', // V01 es 254
    ]),
    [0, 254, 0, 0, 0, 0, 0, 0]
  );

  assert.deepEqual(executeCommands([
    'MOV 255,V00',
    'INC V00',
    'DEC V01',
    'DEC V01'
  ]),
    [
      0,
      254,
      0,
      0,
      0,
      0,
      0,
      0
    ]
  )

  assert.deepEqual(
    executeCommands([
      'MOV 10,V00', // V00 es 10
      'DEC V00', // decrementa V00 en 1  <---┐
      'INC V01', // incrementa V01 en 1      |
      'JMP 1', // bucle hasta que V00 sea 0 ----┘
      'INC V06', // incrementa V06 en 1
    ]),
    [0, 10, 0, 0, 0, 0, 1, 0]
  );

} catch (error) {
  console.log(error)
}