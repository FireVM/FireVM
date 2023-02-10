const intMin: (i: any, j: any) => number = (i, j) => j ^ ((i ^ j) & ((i - j) >> 31));
const intMax: (i: any, j: any) => number = (i, j) => i ^ ((i ^ j) & ((i - j) >> 31));