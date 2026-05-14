function executarLogica() {
    // 1. INPUTS (Entradas)
    const v1 = Number(document.getElementById('valorA').value);
    const v2 = Number(document.getElementById('valorB').value);
    const operador = document.getElementById('op').value;
    
    // 2. PROCESSAMENTO
    let resultado;
    let explicacao = "";

    switch(operador) {
        case "+": 
            resultado = v1 + v2; 
            explicacao = "Adição: Soma os dois valores numéricos.";
            break;
        case "-": 
            resultado = v1 - v2; 
            explicacao = "Subtração: Subtrai o segundo valor do primeiro.";
            break;
        case "%": 
            resultado = v1 % v2; 
            explicacao = `Módulo: O resto que sobra ao dividir ${v1} por ${v2} é ${resultado}.`;
            break;
        case "===": 
            resultado = (v1 === v2); 
            explicacao = "Igualdade Estrita: Verifica se valor e tipo são idênticos.";
            break;
        case "**": 
            resultado = v1 ** v2; 
            explicacao = `Potência: ${v1} elevado a ${v2}.`;
            break;
        case ">": 
            resultado = (v1 > v2); 
            explicacao = `Comparação: É verdade que ${v1} é maior que ${v2}? ${resultado}.`;
            break;
        default: 
            resultado = eval(v1 + operador + v2);
            explicacao = "Operação padrão realizada.";
    }

    // 3. OUTPUT (Saída detalhada)
    const container = document.getElementById('resultado-container');
    container.classList.remove('hidden');
    
    document.getElementById('valor-res').innerText = resultado;
    document.getElementById('explicacao-tecnica').innerText = "📚 DETALHE TÉCNICO: " + explicacao;
}