import { Observable, of, interval, fromEvent, from } from "rxjs";

/**
 * Basic observable
 */
const observable = new Observable((observer) => {
  observer.next("Bonjour !");
  observer.next("Bonsoir !");
});

// observable.subscribe((val) => console.log(val));

/**
 * From DOM event
 */
const click$ = fromEvent(document, "click");
// click$.subscribe(console.log);

/**
 * Simulate async opération (API call), convert to Observable
 */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("DONE !");
  }, 1000);
});

const obsFromPromise$ = from(promise);
// obsFromPromise$.subscribe((val) => console.log(val));

/**
 * Periodic subscription
 */
const periodic$ = interval(1000);
// periodic$.subscribe(console.log);

/**
 * Pass static values to Observables
 */
const string$ = of("hello");
const anything$ = of("hello", ["an", "array"], true, {
  id: 1,
  name: "best beer",
});
//  string$.subscribe(console.log);
//  anything$.subscribe(console.log);