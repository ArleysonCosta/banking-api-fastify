//fastify
const fastify = require('fastify')();
const PORT = 3000;

let saldo = 0;

fastify.get('/saldo', (req, res) => {
    res.status(200).send(`Seu saldo é ${saldo}`);
});

fastify.put('/saque', (req,res) => {
    let valor = Number(req.body.valor);
    saldo = saldo - valor;
    res.status(202).send(`Saque realizado com sucesso, seu novo saldo é ${saldo}`);    
});

fastify.post('/depositar', (req,res) =>{
    let valor = Number(req.body.valor);
    saldo = saldo + valor;
    res.status(201).send(`Valor depositado com sucesso,seu novo saldo é ${saldo}`)
});

fastify.patch('/tranferencia', (req,res)=>{
    let valor = Number(req.body.valor);
    let destino = req.body.destino;
    let saldo = saldo - valor;
    res.status(202).send(`tranferencia do valor ${valor} realizada para o ${destino}, saldo atual é ${saldo}.`)
})

fastify.delete('/encerrar', (req,res) =>{
    saldo = 0;
    res.status(205).send('Conta Encerrada');    
});

fastify.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Servidor rodando na porta ${PORT}`)
});
//restify
