(() => {
  //palabra reservada de ts type
  type UserID = string | number;
  let userId: UserID;

  function greeting (userId: UserID) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    } else {
      console.log(`number ${userId.toFixed(1)}`);
    }
  }

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Sizes = 'L';

})();
