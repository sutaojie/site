[Link](https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230 )


------------
.filter()
> Creates a new array based on whether the items of an array pass a certain condition.
过滤，从一组数据中过滤筛选想要的数据
```javascript
const studentsAge = [12,23,41,21,19,10]
const ableToDrink = studentsAge.filter(age => age > 18)
console.log(ableToDrink) 	//[ 23, 41, 21, 19 ]

```

.map()
> Creates a new array by manipulating the values in another array. Great for data manipulation and it is often used in React because it is an immutable method.
给数组添加固定的数据
```javascript
const numbers = [2,3,4,5];
const dollars = numbers.map(number => '$' + number);
console.log(dollars) 	//[ '$2', '$3', '$4', '$5' ]


```

.reduce()
> This often overlooked method uses an accumulator to reduce all items in an array to a single value. Great for calculating totals. The returned value can be of any type (i.e. object, array, string, integer).
循环 单一变量值的操作
```javascript
const numbers = [2,3,4,5];
const total = numbers.reduce((accumulator,currentValue) => accumulator+currentValue)
console.log(total) 	//14
```

.forEach()
> Applies a function on each item in an array.
遍历 遍历一次可遍历的的数组
```javascript
const numbers = [2,3,4,5];
numbers.forEach(number => console.log(number))
//2
//3
//4
//5
```

.some()
> Checks if any item in an array passes the condition. A good use case would be checking for user privileges. It can also be used similarly to a .forEach() where you would perform an action on each array item and break out of the loop once a truthy value is returned.
验证 验证一个值是否存在
```javascript
const numbers = [2,3,4,5];
const containNumber = numbers.some( n => n===3)
console.log(containNumber) 	//true
```

.every()
> Similar to .some(), but checks if all items in an array pass a condition.
全部验证 验证数组中每个值符合条件
```javascript
const numbers = [2,3,4,6,5];
const containNumber = numbers.every( n => n>=2)
console.log(containNumber) //true
```

.includes()
> Checks if an array contains a certain value. It’s similar to .some(),but instead of looking for a condition to pass, it looks if the array contains a specific value.
确认是否包含某个值
```javascript
const names = ['li', 'wang', 'zhang', 'su']
const includesSu = names.includes('su')
console.log(includesSu) 	//true
```

Array.from()
> This is a static method that creates an array based on another array or string. You can also pass a map callback function as an argument to further shape the data in the new array. Honestly, I’m not too sure why someone would use this over the .map() method.

```javascript
const newArray = Array.from('hello')
console.log(newArray) 	//[ 'h', 'e', 'l', 'l', 'o' ]
```

Create an array that has double the value for each item in another array.
```javascript
const doubledValues = Array.from([2,3,5] , number => number*2);
console.log(doubledValues) 	//[ 4, 6, 10 ]
```

Object.values()
> Return an array of the values of an object.
返回属性值
```javascript
const icecreamColors = {
	chocolate: 'brown',
	vanilla: 'white',
	strawberry: 'red',
}
const colors = Object.values(icecreamColors)
console.log(colors)
//[ 'brown', 'white', 'red' ]
```
Object.keys()
> Return an array of the keys of an object.
返回键名
```javascript
const icecreamColors = {
	chocolate: 'brown',
	vanilla: 'white',
	strawberry: 'red',
}
const colors = Object.keys(icecreamColors)
console.log(colors)
// [ 'chocolate', 'vanilla', 'strawberry' ]
```

Object.entries()
> Creates an array which contains arrays of key/value pairs of an object.
创建包含键值对的数组
```javascript
const icecreamColors = {
	chocolate: 'brown',
	vanilla: 'white',
	strawberry: 'red',
}
const colors = Object.entries(icecreamColors)
console.log(colors)

//[ [ 'chocolate', 'brown' ],
//  [ 'vanilla', 'white' ],
//  [ 'strawberry', 'red' ] ]
```

Array spread
> Spreading arrays using the spread operator (…) allows you to expand the elements in an array. It’s useful when concatenating a bunch of arrays together. It’s also a good way to avoid using the splice() method when looking to remove certain elements from an array because it can be combined with the slice() method to prevent direct mutation of an array.
连接两个数组
```javascript
const spreadableOne = [1,3,5,7]
const spreadableTwo = [2,4,6,8]
const combined = [...spreadableOne, ...spreadableTwo]
console.log(combined)
// [ 1, 3, 5, 7, 2, 4, 6, 8 ]
```

Object spread
> Spreading an object allows for the addition of new properties and values to an object without mutations (i.e. a new object is created) and it can also be used to combine multiple objects together. It should be noted that spreading objects does not do nested copying.
连接两个对象
```javascript
const spreadableObject = {
	name: 'su',
	phone: 'Smartisan'
};
const newObject = {
	...spreadableObject,
	carModel: 'Volkswagen'
}
console.log(newObject) 	//{ name: 'su', phone: 'Smartisan', carModel: 'Volkswagen' }
```
Function Rest
> Functions can use the rest parameter syntax to accept any number of arguments as an array.
接收多个参数
```javascript
function displayArgumentsArray(...theArguments){
	console.log(theArguments)
}

displayArgumentsArray('hi','the','world') 	//[ 'hi', 'the', 'world' ]
```

Object.freeze()
> Prevents you from modifying existing object properties or adding new properties and values to an object. It’s often what people think const does, however const allows you to modify an object.
设置属性不可修改
```javascript
const frozenObject = {
	name: 'su'
}
Object.freeze(frozenObject);
console.log(frozenObject.name) 	//su
frozenObject.name = 'li';
console.log(frozenObject.name) 	//TypeError

```

Object.seal()
> Stops any new properties from being added to an object, but still allows for existing properties to be changed.

设置属性不可添加
```javascript
const sealedObject = {
	name: 'su'
}
Object.seal(sealedObject);
console.log(sealedObject.name) 	//su
sealedObject.name = 'li';
sealedObject.age = 24
console.log(sealedObject.name) //li
console.log(sealedObject.age) 	//TypeError
```

Object.assign()
> Allows for objects to be combined together. This method is no longer needed because you can use the object spread syntax instead. Like the object spread operator, Object.assign() does not do deep cloning. Lodash is your best friend when it comes to deep cloning objects.
合并两个对象到一个新的对象中
```javascript
const firstObject = {
	firstName : 'su'
}
const lastObject = {
	lastName : 'zhaoyong'
}
const combinedObject = Object.assign(firstObject, lastObject)
console.log(combinedObject) 	//{ firstName: 'su', lastName: 'zhaoyong' }
```