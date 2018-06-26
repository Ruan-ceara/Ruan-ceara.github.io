let botoesAr = document.querySelectorAll('.botao-expansao');

function expandir(evt){
  let botaoEl = evt.currentTarget;
  let spanEl = botaoEl.parentNode;
  let h3El = spanEl.parentNode;
  let divEl = h3El.parentNode;
  let jogadorEl = divEl.querySelectorAll(".jogadores")[0];
  jogadorEl.classList.toggle('expandido');
  if(botaoEl.innerHTML=='+') botaoEl.innerHTML='-';
  else botaoEl.innerHTML='+';
}

for (var i = 0; i < botoesAr.length; i++) {
  botoesAr[i].addEventListener('click', expandir);
}
