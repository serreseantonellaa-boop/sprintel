//variable

//galeria de productos
//la section productos
let contenedorProductos = document.getElementById('contenedor-productos');
let nombreProducto = ['Mallas de acero inoxidable', 'Mallas de hierro galvanizado', 'Zarandas'];
let descripcionProducto = [
    'Fabricadas con acero inoxidable AISI 304 o AISI 316, nuestras mallas tejidas ofrecen excelente resistencia a la corrosión, estabilidad dimensional y alta durabilidad. Disponibles en distintos diámetros de alambre y aberturas, se adaptan a usos industriales, alimenticios, químicos y más.',
    'Nuestras zarandas están confeccionadas con alambre de acero inoxidable AISI 304, AISI 316 o galvanizado, según el requerimiento del proyecto. Son resistentes, duraderas y aptas para clasificar, filtrar y separar materiales en sectores como la minería, la industria alimenticia, química y agrícola.',
    'Trabajamos mallas confeccionadas con acero aisi 306 con distintos tipos de diámetro de alambre y diferentes aberturas, descargate nuestro catálogo. Si no encontrás lo que buscás, consultanos.'
]
let fotoProducto = ['foto-card-1.png', 'foto-card-2.png', 'foto-card-3.png'];

//armo la grilla de productos
for(let i = 0; i < nombreProducto.length; i ++){
    //armo la caja donde ira el contenido del producto
    let card =  document.createElement('article');
    card.className = 'card';
    let titulo = document.createElement('h3');
    titulo.textContent = nombreProducto[i];
    card.appendChild(titulo);
    let foto = document.createElement('img')
    foto.setAttribute('src', 'assets/imgs/' + fotoProducto[i]);
    foto.className = 'foto-producto'
    card.appendChild(foto)
    let descripcion  = document.createElement('p');
    descripcion.textContent = descripcionProducto[i];
    card.appendChild(descripcion)
    contenedorProductos.appendChild(card)

}