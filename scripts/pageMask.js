'use strict';

export default class PageMask {
    constructor(options) {
        this.options = options;
        this.elementCssClass = null;
        this._elem = null;
    }

    get element() {
        this._render();

        return this._elem;
    }

    toggle() {
        if (!this._elem) {
            this._render();
        }

        this._elem.classList.toggle('open');
    }

    _render() {
        this._elem = document.createElement('div');
        this._elem.className = this.options.elementCssClass;
        this.elementCssClass = this.options.elementCssClass;
    }
}
