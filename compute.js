const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e13; i++) {
    sum = sum + i;
  }
  return sum;
};

process.on('message', msg =>{
  const sum = longComputation();
  process.send(sum);
});