/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-rc1-development Build: 2013-04-03 07:09 PM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-fegc",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,gridsmenu:null,menu:null,init:function(){b.gcnb=pe.header.find("#gcwu-gcnb");b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");b.gridsmenu=pe.main.find(".module-menu-section");var j=pe.menu.navcurrent(b.menubar,b.bcrumb),e=j.parents("div.mb-sm"),h,i,f=pe.mobile,k=(f?["gcwu-wmms"]:["gcwu-wmms","gcwu-sig"]),l,g,d=pe.print,m=b.sft.length!==0;if(!pe.svg||pe.svgfix){i=k.length;while(i--){l=document.getElementById(k[i]);if(l!==null){g=l.getElementsByTagName("object");if(g.length>0){g=g[0];g.parentNode.innerHTML=g.parentNode.innerHTML.replace(/<object[\s\S]*?\/object>/i,((d||!m)?g.innerHTML:g.innerHTML.replace(".png","-w.png")))}else{if(m){h=l.getElementsByTagName("img");if(h.length>0){h=h[0];h.src=(d?h.src:h.src.replace(".png","-w.png"))}}}}}}if(e.length!==0){e.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){j=pe.menu.navcurrent(pe.secnav,b.bcrumb);e=j.parents("ul");e.prev().children("a").addClass("nav-current-nocss")}if(b.gridsmenu.length!==0){j=pe.menu.navcurrent(b.gridsmenu,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var v,K="",e,m,R=pe.dic.get("%settings"),z,r,f,l,P,U="",t='<a data-role="button" data-iconpos="notext"',B=' data-rel="popup" data-position-to="window"',o=t+B,C='<div data-role="popup" data-overlay-theme="a"',F='<div data-role="header"',T=F+"><h1>",A=' data-theme="c" class="ui-corner-all">',p=F+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',Q=t+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",N=o+' data-icon="back" class="ui-btn-left"',L=">"+pe.dic.get("%back")+"</a>",S="</div></div>",n='<ul data-role="listview"',w="",H,k,s,q,G,g,d,O,u,I,E,y=c(document),M,j,x,J,D;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.bcrumb.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");r=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");v=C+' id="jqm-wb-mb">'+T+e+"</h1>"+Q+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){E=b.bcrumb[0];M=E.getElementsByTagName("a")[0].href;v+='<section><div id="jqm-mb-location-text">'+E.innerHTML+"</div></section>"}else{v+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){K+="<section><div><h2>"+r.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>"}if(b.menubar.length!==0){K+="<section><div><h2>"+b.psnb.children(":header")[0].innerHTML+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}v+='<div id="jqm-mb-menu"></div></nav></div></div></div>';U+=v;b.menu=K;w+=o+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){m=pe.dic.get("%search");f=b.search[0];l=f.innerHTML;f=f.getElementsByTagName("input");u=f.length;while(u--){f[u].setAttribute("data-role","none")}P=C+' id="jqm-wb-search">'+T+m+"</h1>"+Q+'</div><div data-role="content"><div>'+l.substring(l.indexOf("<form"))+"</div></div></div>";U+=P;w+=o+' data-icon="search" href="#jqm-wb-search">'+m+"</a>"}j='<div data-role="header"><div class="ui-title"></div><map id="gcwu-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof M!=="undefined"){j+=t+' href="'+M+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){j+=t+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(w.length!==0){j+=w}j+=o+' href="#popupSettings" data-icon="gear">'+R+"</a></map></div>";b.gcnb.children("#gcwu-gcnb-in").before(j);b.title[0].className+=" ui-bar-b";D=document.getElementById("wb-session");q=b.gcnb.find('li[id*="-lang"]');z=C+' id="popupSettings"'+A;z+=p+R+"</h1>"+Q+"</div>";z+=h+n+">";if(D!==null){J=D.getElementsByClassName("settings");for(O=0,u=J.length;O!==u;O+=1){z+="<li>"+J[O].innerHTML+"</li>"}z+="<li>"+D.getElementsByClassName("session")[0].innerHTML+"</li>"}if(q.length!==0){z+='<li><a href="#popupLanguages"'+B+">"+pe.dic.get("%languages")+"</a></li>"}z+='<li class="ui-corner-bottom"><a href="#popupAbout"'+B+">"+pe.dic.get("%about")+"</a></li>";z+="</ul>"+S;if(q.length!==0){z+=C+' id="popupLanguages"'+A;z+=p+pe.dic.get("%languages")+"</h1>"+N+' href="#popupSettings"'+L+Q+"</div>";z+=h+n+">";if(q.filter('[id*="-lang-current"]').length===0){z+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}I=q.get();u=I.length;O=u;while(O--){E=I[O];k=E.getElementsByTagName("a")[0];z+="<li"+(O===0?' class="ui-corner-bottom"':"");if(E.id.indexOf("-lang-current")!==-1){z+='><a href="javascript:;" class="ui-disabled">'+E.innerHTML+' <span class="current">'+pe.dic.get("%current")+"</span></a></li>"}else{z+='><a href="'+k.href+'" lang="'+k.getAttribute("lang")+'">'+k.innerHTML+"</a></li>"}}z+="</ul>"+S}z+=C+' id="popupAbout"'+A;z+=p+pe.dic.get("%about")+"</h1>"+N+' href="#popupSettings"'+L+Q+"</div>";z+=h;z+='<div class="site-app-title"><div class="ui-title">'+b.title.text()+"</div></div>";E=pe.main.find("#gcwu-date-mod").children();if(E.length!==0){d=E[1];if(d.getElementsByTagName("time").length===0){z+='<div class="app-version">'+E[0].innerHTML+" "+d.innerHTML+"</div>"}}z+=n+' data-inset="true">';H=document.getElementById("gcwu-tctr").getElementsByTagName("a");for(O=0,u=H.length;O!==u;O+=1){k=H[O];z+='<li><a href="'+k.href+'">'+k.innerHTML+"</a></li>"}H=b.sft.find(".gcwu-col-head a").get();for(O=0,u=H.length;O!==u;O+=1){k=H[O];E=k.innerHTML;d=E.toLowerCase();z+="<li"+(O===(u-1)?' class="ui-corner-bottom"':"")+'><a href="'+k.href+'">'+E+"</a></li>"}z+="</ul>"+S;pe.bodydiv.append(U+z)}else{q=document.getElementById("gcwu-lang");if(q!==null){I=q.getElementsByTagName("li");G='<div data-role="navbar"><ul>';for(O=0,u=I.length;O<u;O+=1){E=I[O];k=E.getElementsByTagName("a")[0];G+='<li><a href="'+k.href+'"'+(E.hasAttribute("lang")?' lang="'+E.getAttribute("lang")+'"':"")+' data-theme="a">'+k.innerHTML+"</a></li>"}G+="</ul></div>";document.getElementById("gcwu-ef-lang").parentNode.innerHTML=G;q=document.getElementById("gcwu-other-lang");if(q!==null){q.parentNode.removeChild(q)}}d=document.getElementById("gcwu-tc");if(d!==null){I=d.getElementsByTagName("li");s='<ul class="ui-grid-a">';for(O=0,u=I.length;O<u;O+=1){E=I[O];k=E.getElementsByTagName("a")[0];s+='<li class="ui-block-'+(O%2!==0?"b":"a")+'"><a href="'+k.href+'"'+(E.hasAttribute("lang")?' lang="'+E.getAttribute("lang")+'"':"")+' data-role="button" data-theme="c" data-corners="false">'+k.innerHTML+"</a></li>"}s+="</ul>";d.id="";d.className="";d.setAttribute("data-role","footer");d.innerHTML=s}x=document.getElementById("gcwu-wmms");if(x!==null){pe.footer[0].getElementsByTagName("footer")[0].appendChild(x.cloneNode(true));x.parentNode.removeChild(x)}}pe.add.favicon(pe.add.themecsslocation.replace(/css\/$/,"images/favicon-mobile.png"),"apple-touch-icon","57x57 72x72 114x114 144x144 150x150");y.on("pagecreate",function(){var Y=b.gcnb.find("#gcwu-mnavbar"),aa=pe.bodydiv.find("#jqm-mb-menu"),Z,X,V,W;if(Y.length!==0){if(!Y.hasClass("ui-controlgroup")){Y.controlgroup()}Y.removeClass("wb-hide");if(aa.length!==0){aa.append(b.menu);Y.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){aa.trigger("create");Z=aa.find(".ui-controlgroup");X=Z.get();u=X.length;while(u--){E=X[u];W=E.getElementsByTagName("li")[0];if(W.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&W.className.indexOf("ui-corner-top")===-1){W.className+=" ui-corner-top"}V=Z.eq(u).find(".ui-btn").get();E=V[V.length-1];if(E.className.indexOf("ui-corner-bottom")===-1){E.className+=" ui-corner-bottom"}}})}}function i(ac,ab,af,ae){var ad;c.mobile.showPageLoadingMsg();ad=c.mobile.transitionHandlers.simultaneous("pop",ab,af,ae);ad.done(function(){c.mobile.hidePageLoadingMsg()});return ad}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});y.trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));