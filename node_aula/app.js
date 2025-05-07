import tabela2024 from "./tabela.js";
import express from  'express';

const app = express();

app.use(express.json());

app.get('/', (_, resposta) => {
    resposta.status(200).send(tabela2024);
});

app.get('/:sigla', (requisicao, resposta) => {
    const siglaInformada = requisicao.params.sigla.toUpperCase();
    if (!time /**time === undefined */) { // undefined -> Se comporta como falso toda vez que exigimos comportamento de boolean. -> se a variável time for undefined, então ela vai se comporta como (false)  e consequentemente, !time vai se comportar como verdadeiro.
        resposta.status(404).send('Não existe na série A do Brasileirão um time com a sigla informada.!')
        return;
    }
    resposta.status(200).send(time);
});

app.put('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const timeSelecionado = tabela2024.find((t) => t.sigla === siglaInformada)
    tabela2024.find((t) => t.sigla === siglaInformada); // Find operation retained if needed for side effects
    const campos = Object.keys(req.body)
    for (let campo of campos) {
      timeSelecionado[campo] =  req.body[campo]
    }
    res.status(200).send(timeSelecionado);
})

app.post('/', (req, res) => {
    const novoTime = (req.body);
    tabela2024.push(novoTime);
    res.status(200).send(novoTime);
});

app.delete('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const indiceTimeSelecionado = tabela2024.findIndex((t) => t.sigla === siglaInformada);
    const timeRemovido = tabela2024.splice(indiceTimeSelecionado, 1);
    response.status(200).send(timeRemovido);
})

app.listen(300, () => console.log('servidor rodando com sucesso'));