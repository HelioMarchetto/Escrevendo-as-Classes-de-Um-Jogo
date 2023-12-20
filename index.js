class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case 'mago':
                ataque = "usou magia";
                break;
            case 'guerreiro':
                ataque = "usou espada";
                break;
            case 'monge':
                ataque = "usou artes marciais";
                break;
            case 'ninja':
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
                break;
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso:
let heroi1 = new Hero("Gandalf", 150, "mago");
heroi1.atacar(); // Saída: O mago atacou usando usou magia

let heroi2 = new Hero("Lancelot", 35, "guerreiro");
heroi2.atacar(); // Saída: O guerreiro atacou usando usou espada
