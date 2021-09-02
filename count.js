const count = (max, counter = 0) => () => {
  console.table(counter);
  counter = counter === max ? 0 : counter + 1
  if (counter >= 10) {
    console.log('fim da contagem!')
  }
};

setInterval(count(10), 500);