import tabela2024 from "./tabela.js";
import express from  'express';

const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(tabela2024);
});

app.get('/:sigla', (requisicao, resposta) => {
    const siglaInformada = requisicao.params.sigla.toUpperCase();
    const time = tabela2024.find(infoTime => infoTime.sigla === siglaInformada);
    if (!time /**time === undefined */) { // undefined -> Se comporta como falso toda vez que exigimos comportamento de boolean. -> se a variável time for undefined, então ela vai se comporta como (false)  e consequentemente, !time vai se comportar como verdadeiro.
        resposta.status(404).send('Não existe na série A do Brasileirão um time com a sigla informada.!')
        return;
    }
    resposta.status(200).send(time);
});

app.listen(300, () => console.log('servidor rodando com sucesso'));