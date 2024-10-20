
//pega Ano Atual e coloca no paragrafo através do id = copyright_p
var dataAtual  = new Date();
var anoAtual = dataAtual.getFullYear();
var pegaTitle = document.title;
copyright_p.innerHTML = "Copyright © " + anoAtual + " " + pegaTitle;


