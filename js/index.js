/*1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */

"use strict"
var readlineSync = require('readline-sync');

const microondasMenu = require('readline-sync');

console.log(`
  Microondas 
  Escolhe uma dentre as opções:
  pipoca
  macarrao
  carne
  feijão
  brigadeiro
`);

let opcao = readlineSync.question('Escolha a sua opcao: ');
console.log('\n\n');

let tempoprato = readlineSync.question('Escolha um tempo: ');
console.log('\n\n');

function Microondas(opcao, tempoprato) {


    if ((opcao == 'pipoca' && tempoprato >= 10 && tempoprato <= 19) ||
        (opcao == 'macarrao' && tempoprato >= 8 && tempoprato <= 15) ||
        (opcao == 'carne' && tempoprato >= 15 && tempoprato <= 29) ||
        (opcao == 'feijao' && tempoprato >= 12 && tempoprato <= 23) ||
        (opcao == 'brigadeiro' && tempoprato >= 8 && tempoprato <=15)) {

        if ((opcao == 'pipoca') || (opcao == 'carne')) {

            return `A ${opcao} está pronto, bom apetite!`

        }
        else ((opcao == 'macarrao') || (opcao == 'feijao') || (opcao == 'brigadeiro')

        )
        return `O ${opcao} está pronto, bom apetite!`


    }

    else if ((opcao == 'pipoca' && tempoprato <= 9) ||
        (opcao == 'macarrao' && tempoprato <= 7) ||
        (opcao == 'carne' && tempoprato <= 14) ||
        (opcao == 'feijao' && tempoprato <= 11) ||
        (opcao == 'brigadeiro' && tempoprato <= 14)) {

        if ((opcao == 'pipoca') || (opcao == 'carne')) {

            return `A ${opcao} precisa de mais tempo para ficar pronta =( !`

        }
        else ((opcao == 'macarrao') || (opcao == 'feijao') || (opcao == 'brigadeiro')

        )
        return `O ${opcao} precisa de mais tempo para ficar pronto =( !`
    }

else if ((opcao == 'pipoca' && tempoprato >= 20 && tempoprato <= 29) ||
    (opcao == 'macarrao' && tempoprato >= 16 && tempoprato <= 23) ||
    (opcao == 'carne' && tempoprato >= 30 && tempoprato <= 44) ||
    (opcao == 'feijao' && tempoprato >= 24 && tempoprato <= 35) ||
    (opcao == 'brigadeiro' && tempoprato >= 16 && tempoprato <= 23)) {

    if ((opcao == 'pipoca') || (opcao == 'carne')) {
        if ((opcao == 'pipoca') || (opcao == 'carne')) {

            return `A ${opcao} queimou !`

        }

    }
    else ((opcao == 'macarrao') || (opcao == 'feijao') || (opcao == 'brigadeiro')

        )
        return `O ${opcao} queimou !`
    }

    if ((opcao == 'pipoca' && tempoprato >= 30) ||
    (opcao == 'macarrao' && tempoprato >= 24) ||
    (opcao == 'carne' && tempoprato >=45 ) ||
    (opcao == 'feijao' && tempoprato >=36 ) ||
    (opcao == 'brigadeiro' && tempoprato >= 24)) {

    return `Kaaabooooom!`


}

}
    console.log(Microondas(opcao, tempoprato));
