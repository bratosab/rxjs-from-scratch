import { fromEvent } from 'rxjs'
import {
  debounceTime,
  throttleTime,
  bufferCount,
} from 'rxjs/operators'

const mouse$ = fromEvent(document, 'mousemove')

// mouse$.subscribe(console.log)

/**
 * throttleTime
 */
const throttled$ = mouse$.pipe(throttleTime(500))
// throttled$.subscribe(console.log)

/**
 * debounceTime
 */
const debounced$ = mouse$.pipe(debounceTime(500))
// debounced$.subscribe(console.log)


/**
 * bufferCount
 */
 const buffered$ = mouse$.pipe(bufferCount(50))
//  buffered$.subscribe(console.log)
 