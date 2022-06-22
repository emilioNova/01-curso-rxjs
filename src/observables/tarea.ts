import { filter, Observable, range } from "rxjs";



console.log('index', 'rrrrrrrrrrrrrrrrrrrrr');


range(20,30).pipe(
    filter( (val, i) => {
        console.log('index', i);
        return val % 2 ===1;
    })
);//.subscribe(console.log);


interface Personaje {
    tipo:  string;
    nombre:  string;
}
const personajes:Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'homer'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
];

 const obs$ = new Observable<Personaje[]>( sub => {

    sub.next(personajes);
    sub.complete();
}).pipe(
   
    filter<Personaje[]>( (per, i) => {

        console.log('Filterrrrrr', per[i].tipo);
        return true;
    })
);
 console.log('index', 'rrrrrrrrrrrrrrrrrrrrr');

 

obs$.subscribe(console.log);