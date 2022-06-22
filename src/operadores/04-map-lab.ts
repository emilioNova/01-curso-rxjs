import { fromEvent, map } from "rxjs";
import { tap } from 'rxjs/operators';

const texto = document.createElement('div');


texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ullamcorper nisi. Nam convallis non lectus vel mollis. Curabitur vitae erat a magna ullamcorper sagittis. Proin et tortor tincidunt, fringilla erat a, finibus arcu. Nunc varius porttitor nunc sit amet ullamcorper. Suspendisse a enim sit amet felis fringilla consectetur vel eget ex. Mauris in massa augue. Cras dolor magna, scelerisque sed auctor at, condimentum a enim. In ultricies faucibus enim sit amet auctor.
<br/>
Suspendisse ornare ex a magna condimentum, sollicitudin blandit tortor auctor. In metus urna, luctus tincidunt feugiat eget, suscipit id nunc. Fusce congue, sapien at pretium aliquam, justo lacus faucibus mauris, ut auctor nulla velit et metus. Praesent ullamcorper sodales hendrerit. Ut nec malesuada metus. Praesent a metus vitae libero iaculis porttitor sit amet quis tellus. Nullam varius, nisi ac cursus sodales, felis erat luctus sem, eget bibendum lectus quam ac ipsum. Praesent a facilisis leo. Nullam imperdiet placerat ante, ut sodales purus tristique sed. Phasellus ut orci consequat, tincidunt ligula sed, condimentum metus. Nullam auctor eros eu pellentesque ornare. Nam nec quam turpis.
<br/>
Etiam malesuada mauris eros, quis rhoncus nisi tempus sed. Curabitur ultricies sit amet diam a eleifend. Aliquam rutrum mattis est ac auctor. Ut et blandit velit. Aliquam dapibus nunc mauris, id venenatis purus hendrerit quis. Vivamus feugiat lacus id dolor imperdiet, at faucibus leo sodales. Pellentesque rhoncus ante turpis. Praesent a feugiat neque. Nulla id consequat neque, ullamcorper feugiat nibh. Phasellus tellus leo, tempus luctus nisi et, sollicitudin dictum augue.
<br/>
Vivamus a convallis nunc. Pellentesque id dolor in ipsum finibus rhoncus. Fusce pellentesque metus eu lobortis efficitur. Sed eros purus, ultrices non dui in, vestibulum gravida velit. Vestibulum magna ex, scelerisque rutrum arcu eget, luctus vulputate nisi. Sed rhoncus orci elit, eget rutrum libero lobortis sed. Aliquam nulla est, semper ut odio in, accumsan ullamcorper purus. In sit amet scelerisque est, nec sodales augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam fringilla, sapien vel pharetra mattis, turpis sapien laoreet nisl, pulvinar pulvinar leo sapien sit amet diam.
<br/>
Suspendisse est ante, dignissim eu venenatis sed, venenatis ac lacus. In hac habitasse platea dictumst. Ut posuere felis aliquet sapien sagittis pellentesque eu a nisl. Donec pulvinar ultricies justo non tincidunt. Quisque pretium placerat eros id faucibus. In ut purus ligula. Duis at tristique libero. Integer nec mauris convallis, feugiat lorem quis, egestas ipsum. Curabitur interdum tellus ut malesuada auctor.

<br/>
Suspendisse est ante, dignissim eu venenatis sed, venenatis ac lacus. In hac habitasse platea dictumst. Ut posuere felis aliquet sapien sagittis pellentesque eu a nisl. Donec pulvinar ultricies justo non tincidunt. Quisque pretium placerat eros id faucibus. In ut purus ligula. Duis at tristique libero. Integer nec mauris convallis, feugiat lorem quis, egestas ipsum. Curabitur interdum tellus ut malesuada auctor.

<br/>
Suspendisse est ante, dignissim eu venenatis sed, venenatis ac lacus. In hac habitasse platea dictumst. Ut posuere felis aliquet sapien sagittis pellentesque eu a nisl. Donec pulvinar ultricies justo non tincidunt. Quisque pretium placerat eros id faucibus. In ut purus ligula. Duis at tristique libero. Integer nec mauris convallis, feugiat lorem quis, egestas ipsum. Curabitur interdum tellus ut malesuada auctor.

<br/>
Suspendisse est ante, dignissim eu venenatis sed, venenatis ac lacus. In hac habitasse platea dictumst. Ut posuere felis aliquet sapien sagittis pellentesque eu a nisl. Donec pulvinar ultricies justo non tincidunt. Quisque pretium placerat eros id faucibus. In ut purus ligula. Duis at tristique libero. Integer nec mauris convallis, feugiat lorem quis, egestas ipsum. Curabitur interdum tellus ut malesuada auctor.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ullamcorper nisi. Nam convallis non lectus vel mollis. Curabitur vitae erat a magna ullamcorper sagittis. Proin et tortor tincidunt, fringilla erat a, finibus arcu. Nunc varius porttitor nunc sit amet ullamcorper. Suspendisse a enim sit amet felis fringilla consectetur vel eget ex. Mauris in massa augue. Cras dolor magna, scelerisque sed auctor at, condimentum a enim. In ultricies faucibus enim sit amet auctor.
<br/>
Suspendisse ornare ex a magna condimentum, sollicitudin blandit tortor auctor. In metus urna, luctus tincidunt feugiat eget, suscipit id nunc. Fusce congue, sapien at pretium aliquam, justo lacus faucibus mauris, ut auctor nulla velit et metus. Praesent ullamcorper sodales hendrerit. Ut nec malesuada metus. Praesent a metus vitae libero iaculis porttitor sit amet quis tellus. Nullam varius, nisi ac cursus sodales, felis erat luctus sem, eget bibendum lectus quam ac ipsum. Praesent a facilisis leo. Nullam imperdiet placerat ante, ut sodales purus tristique sed. Phasellus ut orci consequat, tincidunt ligula sed, condimentum metus. Nullam auctor eros eu pellentesque ornare. Nam nec quam turpis.
<br/>
Etiam malesuada mauris eros, quis rhoncus nisi tempus sed. Curabitur ultricies sit amet diam a eleifend. Aliquam rutrum mattis est ac auctor. Ut et blandit velit. Aliquam dapibus nunc mauris, id venenatis purus hendrerit quis. Vivamus feugiat lacus id dolor imperdiet, at faucibus leo sodales. Pellentesque rhoncus ante turpis. Praesent a feugiat neque. Nulla id consequat neque, ullamcorper feugiat nibh. Phasellus tellus leo, tempus luctus nisi et, sollicitudin dictum augue.
<br/>
Vivamus a convallis nunc. Pellentesque id dolor in ipsum finibus rhoncus. Fusce pellentesque metus eu lobortis efficitur. Sed eros purus, ultrices non dui in, vestibulum gravida velit. Vestibulum magna ex, scelerisque rutrum arcu eget, luctus vulputate nisi. Sed rhoncus orci elit, eget rutrum libero lobortis sed. Aliquam nulla est, semper ut odio in, accumsan ullamcorper purus. In sit amet scelerisque est, nec sodales augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam fringilla, sapien vel pharetra mattis, turpis sapien laoreet nisl, pulvinar pulvinar leo sapien sit amet diam.
<br/>
Suspendisse est ante, dignissim eu venenatis sed, venenatis ac lacus. In hac habitasse platea dictumst. Ut posuere felis aliquet sapien sagittis pellentesque eu a nisl. Donec pulvinar ultricies justo non tincidunt. Quisque pretium placerat eros id faucibus. In ut purus ligula. Duis at tristique libero. Integer nec mauris convallis, feugiat lorem quis, egestas ipsum. Curabitur interdum tellus ut malesuada auctor.

<br/>
Suspendisse est ante, dignissim eu venenatis sed, venenatis ac lacus. In hac habitasse platea dictumst. Ut posuere felis aliquet sapien sagittis pellentesque eu a nisl. Donec pulvinar ultricies justo non tincidunt. Quisque pretium placerat eros id faucibus. In ut purus ligula. Duis at tristique libero. Integer nec mauris convallis, feugiat lorem quis, egestas ipsum. Curabitur interdum tellus ut malesuada auctor.

<br/>
Suspendisse est ante, dignissim eu venenatis sed, venenatis ac lacus. In hac habitasse platea dictumst. Ut posuere felis aliquet sapien sagittis pellentesque eu a nisl. Donec pulvinar ultricies justo non tincidunt. Quisque pretium placerat eros id faucibus. In ut purus ligula. Duis at tristique libero. Integer nec mauris convallis, feugiat lorem quis, egestas ipsum. Curabitur interdum tellus ut malesuada auctor.

<br/>
Suspendisse est ante, dignissim eu venenatis sed, venenatis ac lacus. In hac habitasse platea dictumst. Ut posuere felis aliquet sapien sagittis pellentesque eu a nisl. Donec pulvinar ultricies justo non tincidunt. Quisque pretium placerat eros id faucibus. In ut purus ligula. Duis at tristique libero. Integer nec mauris convallis, feugiat lorem quis, egestas ipsum. Curabitur interdum tellus ut malesuada auctor.

`;

const body = document.querySelector('body');
body.append(texto);

const calcularPorcentajeScroll = (event) => {
  //  console.log(event);

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
  //  console.log(scrollTop, scrollHeight, clientHeight);

    return (scrollTop / (scrollHeight - clientHeight) ) *100;

}

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar);


const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(

    //map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});