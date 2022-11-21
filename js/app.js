//setInterval(checarPostagens, 500);
//setInterval(getPostagens, 1000);

function checarPostagens() {
    let resultado = document.querySelectorAll('.divPosts').length;
    console.log(resultado);
    return resultado;
}

function getPostagens() {
    for (let i = 0; i < checarPostagens(); ++i) {
        let postagens = "postagens_" + i;
        let resultado = localStorage.getItem(postagens);
        console.log(resultado);
    }
    
}


function addHTML(htmlStringList) {
    let resultado = document.getElementById("postagem");
    for (let i = 0; i < 1; ++i) {
        var div = document.createElement('div');
        div.innerHTML = htmlStringList.trim();
        resultado.appendChild(div);

        // salvar no local storage
        let postagens = "postagens_" + 1;
        localStorage.setItem(postagens, htmlStringList);

    }
   
}

function efetuarPostagem() {
    let valor = document.getElementById("valor").value;
    let nome = "Jessica Silva";
    let data = "2 dias atrás";
    let comentarios = 4343;
    let img = "img/golden.jpg";
 
    let html = "<div class='card bernat_card'>\
                    <div class='card-header'>\
                        <div class='d-flex justify-content-between align-items-center'>\
                            <div class='d-flex justify-content-between align-items-center'>\
                                <div class='mr-2'>\
                                    <img class='rounded-circle' width='45' src='img/avatar.png' alt=''>\
                                </div>\
                                <div class='ml-2'>\
                                    <div class='h5 m-0'> "+nome+" </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class='card-body'>\
                        <div class='text-muted h7 mb-2'> <i class='fa fa-clock-o'></i> "+data+"</div>\
                        <a class='card-link' href='#'>\
                        <img class='img-fluid' src='" + img + "' /></div>\
                        </a>\
                        <p class='card-text p-2'>"+valor+" </p>\
                    </div>\
                    <div class='card-footer'>\
                        <a href='#' class='card-link'><i class='fa fa-gittip'></i> Curtir </a>\
                        <a href='#' class='card-link'><i class='fa fa-mail-forward'></i> Compartilhar </a>\
                    </div>\
                </div>";

    addHTML(html);

}


