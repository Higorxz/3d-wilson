const botoes = document.querySelectorAll(".botao");
const textos  = document.querySelectorAll(".aba-conteudo");


for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function (){
        for(let j = 0 ; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
                                      }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const contadore = document.querySelectorAll("contador");
const tempoObjetivo1 = new date("2025-03-21T00:00:00");
const tempoObjetivo2 = new date("2024-17-21T00:00:00");
const tempoObjetivo3 = new date("2024-17-21T00:00:00");
const tempoObjetivo4 = new date("2025-03-21T00:00:00");

              const tempos = [
                tempoObjetivo1, tempoObjetivo2,tempoObjetivo3,tempoObjetivo4
              ] 
               for (leti=0: i<contadore.length; i++);{
               }
            contadore[0].textContent = calculaTempo(tempo[i]);
              function calculatTempo(tempoObjetivo1){
                let tempoAtual = mew date();
                contadores[0].textConent = tempoObjetivo - tempoAtual
                let segundos = math.floor (tempofinal/1000);
                let minutos = math.floor (segundos/60);
                let horas = math.floor(minutos/60);
                let dias = math.floor(hora/24);

                segundos %= 60;
                minutos %= 60;
                hora %= 24;
                 return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";

              }               
