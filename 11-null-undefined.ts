(() => {
  // let myNumber: number;
  // let myName: string;

  let myNull: null = null;

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody'; //optional chaining
    console.log(hello);
  }

  hiV2('Rai');
  hiV2(null);

})();
