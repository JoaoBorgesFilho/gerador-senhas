// Capturando os elementos do HTML
const tamanhoInput = document.getElementById("tamanho");
const maiusculasCheckbox = document.getElementById("maiusculas");
const minusculasCheckbox = document.getElementById("minusculas");
const numerosCheckbox = document.getElementById("numeros");
const simbolosCheckbox = document.getElementById("simbolos");

const botaoGerar = document.getElementById("gerar");
const resultadoInput = document.getElementById("resultado");
const botaoCopiar = document.getElementById("copiar");

// Conjuntos de caracteres
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// Função para gerar senha
function gerarSenha() {
    const tamanho = Number(tamanhoInput.value);
    let caracteresPermitidos = "";
    let senha = "";

    if (tamanho < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return;
    }
    if (maiusculasCheckbox.checked) {
        caracteresPermitidos += letrasMaiusculas;
    }

    if (minusculasCheckbox.checked) {
        caracteresPermitidos += letrasMinusculas;
    }

    if (numerosCheckbox.checked) {
        caracteresPermitidos += numeros;
    }

    if (simbolosCheckbox.checked) {
        caracteresPermitidos += simbolos;
    }

    if (caracteresPermitidos === "") {
        alert("Selecione pelo menos um tipo de caractere.");
        return;
    }

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        senha += caracteresPermitidos[indiceAleatorio];
    }

    resultadoInput.value = senha;
}

// Evento do botão Gerar
botaoGerar.addEventListener("click", gerarSenha);

// Evento do botão Copiar
botaoCopiar.addEventListener("click", () => {
    if (resultadoInput.value === "") {
        alert("Nenhuma senha para copiar.");
        return;
    }

    navigator.clipboard.writeText(resultadoInput.value);
    alert("Senha copiada!");
});
