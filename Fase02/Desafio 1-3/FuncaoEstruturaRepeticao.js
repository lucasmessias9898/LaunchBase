/**
 * Desafio LaunchBase BootCamp
 * Desafio 1-3: Funções e estruturas de repetição
 * Lucas M. Messias
 */

 const usuarios = [
     {nome: "Carlos", tecnologias: ["HTML", "CSS"]},
     {nome: "Jasmine", tecnologias: ["JavaScript", "CSS"]},
     {nome: "Tuane", tecnologias: ["Node.js", "React"]}
 ]

for(let i=0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}

function usaCSS(usuarios) { 

    for(let i=0; i < usuarios.length; i++) {

        if(usuarios[i].tecnologias[i] == "CSS") {
            valCss = true;
        } else {
            valCss = false;
        }
        
    }

    return usaCSS;

}

for(let i=0; i < usuarios.length; i++) {

    const usuarioCss = usaCSS(usuarios[i])

    if(usuarioCss) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    } else{
        console.log(`O usuário ${usuarios[i].nome} não trabalha com CSS`)
    }
}