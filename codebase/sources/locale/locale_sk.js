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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ({

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

gantt.locale = {
	date: {
		month_full: ["Janu??r", "Febru??r", "Marec", "Apr??l", "M??j", "J??n", "J??l", "August", "September", "Okt??ber", "November", "December"],
		month_short: ["Jan", "Feb", "Mar", "Apr", "M??j", "J??n", "J??l", "Aug", "Sept", "Okt", "Nov", "Dec"],
		day_full: ["Nede??a", "Pondelok", "Utorok", "Streda", "??tvrtok", "Piatok", "Sobota"],
		day_short: ["Ne", "Po", "Ut", "St", "??t", "Pi", "So"]
	},
	labels: {
		new_task: "Nov?? ??loha",
		dhx_cal_today_button: "Dnes",
		day_tab: "De??",
		week_tab: "T????de??",
		month_tab: "Mesiac",
		new_event: "Nov?? udalos??",
		icon_save: "Ulo??i??",
		icon_cancel: "Sp????",
		icon_details: "Detail",
		icon_edit: "Edituj",
		icon_delete: "Zmaza??",
		confirm_closing: "Va??e zmeny nebud?? ulo??en??. Skuto??ne?", //Va??e zm??ny budou ztraceny, opravdu ?
		confirm_deleting: "Udalos?? bude natrvalo vymazan??. Skuto??ne?",
		section_description: "Pozn??mky",
		section_time: "Doba platnosti",
		section_type:"Type",
		/* grid columns */

		column_wbs : "WBS",
		column_text : "Task name",
		column_start_date : "Start time",
		column_duration : "Duration",
		column_add : "",

		/* link confirmation */
		link: "Link",
		confirm_link_deleting:"will be deleted",
		link_start: " (start)",
		link_end: " (end)",

		type_task: "Task",
		type_project: "Project",
		type_milestone: "Milestone",


		minutes: "Minutes",
		hours: "Hours",
		days: "Days",
		weeks: "Week",
		months: "Months",
		years: "Years",

		/* message popup */
		message_ok: "OK",
		message_cancel: "Sp????"
	}
};



/***/ })

/******/ });