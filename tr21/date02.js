function contagemAnoNovo() {
    const agora = new Date();
    const AnoNovo = new Date('01 01 2026');
    
    const tempoRestante = AnoNovo.getTime() - agora.getTime();
    
    const diasRestantes = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horasRestantes = Math.floor((tempoRestante - diasRestantes * 1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutosRestantes = Math.floor((tempoRestante - diasRestantes * 1000 * 60 * 60 * 24 - horasRestantes * 1000 * 60 * 60) / (1000 * 60));
    const segundosRestantes = Math.floor((tempoRestante - 
    diasRestantes * 1000 * 60 * 60 * 24 - 
    horasRestantes * 1000 * 60 * 60  -
    minutosRestantes * 1000 * 60) / 1000);

    // console.log(diasRestantes);
    // console.log(horasRestantes);
    // console.log(minutosRestantes);
    // console.log(segundosRestantes);
        if (tempoRestante > 0) {   
            console.log(`tempo até o ano novo: ${diasRestantes} dias e ${horasRestantes < 10 ? '0' + horasRestantes : horasRestantes
            }:${minutosRestantes < 10 ? '0' + minutosRestantes : minutosRestantes
            }:${segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes
            }`)
        } else {
            console.log('Um feliz 2025 pra você')
        }
}

contagemAnoNovo();
