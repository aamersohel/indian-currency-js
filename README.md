### Description
Converts any number to string equivalent representation. Currently it supports Indian format, number range from -999999999 to 999999999.

### Installation
```sh
$ npm install --save num-to-text
```

### Import Statement
```js
import { toIndianCurrency } from "num-to-text";
```

### Usage
```js
let numericIndianCurrency = 1445;
try {
    let stringCurrency = toIndianCurrency(numericIndianCurrency);
    console.log(stringCurrency);    
} catch(e) {
    console.error(e.message);
}
```

### Output
```
One Thousand Four Hundred Forty Five
```
