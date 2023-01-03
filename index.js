function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}

function executarUsuario(evento) {
    if(evento == "login") {
        let email = document.getElementById("login_email").value;
        let pass  = document.getElementById("login_senha").value;

        
        if(email == "" || pass == "")  {
            alert("E-mail ou senha em branco!");
            return false;
        }

        if(!isEmail(email)) {
            alert("Email inválido!");
            return false;
        }

        if(localStorage.getItem("email") == email && localStorage.getItem("senha") == pass) {
            alert("Login autorizado!");
            window.location.href = "app.html";
            return false;
        } else {
            alert("Dados de login inválidos!");
        }


    } else if(evento == "cadastro") {
        let nome   = document.getElementById("nome").value;
        let email  = document.getElementById("email").value;
        let tel  = document.getElementById("tel").value;
        let pass   = document.getElementById("senha").value;
        let cpass  = document.getElementById("csenha").value;

        if(email == "" || pass == "")  {
            alert("E-mail ou senha em branco!");
            return false;
        }

        if(!isEmail(email)) {
            alert("Email inválido!");
            return false;
        }

        if(pass != cpass) {
            alert("A confirmação da senha está diferente!");
            return false;
        }

        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("tel", tel);
        localStorage.setItem("senha", cpass);
        alert("Conta criada com sucesso!");
        location.reload();
    }
}

function clickBtn(evento) { 
    if(evento == "login") {
        document.getElementById("llogin").style.display = "block";
        document.getElementById("cadastro").style.display = "none";
        document.title = "Acesse sua conta!"
    } else if(evento == "cadastro") {
        document.getElementById("llogin").style.display = "none";
        document.getElementById("cadastro").style.display = "block";
        document.title = "Crie sua conta para participar da rede!";
    }
}