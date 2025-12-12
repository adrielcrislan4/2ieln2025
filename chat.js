console.log("chat.js carregado!");   

function enviarMensagem() {
    let input = document.getElementById("user-input");
    let caixa = document.getElementById("chat-window");
    let texto = input.value.toLowerCase().trim();

    if (texto === "") return;

    // Mensagem do usuário
    caixa.innerHTML += `<div class="user-msg">${input.value}</div>`;

    // Resposta
    let resposta = "";

    if (texto.includes("karnaugh")) {
        resposta = "Mapa de Karnaugh serve para simplificar expressões booleanas.";
    }
    else if (texto.includes("comparador")) {
        resposta = "Um comparador digital é um circuito lógico que compara duas entradas binárias (A e B) e determina qual delas é maior, menor ou igual.";
    }
    else if (texto.includes("display")) {
        resposta = "Um display de 7 segmentos é um componente eletrônico usado para exibir números (0 a 9) e algumas letras simples, muito comum em: calculadoras, relógios digitais, painéis numéricos, medidores eletrônicos e termômetros digitais";
    }
    else {
        resposta = "Não sei responder isso ainda.";
    }

    caixa.innerHTML += `<div class="bot-msg">${resposta}</div>`;
    caixa.scrollTop = caixa.scrollHeight;

    input.value = "";
}
