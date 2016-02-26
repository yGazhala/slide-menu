"use strict";
// this class might need polyfills for Element.prototype.closest()
// and Element.prototype.classList

export default class Menu {
    constructor(options) {
        this.options = options;
        this._elem = null; // lazy creation is used, so default value is null
    }

    get element() {
        this._render();

        return this._elem;
    }

    toggleMenu() {
        // Lazy creation of menu items.
        // If menu opens at the first time - render menu items
        if (!this._elem.querySelector('ul')) {
            this._renderItems(this.options.data);
        }

        let body = document.querySelector('body');
        let menuTitle = this._elem.querySelector('.' + this.options.menuTitleCssClass + ' *'); // content of menu title
        let menuTitleWrapper = this._elem.querySelector('.' + this.options.menuTitleCssClass);

        this._elem.classList.toggle('open');
        body.classList.toggle('menuEnabled'); // it needs for style of body.menuEnabled class
        menuTitle.classList.toggle('open');
        menuTitleWrapper.classList.toggle('open');

        // Open/close pageMask.
        // Check whether pageMask component exists and if it is in the document
        if (this.options.pageMask && document.querySelector('.'+ this.options.pageMask.elementCssClass)) {
            this.options.pageMask.toggle();
        }
    }

    // This method render the root element of menu.
    // It also sets CSS classes and event handlers for it.
    _render() {
        // set the root element for the menu
        this._elem = this.options.elementHtml;

        // add the main CSS class
        this._elem.classList.add(this.options.elementCssClass);

        // add additional CSS classes
        let cssClassList = this.options.elementCssClassList;

        if (cssClassList && cssClassList.length !== 0) {
            for (let i = 0; i < cssClassList.length; i++) {
                this._elem.classList.add(cssClassList[i]);
            }
        }

        // render menu title element
        let title = document.createElement('span');
        title.className = this.options.menuTitleCssClass;
        title.innerHTML = this.options.menuTitle;
        this._elem.appendChild(title);


        // add event handlers for mobile devices
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            this._elem.addEventListener('touchstart', this._onMenuAction.bind(this));

            // when menu is opened, close it by clicking outside the menu
            document.addEventListener('touchstart', this._closeMenu.bind(this));

        } else { // for desktop

            // to prevent selecting text inside a title
            this._elem.addEventListener('mousedown', function(e){ e.preventDefault() });

            this._elem.addEventListener('click', this._onMenuAction.bind(this));

            // activate CSS hover
            this._elem.classList.add('desktop');

            document.addEventListener('click', this._closeMenu.bind(this));
        }
    }

    _renderItems(data) {
        // if there are no data, recursive _renderItems() would not work
        if (!data || data.length === 0) {
            return;
        }

        let list = document.createElement('ul');

        data.forEach( (function(obj) {
            let li = document.createElement('li');
            let a = document.createElement('a');
            let cssClassList = obj.cssClassList;
            let title; // it needs for subcategory

            if (cssClassList && cssClassList.length !== 0) {
                for (let i = 0; i < cssClassList.length; i++) {
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

            let childrenUl = this._renderItems(obj.items); // returns undefined or new list

            if (childrenUl) {
                li.appendChild(childrenUl);
            }

            list.appendChild(li);

        }).bind(this));

        return this._elem.appendChild(list);
    }

    // this method determines on which element the event has happened,
    // and calls toggle method on it.
    _onMenuAction(event) {
        let target = event.target;

        // open/close the menu by clicking on the menu title
        if (target.closest('.'+ this.options.menuTitleCssClass)) {
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

    _closeMenu(event) {
        if (!this._elem.classList.contains('open')) {
            return false;
        }

        let target = event.target;

        // if user clicked on invisible menu container
        // or outside the menu - close the menu.
        if (target.classList.contains(this.options.elementCssClass)
            || !target.closest('.' + this.options.elementCssClass)) {

            this.toggleMenu();
        }
    }
}