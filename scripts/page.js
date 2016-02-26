'use strict';
import PageMask from './pageMask.js';
import Menu from './menu.js';

// Initialize pageMask component and add it to the document
let pageMaskOptions = {elementCssClass: 'pageMask'};
let pageMask = new PageMask(pageMaskOptions);
document.body.insertBefore(pageMask.element, document.querySelector('#menu'));

// Initialize menu component
let menuOptions = {
    elementHtml: document.querySelector('#menu'), // root element for the menu
    elementCssClass: 'menu', // the main class
    elementCssClassList: [], // additional classes

    menuTitle: '<img src="../images/menu-icon.png" alt="menu">', // or '<p>Some text</p>'
    menuTitleCssClass: 'menu__title',

    pageMask: pageMask, // helper component

    data: [ // data for menu tree
        {
            title: "Home",
            cssClassList: [],
            link: '#'
        },

        {
            title: "About us",
            cssClassList: [],
            link: '#'
        },

        {
            title: "Our clients",
            cssClassList: [],
            link: '#'
        },

        {
            title: "Products",
            cssClassList: ['hasChildren'],
            items: [
                {
                    title: "product 1.1",
                    cssClassList: [],
                    link: "#"
                },
                {
                    title: "product 1.2",
                    cssClassList: [],
                    link: "#"
                },
                {
                    title: "Other products",
                    cssClassList: ['hasChildren'],
                    items: [
                        {
                            title: "product 2.1",
                            cssClassList: [],
                            link: "#"
                        },
                        {
                            title: "product 2.2",
                            cssClassList: [],
                            link: "#"
                        },
                        {
                            title: "Different products 2.3",
                            cssClassList: ['hasChildren'],
                            items: [
                                {
                                    title: "product 2.3.1",
                                    cssClassList: [],
                                    link: "#"
                                },
                                {
                                    title: "product 2.3.2",
                                    cssClassList: [],
                                    link: "#"
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        {
            title: "Services",
            cssClassList: ['hasChildren'],
            items: [
                {
                    title: "service 1",
                    cssClassList: [],
                    link: "#"
                },
                {
                    title: "service 2",
                    cssClassList: [],
                    link: "#"
                }
            ]
        },

        {
            title: "Contacts",
            cssClassList: [],
            link: "#"
        }
    ]
};

let menu = new Menu(menuOptions);
menu.element;
