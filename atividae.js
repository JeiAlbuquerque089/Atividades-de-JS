let list = [];
1=0
while (i < 5){
    let sexo = prompt("Digite o gênero:\n (M) masculino\n (F) feminino:");
    let altura = prompt("Digite a altura:");

    let pessoa = {
        sexo: sexo,
        altura: altura
    }
    list.push(pessoa)
    i+=1
}

let maiorAltura = list[0].altura;
let menorAltura = list[0].altura;
let mediaAlturaHomem = 0;
let somaAlturaMuhlres = 0;
let numMulheres = 0;
let numHomens = 0;

for(let i = 0; i < list.length; i++){
    let pessoa = list[i];

    if (pessoa.altura > maiorAltura){
        maiorAltura = pessoa.altura;
    }
    if(pessoa.altura < menorAltura){
        menorAltura = pessoa.altura;
    }
    if (pessoa.sexo === "F"){
        somaAlturaMuhlres += parseFloat(pessoa.altura)
        numMulheres++;
    }
    else{
        numHomens++;
        mediaAlturaHomem += parseFloat(pessoa.altura)
    }
    if(numHomens > 0){
        mediaAlturaHomem = mediaAlturaHomem/numHomens;
    }
}

console.log("A maior altura do grupo é: " + maiorAltura);
console.log("A menor altura do grupo é " + menorAltura);
console.log(" A media de altura dos Homens são:" + mediaAlturaHomens);
console.log("O número de mulheres no grupo são:" +numMulheres);
