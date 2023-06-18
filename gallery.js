
//seleciona todos os elementos <li> e armazena na variável thumbnails.
const thumbnails = document.querySelectorAll('.thumbnails li');


//Percorre cada elemento na variável thumbnails usando um loop 
//e executa o código dentro da função de retorno para cada elemento.
thumbnails.forEach((thumbnail) => {
    //"mouseover" (passar o mouse sobre o elemento).
    thumbnail.addEventListener('mouseover', () => {
       // retorna uma NodeList que contém todos os elementos correspondentes.
        thumbnail.querySelector('.caption').style.opacity = '1';
    });

//"mouseout" (retirar o mouse do elemento) .
    thumbnail.addEventListener('mouseout', () => {
        thumbnail.querySelector('.caption').style.opacity = '0';
    });

//cliqua em cada elemento
    thumbnail.addEventListener('click', () => {
        thumbnails.forEach((item) => {
            item.classList.remove('selected');
        });
        //"selected" ao elemento thumbnail, destacando visualmente o elemento selecionado.
        thumbnail.classList.add('selected');
        console.log(`Image ${thumbnail.dataset.imageId} clicked`); // Exibe uma mensagem no console com o ID da imagem clicada.
    });
});
