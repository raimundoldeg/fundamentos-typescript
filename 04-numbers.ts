(() => {
    let productPrice = 100;
    productPrice = 12;
    console.log('productPrice', productPrice);

    let customerAge: number = 31;

    let productsInStock: number = 10;
    console.log('productsInStock', productsInStock);

    if (productsInStock > 10) {
      console.log('is greater');
    }

    let discount = parseInt('100');
    console.log('discount', discount);
    if (discount <= 200) {
      console.log('apply');
    } else {
      console.log('not apply');
    }

    let hex = 0xfff;
    console.log('hex', hex);
    let bin = 0o101012;
    console.log('bin', bin);

    const myNumber: number = 10;

})();
