# Set Default Values [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

Here are four ways to set a default value for a variable in JavaScript, each one of them with its pros and cons.

This is useful when we want a default value to be overwritten only if a new value is set.

### :white_check_mark: Logical operator `||`
The first option is to set the default value with the logical operator `||`.

```js
let fruit;
fruit = fruit || 'apple';
console.log(fruit) // apple
```

```js
let fruit = 'strawberry';
fruit = fruit || 'apple';
console.log(fruit) // strawberry
```



### :white_check_mark:  Ternary operator
Another option we have is to set the default value by using the ternary operator.

```js
let fruit;
fruit = fruit ? fruit : 'apple';
console.log(fruit)  // apple
```

```js
let fruit = 'strawberry';
fruit = fruit ? fruit : 'apple';
console.log(fruit)  // strawberry
```



### :warning: Warning: falsy values

On the previous examples, if a falsy value like `''` or `0` is set on the variable, it will be overwritten by the default `apple`

```js
let fruit = '';
fruit = fruit || 'apple';
console.log(fruit) // apple
```

```js
let fruit = 0;
fruit = fruit ? fruit : 'apple';
console.log(fruit) // apple
```

If we want to avoid this behavior, and keep the falsy as possible values, we can use the default parameter



### :white_check_mark: Default parameter
With this method, if we set a default value for a parameter inside a function, we can avoid it from being overwritten in the case of passing falsy value, and maintain this falsy value as the final one.

So, depending on the behavior we expect when a falsy value comes in, we might want to use one of the options above or this one.


```js
const foo = (fruit = 'apple') => {
  console.log(fruit)
}

foo() // apple
foo(undefined) // apple
foo(0) // 0
foo('') // ''
foo('strawberry')  // strawberry
```



### :warning: Warning: `undefined`
Note that in all previous cases, if the value is set to `undefined`, it will be overwritten by the default one provided. To control this, we could apply an if/else statement.



### :white_check_mark: If/else
This option gives us more control over the code, but is also more verbose

```js
let fruit = undefined;

if (fruit) {
	// do something
} else {
	console.log(fruit + ' is still undefined')
}
```
