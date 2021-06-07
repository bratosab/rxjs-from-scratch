import { Subject, BehaviorSubject, of } from 'rxjs'

/**
 * It's just an observable
 */
const observable$ = of('hello')

// const subA = observable$.subscribe((value) =>
//   console.log(`Sub A : ${value}`)
// )
// const subB = observable$.subscribe((value) =>
//   console.log(`Sub B : ${value}`)
// )

/**
 * Same thing with a subject
 */
const subject = new Subject()

// const subA = subject.subscribe((value) =>
//   console.log(`Sub A : ${value}`)
// )
// const subB = subject.subscribe((value) =>
//   console.log(`Sub B : ${value}`)
// )

// subject.next('hello')

/**
 * We can then broadcast now values to subscribers
 */
setTimeout(() => {
    // subject.next('world')
}, 2000);

/**
 * BehaviorSubject
 * Requires an initial value and emits the current value to new subscribers
 */
 const behaviorSubject = new BehaviorSubject('toto');

//  const subA = behaviorSubject.subscribe((value) =>
//   console.log(`Sub A : ${value}`)
// )
// const subB = behaviorSubject.subscribe((value) =>
//   console.log(`Sub B : ${value}`)
// )

setTimeout(() => {
    // behaviorSubject.next('tata')
}, 2000);