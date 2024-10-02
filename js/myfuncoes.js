
//pega Ano Atual e coloca no paragrafo através do id = copyright_p
var dataAtual  = new Date();
var anoAtual = dataAtual.getFullYear();
copyright_p.innerHTML = "Copyright © " +  anoAtual + " MercadoFast";


