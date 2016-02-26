var page =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _pageMask = __webpack_require__(1);
	
	var _pageMask2 = _interopRequireDefault(_pageMask);
	
	var _menu = __webpack_require__(2);
	
	var _menu2 = _interopRequireDefault(_menu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Initialize pageMask component and add it to the document
	var pageMaskOptions = { elementCssClass: 'pageMask' };
	var pageMask = new _pageMask2.default(pageMaskOptions);
	document.body.insertBefore(pageMask.element, document.querySelector('#menu'));
	
	// Initialize menu component
	var menuOptions = {
	    elementHtml: document.querySelector('#menu'), // root element for the menu
	    elementCssClass: 'menu', // the main class
	    elementCssClassList: [], // additional classes
	
	    menuTitle: '<img src="./images/menu-icon.png" alt="menu">', // or '<p>Some text</p>'
	    menuTitleCssClass: 'menu__title',
	
	    pageMask: pageMask, // helper component
	
	    data: [// data for menu tree
	    {
	        title: "Home",
	        cssClassList: [],
	        link: '#'
	    }, {
	        title: "About us",
	        cssClassList: [],
	        link: '#'
	    }, {
	        title: "Our clients",
	        cssClassList: [],
	        link: '#'
	    }, {
	        title: "Products",
	        cssClassList: ['hasChildren'],
	        items: [{
	            title: "product 1.1",
	            cssClassList: [],
	            link: "#"
	        }, {
	            title: "product 1.2",
	            cssClassList: [],
	            link: "#"
	        }, {
	            title: "Other products",
	            cssClassList: ['hasChildren'],
	            items: [{
	                title: "product 2.1",
	                cssClassList: [],
	                link: "#"
	            }, {
	                title: "product 2.2",
	                cssClassList: [],
	                link: "#"
	            }, {
	                title: "Different products 2.3",
	                cssClassList: ['hasChildren'],
	                items: [{
	                    title: "product 2.3.1",
	                    cssClassList: [],
	                    link: "#"
	                }, {
	                    title: "product 2.3.2",
	                    cssClassList: [],
	                    link: "#"
	                }]
	            }]
	        }]
	    }, {
	        title: "Services",
	        cssClassList: ['hasChildren'],
	        items: [{
	            title: "service 1",
	            cssClassList: [],
	            link: "#"
	        }, {
	            title: "service 2",
	            cssClassList: [],
	            link: "#"
	        }]
	    }, {
	        title: "Contacts",
	        cssClassList: [],
	        link: "#"
	    }]
	};
	
	var menu = new _menu2.default(menuOptions);
	menu.element;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PageMask = function () {
	    function PageMask(options) {
	        _classCallCheck(this, PageMask);
	
	        this.options = options;
	        this.elementCssClass = null;
	        this._elem = null;
	    }
	
	    _createClass(PageMask, [{
	        key: 'toggle',
	        value: function toggle() {
	            if (!this._elem) {
	                this._render();
	            }
	
	            this._elem.classList.toggle('open');
	        }
	    }, {
	        key: '_render',
	        value: function _render() {
	            this._elem = document.createElement('div');
	            this._elem.className = this.options.elementCssClass;
	            this.elementCssClass = this.options.elementCssClass;
	        }
	    }, {
	        key: 'element',
	        get: function get() {
	            this._render();
	
	            return this._elem;
	        }
	    }]);
	
	    return PageMask;
	}();

	exports.default = PageMask;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	// this class might need polyfills for Element.prototype.closest()
	// and Element.prototype.classList
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Menu = function () {
	    function Menu(options) {
	        _classCallCheck(this, Menu);
	
	        this.options = options;
	        this._elem = null; // lazy creation is used, so default value is null
	    }
	
	    _createClass(Menu, [{
	        key: 'toggleMenu',
	        value: function toggleMenu() {
	            // Lazy creation of menu items.
	            // If menu opens at the first time - render menu items
	            if (!this._elem.querySelector('ul')) {
	                this._renderItems(this.options.data);
	            }
	
	            var body = document.querySelector('body');
	            var menuTitle = this._elem.querySelector('.' + this.options.menuTitleCssClass + ' *'); // content of menu title
	            var menuTitleWrapper = this._elem.querySelector('.' + this.options.menuTitleCssClass);
	
	            this._elem.classList.toggle('open');
	            body.classList.toggle('menuEnabled'); // it needs for style of body.menuEnabled class
	            menuTitle.classList.toggle('open');
	            menuTitleWrapper.classList.toggle('open');
	
	            // Open/close pageMask.
	            // Check whether pageMask component exists and if it is in the document
	            if (this.options.pageMask && document.querySelector('.' + this.options.pageMask.elementCssClass)) {
	                this.options.pageMask.toggle();
	            }
	        }
	
	        // This method render the root element of menu.
	        // It also sets CSS classes and event handlers for it.
	
	    }, {
	        key: '_render',
	        value: function _render() {
	            // set the root element for the menu
	            this._elem = this.options.elementHtml;
	
	            // add the main CSS class
	            this._elem.classList.add(this.options.elementCssClass);
	
	            // add additional CSS classes
	            var cssClassList = this.options.elementCssClassList;
	
	            if (cssClassList && cssClassList.length !== 0) {
	                for (var i = 0; i < cssClassList.length; i++) {
	                    this._elem.classList.add(cssClassList[i]);
	                }
	            }
	
	            // render menu title element
	            var title = document.createElement('span');
	            title.className = this.options.menuTitleCssClass;
	            title.innerHTML = this.options.menuTitle;
	            this._elem.appendChild(title);
	
	            // add event handlers for mobile devices
	            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	                this._elem.addEventListener('touchstart', this._onMenuAction.bind(this));
	
	                // when menu is opened, close it by clicking outside the menu
	                document.addEventListener('touchstart', this._closeMenu.bind(this));
	            } else {
	                // for desktop
	
	                // to prevent selecting text inside a title
	                this._elem.addEventListener('mousedown', function (e) {
	                    e.preventDefault();
	                });
	
	                this._elem.addEventListener('click', this._onMenuAction.bind(this));
	
	                // activate CSS hover
	                this._elem.classList.add('desktop');
	
	                document.addEventListener('click', this._closeMenu.bind(this));
	            }
	        }
	    }, {
	        key: '_renderItems',
	        value: function _renderItems(data) {
	            // if there are no data, recursive _renderItems() would not work
	            if (!data || data.length === 0) {
	                return;
	            }
	
	            var list = document.createElement('ul');
	
	            data.forEach(function (obj) {
	                var li = document.createElement('li');
	                var a = document.createElement('a');
	                var cssClassList = obj.cssClassList;
	                var title = undefined; // it needs for subcategory
	
	                if (cssClassList && cssClassList.length !== 0) {
	                    for (var i = 0; i < cssClassList.length; i++) {
	                        li.classList.add(cssClassList[i]);
	                    }
	                }
	
	                if (obj.link) {
	                    a.setAttribute('href', obj.link);
	                    a.innerHTML = obj.title;
	                    li.appendChild(a);
	                } else {
	                    // makes subcategory title
	                    title = document.createElement('div');
	                    title.innerHTML = obj.title;
	                    li.appendChild(title);
	                }
	
	                var childrenUl = this._renderItems(obj.items); // returns undefined or new list
	
	                if (childrenUl) {
	                    li.appendChild(childrenUl);
	                }
	
	                list.appendChild(li);
	            }.bind(this));
	
	            return this._elem.appendChild(list);
	        }
	
	        // this method determines on which element the event has happened,
	        // and calls toggle method on it.
	
	    }, {
	        key: '_onMenuAction',
	        value: function _onMenuAction(event) {
	            var target = event.target;
	
	            // open/close the menu by clicking on the menu title
	            if (target.closest('.' + this.options.menuTitleCssClass)) {
	                this.toggleMenu();
	            }
	
	            // open/close menu items
	            if (target.closest('li')) {
	
	                // determine if LI element has children
	                if (target.childNodes.length) {
	
	                    // The event may happen on "A", "DIV" or "LI" element.
	                    // In any case we need toggle a "LI" element.
	                    if (target.nodeName === 'A' || target.nodeName === 'DIV') {
	                        target.parentNode.classList.toggle('open');
	                    } else {
	                        target.classList.toggle('open');
	                    }
	                }
	            }
	        }
	    }, {
	        key: '_closeMenu',
	        value: function _closeMenu(event) {
	            if (!this._elem.classList.contains('open')) {
	                return false;
	            }
	
	            var target = event.target;
	
	            // if user clicked on invisible menu container
	            // or outside the menu - close the menu.
	            if (target.classList.contains(this.options.elementCssClass) || !target.closest('.' + this.options.elementCssClass)) {
	
	                this.toggleMenu();
	            }
	        }
	    }, {
	        key: 'element',
	        get: function get() {
	            this._render();
	
	            return this._elem;
	        }
	    }]);
	
	    return Menu;
	}();

	exports.default = Menu;

/***/ }
/******/ ]);
//# sourceMappingURL=compiledPage.js.map