# SyncTimeout
Time-aligned functional `setTimeout` and `setInterval`.

### Install
```
npm install sync-timeout
```

### Usage
### Buitin time frames
```
'1s', '5s', '10s', '15s', '30s', '1m', '5m', '10m', '15m', '30m', '1h', '3h', '6h', '12h', '1d'
```
You can provide your timeframe as number, for example
- 2s = 2 * 1000
- 4m = 4 * 60 * 1000

### `syncTimeout`
`(timeframe: number | Timeframe, offsetMs: number) => (callback: () => void) => () => void`
```
import { syncTimeout } from 'sync-timeout'

// invoke my code on next 30-second aligned timestamp
const cancel = syncTimeout('30s')(
  () => {
    // your code here
  }
)

cancel() // cancel timeout
```

### `syncTimeoutPromise`
`(timeframe: number | Timeframe, offsetMs: number) => Promise<void>`
```
import { syncTimeout } from 'sync-timeout'

// invoke my code on next 30-second aligned timestamp
syncTimeoutPromise('30s').then(
  () => {
    // your code here
  }
)

cancel() // cancel timeout
```

### `syncInterval`
`(timeframe: number | Timeframe, offsetMs: number) => (callback: () => void) => () => void`
```
import { syncInterval } from 'sync-timeout'

// invoke my code on EVERY 30-second aligned timestamp
const pinger = syncInterval('30s')(
  () => {
    // your code here
  }
)

// start interval pinging
const cancel = pinger()

cancel() // cancel interval
```
