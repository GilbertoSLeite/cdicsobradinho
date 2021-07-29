export default function FormatandoData(value) {
    const dataEntrada = '' + value.toString() + '';
    const data = dataEntrada.substr(8, 2)
    const mes = dataEntrada.substr(5, 2);
    const ano = dataEntrada.substr(0, 4);
    const dataFormatada = (data + '/' + mes + '/' + ano);

    return dataFormatada;
};