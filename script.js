const saldo = document.getElementById('saldo');
const deposito = document.getElementById('deposito');
const saque = document.getElementById('saque');
const valor = document.getElementById('valor');
const mensagem = document.getElementById('mensagem');



function consultarSaldo(saldo) {
    mensagem.innerHTML = (`Seu saldo atual é de R$${saldo}`);
}

function realizarDeposito(saldo, deposito) {
    saldo += deposito;
    mensagem.innerHTML = ('Deposito realizado com sucesso!');
    return saldo;
}

function realizarSaque(saldo, saque) {
    saque = saque;

    if (saque > saldo) {
        mensagem.innerHTML = ('Não é possível realizar o saque');
        return saldo;
    }

    saldo -= saque;
    mensagem.innerHTML = ('Saque realizado com sucesso!');
    return saldo;
}