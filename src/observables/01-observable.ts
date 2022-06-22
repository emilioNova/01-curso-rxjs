/*

import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next : value => console.log('siguiente [next]:', value ),
    error: error => console.warn('error [obs]:', error ),
    complete: () => console.info('completado [obs]')
};



// const obs$ = Observable.create();
const obs$ = new Observable<string>( sub => {

    sub.next('Hola');
    sub.next('Mundo');

    sub.next('Hola');
    sub.next('Mundo');

    // Forzar un error
    // const a  = undefined;
    // a.nombre = 'Emilio';

    sub.complete();
    sub.next('DISPUES DEL COMPLETE');
});

//Hace lo mismo que la siguiente linea
obs$.subscribe( observer );

//Hace lo mismo que la linea anterior
// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );


*/