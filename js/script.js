let saldoValor = saldoDaContaAleatorio(100, 5000);

function saldoDaContaAleatorio(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function saldo() {
    const saldoElement = document.getElementById('saldo');
    saldoElement.textContent = `R$ ${saldoValor.toFixed(2)}`;
}

function sacar() {
    const saque = parseFloat(document.getElementById('saque').value);
    if (isNaN(saque) || saque <= 0) {
        swal({
            title: "Inválido",
            text: "Digite um valor válido para o saque.",
            icon: "error",
            button: "Tentar Novamente",
          });
        return;
    }

    if (saque > saldoValor) {
        swal({
            title: "Inválido",
            text: "Saldo insuficiente para o saque.",
            icon: "error",
            button: "Tentar Novamente",
          });
        return;
    }

    saldoValor -= saque;
    saldo();
    swal({
        title: "Sucesso",
        text: `Saque de R$ ${saque.toFixed(2)} realizado com sucesso.`,
        icon: "success",
        button: "Concluir",
      });
    saque = document.getElementById('saque').value= '';
}

function depositar() {
    const deposito = parseFloat(document.getElementById('deposito').value);
    if (isNaN(deposito) || deposito <= 0) {
        swal({
            title: "Inválido",
            text: 'Digite um valor válido para o depósito.',
            icon: "error",
            button: "Tentar Novamente",
          });
        return;
    }

    saldoValor += deposito;
    saldo();
    swal({
        title: "Sucesso",
        text: `Depósito de R$ ${deposito.toFixed(2)} realizado com sucesso.`,
        icon: "success",
        button: "Concluir",
      });
    deposito = document.getElementById('deposito').value = '';
}

saldo();
