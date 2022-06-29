import { Observable, of, throwError } from 'rxjs'
import { catchError, retry, map } from 'rxjs/operators'

/**
 * Basic observable
 */
const observable$ = new Observable((observer) => {
  observer.next('Bonjour !')
  observer.next('Bonsoir !')
  observer.next('Bonne nuit !')
  throw "J'ai pas envie de dormir !"
  observer.next('Bien dormi ?')
})

/**
 * Catch Error
 */
observable$.pipe(
  catchError((err) => {
    console.error(err)
    return of(null)
  })
)
// .subscribe(console.log)

/**
 * Retry
 */
observable$.pipe(
  catchError((err) => {
    console.error(err)
    return of(null)
  }),
  retry(2)
)
// .subscribe(console.log)

/**
 * Control error in subscription
 */
observable$.pipe(
  catchError((err) => {
    console.error(err)
    return throwError('it broke')
  }),
  retry(2)
)
// .subscribe({
//   next: (val) => console.log(val),
//   error: (val) => console.log('error', val),
// })
