const url = 'https://qs97gn608j.execute-api.sa-east-1.amazonaws.com/latest/api/configuracoes'

export default async function Configuracoes() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json
    } catch (error) {
        console.error('Meu caro Hacker ocorreu o seguinte error: ' + error + ' analise com carinho para que não ocorra novamente.');
        return null
    };
};