let saldoValor = 0;

function saldo() {
    const saldoElement = document.getElementById('saldo');
    saldoElement.textContent = `R$ ${saldoValor.toFixed(2)}`;
}

function sacar() {
    const saque = parseFloat(document.getElementById('saque').value);
    if (isNaN(saque) || saque <= 0) {
        alert('Digite um valor válido para o saque.');
        return;
    }

    if (saque > saldoValor) {
        alert('Saldo insuficiente para o saque.');
        return;
    }

    saldoValor -= saque;
    saldo();
    alert(`Saque de R$ ${saque.toFixed(2)} realizado com sucesso.`);
}

function depositar() {
    const deposito = parseFloat(document.getElementById('deposito').value);
    if (isNaN(deposito) || deposito <= 0) {
        alert('Digite um valor válido para o depósito.');
        return;
    }

    saldoValor += deposito;
    saldo();
    alert(`Depósito de R$ ${deposito.toFixed(2)} realizado com sucesso.`);
}

saldo();
