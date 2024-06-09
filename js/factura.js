var total=0;
var suma=0;

const test = document.getElementById('cost');

var productos = ['Melocotonero', 'Girasol', 'Helecho', 'Pino', 'Geranio'];
var precios = [11, 5, 8, 12, 4];
var cantidades = [20, 20, 30, 5, 7];
var texto = [];

for(let i=0; i<productos.length; i++)
{
    texto[i] = productos[i]+' $ '+precios[i]*cantidades[i];
    suma+=precios[i]*cantidades[i];
}

productos.forEach((producto, index) => {
    const nuevo = document.createElement('div');
    nuevo.textContent = texto[total];
    total++;
    nuevo.id = 'elemento'+(index+1);
    nuevo.className = 'nuevo';
    test.appendChild(nuevo);
});

const resultado = document.getElementById('total');
const precio_t = document.createElement('p');
precio_t.textContent = 'Total= $'+suma;
precio_t.className='total';
precio_t.id = 'precio_total';
resultado.appendChild(precio_t);
console.log('funciona');




