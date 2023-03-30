const cloneArray = require('./cloneArray')

test('executed properly cloneArray : ',()=>{
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array);
})