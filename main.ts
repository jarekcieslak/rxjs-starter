import {Observable} from "rxjs";

let stream1 = Observable.range(1, 9);
let stream2 = Observable.range(10, 9);

stream1.subscribe(
    data => console.log('S1:', data)
);