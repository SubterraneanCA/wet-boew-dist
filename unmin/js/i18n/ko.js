/*! Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 - v4.0.0-a1-development - 2013-11-24
*/
/*! Modernizr (Custom Build) | MIT & BSD */
/*
 * Web Experience Toolkit (WET) / Boîte à outils de l"expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
/*
----- Korean dictionary (il8n) ---
 */
( function( window ) {
"use strict";
/* main index */
var ind = {
	"lang-code": "ko",
	"lang-nat": "한국어",
	"all": "모든",
	"tphp": "맨 위로",
	"load": "로드 중 ...",
	"process": "처리 중 ...",
	"srch": "검색",
	"no-match": "일치하는 결과가 없습니다",
	"matches": {
		"mixin": "[MIXIN] 일치하는 검색 결과가"
	},
	"curr": "(현재)",
	"hide": "숨기기",
	"err": "오류",
	"colon": ":",
	"hyphen": " - ",
	"full-stop": ".",
	"comma-space": ", ",
	"space": "&#32;",
	"start": "출발",
	"stop": "정지",
	"back": "뒤로",
	"cancel": "취소",
	"min-ago": "분 전",
	"coup-mins": "분 전에 몇",
	"mins-ago": {
		"mixin": "[MIXIN] 분전"
	},
	"hour-ago": "한 시간 전에",
	"hours-ago": {
		"mixin": "[MIXIN]시간 전"
	},
	"days-ago": {
		"mixin": "[MIXIN] 일 전"
	},
	"yesterday": "어제",

	"nxt": "다음",
	"nxt-r": "다음 (오른쪽 화살표 키)",
	"prv": "이전",
	"prv-l": "이전 (왼쪽 화살표 키)",
	"first": "처음으로",
	"last": "마지막",
	"close-esc": "닫다 (Esc 키와)",
	"show": "표시",

	/* Tabbed interface */
	"tab-rot": {
		"off": "탭 회전을 중지",
		"on": "탭 회전을 시작"
	},
	"tab-list": "탭 목록",
	"tab-pnl-end1": "이 탭 패널의 끝.",
	"tab-pnl-end2": "탭 목록으로 돌아 가기",
	"tab-pnl-end3": "또는 페이지의 나머지를 계속합니다.",
	/* Multimedia player */
	"play": "놀이",
	"pause": "중지",
	"open": "열기",
	"close": "가까운",
	"rew": "되감기",
	"ffwd": "빠른 앞으로",
	"mute": {
		"on": "음소거",
		"off": "음소거 해제"
	},
	"cc": {
		"off": "숨기기 캡션 휴무",
		"on": "쇼는 캡션 휴무"
	},
	"cc-err": "로드하는 중 오류가 발생 자막",
	"adesc": {
		"on": "오디오 설명을 사용",
		"off": "오디오 설명을 해제합니다"
	},
	"pos": "현재 위치 :",
	"dur": "총 시간",
	/* Share widget */
	"shr-txt": "이 페이지를 공유",
	"shr-hnt": "{s} 로 ",
	"shr-disc": "제품이나 서비스의 어떠한 보증을 표현하거나 암시합니다.",
	/* Form validation */
	"frm-nosubmit": "양식을 제출 할 수 없습니다 때문에 ",
	"errs-fnd": " 오류가 발견되었습니다.",
	"err-fnd": " 오류가 발견되었습니다.",
	/* Date picker */
	"date-hide": "캘린더 숨기기",
	"date-show": "필드에 달력에서 날짜를 선택:",
	"date-sel": "선택된",
	/* Calendar */
	"days": ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
	"mnths": ["1월", "2월", "행진", "4월", "할 수있다", "6월", "7월", "위엄있는", "9월", "10월", "11월", "12월"],
	"cal": "달력",
	"currDay": "(현재 일)",
	"cal-goToLnk": "<span class=\"wb-inv\">년 개월</span>로 이동",
	"cal-goToTtl": "년 개월로 이동",
	"cal-goToMnth": "월:",
	"cal-goToYr": "년:",
	"cal-goToBtn": "가다",
	"prvMnth": "이전 월: ",
	"nxtMnth": "다음 월: ",
	/* Lightbox */
	"lb-curr": "total 항목 curr",
	"lb-xhr-err": "이 콘텐츠를로드하지 못했습니다.",
	"lb-img-err": "이 이미지를로드하지 못했습니다.",
	/* Charts widget */
	"table-mention": "표",
	"table-following": "차트. 다음 테이블의 세부 사항.",
	/* Session timeout */
	"st-to-msg-bgn": "세션이 #min# 분 #sec# 초에 자동으로 만료됩니다.",
	"st-to-msg-end": "선택은 세션을 확장하는 \"세션 계속\".",
	"st-msgbx-ttl": "세션 시간 초과 경고",
	"st-alrdy-to-msg": "미안 세션이 이미 만료되었습니다. 다시 로그인 해주십시오.",
	"st-btn-cont": "세션을 계속",
	"st-btn-end": "현재 세션을 종료",
	/* Toggle details */
	"td-toggle": "모두 전환",
	"td-open": "모두 확장",
	"td-close": "모두 접기",
	"td-ttl-open": "의 모든 콘텐츠 섹션을 확장합니다",
	"td-ttl-close": "의 모든 콘텐츠 섹션을 축소",
	/* Table enhancement */
	"sortAsc": ": 정렬 오름차순을위한 활성화",
	"sortDesc": ": 정렬 내림차순에 대한 활성화",
	"emptyTbl": "데이터가 테이블에 사용할 수 없습니다",
	"infoEntr": "_TOTAL_ 항목 _END_-_START_보기",
	"infoEmpty": "0 항목 0-0보기",
	"infoFilt": "(_MAX_ 총 ​​항목에서 제외)",
	"info1000": ",",
	"lenMenu": "_MENU_ 항목을 표시",
	/* Geomap */
	"geo-mapctrl": "지도 제어",
	"geo-zmin": "확대",
	"geo-zmout": "축소",
	"geo-zmwrld": "범위를 매핑 할 수 확대",
	"geo-zmfeat": "요소로 확대",
	"geo-sclln": "지도 스케일",
	"geo-msepos": "마우스 커서의 위도와 경도",
	"geo-ariamap": "지도 개체입니다. 지도 기능의 설명은 아래 표에 나와 있습니다.",
	"geo-ally": "<strong>키보드 사용자 :</strong>지도 초점이 때,지도와 확대 할 수있는 플러스 (+) 및 마이너스 키를 이동하려면 화살표 키를 사용합니다. 지도 범위 확대 할 때 화살표 키를지도를 이동하지 않습니다.",
	"geo-allyttl": "방법 :지도 탐색",
	"geo-tgllyr": "레이어의 표시를 전환",
	"geo-hdnlyr": "이 층은 현재 숨겨져 있습니다!",
	"geo-bmapurl": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-bmapttl": "BaseMaps_CBMT3978",
	"geo-bmapurltxt": "http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_TXT_3978/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT3978/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg",
	"geo-attrlnk": "http://geogratis.gc.ca/geogratis/CBM_CBC?lang=en",
	"geo-attrttl": "GeoGratis - 캐나다 기본지도 (영어 나 불어 만)",
	"geo-sel": "선택",
	"geo-lblsel": "지도에서 요소를 선택하려면 선택",
	/* Disable/enable WET plugins and polyfills */
	"wb-disable": "기본 HTML 버전",
	"wb-enable": "표준 버전",
	/* Template */
	"tmpl-signin": "로그인"
};

window.i18nObj = ind;

})( window );

vapour.doc.one( "formLanguages.wb", function() {
/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: KO (Korean; 한국어)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "필수 항목입니다.",
		remote: "항목을 수정하세요.",
		email: "유효하지 않은 E-Mail주소입니다.",
		url: "유효하지 않은 주소입니다.",
		date: "옳바른 날짜를 입력하세요.",
		dateISO: "옳바른 날짜(ISO)를 입력하세요.",
		number: "유효한 숫자가 아닙니다.",
		digits: "숫자만 입력 가능합니다.",
		creditcard: "신용카드번호가 바르지 않습니다.",
		equalTo: "같은값을 다시 입력하세요.",
		accept: "옳바른 확장자가 아닙니다.",
		maxlength: $.format("{0}자를 넘을 수 없습니다. "),
		minlength: $.format("{0}자 이하로 입력하세요."),
		rangelength: $.format("문자 길이를 {0} 에서 {1} 사이의로 입력하세요."),
		range: $.format("{0} 에서 {1} 값을 입력하세요."),
		max: $.format("{0} 이하의 값을 입력하세요."),
		min: $.format("{0} 이상의 값을 입력하세요.")
	});
}(jQuery));


});