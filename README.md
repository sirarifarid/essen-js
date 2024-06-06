## Essen JS

Some essential function for you app to save your time

#### Here are the list of the functions

**Arrays**

`swapArrayElements`

```javascript
const new_arr = swapArrayElements([1, 2], 0, 1);
// [2,1]
```

---

**Strings**

`capitalizeString`

```javascript
const str = capitalizeString("hello world");
// Hello World
```

`extractNumbers`

```javascript
const nums = extractNumbers("hello 1 2world");
// [1]
```

`isValidCreditCard`

```javascript
const is_valid = isValidCreditCard("4539 1488 0343 6467");
// true

const is_valid = isValidCreditCard("4539-1488-0343-6467");
// true

const is_valid = isValidCreditCard("4539");
// false

const is_valid = isValidCreditCard("1234567890123456");
// false
```

`isValidEmail`

```javascript
const is_valid = isValidEmail("helloworld@js.com");
// true
```

You can also pass the `domains` you want to accept

```javascript
const is_valid = isValidEmail("helloworld@js.com", ["gmail.com"]);
// false

const is_valid = isValidEmail("helloworld@js.com", ["js.com"]);
// true

const is_valid = isValidEmail("helloworld@gmail.com", ["js.com",'gmail.com]);
// true
```

`passwordStrength`

```javascript
const is_valid = passwordStrength("HelloWorld!!!");
// {score: 10, strength: "Strong"}
```

`replaceString`

```javascript
const is_valid = replaceString("Hello World Helloo", "Hello", "World");
// World World Worldo
```

`replaceWords`

```javascript
const is_valid = replaceWords("Hello World Helloo", "Hello", "World");
// World World Helloo
```

**Numbers**

`truncateDecimal`

```javascript
const is_valid = truncateDecimal(0.123456, 3);
// 0.123
```

`sortNumbers`

```javascript
const is_valid = sortNumbers([1, 5, 2, 4, 3]);
// [1,2,3,4,5]

const is_valid = sortNumbers([1, 5, 2, 4, 3], "desc");
// [5,4,3,2,1]
```

---

**Colors**

`alpha`

```javascript
const is_valid = alpha(color, opacity);

const is_valid = alpha("#f23", 0.5);
```

`rgba2hex`

```javascript
const is_valid = alpha("rgba(255,255,255,0.1)");
```
