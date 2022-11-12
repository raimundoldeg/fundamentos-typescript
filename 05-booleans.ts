(() => {
  let isEnabled = true;
  isEnabled = false;

  const random =  Math.random();
  console.log('random', random);
  isEnabled = random >= 0.5 ? true : false;
  console.log('isEnabled', isEnabled);


})();
