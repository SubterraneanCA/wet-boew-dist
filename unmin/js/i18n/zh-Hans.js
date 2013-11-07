/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW) wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-07
*/
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Chinese (Simplified) dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"%lang-code": "zh-Hans",
	"%lang-en": "Chinese (Simplified)",
	"%lang-fr": "chinois (simplifié)",
	"%lang-nat": "繁体字",
	"%all": "全部",
	"%home": "首页",
	"%main-page": "主页",
	"%tphp": "页首",
	"%you-are-in": "您在：",
	"%welcome-to": "欢迎到：",
	"%load": "装载...",
	"%process": "处理...",
	"%srch": "搜索",
	"%srch-terms": "搜索短语",
	"%no-match": "无匹配结果",
	"%matches": {
		"mixin": "找到[MIXIN]项目"
	},
	"%menu": "菜单",
	"%settings": "设置",
	"%langs": "语言",
	"%about": "关于",
	"%curr": "（电流）",
	"%hide": "隐藏",
	"%err": "错误",
	"%colon": "：",
	"%hyphen": "-",
	"%full-stop": "。",
	"%comma-space": "，",
	"%space": "&#173;",
	"%start": "开始",
	"%stop": "停止",
	"%back": "返回",
	"%cancel": "取消",
	"%new-win": "以新窗口打开",
	"%min-ago": "一分钟前",
	"%coup-mins": "一两分钟前",
	"%mins-ago": {
		"mixin": "[MIXIN]数分钟前"
	},
	"%hour-ago": "一小时前",
	"%hours-ago": {
		"mixin": "[MIXIN]数小时前"
	},
	"%days-ago": {
		"mixin": "[MIXIN]数天前"
	},
	"%yesterday": "昨天",

	"%nxt": "下一个",
	"%nxt-r": "下一个（右箭头键）",
	"%prv": "上一个",
	"%prv-l": "上一个（左箭头键）",
	"%first": "开始",
	"%last": "末",
	"%close-esc": "关闭（逃生键）",
	"%show": "展示",

	/* Archived Web page template */
	"%arch-pg": "该网页已过期。",
	/* Menu bar */
	"%sm-hlp": "（以输入键打开子菜单，退出键退出）",
	/* Tabbed interface */
	"%tab-rot": {
		"off": "停止标签旋转",
		"on": "开始标签旋转"
	},
	"%tab-list": "标签列表",
	"%tab-pnl-end1": "此选项卡面板的结束。",
	"%tab-pnl-end2": "返回到标签列表",
	"%tab-pnl-end3": "或继续其余的页面。",
	/* Multimedia player */
	"%play": "播放",
	"%pause": "暂停",
	"%open": "打开",
	"%close": "关闭",
	"%rew": "回放",
	"%ffwd": "快进",
	"%mute": {
		"on": "静音",
		"off": "打开声音"
	},
	"%cc": {
		"off": "隐藏字幕",
		"on": "打开字幕"
	},
	"%cc-err": "加载字母错误",
	"%adesc": {
		"on": "使用音频描述",
		"off": "停止音频描述"
	},
	"%prog-bar": "使用左和右箭头前进和后退",
	"%no-video": "您的浏览器无法播放该视频，请下载。",
	"%pos": "现在位置：",
	"%perc": "播放百分比：",
	"%dur": "总时间：",
	"%buff": "缓冲：",
	/* Share widget */
	"%fav": "喜爱",
	"%email": "电釉",
	"%shr-txt": "分享该页面",
	"%shr-hnt": "与{s}",
	"%shr-email-sub": "有趣的页面",
	"%shr-email-bd": "我认为您也许觉得这个页面不错\n{t}{u}",
	"%shr-fav-ttl": "（收藏此页）",
	"%shr-man": "请关闭对话框，并按Ctrl-D收藏此页面。",
	"%shr-all": "展示全部{n}",
	"%shr-all-ttl": "所有收藏的页面",
	"%shr-disc": "没有代言的任何产品或服务的明示或暗示的保证。",
	/* Form validation */
	"%frm-nosubmit": "表格无法提交，因为",
	"%errs-fnd": "找到错误。",
	"%err-fnd": "找到错误。",
	/* Date picker */
	"%date-hide": "隐藏日历",
	"%date-show": "从日历选择一个日期：",
	"%date-sel": "选中",
	/* Calendar */
	"%days": ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
	"%mnths": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
	"%cal": "日历",
	"%currDay": "当天",
	"%cal-goToLnk": "转到<span class=\"wb-inv\">月份的一年</span>",
	"%cal-goToTtl": "转到月份的一年",
	"%cal-goToMnth": "月份：",
	"%cal-goToYr": "年份：",
	"%cal-goToBtn": "去",
	"%prvMnth": "上个月：",
	"%nxtMnth": "下个月：",
	/* Slideout */
	"%show-toc": "显示表的内容",
	"%hide-toc": "隐藏表格的内容",
	"%toc": "内容表",
	/* Lightbox */
	"%lb-curr": "项目%curr%的%total%",
	"%lb-xhr-err": "该内容无法下载。",
	"%lb-img-err": "该图像无法下载。",
	/* Charts widget */
	"%table-mention": "表格",
	"%table-following": "图表。详细资料表如下。",
	/* Session timeout */
	"%st-to-msg-bgn": "#min#＃分#sec#秒，您的会话将自动失效。",
	"%st-to-msg-end": "选择“继续会话”来扩展您的会话。",
	"%st-msgbx-ttl": "会话超时警告",
	"%st-alrdy-to-msg": "很抱歉，您的会话已经过期。请重新登录。",
	"%st-btn-cont": "继续会话",
	"%st-btn-end": "现在结束会话",
	/* Toggle details */
	"%td-toggle": "切换所有",
	"%td-open": "展开全部",
	"%td-close": "关闭全部",
	"%td-ttl-open": "展开所有部分的内容",
	"%td-ttl-close": "关闭所有部分的内容",
	/* Table enhancement */
	"%sortAsc": ": 激活升序排序",
	"%sortDesc": "：激活降序排序",
	"%emptyTbl": "没有可用的数据表中的",
	"%infoEntr": "显示_START_到_END_的_TOTAL_10个项目",
	"%infoEmpty": "显示0到0的0个项目",
	"%infoFilt": "（共_MAX_项过滤）",
	"%info1000": ",",
	"%lenMenu": "显示_MENU_项",
	/* Geomap */
	"%geo-mapcontrol": "地图控制",
	"%geo-zoomin": "放大",
	"%geo-zoomout": "缩小",
	"%geo-zoomworld": "缩放地图范围",
	"%geo-zoomfeature": "放大的元素",
	"%geo-scaleline": "地图比例尺",
	"%geo-mouseposition": "纬度和经度的鼠标光标",
	"%geo-ariamap": "地图对象。在地图上的功能的描述在下面的表中。",
	"%geo-accessibilize": "<strong>键盘用户：</strong>当在地图上的重点是，使用箭头键移动地图，并加号和减号键放大。箭头键将平移地图时，地图范围缩小到。",
	"%geo-accessibilizetitle": "说明：地图导航",
	"%geo-togglelayer": "该层的显示切换",
	"%geo-hiddenlayer": "这层隐藏。",
	"%geo-basemapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-basemaptitle": "BaseMaps_CBMT3978",
	"%geo-basemapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"%geo-attributionlink": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"%geo-attributiontitle": "GeoGratis-加拿大底图（英语或法语",
	"%geo-select": "选择",
	"%geo-labelselect": "检查选择的元素在地图上",
	/* Disable/enable WET plugins and polyfills */
	"%wb-disable": "基本网页格式",
	"%wb-enable": "标准格式",
	/* Template */
	"%tmpl-signin": "登录"
};

window.i18nObj = ind;

})( window );