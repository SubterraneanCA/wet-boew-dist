/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-07
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Chinese dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "zh",
	"%lang-en": "Chinese",
	"%lang-fr": "chinois",
	"%lang-nat": "繁體字",
	"%all": "全部",
	"%home": "首頁",
	"%main-page": "主頁",
	"%tphp": "頁首",
	"%you-are-in": "你目前在",
	"%welcome-to": "歡迎",
	"%load": "下載中…",
	"%process": "處理...",
	"%srch": "搜尋",
	"%srch-terms": "搜尋項目",
	"%no-match": "找不到合適項目",
	"%matches": {
		"mixin": "找到[MIXIN]項目"
	},
	"%menu": "選單",
	"%settings": "目前",
	"%langs": "語言",
	"%about": "關於",
	"%curr": "目前",
	"%hide": "隱藏",
	"%err": "錯誤",
	"%colon": "：",
	"%hyphen": "-",
	"%full-stop": "。",
	"%comma-space": "，",
	"%space": "&#173;",
	"%start": "開始",
	"%stop": "停止",
	"%back": "返回",
	"%cancel": "取消",
	"%new-win": "用新視窗打開",
	"%min-ago": "一分鐘前",
	"%coup-mins": "數分鐘前",
	"%mins-ago": {
		"mixin": "[MIXIN]分鐘前"
	},
	"%hour-ago": "一小時前",
	"%hours-ago": {
		"mixin": "[MIXIN]數小時前"
	},
	"%days-ago": {
		"mixin": "[MIXIN]數天前"
	},
	"%yesterday": "昨天",

	"%nxt": "下一筆",
	"%nxt-r": "下一筆（右箭頭鍵）",
	"%prv": "上一筆",
	"%prv-l": "上一筆（左箭頭鍵）",
	"%first": "第一筆",
	"%last": "最後一筆",
	"%close-esc": "關閉（Esc鍵）",
	"%show": "顯示",

	/* Archived Web page template */
	"%arch-pg": "此網頁已經封存。",
	/* Menu bar */
	"%sm-hlp": "使用 『確定』鍵進入次選單，離開請按Esc鍵",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "旋轉鍵-停止",
		"on": "旋轉鍵-啟動"
	},
	"%tab-list": "籤頁列表",
	"%tab-pnl-end1": "此籤頁選項結束。",
	"%tab-pnl-end2": "返回到籤頁列表",
	"%tab-pnl-end3": "或繼續其餘的頁面。",
	/* Multimedia player */
	"%play": "播放",
	"%pause": "暫停",
	"%open": "打開",
	"%close": "停止",
	"%rew": "倒轉",
	"%ffwd": "快轉",
	"%mute": {
		"on": "靜音",
		"off": "聲音"
	},
	"%cc": {
		"off": "隱藏字幕",
		"on": "顯示字幕"
	},
	"%cc-err": "載入字幕錯誤",
	"%adesc": {
		"on": "有音訊說明",
		"off": "無音訊說明"
	},
	"%prog-bar": "使用左或右箭頭鍵來前進或倒轉音訊資料",
	"%no-video": "你的瀏覽器並不支援播放此視訊。",
	"%pos": "目前位置：",
	"%perc": "播放百分比：",
	"%dur": "所有時間：",
	"%buff": "緩衝中：",
	/* Share widget */
	"%fav": "最愛",
	"%email": "電子郵件",
	"%shr-txt": "分享此頁",
	"%shr-hnt": "與{s}",
	"%shr-email-sub": "有興趣的網頁",
	"%shr-email-bd": "我想你對此網頁可能有興趣\n{t}{u}",
	"%shr-fav-ttl": "（收藏此頁）",
	"%shr-man": "關閉對話框，並用Ctrl-D標記此頁。",
	"%shr-all": "顯示全部{n}",
	"%shr-all-ttl": "所有書籤網站",
	"%shr-disc": "沒有明示或暗示保證代言任何產品或服務。",
	/* Form validation */
	"%frm-nosubmit": "本表格不能傳送因為",
	"%errs-fnd": "內有錯誤。",
	"%err-fnd": "出現錯誤。",
	/* Date picker */
	"%date-hide": "隱藏行事曆",
	"%date-show": "選擇一個日期：",
	"%date-sel": "選擇",
	/* Calendar */
	"%days": ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
	"%mnths": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
	"%cal": "日曆",
	"%currDay": "現在日期",
	"%cal-goToLnk": "轉到<span class=\"wb-inv\">月份的一年</span>",
	"%cal-goToTtl": "轉到某年的某月份",
	"%cal-goToMnth": "月：",
	"%cal-goToYr": "年：",
	"%cal-goToBtn": "前往",
	"%prvMnth": "上一月：",
	"%nxtMnth": "下一月：",
	/* Slideout */
	"%show-toc": "顯示表的內容",
	"%hide-toc": "隱藏表格的內容",
	"%toc": "目錄",
	/* Lightbox */
	"%lb-curr": "所有項目%curr%的%total%",
	"%lb-xhr-err": "本內容無法載入。",
	"%lb-img-err": "圖形無法顯示。",
	/* Charts widget */
	"%table-mention": "表格",
	"%table-following": "圖表，詳細內容在表格中。",
	/* Session timeout */
	"%st-to-msg-bgn": "#min#＃分#sec#秒，您的會話將自動失效。",
	"%st-to-msg-end": "選擇“繼續會話”來擴展您的會話。",
	"%st-msgbx-ttl": "連線超時警告",
	"%st-alrdy-to-msg": "很抱歉，您的連線已經過期。請重新登錄。",
	"%st-btn-cont": "繼續會話",
	"%st-btn-end": "現在結束會話",
	/* Toggle details */
	"%td-toggle": "切換所有",
	"%td-open": "展開全部",
	"%td-close": "關閉全部",
	"%td-ttl-open": "展開所有內容",
	"%td-ttl-close": "關閉所有的內容",
	/* Table enhancement */
	"%sortAsc": ": 使用大小排序",
	"%sortDesc": "：使用小大排序",
	"%emptyTbl": "沒有可用的數據",
	"%infoEntr": "顯示_START_到_END_的_TOTAL_個項目",
	"%infoEmpty": "顯示0到0的0個項目",
	"%infoFilt": "（共_MAX_項過濾）",
	"%info1000": ",",
	"%lenMenu": "顯示_MENU_項",
	/* Geomap */
	"%geo-mapcontrol": "地圖控制",
	"%geo-zoomin": "放大",
	"%geo-zoomout": "缩小",
	"%geo-zoomworld": "縮放地圖範圍",
	"%geo-zoomfeature": "放大到元素",
	"%geo-scaleline": "地圖比例尺",
	"%geo-mouseposition": "緯度和經度的鼠標光標",
	"%geo-ariamap": "地圖物件。下表中描述上面地圖的功能。",
	"%geo-accessibilize": "<strong>鍵盤用戶：</strong>當在地圖上鎖定，使用箭頭鍵移動地圖，並用加號和減號鍵放大。若縮小到極限時，箭頭鍵將不會平移。",
	"%geo-accessibilizetitle": "說明：地圖導航",
	"%geo-togglelayer": "該層的顯示切換",
	"%geo-hiddenlayer": "這層隱藏。",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis-加拿大底圖（英語或法語",
	"%geo-select": "選擇",
	"%geo-labelselect": "在地圖上檢查選擇的元素",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "基本HTML版本",
	"%wb-enable": "標準版本",
	/* Template */
	"%tmpl-signin": "登入"
};

window.i18nObj = ind;

})( window );