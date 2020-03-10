/**
 * Desafio LaunchBase BootCamp
 * Desafio 1-2: Lidando com objetos e vetores
 * Lucas M. Messias
 */

const usuario = {
    name: "Rocketseat",
    color: "purple",
    focus: "Programming",
    address: {
        street: "Rua Guilherme Gembala",
        number: 260
    }
};

console.log(`A Empresa ${usuario.name} está localizada na ${usuario.address.street}, ${usuario.address.number}`);

const user = {
    name: "Diego",
    age: 23,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' },
    ]
};

console.log(`O usuário ${user.name} tem ${user.age} anos e usa a tecnologia ${user.tecnologias[0].nome} com especialidade em ${user.tecnologias[0].especialidade}`);
