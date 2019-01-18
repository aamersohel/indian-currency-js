### Description
Converts any numeric Indian currency to string equivalent representation. It support number range from -999999999 to 999999999.

### Installation
```sh
$ npm install --save indian-currency
```

### Import Statement
```js
import { toIndianCurrency } from "indian-currency";
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
