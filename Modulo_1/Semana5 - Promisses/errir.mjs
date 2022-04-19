function timeout() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
  
  async function dobraValor(value) {
    await timeout();
    console.log(value);
    throw new Error('aaaa');
    return value * 2;
  }
  
  const chamar = async () => {
    try {
      let result = await dobraValor(2);
      console.log('teste');
      result = await dobraValor(result);
      console.log('teste2');
      result = await dobraValor(result);
      console.log('resultado final', result);
    } catch (e) {
      console.log(e);
    }