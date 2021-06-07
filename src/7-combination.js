import {
  combineLatest,
  merge,
  zip,
  of,
  forkJoin,
} from 'rxjs'
import { delay } from 'rxjs/operators'

const sourceOne$ = of('Hello', 'Britney', 'RxJS')
const sourceTwo$ = of(
  'World!',
  'Spears',
  'Best library in the world'
)
// .pipe(delay(2000))

/**
 * Zip
 * After all observables emit, emit values as an array
 */
const zipped$ = zip(sourceOne$, sourceTwo$)
// zipped$.subscribe(console.log)

/**
 * forkJoin
 * When all observables complete, emit the last emitted value from each.
 */
const forked$ = forkJoin([sourceOne$, sourceTwo$])
// forked$.subscribe(console.log)

/**
 * combineLatest
 * When any observable emits a value, emit the last emitted value from each.
 */
const combined$ = combineLatest([sourceOne$, sourceTwo$])
//  combined$.subscribe(console.log)

/**
 * merge
 * Turn multiple observables into a single observable.
 */
const merged$ = merge(sourceOne$, sourceTwo$)
//  merged$.subscribe(console.log)
