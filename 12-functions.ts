(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProdToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const createProdToJson2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const prod2 = createProdToJson2('product 2', new Date(), 12);
  console.log(prod2);
  console.log(prod2.title);
  console.log(prod2.size);
})
();
