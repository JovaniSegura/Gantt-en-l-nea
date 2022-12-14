/*!
 * @license
 * 
 * dhtmlxGantt v.5.0.5 Stardard
 * This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.
 * 
 * (c) Dinamenta, UAB.
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ({

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

gantt.locale = {
	date: {
		month_full: ["Stycze??", "Luty", "Marzec", "Kwiecie??", "Maj", "Czerwiec", "Lipiec", "Sierpie??", "Wrzesie??", "Pa??dziernik", "Listopad", "Grudzie??"],
		month_short: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa??", "Lis", "Gru"],
		day_full: ["Niedziela", "Poniedzia??ek", "Wtorek", "??roda", "Czwartek", "Pi??tek", "Sobota"],
		day_short: ["Nie", "Pon", "Wto", "??ro", "Czw", "Pi??", "Sob"]
	},
	labels: {
		new_task: "Nowe zadanie",
		dhx_cal_today_button: "Dzi??",
		day_tab: "Dzie??",
		week_tab: "Tydzie??",
		month_tab: "Miesi??c",
		new_event: "Nowe zdarzenie",
		icon_save: "Zapisz",
		icon_cancel: "Anuluj",
		icon_details: "Szczeg????y",
		icon_edit: "Edytuj",
		icon_delete: "Usu??",
		confirm_closing: "", //Zmiany zostan?? usuni??te, jeste?? pewien?
		confirm_deleting: "Zdarzenie zostanie usuni??te na zawsze, kontynuowa???",
		section_description: "Opis",
		section_time: "Okres czasu",
		section_type: "Typ",
		/* grid columns */

		column_wbs : "WBS",
		column_text : "Nazwa zadania",
		column_start_date : "Pocz??tek",
		column_duration : "Czas trwania",
		column_add : "",

		/* link confirmation */
		link: "Link",
		confirm_link_deleting:"zostanie usuni??ty",
		link_start: " (pocz??tek)",
		link_end: " (koniec)",

		type_task: "Zadanie",
		type_project: "Projekt",
		type_milestone: "Milestone",


		minutes: "Minuty",
		hours: "Godziny",
		days: "Dni",
		weeks: "Tydzie??",
		months: "Miesi??ce",
		years: "Lata",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Anuluj"
	}
};



/***/ })

/******/ });