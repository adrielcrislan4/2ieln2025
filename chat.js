console.log("chat.js carregado!");

function enviarMensagem() {
    let input = document.getElementById("user-input");
    let caixa = document.getElementById("chat-window");
    let texto = input.value.toLowerCase().trim();

    if (texto === "") return;

    // Mensagem do usuário
    caixa.innerHTML += `<div class="user-msg">${input.value}</div>`;

    let resposta = "";

    if (texto.includes("karnaugh") || texto.includes("mapa k")) {
        resposta = "O mapa de Karnaugh é usado para simplificar expressões booleanas, reduzindo o número de portas lógicas no circuito.";
    }
    else if (texto.includes("display")) {
        resposta = "O display de 7 segmentos é composto por LEDs identificados de a até g. Ele pode ser de cátodo comum ou ânodo comum, o que define o nível lógico de acionamento.";
    }
    else if (texto.includes("comparador")) {
        resposta = "Um comparador digital verifica se uma entrada binária é maior, menor ou igual à outra. No laboratório usamos comparadores de 1 bit e o CI 74LS85 para 4 bits.";
    }
    else if (texto.includes("7485")) {
        resposta = "O 74LS85 é um comparador de magnitude de 4 bits. Ele fornece três saídas: A>B, A=B e A<B, facilitando comparações sem usar muitas portas.";
    }
    else if (texto.includes("meio somador")) {
        resposta = "O meio somador soma dois bits A e B. A soma é dada por S = A ⊕ B e o carry por C = A · B.";
    }
    else if (texto.includes("meio subtrator")) {
        resposta = "O meio subtrator realiza a subtração binária. A diferença é S = A ⊕ B e o borrow é C = A' · B.";
    }
    else if (texto.includes("xor")) {
        resposta = "A porta XOR gera saída 1 quando as entradas são diferentes. É muito usada em somadores e comparadores.";
    }
    else if (texto.includes("xnor")) {
        resposta = "A porta XNOR gera saída 1 quando as entradas são iguais. É usada para detectar igualdade entre bits.";
    }
    else {
        resposta = "Pergunta não reconhecida. Tente algo sobre displays, mapas de Karnaugh, comparadores ou circuitos aritméticos.";
    }

    caixa.innerHTML += `<div class="bot-msg">${resposta}</div>`;
    caixa.scrollTop = caixa.scrollHeight;

    input.value = "";
}
