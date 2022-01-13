Simple logger to both console and file and levels with no dependencies.

Usage:

Install

```
npm i darla
```
OR

```
yarn add darla
```

Import

```
const darla = require("darala)
```

Log debug:

```
dara.debug("this is debug message")
```

Log info:

```
darla.info("New order", order)
```


Log warning:

```
darla.warn("This could lead to an error in the future" + "fix now")
```

Log error:

```
darla.error(err)
```

Change path to log file output:

```
darla.setLogFilePath("/Users/alice/logs/project.log")
```


Modify config:
```
darla.modifyConfig("console", "error", false)
```

Set log level:

```
darla.setLevel("file", "error")
```

Potential levels: `debug`, `info`, `warn`, `error`, `off`

Default config:

```
let config = {
  console : {
    debug : true,
    info : true,
    warn : true,
    error : true
  },
  file : {
    debug : true,
    info : true,
    warn : true,
    error : true
  }
}
```

