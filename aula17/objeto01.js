let amigo = {nome: 'joão', 
    sexo: 'M', 
    peso: 85.5, 
    engordar(p) {
        console.log('Engordou')
        this.peso += p
    }}

amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`) 


