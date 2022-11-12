(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((i) => {
      total += i;
    })
    return total;
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  const rta = printTotal([12, 1, 1]);
})
();
