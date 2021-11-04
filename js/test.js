describe("Тесты с массивами", function() { 
	it("Передача не массива", () => { 
		assert.equal(notAnArrey('1', '2'), 'error'); 
	}); 

  it("В массиве нечисловые элементы", () => {
    assert.equal(nonNumericElementsInArray(['hello']), 'error');
  })

  it("В массиве не только числовые элементы.", () => {
    assert.equal(moreThanNumericElem([1, 'hello']), 'error')
  })
});
