describe('Тесты с массивами', () => {

  it('Передача не массива', () => {
    const user = {
      name: 'Yura',
      age: 18,
    }
    assert.equal(dowbleElem(user), 'error')
  });

  it('В массиве нечисловые элементы', () => {
    assert.equal(dowbleElem(["test", "", "text"]), 'error')
  });

  it('В массиве не только числовые элементы.', () => {
    assert.deepEqual(dowbleElem(['text', 5]), [10])
  });
})