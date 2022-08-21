const inforBasica = [
    {
    name: "nome",
    id:"nome",
    type:"text",
    placeholder:" ",
    required:true,
    label: "Nome",
    class:"cadastro_formulario_caixa",
    position: 0
},{
    name: "email",
    id:"email",
    type:"email",
    placeholder:" ",
    required:true,
    label: "E-mail",
    class:"cadastro_formulario_caixa",
    position: 1
},{
    name: "senha",
    id:"senha",
    type:"password",
    placeholder:" ",
    required:true,
    label: "Senha",
    class:"cadastro_formulario_caixa",
    position: 2
},{
    name: "confirmaSenha",
    id:"confirmaSenha",
    type:"password",
    placeholder:" ",
    required:true,
    label: "Confirmar Senha",
    class:"cadastro_formulario_caixa",
    position: 3
}
]

const login = [{
    name: "Email",
    id:"Email",
    type:"text",
    placeholder:" ",
    required:true,
    label: "E-mail",
    class:"login_formulario_caixa",
    position: 0
},{
    name: "Senha",
    id:"Senha",
    type:"password",
    placeholder:" ",
    required:true,
    label: "Senha",
    class:"login_formulario_caixa",
    position: 1
}]

export function infoBasic(){
    return inforBasica;
}

export function log(){
    return login
}