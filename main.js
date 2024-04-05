const botoes = document.querySelectorAll(".botao");
console.log(botoes)
for(let i=0; i <  botoes.length; i++){
    console.log(i);
}
botoes[i].onclick = function(){
    
    botoes[i].classList.add("ativo");
}
for(let j=0;j<botoes.length;j++){
    botoes[j].classList.remove("ativo");
}
contadores[0].textContent = calculaTempo(tempoObjetivo1);
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor (tempoFinal / 1000);
    return segundos;
  }
const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
const tempoObjetivo4 = new Date("2024-02-01T00:00:00");

for (let i=0; i<contadores.length;i++)contadores[1].textContent = calculaTempo(tempos[i]);
contadores[2].textContent = calculaTempo(tempos[2]);
contadores[3].textContent = calculaTempo(tempos[3]);
contadores[4].textContent = calculaTempo(tempos[4]);
const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
contadores[0].textContent = calculaTempo(tempos[0]); 
for (let i=0; i<contadores.length;i++){contadores[i].textContent = calculaTempo(tempos[i]); }
              