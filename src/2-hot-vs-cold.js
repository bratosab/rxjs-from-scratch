import { Observable } from 'rxjs'
import { share, shareReplay, publish } from 'rxjs/operators'

/**
 * Cold Observable
 * Where data is created inside of it
 * Each Sub gets a diffrent number
 */
const cold$ = Observable.create((observer) => {
  observer.next(Math.random())
})

// cold$.subscribe((val) => console.log(`Subscriber 1 : ${val}`));
// cold$.subscribe((val) => console.log(`Subscriber 2 : ${val}`));

/**
 * Hot Observable
 * Where data is created outsie of it
 * Each Sub gets same number
 */
const x = Math.random()
const hot$ = Observable.create((observer) => {
  observer.next(x)
})

// hot$.subscribe((val) => console.log(`Subscriber 1 : ${val}`));
// hot$.subscribe((val) => console.log(`Subscriber 2 : ${val}`));

/**
 * Hot Observable without decoupling data
 * Using publish to emit data only when connect is called
 */
const cold2$ = Observable.create((observer) => {
  observer.next(Math.random())
})

const hot2$ = cold2$.pipe(publish())

// hot2$.subscribe((val) => console.log(`Subscriber 1 : ${val}`));
// hot2$.subscribe((val) => console.log(`Subscriber 2 : ${val}`));

// hot2$.connect()
