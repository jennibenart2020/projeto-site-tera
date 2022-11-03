let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); 
    } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); 
    }
}


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
        let postagens = "postagens_" + (i + 1);
        localStorage.setItem(postagens, htmlStringList);

    }
   
}

function efetuarPostagem() {
    let valor = document.getElementById("valor").value;
    let nome = "Jessica Silva";
    let data = "2 dias atrás";
    let comentarios = 4343;
    let img = "img/golden.jpg";
    addHTML("<div class='divPosts'> <div class='post_name'> <img src='img/user.png' width='32px' height='32px'> <span class='name_post'> " + nome + " </span></div><div class='post_img'> <img class='img_post' src='" + img + "' /></div><div class='post_details'><span class='post_date'> " + data + " </span> | <a href=''> " + comentarios + " comentários </a> </div><div class='post_content'>  <p> " + valor + "</p></div></div>");


}


