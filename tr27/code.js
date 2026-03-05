// Definición de variables
const url = 'http://localhost:3000/api/article';
const contenedor = document.querySelector('tbody');
let resultados = '';

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'));
const formArticulo = document.querySelector('form');
const descripcion = document.getElementById('descripcion');
const precio = document.getElementById('precio');
const stock = document.getElementById('stock');
let opcion = '';

btnCrear.addEventListener('click', () => {
    desripcion.value = ''
    precio.value = ''   
    stock.value = ''
    modalArticulo.show()
    opcion = 'crear'
})

const mostrar = (articules) => {
    resultados = ''; // reinicia cada vez
    articules.forEach(article => {
        resultados += `
            <tr>
                <td>${article.id}</td>
                <td>${article.descripcion}</td>
                <td>${article.precio}</td>
                <td>${article.stock}</td>
                <td class="text-center">
                    <a class="btnEditar btn btn-primary">Editar</a>
                    <a class="btnBorrar btn btn-danger">Borrar</a>
                </td>
            </tr>
        `;
    });
    contenedor.innerHTML = resultados;
}



// Procedimiento / Mostrar
fetch(url)
    .then( response => response.json() )
    .then( data => mostrar(data) )
    .catch( error => console.log(error) )