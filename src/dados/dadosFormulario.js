const inforBasica = [
    {
    name: "nome",
    id:"nome",
    type:"text",
    placeholder:" ",
    required:true,
    label: "Nome",
    class:"formulario_caixa",
    position: 0,
    img:"/img/perfil.png"
},{
    name: "email",
    id:"email",
    type:"email",
    placeholder:" ",
    required:true,
    label: "E-mail",
    class:"formulario_caixa",
    position: 1,
    img:"/img/email.png"
},{
    name: "senha",
    id:"senha",
    type:"password",
    placeholder:" ",
    required:true,
    label: "Senha",
    class:"formulario_caixa",
    position: 2,
    img:"/img/senha.png"
},{
    name: "confirmaSenha",
    id:"confirmaSenha",
    type:"password",
    placeholder:" ",
    required:true,
    label: "Confirmar Senha",
    class:"formulario_caixa",
    position: 3,
    img:"/img/senha.png"
}
]

const login = [{
    name: "Email",
    id:"Email",
    type:"text",
    placeholder:" ",
    required:true,
    label: "E-mail",
    class:"formulario_caixa",
    position: 0,
    img:"/img/email.png"
},{
    name: "Senha",
    id:"Senha",
    type:"password",
    placeholder:" ",
    required:true,
    label: "Senha",
    class:"formulario_caixa",
    position: 1,
    img:"/img/senha.png"
}]

export function infoBasic(){
    return inforBasica;
}

export function log(){
    return login
}