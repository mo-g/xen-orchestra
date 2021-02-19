This library contains utilities for disposables as defined by the [`promise-toolbox` library](https://github.com/JsCommunity/promise-toolbox#resource-management).

```js
import { deduped } from '@vates/disposable/deduped'

// the connection with the passed host will be established once at the first call, then, it will be shared with the next calls
const getConnection = deduped(function (host)) {
  const connection = new Connection(host)
  return new Disposabe(connection, () => connection.close())
}, host => [host])
```

```js
import { createDebounceResource } from '@vates/disposable/debounceResource'

const debounceResource = createDebounceResource()

// it will wait for 10 seconds before calling the disposer
using(debounceResource(getConnection(host), 10e3), connection => {})
```
