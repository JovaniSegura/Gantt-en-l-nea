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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ({

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(61);


/***/ }),

/***/ 61:
/***/ (function(module, exports) {

/*
 * updated by @levkar at https://github.com/DHTMLX/gantt/pull/10
 */

gantt.locale = {
	date: {
		month_full: ["Ocak","??ubat","Mart","Nisan","May??s","Haziran","Temmuz","A??ustos","Eyl??l","Ekim","Kas??m","Aral??k"],
		month_short: ["Oca","??ub","Mar","Nis","May","Haz","Tem","A??u","Eyl","Eki","Kas","Ara"],
		day_full: ["Pazar","Pazartesi","Sal??","??ar??amba","Per??embe","Cuma","Cumartesi"],
		day_short: ["Paz","Pzt","Sal","??ar","Per","Cum","Cmt"]
	},
	labels: {
		new_task: "Yeni g??rev",
		dhx_cal_today_button: "Bug??n",
		day_tab: "G??n",
		week_tab: "Hafta",
		month_tab: "Ay",
		new_event: "Yeni etkinlik",
		icon_save: "Kaydet",
		icon_cancel: "??ptal",
		icon_details: "Detaylar",
		icon_edit: "D??zenle",
		icon_delete: "Sil",
		confirm_closing: "", //Your changes will be lost, are your sure ?
		confirm_deleting: "G??rev silinecek, emin misiniz?",
		section_description: "A????klama",
		section_time: "Zaman Aral??????",
		section_type: "Tip",
		/* grid columns */

		column_wbs : "WBS",
		column_text: "G??rev Ad??",
		column_start_date: "Ba??lang????",
		column_duration: "S??re",
		column_add: "",

		/* link confirmation */
		link: "Ba??lant??",
		confirm_link_deleting: "silinecek",
		link_start: " (ba??lang????)",
		link_end: " (biti??)",

		type_task: "G??rev",
		type_project: "Proje",
		type_milestone: "Kilometreta????",


		minutes: "Dakika",
		hours: "Saat",
		days: "G??n",
		weeks: "Hafta",
		months: "Ay",
		years: "Y??l",

		/* message popup */
		message_ok: "OK",
		message_cancel: "??ptal"
	}
};

/***/ })

/******/ });