import { of, fromEvent, interval } from 'rxjs'
import {
  switchMap,
  takeUntil,
  finalize,
  takeWhile,
} from 'rxjs/operators'

/**
 * Using events
 */
const clicks$ = fromEvent(document, 'click')

clicks$.pipe(
  switchMap((click) => {
    return interval(500)
  })
)
// .subscribe(console.log)

/**
 * Using data from one observable to call another
 */

// Simulate API call
const getInfo = async (id) => {
  return `${id}'s information`
}

// Generate user ID
const user$ = of({ id: Math.random() })

const userInfo$ = user$.pipe(
  switchMap((user) => {
    return getInfo(user.id)
  })
)

// user$.subscribe(console.log)
// userInfo$.subscribe(console.log)

/**
 * takeUntil / takeWhile
 */
const interval$ = interval(500)
const notifier$ = interval(3000)

interval$.pipe(
  takeUntil(notifier$),
  finalize(() => console.log('Finished !'))
)
// .subscribe(console.log)

interval$.pipe(
  takeWhile((val) => val < 6),
  finalize(() => console.log('Finished !'))
)
//.subscribe(console.log)
