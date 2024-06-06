alert ('Boas vindas ao jogo do número secreto');
let Número_Max = 1000000
let NúmeroSecreto = parseInt(Math.random()*Número_Max);
let Tentativa_1 ;
let n_tentativas = 1;
while (Tentativa_1 != NúmeroSecreto) {
    Tentativa_1 = prompt (`Escolha um número entre 1 e ${Número_Max}`); 
    if (Tentativa_1 ==  NúmeroSecreto) {
        break;
    } else {
        if (Tentativa_1 > NúmeroSecreto) {
            alert(`O número secreto é menor que ${Tentativa_1}. Tente novamente.`);
        } else {
            alert (`O número secreto é maior que ${Tentativa_1}. Tente novamente.`);
        }
    }
    n_tentativas++;
}
let Palavra_Tentativa = n_tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Parabéns! Você acertou o Número secreto em ${n_tentativas} ${Palavra_Tentativa}.`);
