/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-eng.txt / wet-boew.github.io/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-release Build: 2013-04-13 06:26 AM
 *
 */
(function(b){var a=window.pe||{fn:{}};a.dic.ind={"%lang-code":"pt-BR","%lang-eng":"Portuguese (Brazilian)","%lang-fra":"portugais (brésilien)","%lang-native":"português do Brasil","%all":"Todos","%home":"Página inicial","%main-page":"Página principal","%top-of-page":"Início da Página","%you-are-in":"Você está no/a:","%welcome-to":"Bem-vindo/a:","%loading":"carregamento ...","%processing":"processamento ...","%search":"Buscar","%search-for-terms":"Buscar por termo(s):","%no-match-found":"Nenhuma correspondência encontrada","%matches-found":{mixin:"[MIXIN] Encontrada(s) correspondência(s)"},"%menu":"Menu","%settings":"Configurações","%languages":"Idiomas","%about":"Sobre","%current":"(atual)","%hide":"Ocultar","%error":"Erro","%colon":":","%hyphen":"-","%start":"Iniciar","%stop":"Parar","%back":"Anterior","%new-window":"(Abre em uma nova janela)","%minute-ago":"há um minuto","%couple-of-minutes":"há dois minutos","%minutes-ago":{mixin:"há [MIXIN] minutos"},"%hour-ago":"há uma hora","%hours-ago":{mixin:"há [MIXIN] horas"},"%days-ago":{mixin:"há [MIXIN] dias"},"%yesterday":"ontem","%next":"Próxima","%previous":"Anterior","%first":"Primeiro","%last":"Passado","%archived-page":"Está página foi arquiva na Web.","%sub-menu-help":"(abrir o sub-menu com o botão ENTER e fechá-lo com o botão ESC)","%tab-rotation":{disable:"Interromper a rotação das abas",enable:"Iniciar a rotação das abas"},"%tab-list":"Lista Tab","%tab-panel-end-1":"Final deste painel da guia.","%tab-panel-end-2":"Voltar para a lista de guias","%tab-panel-end-3":"ou continuar com o resto da página.","%play":"Executar","%pause":"Pausar","%open":"Abrir","%close":"Fechar","%rewind":"Voltar","%fast-forward":"Avançar","%mute":{enable:"Ativar o modo silencioso",disable:"Desativar o modo silencioso"},"%closed-caption":{disable:"Ocultar a legenda",enable:"Mostrar a legenda"},"%closed-caption-error":"Ocorreu um erro no carregamento da legenda","%audio-description":{enable:"Ativar a descrição de áudio",disable:"Desativar a descrição de áudio"},"%progress-bar":"usar os botões das setas esquerda e direita para voltar ou avançar a execução das mídias","%no-video":"Seu navegador não parece ter capacidade para reproduzir este vídeo. Favor baixar o vídeo abaixo.","%position":"Posição atual:","%percentage":"Porcentagem de reprodução:","%duration":"Tempo total:","%buffered":"Armazenado em área de memória temporária","%favourite":"Favoritos","%email":"Correio eletrônico","%share-text":"Compartilhar esta página","%share-hint":"com {s}","%share-email-subject":"Página interessante","%share-email-body":"Espero que esta página seja do seu interesse:n{t} ({u})","%share-fav-title":"(marcar esta página)","%share-manual":"Favor fechar este diálogo e teclar Ctrl+D para adicionar esta página aos seus favoritos.","%share-showall":"Mostrar tudo ({n})","%share-showall-title":"Todas as páginas salvas nos favoritos","%share-disclaimer":"Não endosso de quaisquer produtos ou serviços é expressa ou implícita","%form-not-submitted":"O formulário não pode ser submetido porque","%errors-found":"erros encontrados.","%error-found":"erro encontrado.","%datepicker-hide":"Ocultar o calendário","%datepicker-show":"Selecionar uma data de um calendário para o campo:","%datepicker-selected":"Selecionado","%calendar-weekDayNames":["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],"%calendar-monthNames":["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],"%calendar-currentDay":"(hoje)","%calendar-goToLink":'Ir para o<span class="wb-invisible"> mês do ano</span>',"%calendar-goToTitle":"Ir para o mês do ano","%calendar-goToMonth":"Mês:","%calendar-goToYear":"Ano:","%calendar-goToButton":"Ir","%calendar-cancelButton":"Cancelar","%calendar-previousMonth":"Mês anterior:","%calendar-nextMonth":"Próximo mês:","%show-toc":"Exibir","%show-text":"Ver tabela de conteúdos","%hide-text":"Ocultar tabela de conteúdos","%table-contents":"conteúdo","%lb-current":"Ítem {current} de {total}","%lb-next":"Próximo ítem","%lb-prev":"Ítem anterior","%lb-xhr-error":"O carragemento deste conteúdo falhou.","%lb-img-error":"O carregamento desta imagem falhou.","%lb-slideshow":"slideshow","%jqm-expand":"clicar para ver o conteúdo","%jqm-collapse":"clicar para ocultar o conteúdo","%jqm-clear-search":"Apagar o texto da pesquisa","%jqm-filter":"Filtrar os ítens","%jqm-tbl-col-toggle":"Colunas","%table-mention":"Tabela","%table-following":"Gráfico. Mais detalhes na tabela a seguir.","%st-timeout-msg":'Sua sessão está prestes a expirar, você tem até #expireTime# para ativar o botão "OK" abaixo para prolongar a sua sessão.',"%st-msgbox-title":"Aviso de tempo limite da sessão","%st-already-timeout-msg":"Desculpe a sessão já expirou. Por favor, faça login novamente.","%td-toggle":"Alternar todos","%td-open":"Expandir todos","%td-close":"Reduzir tudo","%td-ttl-open":"Expandir todas as seções de conteúdo","%td-ttl-close":"Recolher todas as seções de conteúdo","%sSortAscending":"ativar para ascendente tipo","%sSortDescending":"ativar para descer tipo","%sEmptyTable":"Não há dados disponíveis na tabela","%sInfo":"Exibindo _START_ a _END_ de _TOTAL_ entradas","%sInfoEmpty":"Exibindo 0 a 0 de 0 entradas","%sInfoFiltered":"(filtrado a partir de entradas _MAX_ totais)","%sInfoThousands":"&#160;","%sLengthMenu":"Mostrar _MENU_ entradas","%geo-mapcontrol":"Controle de mapa","%geo-panup":"Mover para cima","%geo-pandown":"Mover para baixo","%geo-panleft":"Mover para a esquerda","%geo-panright":"Mover para a direita","%geo-zoomin":"Mais zoom","%geo-zoomout":"Menos zoom","%geo-zoomworld":"Zoom para mapear extens","%geo-zoomslider":"Arraste para dar zoom","%geo-zoomfeature":"Zoom ao elemento","%geo-ariamap":"Objeto de mapa. As descrições das características do mapa estão na tabela abaixo.","%geo-accessibilize":"<strong>Usuários de teclado:</strong> Quando o mapa está em foco, use as teclas de setas para mover o mapa e as teclas mais e menos para ampliar. As teclas de seta não vai percorrer o mapa quando ampliada na medida em mapa.","%geo-accessibilizetitle":"Instrucciones: Cómo navegar por el mapa","%geo-togglelayer":"Alternar a exibição da camada","%geo-hiddenlayer":"Esta camada está oculto.","%geo-basemapurl":"http://geogratis.gc.ca/maps/CBMT","%geo-basemaptitle":"CBMT","%geo-select":"Selecionar","%geo-labelselect":"Verifique para selecionar o elemento no mapa","%pe-disable":"Versão HTML simplificada","%pe-enable":"Versão padrão"};a.document.trigger("languageloaded");window.pe=a;return a}(jQuery));