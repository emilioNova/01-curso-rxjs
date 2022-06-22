import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next : value => console.log('Siguiente:', value ),
    error: error => console.warn('Error:', error ),
    complete: () => console.info('Completado')
};


const intervalo$ = new Observable<number>(sub => {

    let result = 0;
    setInterval(()=> {
        if(result > 5 ){
            sub.complete();
        }
        sub.next(result);
        result++;

    }, 1000);


});


intervalo$.subscribe(num => console.log('Número: ', num));