import { Observable } from 'rxjs'

console.log('Hola Mundo!');

const nombre = 'Emilio';

// Forma antigua deprecada!!!
//const obs$ = Observable.create();


const obs$ = new Observable<string>( sub => {

    sub.next('hola');
    sub.next(' ');
    sub.next(nombre);
    sub.next(' HHIIIIIIII eeee ');
    sub.complete();


    sub.next('DISPUES DEL COMPLETE');

} );


obs$.subscribe( console.log);





