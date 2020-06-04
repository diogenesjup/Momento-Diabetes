// FUNÇÃO PARA MUDAR A COR DA BORDA DA CENTERED TABS
function mudarAbaBorda(corAbaAtiva,seletor) {

   // TESTAR PARA VER SE REALMENTE A COR ESTÁ SENDO OBTIVA	 
   console.log("%c COR DA BORDA A SER ALTERADA: "+corAbaAtiva,"background:"+corAbaAtiva+";color:#fff;");
   
   // MUDAR A COR DA BORDA
   $(".caixa-abas-conteudo").css("border-bottom","7.5px solid "+corAbaAtiva);


}


// ATIVAR / DESATIVAR ABA DICIONARIO

function toggleChevron(e) {
    $(e.target)
        .prev(".collapse-control")
        .find("i.chevron")
        .toggleClass("fa-chevron-down fa-chevron-up");
}

$(".collapse").on("hidden.bs.collapse", toggleChevron);
$(".collapse").on("shown.bs.collapse", toggleChevron);


// ABRIR UMA PESQUISA ESPECIFICA
function ativarPesquisa(seletor){
  
  console.log("%c INICIANDO FUNÇÃO PARA EXIBIÇÃO DE PESQUISA","background:#D62261;color:#fff;");

  // ATIVANDO SELETOR
  $(seletor).fadeIn("500");

}


// FUNÇÕES PARA DIMINUIR OU AUMENTAR O TAMANHO DA FONTE DO CONTEÚDO DO TEXTO
var tamanhoFonte = 16;
var tamanhoLinha = tamanhoFonte + 10;

function diminuirFonte(){
    
    console.log("%c INICIANDO FUNÇÃO PARA DIMINUIR TAMANHO DA FONTE","background:#D62261;color:#fff;");
    
    tamanhoFonte = tamanhoFonte - 2;
    if(tamanhoFonte==0){
    	tamanhoFonte = 2;
    }
    tamanhoLinha = tamanhoFonte + 10;

    $(".conteudo article p").css("font-size",tamanhoFonte+"px");
    $(".conteudo article ul").css("font-size",tamanhoFonte+"px");
    $(".conteudo article ul li").css("font-size",tamanhoFonte+"px");
    $(".conteudo article ol").css("font-size",tamanhoFonte+"px");
    $(".conteudo article blockquote").css("font-size",tamanhoFonte+"px");

    $(".conteudo article p").css("line-height",tamanhoLinha+"px");
    $(".conteudo article ul").css("line-height",tamanhoLinha+"px");
    $(".conteudo article ul li").css("line-height",tamanhoLinha+"px");
    $(".conteudo article ol").css("line-height",tamanhoLinha+"px");
    $(".conteudo article blockquote").css("line-height",tamanhoLinha+"px");

}


function aumentarFonte(){

	console.log("%c INICIANDO FUNÇÃO PARA AUMENTAR TAMANHO DA FONTE","background:#D62261;color:#fff;");

	tamanhoFonte = tamanhoFonte + 2;
    if(tamanhoFonte==60){
    	tamanhoFonte = 58;
    }
    tamanhoLinha = tamanhoFonte + 10;

    $(".conteudo article p").css("font-size",tamanhoFonte+"px");
    $(".conteudo article ul").css("font-size",tamanhoFonte+"px");
    $(".conteudo article ul li").css("font-size",tamanhoFonte+"px");
    $(".conteudo article ol").css("font-size",tamanhoFonte+"px");
    $(".conteudo article blockquote").css("font-size",tamanhoFonte+"px");

    $(".conteudo article p").css("line-height",tamanhoLinha+"px");
    $(".conteudo article ul").css("line-height",tamanhoLinha+"px");
    $(".conteudo article ul li").css("line-height",tamanhoLinha+"px");
    $(".conteudo article ol").css("line-height",tamanhoLinha+"px");
    $(".conteudo article blockquote").css("line-height",tamanhoLinha+"px");

}

/*

let conteudo = [];

async function getContent(){
   
   conteudo = await fetch('https://momentodiabetes.com.br/wp-json').then(res => res.json());
   if(conteudo.length>0){
      console.log("Deu certo");
      console.log(conteudo);
   }else{
     console.log("Deu errado");
   }
   
}

getContent();

*/