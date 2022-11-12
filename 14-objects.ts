(() => {
  const login = (dto: {email: string, password: number}) => {
    console.log(dto.email, dto.password);
  }

  login({
    email: 'rai@rai.cl',
    password: 1313
  });

  type Sizes = 'S' | 'L' | 'M' | 'XL';

  const prods: any[] = [];

  const addProduct = (dto: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    prods.push(dto);
  }

  addProduct({
    title: 'titulo',
    createdAt: new Date(1991, 1, 1),
    stock: 235
  });

  addProduct({
    title: 'title two',
    createdAt: new Date(1800, 13, 1),
    stock: 400
  });

  console.log(prods);

})();
