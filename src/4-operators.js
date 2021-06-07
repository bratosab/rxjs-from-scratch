import { from, of } from 'rxjs'
import {
  map,
  tap,
  filter,
  first,
  last,
  take,
  scan,
} from 'rxjs/operators'

/**
 * map operator
 */
const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

const logarithms$ = numbers$.pipe(
  map((num) => Math.log(num))
)

// logarithms$.subscribe(console.log);

/**
 * do/tap operator
 */
const people$ = of('Jean', 'Jaques')

people$.pipe(
  tap((name) => console.log(name)),
  map((name) => name.toUpperCase()),
  tap((name) => console.log(name))
)
//   .subscribe();

/**
 * Filter operator
 */
const numbers2$ = from([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10])

numbers2$.pipe(filter((num) => num >= 0))
//  .subscribe(console.log);

/**
 * First and Last operator
 */
const numbers3$ = from([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10])

// numbers3$.pipe(first()).subscribe(console.log)
// numbers3$.pipe(last()).subscribe(console.log)
