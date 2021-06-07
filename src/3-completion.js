import { timer, interval } from 'rxjs'
import { finalize } from 'rxjs/operators'

/**
 * Timer
 * automatic completion
 */
const $timer = timer(1000)
// $timer.pipe(finalize(() => console.log("Finished !"))).subscribe();

/**
 * Interval
 * force complition on unsubscribe
 */
const $neverEnding = interval(500).pipe(
  finalize(() => console.log('Finished !'))
)

// const subscripion = $neverEnding.subscribe(console.log);

// setTimeout(() => {
//   subscripion.unsubscribe();
// }, 3000);
