# HTML
```html
<body>
  <div class="div-for-something">
    <div class="another-div-for-something">
      <p>Just a text.<\p>
    </div>
  </div>
  <div class="div-for-something-else">
    <div class="another-div-for-something-else">
      <img src="avatar.png" alt="Avatar" width="500" height="600">
    </div>
  </div>
</body>
```

# CSS
```css
.div {
  property: value;
  long-name-property: value;
 }

.p {
property: value;
long-name-property: value;
}

.div-for-something {
  property: value;
  long-name-property: value;
}

.another-div-for-something {
  property: value;
  long-name-property: value;
}
```

# Python
```python
from module import Class

def my_fun(x: int, y: int) -> int:
  """"
  Short Description.
  
  :param x, y: numbers to add
  :return: the total
  """
  return x + y
```

# PHP
```php
<?php

require('class.php');

class Test {

    // Constructor
    function __construct()
    {
        return($this);
    }
}


// Function description
function foo($x, $y)
{
    return($x + $y);
}

?>
```

# MySQL
```mysql
CREATE TABLE 1SidedTable {
  FirstRow PRIMARY KEY PROPERTY;
  SecondRow PROPERTY;
  FOREIGN KEY;
}

CREATE TABLE NSidedTable {
  FirstRow PRIMARY KEY PROPERTY;
  SecondRow PRIMARY KEY PROPERTY;
  FOREIGN KEY;
}
```
