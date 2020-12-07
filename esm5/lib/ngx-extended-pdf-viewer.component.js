/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-extended-pdf-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener, NgZone, TemplateRef, Inject, PLATFORM_ID, ViewChild, } from '@angular/core';
import { getVersionSuffix, pdfDefaultOptions } from './options/pdf-default-options';
import { VerbosityLevel } from './options/verbosity-level';
import { FindState } from './events/find-result';
import { isPlatformBrowser } from '@angular/common';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
import { ElementRef } from '@angular/core';
import { PdfSecondaryToolbarComponent } from './secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component';
import { PDFNotificationService } from './pdf-notification-service';
import { PdfCursorTools } from './options/pdf-cursor-tools';
import { Location } from '@angular/common';
import { PinchOnMobileSupport } from './pinch-on-mobile-support';
import { PdfSidebarComponent } from './sidebar/pdf-sidebar/pdf-sidebar.component';
import { ScrollModeType } from './options/pdf-viewer';
/**
 * @record
 */
function ElementAndPosition() { }
if (false) {
    /** @type {?} */
    ElementAndPosition.prototype.element;
    /** @type {?} */
    ElementAndPosition.prototype.x;
    /** @type {?} */
    ElementAndPosition.prototype.y;
}
/**
 * @record
 */
export function FormDataType() { }
var NgxExtendedPdfViewerComponent = /** @class */ (function () {
    function NgxExtendedPdfViewerComponent(ngZone, platformId, notificationService, location, elementRef) {
        this.ngZone = ngZone;
        this.platformId = platformId;
        this.notificationService = notificationService;
        this.location = location;
        this.elementRef = elementRef;
        this.customFindbarButtons = undefined;
        this.formData = {};
        this.formDataChange = new EventEmitter();
        this.pageViewMode = 'multiple';
        this.srcChange = new EventEmitter();
        this.scrollMode = undefined;
        this.scrollModeChange = new EventEmitter();
        this.authorization = undefined;
        this.httpHeaders = undefined;
        this.contextMenuAllowed = true;
        this.afterPrint = new EventEmitter();
        this.beforePrint = new EventEmitter();
        this.currentZoomFactor = new EventEmitter();
        this.enablePrint = true;
        /**
         * Number of milliseconds to wait between initializing the PDF viewer and loading the PDF file.
         * Most users can let this parameter safely at it's default value of zero.
         * Set this to 1000 or higher if you run into timing problems (typically caused by loading the locale files
         * after the PDF files, so they are not available when the PDF viewer is initialized).
         */
        this.delayFirstView = 0;
        /**
         * How many log messages should be printed?
         * Legal values: VerbosityLevel.INFOS (= 5), VerbosityLevel.WARNINGS (= 1), VerbosityLevel.ERRORS (= 0)
         */
        this.logLevel = VerbosityLevel.WARNINGS;
        this.enablePinchOnMobile = false;
        /**
         * Use the minified (minifiedJSLibraries="true", which is the default) or the user-readable pdf.js library (minifiedJSLibraries="false")
         */
        this.minifiedJSLibraries = true;
        this.primaryMenuVisible = true;
        /**
         * option to increase (or reduce) print resolution. Default is 150 (dpi). Sensible values
         * are 300, 600, and 1200. Note the increase memory consumption, which may even result in a browser crash.
         */
        this.printResolution = null;
        this.rotationChange = new EventEmitter();
        this.minHeight = undefined;
        this._height = '100%';
        /**
         * If this flag is true, this components adds a link to the locale assets. The pdf viewer
         * sees this link and uses it to load the locale files automatically.
         * @param useBrowserLocale boolean
         */
        this.useBrowserLocale = false;
        this.backgroundColor = '#e8e8eb';
        /**
         * Allows the user to define the name of the file after clicking "download"
         */
        this.filenameForDownload = 'document.pdf';
        /**
         * Allows the user to disable the keyboard bindings completely
         */
        this.ignoreKeyboard = false;
        /**
         * Allows the user to disable a list of key bindings.
         */
        this.ignoreKeys = [];
        /**
         * Allows the user to enable a list of key bindings explicitly. If this property is set, every other key binding is ignored.
         */
        this.acceptKeys = [];
        /**
         * Allows the user to put the viewer's svg images into an arbitrary folder
         */
        this.imageResourcesPath = './' + pdfDefaultOptions.assetsFolder + '/images/';
        /**
         * Allows the user to put their locale folder into an arbitrary folder
         */
        this.localeFolderPath = './' + pdfDefaultOptions.assetsFolder + '/locale';
        /**
         * Override the default locale. This must be the complete locale name, such as "es-ES". The string is allowed to be all lowercase.
         */
        this.language = undefined;
        /**
         * By default, listening to the URL is deactivated because often the anchor tag is used for the Angular router
         */
        this.listenToURL = false;
        /**
         * Navigate to a certain "named destination"
         */
        this.nameddest = undefined;
        /**
         * allows you to pass a password to read password-protected files
         */
        this.password = undefined;
        this._showSidebarButton = true;
        this.viewerPositionTop = '32px';
        /**
         * pdf.js can show signatures, but fails to verify them. So they are switched off by default.
         * Set "[showUnverifiedSignatures]"="true" to display e-signatures nonetheless.
         */
        this.showUnverifiedSignatures = false;
        this.sidebarVisible = undefined;
        this.sidebarVisibleChange = new EventEmitter();
        this.showFindButton = undefined;
        this.showPagingButtons = true;
        this.showZoomButtons = true;
        this.showPresentationModeButton = false;
        this.showOpenFileButton = true;
        this.showPrintButton = true;
        this.showDownloadButton = true;
        this.showBookmarkButton = true;
        this.theme = 'light';
        this.showToolbar = true;
        this.showSecondaryToolbarButton = true;
        /**
         * Set by the event (secondaryMenuIsEmpty)
         */
        this.hideKebabMenuForSecondaryToolbar = false;
        this.showRotateButton = true;
        this.handTool = true;
        this.handToolChange = new EventEmitter();
        this.showHandToolButton = false;
        this.showScrollingButton = true;
        this.showSpreadButton = true;
        this.showPropertiesButton = true;
        this.showBorders = true;
        this.spreadChange = new EventEmitter();
        this.thumbnailDrawn = new EventEmitter();
        this._page = undefined;
        this.pageChange = new EventEmitter();
        this.pageLabel = undefined;
        this.pageLabelChange = new EventEmitter();
        this.pagesLoaded = new EventEmitter();
        this.pageRendered = new EventEmitter();
        this.pdfDownloaded = new EventEmitter();
        this.pdfLoaded = new EventEmitter();
        this.pdfLoadingFailed = new EventEmitter();
        this.textLayer = undefined;
        this.textLayerRendered = new EventEmitter();
        this.updateFindMatchesCount = new EventEmitter();
        this.updateFindState = new EventEmitter();
        /**
         * Legal values: undefined, 'auto', 'page-actual', 'page_fit', 'page-width', or '50' (or any other percentage)
         */
        this.zoom = undefined;
        this.zoomChange = new EventEmitter();
        this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 1, 1.25, 1.5, 2, 3, 4];
        this.maxZoom = 10;
        this.minZoom = 0.1;
        /**
         * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").
         */
        this._mobileFriendlyZoom = '100%';
        this.mobileFriendlyZoomScale = 1;
        this.toolbarPaddingTop = '0px';
        this.toolbarWidth = '100%';
        this.toolbarWidthInPixels = 100;
        this.secondaryToolbarTop = undefined;
        // dirty IE11 hack - temporary solution
        this.findbarTop = undefined;
        // dirty IE11 hack - temporary solution
        this.findbarLeft = undefined;
        // Additional PDF Form Field Types #567: Used to store the exported values of radio and checkbox buttons
        this.buttonValues = {};
        this.shuttingDown = false;
    }
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "src", {
        set: /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            var _this = this;
            if (url instanceof Uint8Array) {
                this._src = url.buffer;
            }
            else if (url instanceof Blob) {
                /** @type {?} */
                var reader_1 = new FileReader();
                reader_1.onloadend = (/**
                 * @return {?}
                 */
                function () {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.src = new Uint8Array((/** @type {?} */ (reader_1.result)));
                        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
                            _this.openPDF2();
                            // else openPDF is called later, so we should load the PDF file twice
                        }
                    }));
                });
                reader_1.readAsArrayBuffer(url);
            }
            else if (typeof url === 'string') {
                this._src = url;
                if (url.length > 980) {
                    // minimal length of a base64 encoded PDF
                    if (url.length % 4 === 0) {
                        if (/^[a-zA-Z\d\/+]+={0,2}$/.test(url)) {
                            console.error('The URL looks like a base64 encoded string. If so, please use the attribute [base64Src] instead of [src]');
                        }
                    }
                }
            }
            else {
                this._src = url;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "base64Src", {
        set: /**
         * @param {?} base64
         * @return {?}
         */
        function (base64) {
            /** @type {?} */
            var binary_string = window.atob(base64);
            /** @type {?} */
            var len = binary_string.length;
            /** @type {?} */
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            this.src = bytes.buffer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return this._height;
        },
        set: /**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            var _this = this;
            this.minHeight = undefined;
            if (h) {
                this._height = h;
            }
            else {
                this.height = '100%';
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.checkHeight();
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "showSidebarButton", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSidebarButton;
        },
        set: /**
         * @param {?} show
         * @return {?}
         */
        function (show) {
            this._showSidebarButton = show;
            /** @type {?} */
            var isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
            /** @type {?} */
            var factor = 1;
            if (isIE) {
                factor = Number((this._mobileFriendlyZoom || '100').replace('%', '')) / 100;
            }
            if (this._showSidebarButton) {
                this.findbarLeft = (68 * factor).toString() + 'px';
            }
            else {
                this.findbarLeft = '0px';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            if (p) {
                // silently cope with strings
                this._page = Number(p);
            }
            else {
                this._page = undefined;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "mobileFriendlyZoom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mobileFriendlyZoom;
        },
        /**
         * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").
         */
        set: /**
         * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").
         * @param {?} zoom
         * @return {?}
         */
        function (zoom) {
            // tslint:disable-next-line:triple-equals - the type conversion is intended
            if (zoom == 'true') {
                zoom = '150%';
                // tslint:disable-next-line:triple-equals - the type conversion is intended
            }
            else if (zoom == 'false' || zoom === undefined || zoom === null) {
                zoom = '100%';
            }
            this._mobileFriendlyZoom = zoom;
            /** @type {?} */
            var factor = 1;
            if (!String(zoom).includes('%')) {
                zoom = 100 * Number(zoom) + '%';
            }
            factor = Number((zoom || '100').replace('%', '')) / 100;
            this.mobileFriendlyZoomScale = factor;
            this.toolbarWidth = (100 / factor).toString() + '%';
            this.toolbarPaddingTop = (factor - 1) * 8 + 'px';
            if (this.showSidebarButton) {
                this.findbarLeft = (68 * factor).toString() + 'px';
            }
            else {
                this.findbarLeft = '0px';
            }
            this.secondaryToolbarTop = (36 + 36 * (factor - 1)).toString() + 'px';
            this.findbarTop = (36 + 52 * (factor - 1)).toString() + 'px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "sidebarPositionTop", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.isPrimaryMenuVisible()) {
                return '0';
            }
            if (this.mobileFriendlyZoom) {
                if (this.mobileFriendlyZoom.endsWith('%')) {
                    /** @type {?} */
                    var zoom = Number(this.mobileFriendlyZoom.substring(0, this.mobileFriendlyZoom.length - 1));
                    return (2 + 0.29 * zoom).toString() + 'px';
                }
                if (this.mobileFriendlyZoom.endsWith('px')) {
                    return this.mobileFriendlyZoom;
                }
                return (16 + 0.16 * Number(this.mobileFriendlyZoom)).toString() + 'px';
            }
            return '32px';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.calcViewerPositionTop = /**
     * @return {?}
     */
    function () {
        if (!this.isPrimaryMenuVisible()) {
            this.viewerPositionTop = '0';
            return;
        }
        if (this.mobileFriendlyZoom) {
            if (this.mobileFriendlyZoom.endsWith('%')) {
                /** @type {?} */
                var zoom = Number(this.mobileFriendlyZoom.substring(0, this.mobileFriendlyZoom.length - 1));
                if (!this.isPrimaryMenuVisible()) {
                    this.viewerPositionTop = '0';
                }
                else {
                    this.viewerPositionTop = (1 + 0.32 * zoom).toString() + 'px';
                }
                return;
            }
            if (this.mobileFriendlyZoom.endsWith('px')) {
                this.viewerPositionTop = this.mobileFriendlyZoom;
                return;
            }
        }
        this.viewerPositionTop = '32px';
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.iOSVersionRequiresES5 = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var match = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        if (match !== undefined && match !== null) {
            return parseInt(match[1], 10) < 13;
        }
        return false;
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.loadViewer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!window['pdfjs-dist/build/pdf']) {
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.loadViewer(); }), 25);
        }
        else {
            /** @type {?} */
            var isIE = !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
            /** @type {?} */
            var isEdge = /Edge\/\d./i.test(navigator.userAgent);
            /** @type {?} */
            var isIOs12OrBelow = this.iOSVersionRequiresES5();
            /** @type {?} */
            var needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
            /** @type {?} */
            var suffix = this.minifiedJSLibraries ? '.min.js' : '.js';
            /** @type {?} */
            var script2 = document.createElement('script');
            /** @type {?} */
            var assets = pdfDefaultOptions.assetsFolder;
            /** @type {?} */
            var versionSuffix = getVersionSuffix(assets);
            if (needsES5) {
                console.log('Using the ES5 version of the PDF viewer.');
            }
            script2.src = this.location.normalize(isIE || isEdge || isIOs12OrBelow || needsES5
                ? assets + '/viewer-' + versionSuffix + '-es5' + suffix
                : assets + '/viewer-' + versionSuffix + suffix);
            script2.type = 'text/javascript';
            script2.async = true;
            document.getElementsByTagName('head')[0].appendChild(script2);
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var link = document.createElement('link');
        link.href = this.localeFolderPath + '/locale.properties';
        link.setAttribute('origin', 'ngx-extended-pdf-viewer');
        link.rel = 'resource';
        link.type = 'application/l10n';
        /** @type {?} */
        var widget = this.elementRef.nativeElement;
        widget.appendChild(link);
        this.onResize();
        if (isPlatformBrowser(this.platformId)) {
            if (!window['pdfjs-dist/build/pdf']) {
                /** @type {?} */
                var isIE = !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
                /** @type {?} */
                var isEdge = /Edge\/\d./i.test(navigator.userAgent);
                /** @type {?} */
                var needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
                /** @type {?} */
                var isIOs12OrBelow = this.iOSVersionRequiresES5();
                /** @type {?} */
                var suffix = this.minifiedJSLibraries ? '.min.js' : '.js';
                if (this.minifiedJSLibraries) {
                    if (!pdfDefaultOptions.workerSrc().endsWith('.min.js')) {
                        /** @type {?} */
                        var src_1 = pdfDefaultOptions.workerSrc();
                        pdfDefaultOptions.workerSrc = (/**
                         * @return {?}
                         */
                        function () { return src_1.replace('.js', '.min.js'); });
                    }
                }
                /** @type {?} */
                var assets = pdfDefaultOptions.assetsFolder;
                /** @type {?} */
                var versionSuffix = getVersionSuffix(assets);
                /** @type {?} */
                var script = document.createElement('script');
                script.src = this.location.normalize(isIE || isEdge || isIOs12OrBelow || needsES5 ? assets + '/pdf-' + versionSuffix + '-es5' + suffix : assets + '/pdf-' + versionSuffix + suffix);
                script.type = 'text/javascript';
                script.async = true;
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            if (!((/** @type {?} */ (window))).webViewerLoad) {
                this.loadViewer();
            }
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.shuttingDown) {
            // hurried users sometimes reload the PDF before it has finished initializing
            if (((/** @type {?} */ (window))).webViewerLoad) {
                this.doInitPDFViewer();
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.ngAfterViewInit(); }), 50);
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.assignTabindexes = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.startTabindex) {
            /** @type {?} */
            var r = (/** @type {?} */ (this.root.nativeElement.cloneNode(true)));
            r.classList.add('offscreen');
            this.showElementsRecursively(r);
            document.body.appendChild(r);
            /** @type {?} */
            var elements = this.collectElementPositions(r, this.root.nativeElement, []);
            document.body.removeChild(r);
            /** @type {?} */
            var sorted = elements.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                if (a.y - b.y > 15) {
                    return 1;
                }
                if (b.y - a.y > 15) {
                    return -1;
                }
                return a.x - b.x;
            }));
            for (var i = 0; i < sorted.length; i++) {
                sorted[i].element.tabIndex = this.startTabindex + i;
            }
        }
    };
    /**
     * @private
     * @param {?} root
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.showElementsRecursively = /**
     * @private
     * @param {?} root
     * @return {?}
     */
    function (root) {
        root.classList.remove('hidden');
        root.classList.remove('invisible');
        root.classList.remove('hiddenXXLView');
        root.classList.remove('hiddenXLView');
        root.classList.remove('hiddenLargeView');
        root.classList.remove('hiddenMediumView');
        root.classList.remove('hiddenSmallView');
        root.classList.remove('hiddenTinyView');
        root.classList.remove('visibleXXLView');
        root.classList.remove('visibleXLView');
        root.classList.remove('visibleLargeView');
        root.classList.remove('visibleMediumView');
        root.classList.remove('visibleSmallView');
        root.classList.remove('visibleTinyView');
        if (root instanceof HTMLButtonElement || root instanceof HTMLAnchorElement || root instanceof HTMLInputElement || root instanceof HTMLSelectElement) {
            return;
        }
        else if (root.childElementCount > 0) {
            for (var i = 0; i < root.childElementCount; i++) {
                /** @type {?} */
                var c = root.children.item(i);
                if (c) {
                    this.showElementsRecursively(c);
                }
            }
        }
    };
    /**
     * @private
     * @param {?} copy
     * @param {?} original
     * @param {?} elements
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.collectElementPositions = /**
     * @private
     * @param {?} copy
     * @param {?} original
     * @param {?} elements
     * @return {?}
     */
    function (copy, original, elements) {
        if (copy instanceof HTMLButtonElement || copy instanceof HTMLAnchorElement || copy instanceof HTMLInputElement || copy instanceof HTMLSelectElement) {
            /** @type {?} */
            var rect = copy.getBoundingClientRect();
            /** @type {?} */
            var elementAndPos = (/** @type {?} */ ({
                element: original,
                x: Math.round(rect.left),
                y: Math.round(rect.top),
            }));
            elements.push(elementAndPos);
        }
        else if (copy.childElementCount > 0) {
            for (var i = 0; i < copy.childElementCount; i++) {
                /** @type {?} */
                var c = copy.children.item(i);
                /** @type {?} */
                var o = original.children.item(i);
                if (c && o) {
                    elements = this.collectElementPositions(c, o, elements);
                }
            }
        }
        return elements;
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.doInitPDFViewer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var langLinks = document.querySelectorAll('link[type="application/l10n"]');
        /** @type {?} */
        var langCount = langLinks.length;
        if (langCount === 0) {
            /** @type {?} */
            var dict = document.querySelector('script[type="application/l10n"]');
            if (!dict) {
                if (!this.useBrowserLocale) {
                    console.error(
                    // tslint:disable-next-line:quotemark
                    "If you set the attribute 'useBrowserLocale' to false, you must provide the translations yourself in a script or link tag.");
                    console.error('The easiest way to do this is to add them to the index.html.');
                }
            }
            else if (this.useBrowserLocale) {
                console.error(
                // tslint:disable-next-line:quotemark
                "Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
            }
        }
        else if (this.useBrowserLocale) {
            /** @type {?} */
            var o = langLinks[0].attributes['origin'];
            if (o && o.value !== 'ngx-extended-pdf-viewer') {
                console.error(
                // tslint:disable-next-line:quotemark
                "Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
            }
        }
        /** @type {?} */
        var callback = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            document.removeEventListener('localized', callback);
            _this.initTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                if (!_this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    _this.afterLibraryInit();
                    _this.openPDF();
                    _this.assignTabindexes();
                }
            }), _this.delayFirstView);
        });
        window.addEventListener('afterprint', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.afterPrint.emit();
        }));
        window.addEventListener('beforeprint', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.beforePrint.emit();
        }));
        document.addEventListener('localized', callback);
        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("You're trying to open two instances of the PDF viewer. Most likely, this will result in errors.");
        }
        /** @type {?} */
        var onLoaded = (/**
         * @return {?}
         */
        function () {
            _this.overrideDefaultSettings();
            document.removeEventListener('webviewerloaded', onLoaded);
            if (_this.enablePinchOnMobile) {
                _this.pinchOnMobileSupport = new PinchOnMobileSupport(_this.ngZone);
            }
        });
        document.addEventListener('webviewerloaded', onLoaded);
        this.activateTextlayerIfNecessary(null);
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (!_this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                // This initializes the webviewer, the file may be passed in to it to initialize the viewer with a pdf directly
                _this.primaryMenuVisible = _this.showToolbar;
                /** @type {?} */
                var hideSecondaryMenu = _this.hideKebabMenuForSecondaryToolbar && !_this.showSecondaryToolbarButton;
                if (hideSecondaryMenu) {
                    if (!_this.isPrimaryMenuVisible()) {
                        _this.primaryMenuVisible = false;
                    }
                }
                _this.calcViewerPositionTop();
                _this.dummyComponents.addMissingStandardWidgets();
                ((/** @type {?} */ (window))).webViewerLoad();
                /** @type {?} */
                var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
                PDFViewerApplication.appConfig.defaultUrl = ''; // IE bugfix
                PDFViewerApplication.appConfig.filenameForDownload = _this.filenameForDownload;
                /** @type {?} */
                var PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
                PDFViewerApplicationOptions.set('locale', _this.language);
                PDFViewerApplicationOptions.set('imageResourcesPath', _this.imageResourcesPath);
                PDFViewerApplicationOptions.set('minZoom', _this.minZoom);
                PDFViewerApplicationOptions.set('maxZoom', _this.maxZoom);
                PDFViewerApplicationOptions.set('pageViewMode', _this.pageViewMode);
                PDFViewerApplicationOptions.set('verbosity', _this.logLevel);
                PDFViewerApplicationOptions.set('initialZoom', _this.zoom);
                PDFViewerApplication.isViewerEmbedded = true;
                if (PDFViewerApplication.printKeyDownListener) {
                    window.addEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
                }
                /** @type {?} */
                var pc = document.getElementById('printContainer');
                if (pc) {
                    document.getElementsByTagName('body')[0].appendChild(pc);
                }
            }
        }), 0);
    };
    /** Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available */
    /**
     * Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.afterLibraryInit = /**
     * Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available
     * @private
     * @return {?}
     */
    function () {
        this.notificationService.onPDFJSInit.next();
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.checkHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var container = document.getElementsByClassName('zoom')[0];
        if (container) {
            if (container.clientHeight === 0 && this._height.includes('%')) {
                /** @type {?} */
                var available = window.innerHeight;
                /** @type {?} */
                var rect = container.getBoundingClientRect();
                /** @type {?} */
                var top_1 = rect.top;
                /** @type {?} */
                var mh = available - top_1;
                /** @type {?} */
                var factor = Number(this._height.replace('%', ''));
                mh = (mh * factor) / 100;
                if (mh > 100) {
                    this.minHeight = mh + 'px';
                }
                else {
                    this.minHeight = '100px';
                }
            }
        }
    };
    /**
     * @param {?} newSpread
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.onSpreadChange = /**
     * @param {?} newSpread
     * @return {?}
     */
    function (newSpread) {
        this.spreadChange.emit(newSpread);
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.activateTextlayerIfNecessary = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        if (this.textLayer === undefined) {
            if (!this.handTool) {
                if (options) {
                    options.set('textLayerMode', 1);
                }
                this.textLayer = true;
                if (this.showFindButton === undefined) {
                    this.showFindButton = true;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        // todo remove this hack:
                        /** @type {?} */
                        var viewFind = (/** @type {?} */ (document.getElementById('viewFind')));
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        /** @type {?} */
                        var findbar = (/** @type {?} */ (document.getElementById('findbar')));
                        if (findbar) {
                            findbar.classList.remove('invisible');
                        }
                    }));
                }
            }
            else {
                if (options) {
                    options.set('textLayerMode', this.showHandToolButton ? 1 : 0);
                }
                if (!this.showHandToolButton) {
                    if (this.showFindButton || this.showFindButton === undefined) {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            _this.showFindButton = false;
                        }));
                        if (this.logLevel >= VerbosityLevel.WARNINGS) {
                            console.warn(
                            // tslint:disable-next-line:max-line-length
                            'Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                        }
                    }
                    if (this.showHandToolButton) {
                        if (this.logLevel >= VerbosityLevel.WARNINGS) {
                            console.warn(
                            // tslint:disable-next-line:max-line-length
                            'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.');
                            this.showHandToolButton = false;
                        }
                    }
                }
            }
        }
        else {
            if (this.textLayer) {
                if (options) {
                    options.set('textLayerMode', 1);
                }
                this.textLayer = true;
                if (this.showFindButton === undefined) {
                    this.showFindButton = true;
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        // todo remove this hack:
                        /** @type {?} */
                        var viewFind = (/** @type {?} */ (document.getElementById('viewFind')));
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        /** @type {?} */
                        var findbar = (/** @type {?} */ (document.getElementById('findbar')));
                        if (findbar) {
                            findbar.classList.remove('invisible');
                        }
                    }));
                }
            }
            else {
                if (options) {
                    options.set('textLayerMode', 0);
                }
                this.textLayer = false;
                if (this.showFindButton) {
                    if (this.logLevel >= VerbosityLevel.WARNINGS) {
                        // tslint:disable-next-line:max-line-length
                        console.warn('Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            _this.showFindButton = false;
                        }));
                    }
                }
                if (this.showHandToolButton) {
                    if (this.logLevel >= VerbosityLevel.WARNINGS) {
                        console.warn(
                        // tslint:disable-next-line:max-line-length
                        'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.');
                        this.showHandToolButton = false;
                    }
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.overrideDefaultSettings = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = (/** @type {?} */ (((/** @type {?} */ (window))).PDFViewerApplicationOptions));
        // tslint:disable-next-line:forin
        for (var key in pdfDefaultOptions) {
            options.set(key, pdfDefaultOptions[key]);
        }
        options.set('disablePreferences', true);
        this.setZoom();
        options.set('ignoreKeyboard', this.ignoreKeyboard);
        options.set('ignoreKeys', this.ignoreKeys);
        options.set('acceptKeys', this.acceptKeys);
        this.activateTextlayerIfNecessary(options);
        if (this.scrollMode) {
            options.set('scrollModeOnLoad', this.scrollMode);
        }
        /** @type {?} */
        var sidebarVisible = this.sidebarVisible;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (sidebarVisible !== undefined) {
            PDFViewerApplication.sidebarViewOnLoad = sidebarVisible ? 1 : 0;
            if (PDFViewerApplication.appConfig) {
                PDFViewerApplication.appConfig.sidebarViewOnLoad = sidebarVisible ? 1 : 0;
            }
            options.set('sidebarViewOnLoad', this.sidebarVisible ? 1 : 0);
        }
        if (this.spread === 'even') {
            options.set('spreadModeOnLoad', 2);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 2;
            }
            this.onSpreadChange('even');
        }
        else if (this.spread === 'odd') {
            options.set('spreadModeOnLoad', 1);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 1;
            }
            this.onSpreadChange('odd');
        }
        else {
            options.set('spreadModeOnLoad', 0);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 0;
            }
            this.onSpreadChange('off');
        }
        if (this.printResolution) {
            options.set('printResolution', this.printResolution);
        }
        if (this.showBorders === false) {
            options.set('removePageBorders', !this.showBorders);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.openPDF = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        ServiceWorkerOptions.showUnverifiedSignatures = this.showUnverifiedSignatures;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.enablePrint = this.enablePrint;
        NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = true;
        this.onResize();
        if (!this.listenToURL) {
            PDFViewerApplication.pdfLinkService.setHash = (/**
             * @return {?}
             */
            function () { });
        }
        this.initTimeout = null;
        this.selectCursorTool();
        PDFViewerApplication.eventBus.on('textlayerrendered', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.textLayerRendered.emit(x);
        }));
        PDFViewerApplication.eventBus.on('scrollmodechanged', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.scrollModeChange.emit(x.mode);
        }));
        PDFViewerApplication.eventBus.on('pagesloaded', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.pagesLoaded.emit(x);
            if (_this.pageViewMode === 'infinite-scroll') {
                /** @type {?} */
                var h = x.source.viewer.clientHeight;
                if (_this.primaryMenuVisible) {
                    _this.height = h + 35 + 'px';
                }
                else {
                    _this.height = h + 'px';
                }
            }
            if (_this.rotation) {
                /** @type {?} */
                var r = Number(_this.rotation);
                if (r === 0 || r === 90 || r === 180 || r === 270) {
                    PDFViewerApplication.pdfViewer.pagesRotation = r;
                }
            }
            else {
                PDFViewerApplication.pdfViewer.pagesRotation = 0;
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (!_this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    if (_this.nameddest) {
                        PDFViewerApplication.pdfLinkService.navigateTo(_this.nameddest);
                    }
                    else if (_this.page) {
                        PDFViewerApplication.page = Number(_this.page);
                    }
                    else if (_this.pageLabel) {
                        PDFViewerApplication.pdfViewer.currentPageLabel = _this.pageLabel;
                    }
                }
            }));
            _this.setZoom();
        }));
        PDFViewerApplication.eventBus.on('pagerendered', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.pageRendered.emit(x);
                _this.fillFormFields(_this.formData);
                _this.addFormFieldListeners(_this.formData);
            }));
        }));
        PDFViewerApplication.eventBus.on('download', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.pdfDownloaded.emit(x);
            }));
        }));
        PDFViewerApplication.eventBus.on('scalechanging', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.currentZoomFactor.emit(x.scale);
                    /** @type {?} */
                    var scale = (/** @type {?} */ (((/** @type {?} */ (_this.root.nativeElement))).querySelector('#scaleSelect')));
                    /** @type {?} */
                    var userZoomFactor = _this.zoom;
                    if (scale) {
                        userZoomFactor = scale.value;
                    }
                    if (userZoomFactor !== 'auto' && userZoomFactor !== 'page-fit' && userZoomFactor !== 'page-actual' && userZoomFactor !== 'page-width') {
                        _this.zoomChange.emit(x.scale * 100);
                    }
                    else if (_this.zoom !== userZoomFactor) {
                        // called when the user selects one of the text values of the zoom select dropdown
                        _this.zoomChange.emit(userZoomFactor);
                    }
                }));
            }));
        }));
        PDFViewerApplication.eventBus.on('rotationchanging', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.rotationChange.emit(x.pagesRotation);
            }));
        }));
        PDFViewerApplication.eventBus.on('fileinputchange', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var path = x.fileInput.value.replace('C:\\fakepath\\', '');
                _this.srcChange.emit(path);
            }));
        }));
        PDFViewerApplication.eventBus.on('cursortoolchanged', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.handToolChange.emit(x.tool === PdfCursorTools.HAND);
            }));
        }));
        PDFViewerApplication.eventBus.on('sidebarviewchanged', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.sidebarVisibleChange.emit(x.view > 0);
                if (_this.sidebarComponent) {
                    _this.sidebarComponent.showToolbarWhenNecessary();
                }
            }));
        }));
        PDFViewerApplication.eventBus.on('documentloaded', (/**
         * @param {?} pdfLoadedEvent
         * @return {?}
         */
        function (pdfLoadedEvent) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.loadComplete(pdfLoadedEvent.source.pdfDocument);
            }));
        }));
        /** @type {?} */
        var hideSidebarToolbar = (/**
         * @return {?}
         */
        function () {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                if (_this.sidebarComponent) {
                    _this.sidebarComponent.showToolbarWhenNecessary();
                }
            }));
        });
        PDFViewerApplication.eventBus.on('outlineloaded', hideSidebarToolbar);
        PDFViewerApplication.eventBus.on('attachmentsloaded', hideSidebarToolbar);
        PDFViewerApplication.eventBus.on('layersloaded', hideSidebarToolbar);
        PDFViewerApplication.eventBus.on('updatefindcontrolstate', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (_this.updateFindMatchesCount) {
                if (x.state === FindState.NOT_FOUND) {
                    _this.updateFindMatchesCount.emit({ current: 0, total: 0 });
                }
                else if (x.matchesCount.total) {
                    _this.updateFindMatchesCount.emit(x.matchesCount);
                }
            }
            if (_this.updateFindState) {
                _this.updateFindState.emit(x.state);
            }
        }));
        PDFViewerApplication.eventBus.on('updatefindmatchescount', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (_this.updateFindMatchesCount) {
                if (x.matchesCount.total) {
                    _this.updateFindMatchesCount.emit(x.matchesCount);
                }
            }
        }));
        PDFViewerApplication.eventBus.on('pagechanging', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (!_this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                _this.ngZone.run((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
                    /** @type {?} */
                    var currentPageLabel = PDFViewerApplication.pdfViewer.currentPageLabel;
                    if (currentPage !== _this.page) {
                        _this.pageChange.emit(currentPage);
                    }
                    if (currentPageLabel !== _this.pageLabel) {
                        _this.pageLabelChange.emit(currentPageLabel);
                    }
                }));
            }
        }));
        this.checkHeight();
        // open a file in the viewer
        if (!!this._src) {
            /** @type {?} */
            var options = {
                password: this.password,
                verbosity: this.logLevel,
            };
            if (this._src['range']) {
                options.range = this._src['range'];
            }
            if (this.httpHeaders) {
                options.httpHeaders = this.httpHeaders;
            }
            if (this.authorization) {
                options.withCredentials = true;
                if (options.httpHeaders) {
                    if (!options.httpHeaders.Authorization) {
                        options.httpHeaders.Authorization = this.authorization;
                    }
                }
                else {
                    options.httpHeaders = {
                        Authorization: this.authorization,
                    };
                }
            }
            PDFViewerApplication.onError = (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return _this.pdfLoadingFailed.emit(error); });
            PDFViewerApplication.open(this._src, options).then((/**
             * @return {?}
             */
            function () {
                _this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount });
            }));
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (!_this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                if (_this.page) {
                    PDFViewerApplication.page = Number(_this.page);
                }
            }
        }), 100);
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.openPDF2 = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.overrideDefaultSettings();
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        var options = {
            password: this.password,
            verbosity: this.logLevel,
        };
        if (this._src['range']) {
            options.range = this._src['range'];
        }
        if (this.httpHeaders) {
            options.httpHeaders = this.httpHeaders;
        }
        if (this.authorization) {
            options.withCredentials = true;
            if (options.httpHeaders) {
                if (!options.httpHeaders.Authorization) {
                    options.httpHeaders.Authorization = this.authorization;
                }
            }
            else {
                options.httpHeaders = {
                    Authorization: this.authorization,
                };
            }
        }
        PDFViewerApplication.open(this._src, options).then((/**
         * @return {?}
         */
        function () {
            _this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount });
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.pdfLoadingFailed.emit(error); }));
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.selectCursorTool = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: this.handTool ? 1 : 0 });
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        this.shuttingDown = true;
        NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = false;
        if (this.initTimeout) {
            clearTimeout(this.initTimeout);
            this.initTimeout = undefined;
        }
        if (PDFViewerApplication) {
            if (this.pinchOnMobileSupport) {
                this.pinchOnMobileSupport.destroyPinchZoom();
                this.pinchOnMobileSupport = undefined;
            }
            PDFViewerApplication.cleanup();
            PDFViewerApplication.close();
            if (PDFViewerApplication.printKeyDownListener) {
                removeEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
            }
            if (PDFViewerApplication._boundEvents) {
                PDFViewerApplication.unbindWindowEvents();
            }
            /** @type {?} */
            var bus = PDFViewerApplication.eventBus;
            if (bus) {
                PDFViewerApplication.unbindEvents();
                for (var key in bus._listeners) {
                    if (bus._listeners[key]) {
                        /** @type {?} */
                        var list = bus._listeners[key];
                        // not sure if the for loop is necessary - but
                        // it might improve garbage collection if the "listeners"
                        // array is stored somewhere else
                        for (var i = 0; i < list.length; i++) {
                            list[i] = undefined;
                        }
                        bus._listeners[key] = undefined;
                    }
                }
            }
            ((/** @type {?} */ (PDFViewerApplication.eventBus))) = null;
        }
        /** @type {?} */
        var body = document.getElementsByTagName('body');
        if (body[0]) {
            /** @type {?} */
            var topLevelElements = body[0].children;
            for (var i = topLevelElements.length - 1; i >= 0; i--) {
                /** @type {?} */
                var e = topLevelElements.item(i);
                if (e && e.id === 'printContainer') {
                    body[0].removeChild(e);
                }
                else if (e && e.id === 'fileInput') {
                    body[0].removeChild(e);
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.isPrimaryMenuVisible = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.showToolbar) {
            /** @type {?} */
            var visible = this.showBookmarkButton ||
                this.showDownloadButton ||
                this.showFindButton ||
                this.showOpenFileButton ||
                this.showPagingButtons ||
                this.showPresentationModeButton ||
                this.showPrintButton ||
                this.showPropertiesButton ||
                this.showRotateButton ||
                this.showHandToolButton ||
                this.showScrollingButton ||
                this.showSidebarButton ||
                this.showZoomButtons;
            if (visible) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        var PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            if ('src' in changes || 'base64Src' in changes) {
                if (!!this._src) {
                    this.openPDF2();
                }
                else {
                    PDFViewerApplication.close();
                }
            }
            if ('zoom' in changes) {
                this.setZoom();
            }
            if ('maxZoom' in changes) {
                PDFViewerApplicationOptions.set('maxZoom', this.maxZoom);
            }
            if ('minZoom' in changes) {
                PDFViewerApplicationOptions.set('minZoom', this.minZoom);
            }
            if ('handTool' in changes) {
                this.selectCursorTool();
            }
            if ('page' in changes) {
                if (this.page) {
                    // tslint:disable-next-line: triple-equals
                    if (this.page != PDFViewerApplication.page) {
                        PDFViewerApplication.page = this.page;
                    }
                }
            }
            if ('pageLabel' in changes) {
                if (this.pageLabel) {
                    if (this.pageLabel !== PDFViewerApplication.pdfViewer.currentPageLabel) {
                        PDFViewerApplication.pdfViewer.currentPageLabel = this.pageLabel;
                    }
                }
            }
            if ('rotation' in changes) {
                if (this.rotation) {
                    /** @type {?} */
                    var r = Number(this.rotation);
                    if (r === 0 || r === 90 || r === 180 || r === 270) {
                        PDFViewerApplication.pdfViewer.pagesRotation = r;
                    }
                }
                else {
                    PDFViewerApplication.pdfViewer.pagesRotation = 0;
                }
            }
            if ('scrollMode' in changes) {
                if (this.scrollMode) {
                    PDFViewerApplication.pdfViewer.scrollMode = Number(this.scrollMode);
                }
            }
            if ('sidebarVisible' in changes) {
                if (this.sidebarVisible) {
                    PDFViewerApplication.pdfSidebar.open();
                }
                else {
                    PDFViewerApplication.pdfSidebar.close();
                }
            }
            if ('filenameForDownload' in changes) {
                PDFViewerApplication.appConfig.filenameForDownload = this.filenameForDownload;
            }
            if ('nameddest' in changes) {
                if (this.nameddest) {
                    PDFViewerApplication.pdfLinkService.navigateTo(this.nameddest);
                }
            }
            if ('spread' in changes) {
                if (this.spread === 'even') {
                    PDFViewerApplication.spreadModeOnLoad = 2;
                    PDFViewerApplication.pdfViewer.spreadMode = 2;
                    this.onSpreadChange('even');
                }
                else if (this.spread === 'odd') {
                    PDFViewerApplication.spreadModeOnLoad = 1;
                    PDFViewerApplication.pdfViewer.spreadMode = 1;
                    this.onSpreadChange('odd');
                }
                else {
                    PDFViewerApplication.spreadModeOnLoad = 0;
                    PDFViewerApplication.pdfViewer.spreadMode = 0;
                    this.onSpreadChange('off');
                }
            }
            if ('enablePinchOnMobile' in changes) {
                if (!changes['enablePinchOnMobile'].isFirstChange()) {
                    if (changes['enablePinchOnMobile'].currentValue !== changes['enablePinchOnMobile'].previousValue) {
                        if (this.enablePinchOnMobile) {
                            this.pinchOnMobileSupport = new PinchOnMobileSupport(this.ngZone);
                        }
                        else {
                            if (this.pinchOnMobileSupport) {
                                this.pinchOnMobileSupport.destroyPinchZoom();
                                this.pinchOnMobileSupport = undefined;
                            }
                        }
                    }
                }
            }
            this.primaryMenuVisible = this.showToolbar;
            if (!this.showSecondaryToolbarButton || this.hideKebabMenuForSecondaryToolbar) {
                if (!this.isPrimaryMenuVisible()) {
                    this.primaryMenuVisible = false;
                }
            }
            this.calcViewerPositionTop();
        } // end of if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized)
        this.onResize();
        if ('printResolution' in changes) {
            /** @type {?} */
            var options = PDFViewerApplicationOptions;
            if (options) {
                options.set('printResolution', this.printResolution);
            }
        }
        if ('ignoreKeyboard' in changes) {
            /** @type {?} */
            var options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('ignoreKeys' in changes) {
            /** @type {?} */
            var options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('acceptKeys' in changes) {
            /** @type {?} */
            var options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('showBorders' in changes) {
            if (!changes['showBorders'].isFirstChange()) {
                /** @type {?} */
                var options = PDFViewerApplicationOptions;
                if (options) {
                    this.overrideDefaultSettings();
                    /** @type {?} */
                    var viewer = (/** @type {?} */ (document.getElementById('viewer')));
                    if (this.showBorders) {
                        viewer.classList.remove('removePageBorders');
                    }
                    else {
                        viewer.classList.add('removePageBorders');
                    }
                    if (PDFViewerApplication.pdfViewer) {
                        PDFViewerApplication.pdfViewer.removePageBorders = !this.showBorders;
                    }
                    /** @type {?} */
                    var zoomEvent = (/** @type {?} */ ({
                        source: viewer,
                        // tslint:disable-next-line:no-bitwise
                        scale: (Number(this.zoom) | 100) / 100,
                        presetValue: this.zoom,
                    }));
                    PDFViewerApplication.eventBus.dispatch('scalechanging', zoomEvent);
                }
            }
            if ('showUnverifiedSignatures' in changes) {
                if (PDFViewerApplication && PDFViewerApplication.pdfDocument) {
                    PDFViewerApplication.pdfDocument._transport.messageHandler.send('showUnverifiedSignatures', this.showUnverifiedSignatures);
                }
            }
            if ('formData' in changes) {
                /** @type {?} */
                var newFormData = this.addMissingFormFields(changes['formData'].currentValue);
                if (!this.equals(newFormData, changes['formData'].previousValue)) {
                    this.fillFormFields(this.formData);
                }
            }
        }
        if ('enablePrint' in changes) {
            if (!changes['enablePrint'].isFirstChange()) {
                PDFViewerApplication.enablePrint = this.enablePrint;
            }
        }
        if (('customFindbar' in changes && !changes['customFindbar'].isFirstChange()) ||
            ('customFindbarButtons' in changes && !changes['customFindbarButtons'].isFirstChange()) ||
            ('customFindbarInputArea' in changes && !changes['customFindbarInputArea'].isFirstChange()) ||
            ('customToolbar' in changes && !changes['customToolbar'].isFirstChange())) {
            if (this.dummyComponents) {
                this.dummyComponents.addMissingStandardWidgets();
            }
        }
        if ('height' in changes) {
        }
    };
    /**
     * @private
     * @param {?} object1
     * @param {?} object2
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.equals = /**
     * @private
     * @param {?} object1
     * @param {?} object2
     * @return {?}
     */
    function (object1, object2) {
        var e_1, _a, e_2, _b;
        if (!object1 || !object2) {
            return object1 === object2;
        }
        /** @type {?} */
        var keys1 = Object.keys(object1);
        /** @type {?} */
        var keys2 = Object.keys(object2);
        try {
            for (var keys1_1 = tslib_1.__values(keys1), keys1_1_1 = keys1_1.next(); !keys1_1_1.done; keys1_1_1 = keys1_1.next()) {
                var key = keys1_1_1.value;
                if (object1.hasOwnProperty(key)) {
                    if (object1[key] !== undefined && object2[key] !== undefined) {
                        if (object1[key] !== object2[key]) {
                            return false;
                        }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (keys1_1_1 && !keys1_1_1.done && (_a = keys1_1.return)) _a.call(keys1_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var keys2_1 = tslib_1.__values(keys2), keys2_1_1 = keys2_1.next(); !keys2_1_1.done; keys2_1_1 = keys2_1.next()) {
                var key = keys2_1_1.value;
                if (object2.hasOwnProperty(key)) {
                    if (object1[key] !== undefined && object2[key] !== undefined) {
                        if (object1[key] !== object2[key]) {
                            return false;
                        }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys2_1_1 && !keys2_1_1.done && (_b = keys2_1.return)) _b.call(keys2_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return true;
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.setZoom = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var zoomAsNumber = this.zoom;
        if (String(zoomAsNumber).endsWith('%')) {
            zoomAsNumber = Number(String(zoomAsNumber).replace('%', '')) / 100;
        }
        else if (!isNaN(Number(zoomAsNumber))) {
            zoomAsNumber = Number(zoomAsNumber) / 100;
        }
        if (!zoomAsNumber) {
            zoomAsNumber = 'auto';
        }
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (PDFViewerApplication) {
            /** @type {?} */
            var PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
            PDFViewerApplicationOptions.set('defaultZoomValue', zoomAsNumber);
        }
        if (PDFViewerApplication.pdfViewer) {
            PDFViewerApplication.pdfViewer.currentScaleValue = zoomAsNumber;
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pdfViewer = document.getElementsByClassName('html');
        if (pdfViewer && pdfViewer.length > 0) {
            /** @type {?} */
            var container = document.getElementById('outerContainer');
            if (container) {
                /** @type {?} */
                var width = container.clientWidth;
                this.toolbarWidthInPixels = width;
                if (this.secondaryToolbarComponent) {
                    this.secondaryToolbarComponent.checkVisibility();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.onContextMenu = /**
     * @return {?}
     */
    function () {
        return this.contextMenuAllowed;
    };
    /**
     * @param {?} hideKebabButton
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.onSecondaryMenuIsEmpty = /**
     * @param {?} hideKebabButton
     * @return {?}
     */
    function (hideKebabButton) {
        this.hideKebabMenuForSecondaryToolbar = hideKebabButton;
        if (hideKebabButton) {
            if (!this.isPrimaryMenuVisible()) {
                this.primaryMenuVisible = false;
            }
        }
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.fillFormFields = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (!PDFViewerApplication || !PDFViewerApplication.pdfDocument || !PDFViewerApplication.pdfDocument.annotationStorage) {
            // ngOnChanges calls this method too early - so just ignore it
            return;
        }
        /** @type {?} */
        var annotations = PDFViewerApplication.pdfDocument.annotationStorage.getAll();
        for (var annotation in annotations) {
            if (annotation) {
                /** @type {?} */
                var container = document.querySelector('[data-annotation-id="' + annotation + '"]');
                if (container) {
                    /** @type {?} */
                    var field = container.querySelector('input');
                    if (field) {
                        /** @type {?} */
                        var fieldName = field.name;
                        /** @type {?} */
                        var newValue = formData[fieldName];
                        if (newValue === undefined) {
                            if (field.type === 'checkbox') {
                                // Additional PDF Form Field Types #567: use exportValue from the field annotation for the value
                                this.formData[fieldName] = field.checked ? this.buttonValues[annotation] : null;
                            }
                            else if (field.type === 'radio') {
                                // Additional PDF Form Field Types #567: use buttonValue from the field annotation for the value
                                if (field.checked)
                                    this.formData[fieldName] = this.buttonValues[annotation];
                            }
                            else {
                                this.formData[fieldName] = field.value;
                            }
                        }
                        if (newValue !== undefined) {
                            PDFViewerApplication.pdfDocument.annotationStorage.setValue(annotation, newValue);
                            if (field.type === 'checkbox') {
                                /** @type {?} */
                                var v = String(newValue) == this.buttonValues[annotation];
                                field.checked = v;
                            }
                            else if (field.type === 'radio') {
                                /** @type {?} */
                                var v = String(newValue) == this.buttonValues[annotation];
                                field.checked = v;
                            }
                            else {
                                field.value = (/** @type {?} */ (newValue));
                            }
                        }
                    }
                    // Additional PDF Form Field Types #567: handle multi line text fields
                    /** @type {?} */
                    var textarea = container.querySelector('textarea');
                    if (textarea) {
                        /** @type {?} */
                        var fieldName = textarea.name;
                        /** @type {?} */
                        var newValue = formData[fieldName];
                        if (newValue === undefined) {
                            this.formData[fieldName] = textarea.value;
                        }
                        if (newValue !== undefined) {
                            PDFViewerApplication.pdfDocument.annotationStorage.setValue(annotation, newValue);
                            textarea.value = (/** @type {?} */ (newValue));
                        }
                    }
                    /** @type {?} */
                    var select = container.querySelector('select');
                    if (select) {
                        /** @type {?} */
                        var fieldName = select.name;
                        /** @type {?} */
                        var newValue = formData[fieldName];
                        if (newValue === undefined) {
                            // Additional PDF Form Field Types #567: moved setting and retrieving <select> field values to functions to handle single or multi select fields
                            this.formData[fieldName] = this.getSelectValue(select);
                        }
                        if (newValue !== undefined) {
                            PDFViewerApplication.pdfDocument.annotationStorage.setValue(annotation, newValue);
                            // Additional PDF Form Field Types #567: moved setting and retrieving <select> field values to functions to handle single or multi select fields
                            this.setSelectValue(select, newValue);
                        }
                    }
                }
            }
        }
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.addFormFieldListeners = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        var annotations = PDFViewerApplication.pdfDocument.annotationStorage.getAll();
        var _loop_1 = function (annotation) {
            if (annotation) {
                /** @type {?} */
                var container = document.querySelector('[data-annotation-id="' + annotation + '"]');
                if (container) {
                    /** @type {?} */
                    var field_1 = container.querySelector('input');
                    if (field_1) {
                        /** @type {?} */
                        var fieldName_1 = field_1.name;
                        /** @type {?} */
                        var newValue = formData[fieldName_1];
                        if (newValue === undefined) {
                            // Additional PDF Form Field Types #567: use exportValue/buttonValue from the field annotation for the value for checkboxes/radio buttons
                            if (field_1.type === 'checkbox' || field_1.type === 'radio') {
                                if (field_1.checked)
                                    this_1.formData[fieldName_1] = this_1.buttonValues[annotation];
                            }
                            else
                                this_1.formData[fieldName_1] = field_1.value;
                        }
                        field_1.addEventListener('input', (/**
                         * @return {?}
                         */
                        function () { return _this.emitFormDataChange(annotation, fieldName_1, field_1); }));
                    }
                    // Additional PDF Form Field Types #567: handle multi line text fields
                    /** @type {?} */
                    var textarea_1 = container.querySelector('textarea');
                    if (textarea_1) {
                        /** @type {?} */
                        var fieldName_2 = textarea_1.name;
                        /** @type {?} */
                        var newValue = formData[fieldName_2];
                        if (newValue === undefined) {
                            this_1.formData[fieldName_2] = textarea_1.value;
                        }
                        textarea_1.addEventListener('input', (/**
                         * @return {?}
                         */
                        function () { return _this.emitFormDataChange(annotation, fieldName_2, textarea_1); }));
                    }
                    /** @type {?} */
                    var select_1 = container.querySelector('select');
                    if (select_1) {
                        /** @type {?} */
                        var fieldName_3 = select_1.name;
                        /** @type {?} */
                        var newValue = formData[fieldName_3];
                        if (newValue === undefined) {
                            // Additional PDF Form Field Types #567: moved setting and retrieving <select> field values to functions to handle single or multi select fields
                            this_1.formData[fieldName_3] = this_1.getSelectValue(select_1);
                        }
                        select_1.addEventListener('input', (/**
                         * @return {?}
                         */
                        function () { return _this.emitFormDataChange(annotation, fieldName_3, select_1); }));
                    }
                }
            }
        };
        var this_1 = this;
        for (var annotation in annotations) {
            _loop_1(annotation);
        }
    };
    /**
     * @param {?} formData
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.addMissingFormFields = /**
     * @param {?} formData
     * @return {?}
     */
    function (formData) {
        /** @type {?} */
        var result = tslib_1.__assign({}, formData);
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (PDFViewerApplication && PDFViewerApplication.pdfDocument) {
            /** @type {?} */
            var annotations = PDFViewerApplication.pdfDocument.annotationStorage.getAll();
            for (var annotation in annotations) {
                if (annotation) {
                    /** @type {?} */
                    var container = document.querySelector('[data-annotation-id="' + annotation + '"]');
                    if (container) {
                        /** @type {?} */
                        var field = container.querySelector('input');
                        if (field) {
                            /** @type {?} */
                            var fieldName = field.name;
                            /** @type {?} */
                            var newValue = result[fieldName];
                            if (newValue === undefined) {
                                // Additional PDF Form Field Types #567: use exportValue/buttonValue from the field annotation for the value for checkboxes/radio buttons
                                if (field.type === 'checkbox') {
                                    result[fieldName] = field.checked ? this.buttonValues[annotation] : null;
                                }
                                else if (field.type === 'radio') {
                                    if (field.checked)
                                        result[fieldName] = this.buttonValues[annotation];
                                }
                                else {
                                    result[fieldName] = field.value;
                                }
                            }
                        }
                        /** @type {?} */
                        var select = container.querySelector('select');
                        if (select) {
                            /** @type {?} */
                            var fieldName = select.name;
                            /** @type {?} */
                            var newValue = result[fieldName];
                            if (newValue === undefined) {
                                // Additional PDF Form Field Types #567: moved setting and retrieving <select> field values to functions to handle single or multi select fields
                                result[fieldName] = this.getSelectValue(select);
                            }
                        }
                        // Additional PDF Form Field Types #567: handle multi line text fields
                        /** @type {?} */
                        var textarea = container.querySelector('textarea');
                        if (textarea) {
                            /** @type {?} */
                            var fieldName = textarea.name;
                            /** @type {?} */
                            var newValue = result[fieldName];
                            if (newValue === undefined) {
                                result[fieldName] = textarea.value;
                            }
                        }
                    }
                }
            }
        }
        return result;
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.getSelectValue = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (field.multiple) {
            /** @type {?} */
            var values = [];
            /** @type {?} */
            var options = field.options;
            for (var i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    values.push(options[i].value);
                }
            }
            return (values);
        }
        else
            return (field.value);
    };
    /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.setSelectValue = /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    function (field, value) {
        if (field.multiple && Array.isArray(value)) {
            /** @type {?} */
            var values = value;
            /** @type {?} */
            var options = field.options;
            for (var i = 0; i < options.length; i++)
                options[i].selected = (values.indexOf(options[i].value) != -1);
        }
        else
            field.value = (/** @type {?} */ (value));
    };
    /**
     * @private
     * @param {?} annotation
     * @param {?} fieldName
     * @param {?} field
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.emitFormDataChange = /**
     * @private
     * @param {?} annotation
     * @param {?} fieldName
     * @param {?} field
     * @return {?}
     */
    function (annotation, fieldName, field) {
        var _this = this;
        /** @type {?} */
        var value = null;
        if (field instanceof HTMLSelectElement) {
            value = this.getSelectValue(field);
        }
        // Additional PDF Form Field Types #567: handle multi line text fields
        else if (field instanceof HTMLTextAreaElement) {
            value = field.value;
        }
        else if (field instanceof HTMLInputElement) {
            // Additional PDF Form Field Types #567: use exportValue/buttonValue from the field annotation for the value for checkboxes/radio buttons
            if (field.type === 'checkbox') {
                if (field.checked)
                    value = this.buttonValues[annotation];
            }
            else if (field.type === 'radio') {
                if (field.checked)
                    value = this.buttonValues[annotation];
            }
            else {
                value = field.value;
            }
        }
        this.ngZone.run((/**
         * @return {?}
         */
        function () {
            if (_this.formData[fieldName] !== undefined) {
                _this.formData[fieldName] = value;
                _this.formDataChange.emit(_this.formData);
            }
        }));
    };
    /*
    private addInput(annotation: PDFAnnotationData, rect: number[]): void {
      // add input to page
      console.log(annotation);
    }
    */
    /*
      private addInput(annotation: PDFAnnotationData, rect: number[]): void {
        // add input to page
        console.log(annotation);
      }
      */
    /**
     * @param {?} pdf
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.loadComplete = /*
      private addInput(annotation: PDFAnnotationData, rect: number[]): void {
        // add input to page
        console.log(annotation);
      }
      */
    /**
     * @param {?} pdf
     * @return {?}
     */
    function (pdf /* PDFDocumentProxy */) {
        var _this = this;
        // screen DPI / PDF DPI
        /**
         * This method has been inspired by https://medium.com/factory-mind/angular-pdf-forms-fa72b15c3fbd. Thanks, Jonny Fox!
         * @type {?}
         */
        var dpiRatio = 96 / 72;
        this.hasSignature = false;
        this.buttonValues = {};
        var _loop_2 = function (i) {
            // track the current page
            /** @type {?} */
            var currentPage = null;
            pdf
                .getPage(i)
                .then((/**
             * @param {?} p
             * @return {?}
             */
            function (p) {
                currentPage = p;
                // get the annotations of the current page
                return p.getAnnotations();
            }))
                .then((/**
             * @param {?} ann
             * @return {?}
             */
            function (ann) {
                // ugly cast due to missing typescript definitions
                // please contribute to complete @types/pdfjs-dist
                /** @type {?} */
                var annotations = ann;
                annotations
                    .filter((/**
                 * @param {?} a
                 * @return {?}
                 */
                function (a) { return a.subtype === 'Widget'; })) // get the form field annotation only
                    .forEach((/**
                 * @param {?} a
                 * @return {?}
                 */
                function (a) {
                    // Additional PDF Form Field Types #567: Store the exportValue for the check boxes and buttonValue for radio buttons for quick reference 
                    if (a.checkBox)
                        _this.buttonValues[a.id] = a.exportValue;
                    else if (a.radioButton)
                        _this.buttonValues[a.id] = a.buttonValue;
                    if (a.fieldType === 'Sig') {
                        _this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            _this.hasSignature = true;
                            setTimeout((/**
                             * @return {?}
                             */
                            function () {
                                /** @type {?} */
                                var viewerContainer = (/** @type {?} */ (document.querySelector('#viewerContainer')));
                                viewerContainer.scrollBy(0, -32);
                            }));
                        }));
                    }
                    /*
                    // get the rectangle that represent the single field
                    // and resize it according to the current DPI
                    const fieldRect = currentPage.getViewport(dpiRatio).convertToViewportRectangle(a.rect);
      
                    // add the corresponding input
                    this.addInput(a, fieldRect);
                    */
                }));
            }));
        };
        for (var i = 1; i <= pdf.numPages; i++) {
            _loop_2(i);
        }
    };
    NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = false;
    NgxExtendedPdfViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-extended-pdf-viewer',
                    template: "<link *ngIf=\"useBrowserLocale\" rel=\"resource\" type=\"application/l10n\" [attr.xhref]=\"localeFolderPath+'/locale.properties'\" origin=\"ngx-extended-pdf-viewer\" />\n<pdf-dark-theme *ngIf=\"theme==='dark'\"></pdf-dark-theme>\n<pdf-light-theme *ngIf=\"theme==='light'\"></pdf-light-theme>\n\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\n<div class=\"zoom\" [style.height]=\"height\" [style.minHeight]=\"minHeight\" #root>\n  <div class=\"html\">\n    <div class=\"loadingInProgress body\" [style.backgroundColor]=\"backgroundColor\">\n      <div id=\"outerContainer\" (window:resize)=\"onResize()\">\n        <div class=\"free-floating-bar\">\n          <ng-content *ngTemplateOutlet=\"customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar\"></ng-content>\n        </div>\n        <pdf-sidebar #pdfsidebar\n                     [sidebarPositionTop]=\"sidebarPositionTop\"\n                     [sidebarVisible]=\"sidebarVisible\"\n                     [showSidebarButton]=\"showSidebarButton\"\n                     [customSidebar]=\"customSidebar\"\n                     [customThumbnail]=\"customThumbnail\"\n                     (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\">\n        </pdf-sidebar>\n        <div id=\"mainContainer\">\n          <pdf-dummy-components></pdf-dummy-components>\n\n          <pdf-toolbar\n            [customToolbar]=\"customToolbar\"\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n            [primaryMenuVisible]=\"primaryMenuVisible\"\n            [showBookmarkButton]=\"showBookmarkButton\"\n            [showDownloadButton]=\"showDownloadButton\"\n            [showFindButton]=\"showFindButton\"\n            [showHandToolButton]=\"showHandToolButton\"\n            [showOpenFileButton]=\"showOpenFileButton\"\n            [showPrintButton]=\"showPrintButton && enablePrint\"\n            [showPagingButtons]=\"showPagingButtons\"\n            [showPresentationModeButton]=\"showPresentationModeButton\"\n            [showRotateButton]=\"showRotateButton\"\n            [showSecondaryToolbarButton]=\"showSecondaryToolbarButton && !hideKebabMenuForSecondaryToolbar\"\n            [showSidebarButton]=\"showSidebarButton\"\n            [showZoomButtons]=\"showZoomButtons\"\n            [textLayer]=\"textLayer\"\n            [toolbarPaddingTop]=\"toolbarPaddingTop\"\n            [toolbarWidth]=\"toolbarWidth\"\n            [zoomLevels]=\"zoomLevels\"\n          ></pdf-toolbar>\n\n          <pdf-secondary-toolbar #pdfSecondaryToolbarComponent\n            [customSecondaryToolbar]=\"customSecondaryToolbar\"\n            [secondaryToolbarTop]=\"secondaryToolbarTop\"\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n            [showPresentationModeButton]=\"showPresentationModeButton\"\n            [showOpenFileButton]=\"showOpenFileButton\"\n            [showPrintButton]=\"showPrintButton && enablePrint\"\n            [showDownloadButton]=\"showDownloadButton\"\n            [showBookmarkButton]=\"showBookmarkButton\"\n            [showPagingButtons]=\"showPagingButtons\"\n            [showRotateButton]=\"showRotateButton\"\n            [showHandToolButton]=\"showHandToolButton\"\n            [showScrollingButton]=\"showScrollingButton\"\n            [showSpreadButton]=\"showSpreadButton\"\n            [showPropertiesButton]=\"showPropertiesButton\"\n            (spreadChange)=\"onSpreadChange($event)\"\n            (secondaryMenuIsEmpty)=\"onSecondaryMenuIsEmpty($event)\"\n          >\n          </pdf-secondary-toolbar>\n\n          <pdf-findbar\n            [findbarLeft]=\"findbarLeft\"\n            [findbarTop]=\"findbarTop\"\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n            [showFindButton]=\"showFindButton\"\n            [customFindbarInputArea]=\"customFindbarInputArea\"\n            [customFindbarButtons]=\"customFindbarButtons\"\n          >\n          </pdf-findbar>\n\n          <pdf-context-menu></pdf-context-menu>\n\n          <div id=\"viewerContainer\" [style.top]=\"viewerPositionTop\">\n            <div class=\"unverified-signature-warning\" *ngIf=\"hasSignature\">\n              This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid. Please download the file and open it in Acrobat Reader to verify the signature is valid.\n            </div>\n            <div id=\"viewer\" class=\"pdfViewer\" [style.backgroundColor]=\"backgroundColor\">\n            </div>\n          </div>\n\n          <div id=\"errorWrapper\" hidden=\"true\">\n            <div id=\"errorMessageLeft\">\n              <span id=\"errorMessage\"></span>\n              <button type=\"button\" id=\"errorShowMore\" data-l10n-id=\"error_more_info\">\n                More Information\n              </button>\n              <button type=\"button\" id=\"errorShowLess\" data-l10n-id=\"error_less_info\" hidden=\"true\">\n                Less Information\n              </button>\n            </div>\n            <div id=\"errorMessageRight\">\n              <button type=\"button\" id=\"errorClose\" data-l10n-id=\"error_close\">Close</button>\n            </div>\n            <div class=\"clearBoth\"></div>\n            <textarea id=\"errorMoreInfo\" hidden=\"true\" readonly=\"readonly\"></textarea>\n          </div>\n        </div>\n        <!-- mainContainer -->\n\n        <div id=\"overlayContainer\" class=\"hidden\">\n          <div id=\"passwordOverlay\" class=\"container hidden\">\n            <div class=\"dialog\">\n              <div class=\"row\">\n                <p id=\"passwordText\" data-l10n-id=\"password_label\">\n                  Enter the password to open this PDF file:\n                </p>\n              </div>\n              <div class=\"row\">\n                <input id=\"password\" class=\"toolbarField\" />\n              </div>\n              <div class=\"buttonRow\">\n                <button type=\"button\" id=\"passwordCancel\" class=\"overlayButton\">\n                  <span data-l10n-id=\"password_cancel\">Cancel</span>\n                </button>\n                <button type=\"button\" id=\"passwordSubmit\" class=\"overlayButton\">\n                  <span data-l10n-id=\"password_ok\">OK</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <pdf-document-properties-overlay class=\"container hidden\" id=\"documentPropertiesOverlay\"> </pdf-document-properties-overlay>\n\n          <div id=\"printServiceOverlay\" class=\"container hidden\">\n            <div class=\"dialog\">\n              <div class=\"row\">\n                <span data-l10n-id=\"print_progress_message\">Preparing document for printing\u2026</span>\n              </div>\n              <div class=\"row\">\n                <progress value=\"0\" max=\"100\"></progress>\n                <span data-l10n-id=\"print_progress_percent\" data-l10n-args='{ \"progress\": 0 }' class=\"relative-progress\">0%</span>\n              </div>\n              <div class=\"buttonRow\">\n                <button type=\"button\" id=\"printCancel\" class=\"overlayButton\">\n                  <span data-l10n-id=\"print_progress_close\">Cancel</span>\n                </button>\n              </div>\n            </div>\n          </div>\n         </div>\n        <!-- overlayContainer -->\n      </div>\n      <!-- outerContainer -->\n      <div id=\"printContainer\"></div>\n    </div>\n  </div>\n</div>\n\n<ng-template #defaultFreeFloatingBar>\n\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NgxExtendedPdfViewerComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PDFNotificationService },
        { type: Location },
        { type: ElementRef }
    ]; };
    NgxExtendedPdfViewerComponent.propDecorators = {
        dummyComponents: [{ type: ViewChild, args: [PdfDummyComponentsComponent,] }],
        root: [{ type: ViewChild, args: ['root',] }],
        customFindbarInputArea: [{ type: Input }],
        customToolbar: [{ type: Input }],
        customFindbar: [{ type: Input }],
        customFindbarButtons: [{ type: Input }],
        customSecondaryToolbar: [{ type: Input }],
        customSidebar: [{ type: Input }],
        customThumbnail: [{ type: Input }],
        customFreeFloatingBar: [{ type: Input }],
        formData: [{ type: Input }],
        formDataChange: [{ type: Output }],
        pageViewMode: [{ type: Input }],
        secondaryToolbarComponent: [{ type: ViewChild, args: ['pdfSecondaryToolbarComponent',] }],
        sidebarComponent: [{ type: ViewChild, args: ['pdfsidebar',] }],
        srcChange: [{ type: Output }],
        scrollMode: [{ type: Input }],
        scrollModeChange: [{ type: Output }],
        authorization: [{ type: Input }],
        httpHeaders: [{ type: Input }],
        contextMenuAllowed: [{ type: Input }],
        afterPrint: [{ type: Output }],
        beforePrint: [{ type: Output }],
        currentZoomFactor: [{ type: Output }],
        enablePrint: [{ type: Input }],
        delayFirstView: [{ type: Input }],
        logLevel: [{ type: Input }],
        enablePinchOnMobile: [{ type: Input }],
        minifiedJSLibraries: [{ type: Input }],
        printResolution: [{ type: Input }],
        rotation: [{ type: Input }],
        rotationChange: [{ type: Output }],
        src: [{ type: Input }],
        base64Src: [{ type: Input }],
        height: [{ type: Input }],
        useBrowserLocale: [{ type: Input }],
        backgroundColor: [{ type: Input }],
        filenameForDownload: [{ type: Input }],
        ignoreKeyboard: [{ type: Input }],
        ignoreKeys: [{ type: Input }],
        acceptKeys: [{ type: Input }],
        imageResourcesPath: [{ type: Input }],
        localeFolderPath: [{ type: Input }],
        language: [{ type: Input }],
        listenToURL: [{ type: Input }],
        nameddest: [{ type: Input }],
        password: [{ type: Input }],
        showUnverifiedSignatures: [{ type: Input }],
        startTabindex: [{ type: Input }],
        showSidebarButton: [{ type: Input }],
        sidebarVisible: [{ type: Input }],
        sidebarVisibleChange: [{ type: Output }],
        showFindButton: [{ type: Input }],
        showPagingButtons: [{ type: Input }],
        showZoomButtons: [{ type: Input }],
        showPresentationModeButton: [{ type: Input }],
        showOpenFileButton: [{ type: Input }],
        showPrintButton: [{ type: Input }],
        showDownloadButton: [{ type: Input }],
        showBookmarkButton: [{ type: Input }],
        theme: [{ type: Input }],
        showToolbar: [{ type: Input }],
        showSecondaryToolbarButton: [{ type: Input }],
        showRotateButton: [{ type: Input }],
        handTool: [{ type: Input }],
        handToolChange: [{ type: Output }],
        showHandToolButton: [{ type: Input }],
        showScrollingButton: [{ type: Input }],
        showSpreadButton: [{ type: Input }],
        showPropertiesButton: [{ type: Input }],
        showBorders: [{ type: Input }],
        spread: [{ type: Input }],
        spreadChange: [{ type: Output }],
        thumbnailDrawn: [{ type: Output }],
        page: [{ type: Input }],
        pageChange: [{ type: Output }],
        pageLabel: [{ type: Input }],
        pageLabelChange: [{ type: Output }],
        pagesLoaded: [{ type: Output }],
        pageRendered: [{ type: Output }],
        pdfDownloaded: [{ type: Output }],
        pdfLoaded: [{ type: Output }],
        pdfLoadingFailed: [{ type: Output }],
        textLayer: [{ type: Input }],
        textLayerRendered: [{ type: Output }],
        updateFindMatchesCount: [{ type: Output }],
        updateFindState: [{ type: Output }],
        zoom: [{ type: Input }],
        zoomChange: [{ type: Output }],
        zoomLevels: [{ type: Input }],
        maxZoom: [{ type: Input }],
        minZoom: [{ type: Input }],
        _mobileFriendlyZoom: [{ type: Input }],
        mobileFriendlyZoom: [{ type: Input }],
        onContextMenu: [{ type: HostListener, args: ['contextmenu',] }]
    };
    return NgxExtendedPdfViewerComponent;
}());
export { NgxExtendedPdfViewerComponent };
if (false) {
    /** @type {?} */
    NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized;
    /**
     * The dummy components are inserted automatically when the user customizes the toolbar
     * without adding every original toolbar item. Without the dummy components, the
     * initialization code of pdf.js crashes because it assume that every standard widget is there.
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.dummyComponents;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.root;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.pinchOnMobileSupport;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.customFindbarInputArea;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.customToolbar;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.customFindbar;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.customFindbarButtons;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.customSecondaryToolbar;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.customSidebar;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.customThumbnail;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.customFreeFloatingBar;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.formData;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.formDataChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pageViewMode;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.secondaryToolbarComponent;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.sidebarComponent;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype._src;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.srcChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.scrollMode;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.scrollModeChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.authorization;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.httpHeaders;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.contextMenuAllowed;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.afterPrint;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.beforePrint;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.currentZoomFactor;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.enablePrint;
    /**
     * Number of milliseconds to wait between initializing the PDF viewer and loading the PDF file.
     * Most users can let this parameter safely at it's default value of zero.
     * Set this to 1000 or higher if you run into timing problems (typically caused by loading the locale files
     * after the PDF files, so they are not available when the PDF viewer is initialized).
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.delayFirstView;
    /**
     * store the timeout id so it can be canceled if user leaves the page before the PDF is shown
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.initTimeout;
    /**
     * How many log messages should be printed?
     * Legal values: VerbosityLevel.INFOS (= 5), VerbosityLevel.WARNINGS (= 1), VerbosityLevel.ERRORS (= 0)
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.logLevel;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.enablePinchOnMobile;
    /**
     * Use the minified (minifiedJSLibraries="true", which is the default) or the user-readable pdf.js library (minifiedJSLibraries="false")
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.minifiedJSLibraries;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.primaryMenuVisible;
    /**
     * option to increase (or reduce) print resolution. Default is 150 (dpi). Sensible values
     * are 300, 600, and 1200. Note the increase memory consumption, which may even result in a browser crash.
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.printResolution;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.rotation;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.rotationChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.hasSignature;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.minHeight;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype._height;
    /**
     * If this flag is true, this components adds a link to the locale assets. The pdf viewer
     * sees this link and uses it to load the locale files automatically.
     * \@param useBrowserLocale boolean
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.useBrowserLocale;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.backgroundColor;
    /**
     * Allows the user to define the name of the file after clicking "download"
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.filenameForDownload;
    /**
     * Allows the user to disable the keyboard bindings completely
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ignoreKeyboard;
    /**
     * Allows the user to disable a list of key bindings.
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ignoreKeys;
    /**
     * Allows the user to enable a list of key bindings explicitly. If this property is set, every other key binding is ignored.
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.acceptKeys;
    /**
     * Allows the user to put the viewer's svg images into an arbitrary folder
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.imageResourcesPath;
    /**
     * Allows the user to put their locale folder into an arbitrary folder
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.localeFolderPath;
    /**
     * Override the default locale. This must be the complete locale name, such as "es-ES". The string is allowed to be all lowercase.
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.language;
    /**
     * By default, listening to the URL is deactivated because often the anchor tag is used for the Angular router
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.listenToURL;
    /**
     * Navigate to a certain "named destination"
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.nameddest;
    /**
     * allows you to pass a password to read password-protected files
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.password;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype._showSidebarButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.viewerPositionTop;
    /**
     * pdf.js can show signatures, but fails to verify them. So they are switched off by default.
     * Set "[showUnverifiedSignatures]"="true" to display e-signatures nonetheless.
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.showUnverifiedSignatures;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.startTabindex;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.sidebarVisible;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.sidebarVisibleChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showFindButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showPagingButtons;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showZoomButtons;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showPresentationModeButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showOpenFileButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showPrintButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showDownloadButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showBookmarkButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.theme;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showToolbar;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showSecondaryToolbarButton;
    /**
     * Set by the event (secondaryMenuIsEmpty)
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.hideKebabMenuForSecondaryToolbar;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showRotateButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.handTool;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.handToolChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showHandToolButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showScrollingButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showSpreadButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showPropertiesButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showBorders;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.spread;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.spreadChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.thumbnailDrawn;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype._page;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pageChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pageLabel;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pageLabelChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pagesLoaded;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pageRendered;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pdfDownloaded;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pdfLoaded;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pdfLoadingFailed;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.textLayer;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.textLayerRendered;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.updateFindMatchesCount;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.updateFindState;
    /**
     * Legal values: undefined, 'auto', 'page-actual', 'page_fit', 'page-width', or '50' (or any other percentage)
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.zoom;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.zoomChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.zoomLevels;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.maxZoom;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.minZoom;
    /**
     * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype._mobileFriendlyZoom;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.mobileFriendlyZoomScale;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.toolbarPaddingTop;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.toolbarWidth;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.toolbarWidthInPixels;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.secondaryToolbarTop;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.findbarTop;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.findbarLeft;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.buttonValues;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.shuttingDown;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.notificationService;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.location;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUlMLE1BQU0sRUFDTixZQUFZLEVBQ1osdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUXBGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsU0FBUyxFQUFzQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBaUIsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzFELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQ3pILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUEwQixjQUFjLEVBQUUs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Q0FBOEM7O0lBZ0I5QyxtREFDMkQ7O0lBRTNELGtEQUNpRDs7SUFFakQsd0RBQ2dFOztJQUVoRSxvREFDMEQ7O0lBRTFELHFEQUM0RDs7SUFFNUQsc0RBQzhEOztJQUU5RCxrREFDc0Q7O0lBRXRELHlEQUNvRDs7SUFFcEQsa0RBQ2tEOztJQUVsRCwwREFDc0U7O0lBRXRFLCtEQUMyRTs7SUFFM0Usd0RBQ3VEOzs7OztJQUd2RCw2Q0FDcUQ7O0lBRXJELG1EQUNvRTs7SUFFcEUsbURBQ2tHOztJQUVsRyxnREFDb0I7O0lBRXBCLGdEQUNxQjs7Ozs7O0lBS3JCLDREQUFzQzs7SUFFdEMsZ0VBQW1DOztJQUVuQywwREFBaUM7O0lBRWpDLHFEQUE2Qjs7SUFFN0IsNkRBQWtDOztJQUVsQyw0REFBMkQ7O0lBRzNELG1EQUFrRDs7SUFHbEQsb0RBQW1EOztJQUduRCxxREFBOEI7Ozs7O0lBb0M5QixxREFBNkI7Ozs7O0lBMEMzQiwrQ0FBc0I7Ozs7O0lBQ3RCLG1EQUF1Qzs7Ozs7SUFDdkMsNERBQW1EOzs7OztJQUNuRCxpREFBMEI7Ozs7O0lBQzFCLG1EQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEhvc3RMaXN0ZW5lcixcbiAgTmdab25lLFxuICBUZW1wbGF0ZVJlZixcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRCxcbiAgVmlld0NoaWxkLFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZXNMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2VzLWxvYWRlZC1ldmVudCc7XG5pbXBvcnQgeyBQYWdlUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2UtcmVuZGVyZWQtZXZlbnQnO1xuaW1wb3J0IHsgUGRmRG93bmxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLWRvd25sb2FkZWQtZXZlbnQnO1xuaW1wb3J0IHsgUGRmTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtbG9hZGVkLWV2ZW50JztcbmltcG9ydCB7IGdldFZlcnNpb25TdWZmaXgsIHBkZkRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zL3BkZi1kZWZhdWx0LW9wdGlvbnMnO1xuaW1wb3J0IHsgU2NhbGVDaGFuZ2luZ0V2ZW50IH0gZnJvbSAnLi9ldmVudHMvc2NhbGUtY2hhbmdpbmctZXZlbnQnO1xuaW1wb3J0IHsgUGFnZXNSb3RhdGlvbkV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGFnZXMtcm90YXRpb24tZXZlbnQnO1xuaW1wb3J0IHsgRmlsZUlucHV0Q2hhbmdlZCB9IGZyb20gJy4vZXZlbnRzL2ZpbGUtaW5wdXQtY2hhbmdlZCc7XG5pbXBvcnQgeyBTaWRlYmFydmlld0NoYW5nZSB9IGZyb20gJy4vZXZlbnRzL3NpZGViYXJ2aWV3LWNoYW5nZWQnO1xuaW1wb3J0IHsgSGFuZHRvb2xDaGFuZ2VkIH0gZnJvbSAnLi9ldmVudHMvaGFuZHRvb2wtY2hhbmdlZCc7XG5pbXBvcnQgeyBQYWdlTnVtYmVyQ2hhbmdlIH0gZnJvbSAnLi9ldmVudHMvcGFnZS1udW1iZXItY2hhbmdlJztcbmltcG9ydCB7IFNlcnZpY2VXb3JrZXJPcHRpb25zVHlwZSB9IGZyb20gJy4vb3B0aW9ucy9zZXJ2aWNlLXdvcmtlci1vcHRpb25zJztcbmltcG9ydCB7IFZlcmJvc2l0eUxldmVsIH0gZnJvbSAnLi9vcHRpb25zL3ZlcmJvc2l0eS1sZXZlbCc7XG5pbXBvcnQgeyBGaW5kU3RhdGUsIEZpbmRSZXN1bHRNYXRjaGVzQ291bnQsIEZpbmRSZXN1bHQgfSBmcm9tICcuL2V2ZW50cy9maW5kLXJlc3VsdCc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kdW1teS1jb21wb25lbnRzL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24tb3B0aW9ucyc7XG5pbXBvcnQgeyBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgUGRmQ3Vyc29yVG9vbHMgfSBmcm9tICcuL29wdGlvbnMvcGRmLWN1cnNvci10b29scyc7XG5pbXBvcnQgeyBUZXh0TGF5ZXJSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvdGV4dGxheWVyLXJlbmRlcmVkJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBpbmNoT25Nb2JpbGVTdXBwb3J0IH0gZnJvbSAnLi9waW5jaC1vbi1tb2JpbGUtc3VwcG9ydCc7XG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XG5pbXBvcnQgeyBQZGZTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTY3JvbGxNb2RlQ2hhbmdlZEV2ZW50LCBTY3JvbGxNb2RlVHlwZSB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyJztcbmltcG9ydCB7IFBkZkRvY3VtZW50TG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9kb2N1bWVudC1sb2FkZWQtZXZlbnQnO1xuaW1wb3J0IHsgYWRkTGlua0F0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi90eXBlcy9zcmMvZGlzcGxheS9kaXNwbGF5X3V0aWxzJztcblxuZGVjbGFyZSBjb25zdCBTZXJ2aWNlV29ya2VyT3B0aW9uczogU2VydmljZVdvcmtlck9wdGlvbnNUeXBlOyAvLyBkZWZpbmVkIGluIHZpZXdlci5qc1xuXG5pbnRlcmZhY2UgRWxlbWVudEFuZFBvc2l0aW9uIHtcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1EYXRhVHlwZSB7XG4gIFtmaWVsZE5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgc3RhdGljIG5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGR1bW15IGNvbXBvbmVudHMgYXJlIGluc2VydGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgdXNlciBjdXN0b21pemVzIHRoZSB0b29sYmFyXG4gICAqIHdpdGhvdXQgYWRkaW5nIGV2ZXJ5IG9yaWdpbmFsIHRvb2xiYXIgaXRlbS4gV2l0aG91dCB0aGUgZHVtbXkgY29tcG9uZW50cywgdGhlXG4gICAqIGluaXRpYWxpemF0aW9uIGNvZGUgb2YgcGRmLmpzIGNyYXNoZXMgYmVjYXVzZSBpdCBhc3N1bWUgdGhhdCBldmVyeSBzdGFuZGFyZCB3aWRnZXQgaXMgdGhlcmUuXG4gICAqL1xuICBAVmlld0NoaWxkKFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudClcbiAgcHVibGljIGR1bW15Q29tcG9uZW50czogUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50O1xuXG4gIEBWaWV3Q2hpbGQoJ3Jvb3QnKVxuICBwdWJsaWMgcm9vdDogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIHBpbmNoT25Nb2JpbGVTdXBwb3J0OiBQaW5jaE9uTW9iaWxlU3VwcG9ydCB8IHVuZGVmaW5lZDtcblxuICAvKiBVSSB0ZW1wbGF0ZXMgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJJbnB1dEFyZWE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbUZpbmRiYXI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJCdXR0b25zOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21TZWNvbmRhcnlUb29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21TaWRlYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21UaHVtYm5haWw6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbUZyZWVGbG9hdGluZ0JhcjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZm9ybURhdGE6IEZvcm1EYXRhVHlwZSA9IHt9O1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZm9ybURhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1EYXRhVHlwZT4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcGFnZVZpZXdNb2RlOiAnc2luZ2xlJyB8ICdib29rJyB8ICdtdWx0aXBsZScgfCAnaW5maW5pdGUtc2Nyb2xsJyA9ICdtdWx0aXBsZSc7XG5cbiAgQFZpZXdDaGlsZCgncGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCcpXG4gIHByaXZhdGUgc2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudDogUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudDtcblxuICBAVmlld0NoaWxkKCdwZGZzaWRlYmFyJylcbiAgcHJpdmF0ZSBzaWRlYmFyQ29tcG9uZW50OiBQZGZTaWRlYmFyQ29tcG9uZW50O1xuXG4gIC8qIHJlZ3VsYXIgYXR0cmlidXRlcyAqL1xuXG4gIHByaXZhdGUgX3NyYzogc3RyaW5nIHwgQXJyYXlCdWZmZXIgfCB7IHJhbmdlOiBhbnkgfTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHNyY0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzY3JvbGxNb2RlOiBTY3JvbGxNb2RlVHlwZSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHNjcm9sbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNjcm9sbE1vZGVUeXBlPigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBhdXRob3JpemF0aW9uOiBPYmplY3QgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGh0dHBIZWFkZXJzOiBPYmplY3QgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNvbnRleHRNZW51QWxsb3dlZCA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBhZnRlclByaW50ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgYmVmb3JlUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjdXJyZW50Wm9vbUZhY3RvciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBlbmFibGVQcmludCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZXR3ZWVuIGluaXRpYWxpemluZyB0aGUgUERGIHZpZXdlciBhbmQgbG9hZGluZyB0aGUgUERGIGZpbGUuXG4gICAqIE1vc3QgdXNlcnMgY2FuIGxldCB0aGlzIHBhcmFtZXRlciBzYWZlbHkgYXQgaXQncyBkZWZhdWx0IHZhbHVlIG9mIHplcm8uXG4gICAqIFNldCB0aGlzIHRvIDEwMDAgb3IgaGlnaGVyIGlmIHlvdSBydW4gaW50byB0aW1pbmcgcHJvYmxlbXMgKHR5cGljYWxseSBjYXVzZWQgYnkgbG9hZGluZyB0aGUgbG9jYWxlIGZpbGVzXG4gICAqIGFmdGVyIHRoZSBQREYgZmlsZXMsIHNvIHRoZXkgYXJlIG5vdCBhdmFpbGFibGUgd2hlbiB0aGUgUERGIHZpZXdlciBpcyBpbml0aWFsaXplZCkuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGVsYXlGaXJzdFZpZXcgPSAwO1xuXG4gIC8qKiBzdG9yZSB0aGUgdGltZW91dCBpZCBzbyBpdCBjYW4gYmUgY2FuY2VsZWQgaWYgdXNlciBsZWF2ZXMgdGhlIHBhZ2UgYmVmb3JlIHRoZSBQREYgaXMgc2hvd24gKi9cbiAgcHJpdmF0ZSBpbml0VGltZW91dDogYW55O1xuXG4gIC8qKiBIb3cgbWFueSBsb2cgbWVzc2FnZXMgc2hvdWxkIGJlIHByaW50ZWQ/XG4gICAqIExlZ2FsIHZhbHVlczogVmVyYm9zaXR5TGV2ZWwuSU5GT1MgKD0gNSksIFZlcmJvc2l0eUxldmVsLldBUk5JTkdTICg9IDEpLCBWZXJib3NpdHlMZXZlbC5FUlJPUlMgKD0gMCkgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGxvZ0xldmVsID0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1M7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGVuYWJsZVBpbmNoT25Nb2JpbGUgPSBmYWxzZTtcblxuICAvKiogVXNlIHRoZSBtaW5pZmllZCAobWluaWZpZWRKU0xpYnJhcmllcz1cInRydWVcIiwgd2hpY2ggaXMgdGhlIGRlZmF1bHQpIG9yIHRoZSB1c2VyLXJlYWRhYmxlIHBkZi5qcyBsaWJyYXJ5IChtaW5pZmllZEpTTGlicmFyaWVzPVwiZmFsc2VcIikgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG1pbmlmaWVkSlNMaWJyYXJpZXMgPSB0cnVlO1xuXG4gIHB1YmxpYyBwcmltYXJ5TWVudVZpc2libGUgPSB0cnVlO1xuXG4gIC8qKiBvcHRpb24gdG8gaW5jcmVhc2UgKG9yIHJlZHVjZSkgcHJpbnQgcmVzb2x1dGlvbi4gRGVmYXVsdCBpcyAxNTAgKGRwaSkuIFNlbnNpYmxlIHZhbHVlc1xuICAgKiBhcmUgMzAwLCA2MDAsIGFuZCAxMjAwLiBOb3RlIHRoZSBpbmNyZWFzZSBtZW1vcnkgY29uc3VtcHRpb24sIHdoaWNoIG1heSBldmVuIHJlc3VsdCBpbiBhIGJyb3dzZXIgY3Jhc2guICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwcmludFJlc29sdXRpb24gPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3RhdGlvbjogMCB8IDkwIHwgMTgwIHwgMjcwO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcm90YXRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPDAgfCA5MCB8IDE4MCB8IDI3MD4oKTtcblxuICBwdWJsaWMgaGFzU2lnbmF0dXJlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc3JjKHVybDogc3RyaW5nIHwgQXJyYXlCdWZmZXIgfCBCbG9iIHwgVWludDhBcnJheSB8IHsgcmFuZ2U6IGFueSB9KSB7XG4gICAgaWYgKHVybCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcbiAgICAgIHRoaXMuX3NyYyA9IHVybC5idWZmZXI7XG4gICAgfSBlbHNlIGlmICh1cmwgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zcmMgPSBuZXcgVWludDhBcnJheShyZWFkZXIucmVzdWx0IGFzIEFycmF5QnVmZmVyKTtcbiAgICAgICAgICBpZiAoTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5vcGVuUERGMigpO1xuICAgICAgICAgICAgLy8gZWxzZSBvcGVuUERGIGlzIGNhbGxlZCBsYXRlciwgc28gd2Ugc2hvdWxkIGxvYWQgdGhlIFBERiBmaWxlIHR3aWNlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodXJsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9zcmMgPSB1cmw7XG4gICAgICBpZiAodXJsLmxlbmd0aCA+IDk4MCkge1xuICAgICAgICAvLyBtaW5pbWFsIGxlbmd0aCBvZiBhIGJhc2U2NCBlbmNvZGVkIFBERlxuICAgICAgICBpZiAodXJsLmxlbmd0aCAlIDQgPT09IDApIHtcbiAgICAgICAgICBpZiAoL15bYS16QS1aXFxkXFwvK10rPXswLDJ9JC8udGVzdCh1cmwpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgVVJMIGxvb2tzIGxpa2UgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuIElmIHNvLCBwbGVhc2UgdXNlIHRoZSBhdHRyaWJ1dGUgW2Jhc2U2NFNyY10gaW5zdGVhZCBvZiBbc3JjXScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zcmMgPSB1cmw7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBiYXNlNjRTcmMoYmFzZTY0OiBzdHJpbmcpIHtcbiAgICBjb25zdCBiaW5hcnlfc3RyaW5nID0gd2luZG93LmF0b2IoYmFzZTY0KTtcbiAgICBjb25zdCBsZW4gPSBiaW5hcnlfc3RyaW5nLmxlbmd0aDtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGxlbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgYnl0ZXNbaV0gPSBiaW5hcnlfc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHRoaXMuc3JjID0gYnl0ZXMuYnVmZmVyO1xuICB9XG5cbiAgcHVibGljIG1pbkhlaWdodDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgX2hlaWdodCA9ICcxMDAlJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGhlaWdodChoOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1pbkhlaWdodCA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaCkge1xuICAgICAgdGhpcy5faGVpZ2h0ID0gaDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWlnaHQgPSAnMTAwJSc7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja0hlaWdodCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB0aGlzIGZsYWcgaXMgdHJ1ZSwgdGhpcyBjb21wb25lbnRzIGFkZHMgYSBsaW5rIHRvIHRoZSBsb2NhbGUgYXNzZXRzLiBUaGUgcGRmIHZpZXdlclxuICAgKiBzZWVzIHRoaXMgbGluayBhbmQgdXNlcyBpdCB0byBsb2FkIHRoZSBsb2NhbGUgZmlsZXMgYXV0b21hdGljYWxseS5cbiAgICogQHBhcmFtIHVzZUJyb3dzZXJMb2NhbGUgYm9vbGVhblxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHVzZUJyb3dzZXJMb2NhbGUgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgYmFja2dyb3VuZENvbG9yID0gJyNlOGU4ZWInO1xuXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBmaWxlIGFmdGVyIGNsaWNraW5nIFwiZG93bmxvYWRcIiAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZmlsZW5hbWVGb3JEb3dubG9hZCA9ICdkb2N1bWVudC5wZGYnO1xuXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZGlzYWJsZSB0aGUga2V5Ym9hcmQgYmluZGluZ3MgY29tcGxldGVseSAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgaWdub3JlS2V5Ym9hcmQgPSBmYWxzZTtcblxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRpc2FibGUgYSBsaXN0IG9mIGtleSBiaW5kaW5ncy4gKi9cbiAgQElucHV0KClcbiAgcHVibGljIGlnbm9yZUtleXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGVuYWJsZSBhIGxpc3Qgb2Yga2V5IGJpbmRpbmdzIGV4cGxpY2l0bHkuIElmIHRoaXMgcHJvcGVydHkgaXMgc2V0LCBldmVyeSBvdGhlciBrZXkgYmluZGluZyBpcyBpZ25vcmVkLiAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgYWNjZXB0S2V5czogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gcHV0IHRoZSB2aWV3ZXIncyBzdmcgaW1hZ2VzIGludG8gYW4gYXJiaXRyYXJ5IGZvbGRlciAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgaW1hZ2VSZXNvdXJjZXNQYXRoID0gJy4vJyArIHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlciArICcvaW1hZ2VzLyc7XG5cbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBwdXQgdGhlaXIgbG9jYWxlIGZvbGRlciBpbnRvIGFuIGFyYml0cmFyeSBmb2xkZXIgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGxvY2FsZUZvbGRlclBhdGggPSAnLi8nICsgcGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyICsgJy9sb2NhbGUnO1xuXG4gIC8qKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBsb2NhbGUuIFRoaXMgbXVzdCBiZSB0aGUgY29tcGxldGUgbG9jYWxlIG5hbWUsIHN1Y2ggYXMgXCJlcy1FU1wiLiBUaGUgc3RyaW5nIGlzIGFsbG93ZWQgdG8gYmUgYWxsIGxvd2VyY2FzZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsYW5ndWFnZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8qKiBCeSBkZWZhdWx0LCBsaXN0ZW5pbmcgdG8gdGhlIFVSTCBpcyBkZWFjdGl2YXRlZCBiZWNhdXNlIG9mdGVuIHRoZSBhbmNob3IgdGFnIGlzIHVzZWQgZm9yIHRoZSBBbmd1bGFyIHJvdXRlciAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbGlzdGVuVG9VUkwgPSBmYWxzZTtcblxuICAvKiogTmF2aWdhdGUgdG8gYSBjZXJ0YWluIFwibmFtZWQgZGVzdGluYXRpb25cIiAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbmFtZWRkZXN0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLyoqIGFsbG93cyB5b3UgdG8gcGFzcyBhIHBhc3N3b3JkIHRvIHJlYWQgcGFzc3dvcmQtcHJvdGVjdGVkIGZpbGVzICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIHB1YmxpYyBfc2hvd1NpZGViYXJCdXR0b24gPSB0cnVlO1xuXG4gIHB1YmxpYyB2aWV3ZXJQb3NpdGlvblRvcCA9ICczMnB4JztcblxuICAvKiogcGRmLmpzIGNhbiBzaG93IHNpZ25hdHVyZXMsIGJ1dCBmYWlscyB0byB2ZXJpZnkgdGhlbS4gU28gdGhleSBhcmUgc3dpdGNoZWQgb2ZmIGJ5IGRlZmF1bHQuXG4gICAqIFNldCBcIltzaG93VW52ZXJpZmllZFNpZ25hdHVyZXNdXCI9XCJ0cnVlXCIgdG8gZGlzcGxheSBlLXNpZ25hdHVyZXMgbm9uZXRoZWxlc3MuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHN0YXJ0VGFiaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgZ2V0IHNob3dTaWRlYmFyQnV0dG9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zaG93U2lkZWJhckJ1dHRvbjtcbiAgfVxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dTaWRlYmFyQnV0dG9uKHNob3c6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93U2lkZWJhckJ1dHRvbiA9IHNob3c7XG4gICAgY29uc3QgaXNJRSA9IC9tc2llXFxzfHRyaWRlbnRcXC8vaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICBsZXQgZmFjdG9yID0gMTtcbiAgICBpZiAoaXNJRSkge1xuICAgICAgZmFjdG9yID0gTnVtYmVyKCh0aGlzLl9tb2JpbGVGcmllbmRseVpvb20gfHwgJzEwMCcpLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zaG93U2lkZWJhckJ1dHRvbikge1xuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9ICg2OCAqIGZhY3RvcikudG9TdHJpbmcoKSArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAnMHB4JztcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2lkZWJhclZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzaWRlYmFyVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0ZpbmRCdXR0b246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UGFnaW5nQnV0dG9ucyA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Wm9vbUJ1dHRvbnMgPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b24gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dPcGVuRmlsZUJ1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UHJpbnRCdXR0b24gPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0Rvd25sb2FkQnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dCb29rbWFya0J1dHRvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHRoZW1lOiAnZGFyaycgfCAnbGlnaHQnIHwgJ2N1c3RvbScgPSAnbGlnaHQnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93VG9vbGJhciA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uID0gdHJ1ZTtcblxuICAvKiogU2V0IGJ5IHRoZSBldmVudCAoc2Vjb25kYXJ5TWVudUlzRW1wdHkpICovXG4gIHB1YmxpYyBoaWRlS2ViYWJNZW51Rm9yU2Vjb25kYXJ5VG9vbGJhciA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Um90YXRlQnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIGhhbmRUb29sID0gdHJ1ZTtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBoYW5kVG9vbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dIYW5kVG9vbEJ1dHRvbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1Njcm9sbGluZ0J1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93U3ByZWFkQnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dQcm9wZXJ0aWVzQnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dCb3JkZXJzID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc3ByZWFkOiAnb2ZmJyB8ICdldmVuJyB8ICdvZGQnO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc3ByZWFkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwnb2ZmJyB8ICdldmVuJyB8ICdvZGQnPigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgdGh1bWJuYWlsRHJhd24gPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlRodW1ibmFpbERyYXduRXZlbnQ+KCk7XG5cbiAgcHJpdmF0ZSBfcGFnZTogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIHB1YmxpYyBnZXQgcGFnZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBwYWdlKHA6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChwKSB7XG4gICAgICAvLyBzaWxlbnRseSBjb3BlIHdpdGggc3RyaW5nc1xuICAgICAgdGhpcy5fcGFnZSA9IE51bWJlcihwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGFnZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHVuZGVmaW5lZD4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcGFnZUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwYWdlTGFiZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IHVuZGVmaW5lZD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBhZ2VzTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlc0xvYWRlZEV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcGFnZVJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlUmVuZGVyZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBkZkRvd25sb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkRvd25sb2FkZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBkZkxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmTG9hZGVkRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwZGZMb2FkaW5nRmFpbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgdGV4dExheWVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgdGV4dExheWVyUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRleHRMYXllclJlbmRlcmVkRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyB1cGRhdGVGaW5kTWF0Y2hlc0NvdW50ID0gbmV3IEV2ZW50RW1pdHRlcjxGaW5kUmVzdWx0TWF0Y2hlc0NvdW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgdXBkYXRlRmluZFN0YXRlID0gbmV3IEV2ZW50RW1pdHRlcjxGaW5kU3RhdGU+KCk7XG5cbiAgLyoqIExlZ2FsIHZhbHVlczogdW5kZWZpbmVkLCAnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlX2ZpdCcsICdwYWdlLXdpZHRoJywgb3IgJzUwJyAob3IgYW55IG90aGVyIHBlcmNlbnRhZ2UpICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB6b29tOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyB6b29tQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHpvb21MZXZlbHMgPSBbJ2F1dG8nLCAncGFnZS1hY3R1YWwnLCAncGFnZS1maXQnLCAncGFnZS13aWR0aCcsIDAuNSwgMSwgMS4yNSwgMS41LCAyLCAzLCA0XTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgbWF4Wm9vbSA9IDEwO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtaW5ab29tID0gMC4xO1xuXG4gIC8qKiBUaGlzIGF0dHJpYnV0ZXMgYWxsb3dzIHlvdSB0byBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgVUkgZWxlbWVudHMgc28geW91IGNhbiB1c2UgdGhlbSBvbiBzbWFsbCBtb2JpbGUgZGV2aWNlcy5cbiAgICogVGhpcyBhdHRyaWJ1dGUgaXMgYSBzdHJpbmcgd2l0aCBhIHBlcmNlbnQgY2hhcmFjdGVyIGF0IHRoZSBlbmQgKGUuZy4gXCIxNTAlXCIpLlxuICAgKi9cbiAgQElucHV0KCkgX21vYmlsZUZyaWVuZGx5Wm9vbSA9ICcxMDAlJztcblxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSAxO1xuXG4gIHB1YmxpYyB0b29sYmFyUGFkZGluZ1RvcCA9ICcwcHgnO1xuXG4gIHB1YmxpYyB0b29sYmFyV2lkdGggPSAnMTAwJSc7XG5cbiAgcHVibGljIHRvb2xiYXJXaWR0aEluUGl4ZWxzID0gMTAwO1xuXG4gIHB1YmxpYyBzZWNvbmRhcnlUb29sYmFyVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLy8gZGlydHkgSUUxMSBoYWNrIC0gdGVtcG9yYXJ5IHNvbHV0aW9uXG4gIHB1YmxpYyBmaW5kYmFyVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLy8gZGlydHkgSUUxMSBoYWNrIC0gdGVtcG9yYXJ5IHNvbHV0aW9uXG4gIHB1YmxpYyBmaW5kYmFyTGVmdDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8vIEFkZGl0aW9uYWwgUERGIEZvcm0gRmllbGQgVHlwZXMgIzU2NzogVXNlZCB0byBzdG9yZSB0aGUgZXhwb3J0ZWQgdmFsdWVzIG9mIHJhZGlvIGFuZCBjaGVja2JveCBidXR0b25zXG4gIHB1YmxpYyBidXR0b25WYWx1ZXM6IGFueSA9IHt9O1xuXG4gIHB1YmxpYyBnZXQgbW9iaWxlRnJpZW5kbHlab29tKCkge1xuICAgIHJldHVybiB0aGlzLl9tb2JpbGVGcmllbmRseVpvb207XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgYXR0cmlidXRlcyBhbGxvd3MgeW91IHRvIGluY3JlYXNlIHRoZSBzaXplIG9mIHRoZSBVSSBlbGVtZW50cyBzbyB5b3UgY2FuIHVzZSB0aGVtIG9uIHNtYWxsIG1vYmlsZSBkZXZpY2VzLlxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpcyBhIHN0cmluZyB3aXRoIGEgcGVyY2VudCBjaGFyYWN0ZXIgYXQgdGhlIGVuZCAoZS5nLiBcIjE1MCVcIikuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1vYmlsZUZyaWVuZGx5Wm9vbSh6b29tOiBzdHJpbmcpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFscyAtIHRoZSB0eXBlIGNvbnZlcnNpb24gaXMgaW50ZW5kZWRcbiAgICBpZiAoem9vbSA9PSAndHJ1ZScpIHtcbiAgICAgIHpvb20gPSAnMTUwJSc7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFscyAtIHRoZSB0eXBlIGNvbnZlcnNpb24gaXMgaW50ZW5kZWRcbiAgICB9IGVsc2UgaWYgKHpvb20gPT0gJ2ZhbHNlJyB8fCB6b29tID09PSB1bmRlZmluZWQgfHwgem9vbSA9PT0gbnVsbCkge1xuICAgICAgem9vbSA9ICcxMDAlJztcbiAgICB9XG4gICAgdGhpcy5fbW9iaWxlRnJpZW5kbHlab29tID0gem9vbTtcbiAgICBsZXQgZmFjdG9yID0gMTtcbiAgICBpZiAoIVN0cmluZyh6b29tKS5pbmNsdWRlcygnJScpKSB7XG4gICAgICB6b29tID0gMTAwICogTnVtYmVyKHpvb20pICsgJyUnO1xuICAgIH1cbiAgICBmYWN0b3IgPSBOdW1iZXIoKHpvb20gfHwgJzEwMCcpLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgIHRoaXMubW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSBmYWN0b3I7XG4gICAgdGhpcy50b29sYmFyV2lkdGggPSAoMTAwIC8gZmFjdG9yKS50b1N0cmluZygpICsgJyUnO1xuICAgIHRoaXMudG9vbGJhclBhZGRpbmdUb3AgPSAoZmFjdG9yIC0gMSkgKiA4ICsgJ3B4JztcbiAgICBpZiAodGhpcy5zaG93U2lkZWJhckJ1dHRvbikge1xuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9ICg2OCAqIGZhY3RvcikudG9TdHJpbmcoKSArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAnMHB4JztcbiAgICB9XG4gICAgdGhpcy5zZWNvbmRhcnlUb29sYmFyVG9wID0gKDM2ICsgMzYgKiAoZmFjdG9yIC0gMSkpLnRvU3RyaW5nKCkgKyAncHgnO1xuICAgIHRoaXMuZmluZGJhclRvcCA9ICgzNiArIDUyICogKGZhY3RvciAtIDEpKS50b1N0cmluZygpICsgJ3B4JztcbiAgfVxuXG4gIHByaXZhdGUgc2h1dHRpbmdEb3duID0gZmFsc2U7XG5cbiAgcHVibGljIGdldCBzaWRlYmFyUG9zaXRpb25Ub3AoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuaXNQcmltYXJ5TWVudVZpc2libGUoKSkge1xuICAgICAgcmV0dXJuICcwJztcbiAgICB9XG4gICAgaWYgKHRoaXMubW9iaWxlRnJpZW5kbHlab29tKSB7XG4gICAgICBpZiAodGhpcy5tb2JpbGVGcmllbmRseVpvb20uZW5kc1dpdGgoJyUnKSkge1xuICAgICAgICBjb25zdCB6b29tID0gTnVtYmVyKHRoaXMubW9iaWxlRnJpZW5kbHlab29tLnN1YnN0cmluZygwLCB0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbS5sZW5ndGggLSAxKSk7XG4gICAgICAgIHJldHVybiAoMiArIDAuMjkgKiB6b29tKS50b1N0cmluZygpICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbS5lbmRzV2l0aCgncHgnKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2JpbGVGcmllbmRseVpvb207XG4gICAgICB9XG4gICAgICByZXR1cm4gKDE2ICsgMC4xNiAqIE51bWJlcih0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbSkpLnRvU3RyaW5nKCkgKyAncHgnO1xuICAgIH1cbiAgICByZXR1cm4gJzMycHgnO1xuICB9XG4gIHB1YmxpYyBjYWxjVmlld2VyUG9zaXRpb25Ub3AoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzUHJpbWFyeU1lbnVWaXNpYmxlKCkpIHtcbiAgICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSAnMCc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbSkge1xuICAgICAgaWYgKHRoaXMubW9iaWxlRnJpZW5kbHlab29tLmVuZHNXaXRoKCclJykpIHtcbiAgICAgICAgY29uc3Qgem9vbSA9IE51bWJlcih0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbS5zdWJzdHJpbmcoMCwgdGhpcy5tb2JpbGVGcmllbmRseVpvb20ubGVuZ3RoIC0gMSkpO1xuICAgICAgICBpZiAoIXRoaXMuaXNQcmltYXJ5TWVudVZpc2libGUoKSkge1xuICAgICAgICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSAnMCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy52aWV3ZXJQb3NpdGlvblRvcCA9ICgxICsgMC4zMiAqIHpvb20pLnRvU3RyaW5nKCkgKyAncHgnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbS5lbmRzV2l0aCgncHgnKSkge1xuICAgICAgICB0aGlzLnZpZXdlclBvc2l0aW9uVG9wID0gdGhpcy5tb2JpbGVGcmllbmRseVpvb207XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy52aWV3ZXJQb3NpdGlvblRvcCA9ICczMnB4JztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkLFxuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogUERGTm90aWZpY2F0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIHByaXZhdGUgaU9TVmVyc2lvblJlcXVpcmVzRVM1KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG1hdGNoID0gbmF2aWdhdG9yLmFwcFZlcnNpb24ubWF0Y2goL09TIChcXGQrKV8oXFxkKylfPyhcXGQrKT8vKTtcbiAgICBpZiAobWF0Y2ggIT09IHVuZGVmaW5lZCAmJiBtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxMCkgPCAxMztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGxvYWRWaWV3ZXIoKTogdm9pZCB7XG4gICAgaWYgKCF3aW5kb3dbJ3BkZmpzLWRpc3QvYnVpbGQvcGRmJ10pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkVmlld2VyKCksIDI1KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXNJRSA9ICEhKDxhbnk+d2luZG93KS5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhISg8YW55PmRvY3VtZW50KS5kb2N1bWVudE1vZGU7XG4gICAgICBjb25zdCBpc0VkZ2UgPSAvRWRnZVxcL1xcZC4vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgY29uc3QgaXNJT3MxMk9yQmVsb3cgPSB0aGlzLmlPU1ZlcnNpb25SZXF1aXJlc0VTNSgpO1xuICAgICAgY29uc3QgbmVlZHNFUzUgPSB0eXBlb2YgUmVhZGFibGVTdHJlYW0gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBQcm9taXNlWydhbGxTZXR0bGVkJ10gPT09ICd1bmRlZmluZWQnO1xuICAgICAgY29uc3Qgc3VmZml4ID0gdGhpcy5taW5pZmllZEpTTGlicmFyaWVzID8gJy5taW4uanMnIDogJy5qcyc7XG4gICAgICBjb25zdCBzY3JpcHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBjb25zdCBhc3NldHMgPSBwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXI7XG4gICAgICBjb25zdCB2ZXJzaW9uU3VmZml4ID0gZ2V0VmVyc2lvblN1ZmZpeChhc3NldHMpO1xuXG4gICAgICBpZiAobmVlZHNFUzUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzaW5nIHRoZSBFUzUgdmVyc2lvbiBvZiB0aGUgUERGIHZpZXdlci4nKTtcbiAgICAgIH1cblxuICAgICAgc2NyaXB0Mi5zcmMgPSB0aGlzLmxvY2F0aW9uLm5vcm1hbGl6ZShcbiAgICAgICAgaXNJRSB8fCBpc0VkZ2UgfHwgaXNJT3MxMk9yQmVsb3cgfHwgbmVlZHNFUzVcbiAgICAgICAgPyBhc3NldHMgKyAnL3ZpZXdlci0nICsgdmVyc2lvblN1ZmZpeCArICctZXM1JyArIHN1ZmZpeFxuICAgICAgICA6IGFzc2V0cyArICcvdmlld2VyLScgKyB2ZXJzaW9uU3VmZml4ICsgc3VmZml4XG4gICAgICApO1xuICAgICAgc2NyaXB0Mi50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICBzY3JpcHQyLmFzeW5jID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0Mik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rLmhyZWYgPSB0aGlzLmxvY2FsZUZvbGRlclBhdGggKyAnL2xvY2FsZS5wcm9wZXJ0aWVzJztcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnb3JpZ2luJywgJ25neC1leHRlbmRlZC1wZGYtdmlld2VyJyk7XG4gICAgbGluay5yZWwgPSAncmVzb3VyY2UnO1xuICAgIGxpbmsudHlwZSA9ICdhcHBsaWNhdGlvbi9sMTBuJztcbiAgICBjb25zdCB3aWRnZXQ6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgd2lkZ2V0LmFwcGVuZENoaWxkKGxpbmspO1xuXG4gICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBpZiAoIXdpbmRvd1sncGRmanMtZGlzdC9idWlsZC9wZGYnXSkge1xuICAgICAgICBjb25zdCBpc0lFID0gISEoPGFueT53aW5kb3cpLk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKDxhbnk+ZG9jdW1lbnQpLmRvY3VtZW50TW9kZTtcbiAgICAgICAgY29uc3QgaXNFZGdlID0gL0VkZ2VcXC9cXGQuL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgICAgY29uc3QgbmVlZHNFUzUgPSB0eXBlb2YgUmVhZGFibGVTdHJlYW0gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBQcm9taXNlWydhbGxTZXR0bGVkJ10gPT09ICd1bmRlZmluZWQnO1xuICAgICAgICBjb25zdCBpc0lPczEyT3JCZWxvdyA9IHRoaXMuaU9TVmVyc2lvblJlcXVpcmVzRVM1KCk7XG4gICAgICAgIGNvbnN0IHN1ZmZpeCA9IHRoaXMubWluaWZpZWRKU0xpYnJhcmllcyA/ICcubWluLmpzJyA6ICcuanMnO1xuICAgICAgICBpZiAodGhpcy5taW5pZmllZEpTTGlicmFyaWVzKSB7XG4gICAgICAgICAgaWYgKCFwZGZEZWZhdWx0T3B0aW9ucy53b3JrZXJTcmMoKS5lbmRzV2l0aCgnLm1pbi5qcycpKSB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBwZGZEZWZhdWx0T3B0aW9ucy53b3JrZXJTcmMoKTtcbiAgICAgICAgICAgIHBkZkRlZmF1bHRPcHRpb25zLndvcmtlclNyYyA9ICgpID0+IHNyYy5yZXBsYWNlKCcuanMnLCAnLm1pbi5qcycpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlcjtcbiAgICAgICAgY29uc3QgdmVyc2lvblN1ZmZpeCA9IGdldFZlcnNpb25TdWZmaXgoYXNzZXRzKTtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC5zcmMgPSB0aGlzLmxvY2F0aW9uLm5vcm1hbGl6ZShcbiAgICAgICAgICBpc0lFIHx8IGlzRWRnZSB8fCBpc0lPczEyT3JCZWxvdyB8fCBuZWVkc0VTNSA/IGFzc2V0cyArICcvcGRmLScgKyB2ZXJzaW9uU3VmZml4ICsgJy1lczUnICsgc3VmZml4IDogYXNzZXRzICsgJy9wZGYtJyArIHZlcnNpb25TdWZmaXggKyBzdWZmaXhcbiAgICAgICAgKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfVxuICAgICAgaWYgKCEod2luZG93IGFzIGFueSkud2ViVmlld2VyTG9hZCkge1xuICAgICAgICB0aGlzLmxvYWRWaWV3ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xuICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcbiAgICAgIGlmICgod2luZG93IGFzIGFueSkud2ViVmlld2VyTG9hZCkge1xuICAgICAgICB0aGlzLmRvSW5pdFBERlZpZXdlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm5nQWZ0ZXJWaWV3SW5pdCgpLCA1MCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3NpZ25UYWJpbmRleGVzKCkge1xuICAgIGlmICh0aGlzLnN0YXJ0VGFiaW5kZXgpIHtcbiAgICAgIGNvbnN0IHIgPSB0aGlzLnJvb3QubmF0aXZlRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICByLmNsYXNzTGlzdC5hZGQoJ29mZnNjcmVlbicpO1xuICAgICAgdGhpcy5zaG93RWxlbWVudHNSZWN1cnNpdmVseShyKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocik7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuY29sbGVjdEVsZW1lbnRQb3NpdGlvbnMociwgdGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQsIFtdKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocik7XG4gICAgICBjb25zdCBzb3J0ZWQgPSBlbGVtZW50cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLnkgLSBiLnkgPiAxNSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiLnkgLSBhLnkgPiAxNSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYS54IC0gYi54O1xuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBzb3J0ZWRbaV0uZWxlbWVudC50YWJJbmRleCA9IHRoaXMuc3RhcnRUYWJpbmRleCArIGk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93RWxlbWVudHNSZWN1cnNpdmVseShyb290OiBFbGVtZW50KTogdm9pZCB7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuWFhMVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuWExWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5MYXJnZVZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbk1lZGl1bVZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblNtYWxsVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuVGlueVZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVYWExWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlWExWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlTGFyZ2VWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlTWVkaXVtVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVNtYWxsVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVRpbnlWaWV3Jyk7XG5cbiAgICBpZiAocm9vdCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8IHJvb3QgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCB8fCByb290IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCByb290IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHJvb3QuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3QuY2hpbGRFbGVtZW50Q291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBjID0gcm9vdC5jaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgICBpZiAoYykge1xuICAgICAgICAgIHRoaXMuc2hvd0VsZW1lbnRzUmVjdXJzaXZlbHkoYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbGxlY3RFbGVtZW50UG9zaXRpb25zKGNvcHk6IEVsZW1lbnQsIG9yaWdpbmFsOiBFbGVtZW50LCBlbGVtZW50czogQXJyYXk8RWxlbWVudEFuZFBvc2l0aW9uPik6IEFycmF5PEVsZW1lbnRBbmRQb3NpdGlvbj4ge1xuICAgIGlmIChjb3B5IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgfHwgY29weSBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50IHx8IGNvcHkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGNvcHkgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgY29uc3QgcmVjdCA9IGNvcHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBlbGVtZW50QW5kUG9zID0ge1xuICAgICAgICBlbGVtZW50OiBvcmlnaW5hbCxcbiAgICAgICAgeDogTWF0aC5yb3VuZChyZWN0LmxlZnQpLFxuICAgICAgICB5OiBNYXRoLnJvdW5kKHJlY3QudG9wKSxcbiAgICAgIH0gYXMgRWxlbWVudEFuZFBvc2l0aW9uO1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50QW5kUG9zKTtcbiAgICB9IGVsc2UgaWYgKGNvcHkuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvcHkuY2hpbGRFbGVtZW50Q291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBjID0gY29weS5jaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgICBjb25zdCBvID0gb3JpZ2luYWwuY2hpbGRyZW4uaXRlbShpKTtcbiAgICAgICAgaWYgKGMgJiYgbykge1xuICAgICAgICAgIGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0RWxlbWVudFBvc2l0aW9ucyhjLCBvLCBlbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgcHJpdmF0ZSBkb0luaXRQREZWaWV3ZXIoKSB7XG4gICAgY29uc3QgbGFuZ0xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1t0eXBlPVwiYXBwbGljYXRpb24vbDEwblwiXScpO1xuICAgIGNvbnN0IGxhbmdDb3VudCA9IGxhbmdMaW5rcy5sZW5ndGg7XG5cbiAgICBpZiAobGFuZ0NvdW50ID09PSAwKSB7XG4gICAgICBjb25zdCBkaWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi9sMTBuXCJdJyk7XG4gICAgICBpZiAoIWRpY3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZUJyb3dzZXJMb2NhbGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xuICAgICAgICAgICAgXCJJZiB5b3Ugc2V0IHRoZSBhdHRyaWJ1dGUgJ3VzZUJyb3dzZXJMb2NhbGUnIHRvIGZhbHNlLCB5b3UgbXVzdCBwcm92aWRlIHRoZSB0cmFuc2xhdGlvbnMgeW91cnNlbGYgaW4gYSBzY3JpcHQgb3IgbGluayB0YWcuXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBlYXNpZXN0IHdheSB0byBkbyB0aGlzIGlzIHRvIGFkZCB0aGVtIHRvIHRoZSBpbmRleC5odG1sLicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudXNlQnJvd3NlckxvY2FsZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcbiAgICAgICAgICBcIlBsZWFzZSBzZXQgdGhlIGF0dHJpYnV0ZSAndXNlQnJvd3NlckxvY2FsZScgdG8gZmFsc2UgaWYgeW91IHByb3ZpZGUgdGhlIHRyYW5zbGF0aW9ucyB5b3Vyc2VsZiBpbiBhIHNjcmlwdCBvciBsaW5rIHRhZy5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy51c2VCcm93c2VyTG9jYWxlKSB7XG4gICAgICBjb25zdCBvID0gbGFuZ0xpbmtzWzBdLmF0dHJpYnV0ZXNbJ29yaWdpbiddO1xuICAgICAgaWYgKG8gJiYgby52YWx1ZSAhPT0gJ25neC1leHRlbmRlZC1wZGYtdmlld2VyJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcbiAgICAgICAgICBcIlBsZWFzZSBzZXQgdGhlIGF0dHJpYnV0ZSAndXNlQnJvd3NlckxvY2FsZScgdG8gZmFsc2UgaWYgeW91IHByb3ZpZGUgdGhlIHRyYW5zbGF0aW9ucyB5b3Vyc2VsZiBpbiBhIHNjcmlwdCBvciBsaW5rIHRhZy5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjYWxsYmFjayA9IChlKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2NhbGl6ZWQnLCBjYWxsYmFjayk7XG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcbiAgICAgICAgICAvLyBodXJyaWVkIHVzZXJzIHNvbWV0aW1lcyByZWxvYWQgdGhlIFBERiBiZWZvcmUgaXQgaGFzIGZpbmlzaGVkIGluaXRpYWxpemluZ1xuICAgICAgICAgIHRoaXMuYWZ0ZXJMaWJyYXJ5SW5pdCgpO1xuICAgICAgICAgIHRoaXMub3BlblBERigpO1xuICAgICAgICAgIHRoaXMuYXNzaWduVGFiaW5kZXhlcygpO1xuICAgICAgICB9XG4gICAgICB9LCB0aGlzLmRlbGF5Rmlyc3RWaWV3KTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2FmdGVycHJpbnQnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuYWZ0ZXJQcmludC5lbWl0KCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlcHJpbnQnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuYmVmb3JlUHJpbnQuZW1pdCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9jYWxpemVkJywgY2FsbGJhY2spO1xuXG4gICAgaWYgKE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UncmUgdHJ5aW5nIHRvIG9wZW4gdHdvIGluc3RhbmNlcyBvZiB0aGUgUERGIHZpZXdlci4gTW9zdCBsaWtlbHksIHRoaXMgd2lsbCByZXN1bHQgaW4gZXJyb3JzLlwiKTtcbiAgICB9XG4gICAgY29uc3Qgb25Mb2FkZWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJ2aWV3ZXJsb2FkZWQnLCBvbkxvYWRlZCk7XG4gICAgICBpZiAodGhpcy5lbmFibGVQaW5jaE9uTW9iaWxlKSB7XG4gICAgICAgIHRoaXMucGluY2hPbk1vYmlsZVN1cHBvcnQgPSBuZXcgUGluY2hPbk1vYmlsZVN1cHBvcnQodGhpcy5uZ1pvbmUpO1xuICAgICAgfVxuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Vidmlld2VybG9hZGVkJywgb25Mb2FkZWQpO1xuXG4gICAgdGhpcy5hY3RpdmF0ZVRleHRsYXllcklmTmVjZXNzYXJ5KG51bGwpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XG4gICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXG4gICAgICAgIC8vIFRoaXMgaW5pdGlhbGl6ZXMgdGhlIHdlYnZpZXdlciwgdGhlIGZpbGUgbWF5IGJlIHBhc3NlZCBpbiB0byBpdCB0byBpbml0aWFsaXplIHRoZSB2aWV3ZXIgd2l0aCBhIHBkZiBkaXJlY3RseVxuICAgICAgICB0aGlzLnByaW1hcnlNZW51VmlzaWJsZSA9IHRoaXMuc2hvd1Rvb2xiYXI7XG4gICAgICAgIGNvbnN0IGhpZGVTZWNvbmRhcnlNZW51ID0gdGhpcy5oaWRlS2ViYWJNZW51Rm9yU2Vjb25kYXJ5VG9vbGJhciAmJiAhdGhpcy5zaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjtcblxuICAgICAgICBpZiAoaGlkZVNlY29uZGFyeU1lbnUpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNQcmltYXJ5TWVudVZpc2libGUoKSkge1xuICAgICAgICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxjVmlld2VyUG9zaXRpb25Ub3AoKTtcbiAgICAgICAgdGhpcy5kdW1teUNvbXBvbmVudHMuYWRkTWlzc2luZ1N0YW5kYXJkV2lkZ2V0cygpO1xuICAgICAgICAoPGFueT53aW5kb3cpLndlYlZpZXdlckxvYWQoKTtcblxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcuZGVmYXVsdFVybCA9ICcnOyAvLyBJRSBidWdmaXhcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmZpbGVuYW1lRm9yRG93bmxvYWQgPSB0aGlzLmZpbGVuYW1lRm9yRG93bmxvYWQ7XG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG5cbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnbG9jYWxlJywgdGhpcy5sYW5ndWFnZSk7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2ltYWdlUmVzb3VyY2VzUGF0aCcsIHRoaXMuaW1hZ2VSZXNvdXJjZXNQYXRoKTtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnbWluWm9vbScsIHRoaXMubWluWm9vbSk7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21heFpvb20nLCB0aGlzLm1heFpvb20pO1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdwYWdlVmlld01vZGUnLCB0aGlzLnBhZ2VWaWV3TW9kZSk7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ3ZlcmJvc2l0eScsIHRoaXMubG9nTGV2ZWwpO1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdpbml0aWFsWm9vbScsIHRoaXMuem9vbSk7XG5cbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uaXNWaWV3ZXJFbWJlZGRlZCA9IHRydWU7XG4gICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wcmludEtleURvd25MaXN0ZW5lcikge1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbnRDb250YWluZXInKTtcbiAgICAgICAgaWYgKHBjKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChwYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIC8qKiBOb3RpZmllcyBldmVyeSB3aWRnZXQgdGhhdCBpbXBsZW1lbnRzIG9uTGlicmFyeUluaXQoKSB0aGF0IHRoZSBQREYgdmlld2VyIG9iamVjdHMgYXJlIGF2YWlsYWJsZSAqL1xuICBwcml2YXRlIGFmdGVyTGlicmFyeUluaXQoKSB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0Lm5leHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0hlaWdodCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd6b29tJylbMF07XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgaWYgKGNvbnRhaW5lci5jbGllbnRIZWlnaHQgPT09IDAgJiYgdGhpcy5faGVpZ2h0LmluY2x1ZGVzKCclJykpIHtcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBjb25zdCByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB0b3AgPSByZWN0LnRvcDtcbiAgICAgICAgbGV0IG1oID0gYXZhaWxhYmxlIC0gdG9wO1xuICAgICAgICBjb25zdCBmYWN0b3IgPSBOdW1iZXIodGhpcy5faGVpZ2h0LnJlcGxhY2UoJyUnLCAnJykpO1xuICAgICAgICBtaCA9IChtaCAqIGZhY3RvcikgLyAxMDA7XG4gICAgICAgIGlmIChtaCA+IDEwMCkge1xuICAgICAgICAgIHRoaXMubWluSGVpZ2h0ID0gbWggKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubWluSGVpZ2h0ID0gJzEwMHB4JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblNwcmVhZENoYW5nZShuZXdTcHJlYWQ6ICdvZmYnIHwgJ2V2ZW4nIHwgJ29kZCcpOiB2b2lkIHtcbiAgICB0aGlzLnNwcmVhZENoYW5nZS5lbWl0KG5ld1NwcmVhZCk7XG4gIH1cblxuICBwcml2YXRlIGFjdGl2YXRlVGV4dGxheWVySWZOZWNlc3Nhcnkob3B0aW9uczogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGV4dExheWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICghdGhpcy5oYW5kVG9vbCkge1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0TGF5ZXIgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zaG93RmluZEJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0b2RvIHJlbW92ZSB0aGlzIGhhY2s6XG4gICAgICAgICAgICBjb25zdCB2aWV3RmluZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3RmluZCcpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHZpZXdGaW5kKSB7XG4gICAgICAgICAgICAgIHZpZXdGaW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZmluZGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kYmFyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoZmluZGJhcikge1xuICAgICAgICAgICAgICBmaW5kYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPyAxIDogMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbikge1xuICAgICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uIHx8IHRoaXMuc2hvd0ZpbmRCdXR0b24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgICAgICdIaWRpbmcgdGhlIFwiZmluZFwiIGJ1dHRvbiBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIGZpbmQgYnV0dG9uLidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgICAgICdIaWRpbmcgdGhlIFwiaGFuZCB0b29sIC8gc2VsZWN0aW9uIG1vZGVcIiBtZW51IGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgdGhlIG1lbnUgaXRlbXMuJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy50ZXh0TGF5ZXIpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zLnNldCgndGV4dExheWVyTW9kZScsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dExheWVyID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gdG9kbyByZW1vdmUgdGhpcyBoYWNrOlxuICAgICAgICAgICAgY29uc3Qgdmlld0ZpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld0ZpbmQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmICh2aWV3RmluZCkge1xuICAgICAgICAgICAgICB2aWV3RmluZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZpbmRiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZGJhcicpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYgKGZpbmRiYXIpIHtcbiAgICAgICAgICAgICAgZmluZGJhci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zLnNldCgndGV4dExheWVyTW9kZScsIDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dExheWVyID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uKSB7XG4gICAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPj0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignSGlkaW5nIHRoZSBcImZpbmRcIiBidXR0b24gYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSBmaW5kIGJ1dHRvbi4nKTtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaG93SGFuZFRvb2xCdXR0b24pIHtcbiAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICAgICdIaWRpbmcgdGhlIFwiaGFuZCB0b29sIC8gc2VsZWN0aW9uIG1vZGVcIiBtZW51IGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgdGhlIG1lbnUgaXRlbXMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvdmVycmlkZURlZmF1bHRTZXR0aW5ncygpIHtcbiAgICBjb25zdCBvcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyBhcyBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgIGZvciAoY29uc3Qga2V5IGluIHBkZkRlZmF1bHRPcHRpb25zKSB7XG4gICAgICBvcHRpb25zLnNldChrZXksIHBkZkRlZmF1bHRPcHRpb25zW2tleV0pO1xuICAgIH1cbiAgICBvcHRpb25zLnNldCgnZGlzYWJsZVByZWZlcmVuY2VzJywgdHJ1ZSk7XG4gICAgdGhpcy5zZXRab29tKCk7XG5cbiAgICBvcHRpb25zLnNldCgnaWdub3JlS2V5Ym9hcmQnLCB0aGlzLmlnbm9yZUtleWJvYXJkKTtcbiAgICBvcHRpb25zLnNldCgnaWdub3JlS2V5cycsIHRoaXMuaWdub3JlS2V5cyk7XG4gICAgb3B0aW9ucy5zZXQoJ2FjY2VwdEtleXMnLCB0aGlzLmFjY2VwdEtleXMpO1xuICAgIHRoaXMuYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShvcHRpb25zKTtcblxuICAgIGlmICh0aGlzLnNjcm9sbE1vZGUpIHtcbiAgICAgIG9wdGlvbnMuc2V0KCdzY3JvbGxNb2RlT25Mb2FkJywgdGhpcy5zY3JvbGxNb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaWRlYmFyVmlzaWJsZSA9IHRoaXMuc2lkZWJhclZpc2libGU7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcblxuICAgIGlmIChzaWRlYmFyVmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zaWRlYmFyVmlld09uTG9hZCA9IHNpZGViYXJWaXNpYmxlID8gMSA6IDA7XG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5zaWRlYmFyVmlld09uTG9hZCA9IHNpZGViYXJWaXNpYmxlID8gMSA6IDA7XG4gICAgICB9XG4gICAgICBvcHRpb25zLnNldCgnc2lkZWJhclZpZXdPbkxvYWQnLCB0aGlzLnNpZGViYXJWaXNpYmxlID8gMSA6IDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5zcHJlYWQgPT09ICdldmVuJykge1xuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAyKTtcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAyO1xuICAgICAgfVxuICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnZXZlbicpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zcHJlYWQgPT09ICdvZGQnKSB7XG4gICAgICBvcHRpb25zLnNldCgnc3ByZWFkTW9kZU9uTG9hZCcsIDEpO1xuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdvZGQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAwKTtcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2ZmJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByaW50UmVzb2x1dGlvbikge1xuICAgICAgb3B0aW9ucy5zZXQoJ3ByaW50UmVzb2x1dGlvbicsIHRoaXMucHJpbnRSZXNvbHV0aW9uKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvd0JvcmRlcnMgPT09IGZhbHNlKSB7XG4gICAgICBvcHRpb25zLnNldCgncmVtb3ZlUGFnZUJvcmRlcnMnLCAhdGhpcy5zaG93Qm9yZGVycyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuUERGKCkge1xuICAgIFNlcnZpY2VXb3JrZXJPcHRpb25zLnNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyA9IHRoaXMuc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzO1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZW5hYmxlUHJpbnQgPSB0aGlzLmVuYWJsZVByaW50O1xuICAgIE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMub25SZXNpemUoKTtcbiAgICBpZiAoIXRoaXMubGlzdGVuVG9VUkwpIHtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkxpbmtTZXJ2aWNlLnNldEhhc2ggPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG4gICAgdGhpcy5pbml0VGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RDdXJzb3JUb29sKCk7XG5cbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndGV4dGxheWVycmVuZGVyZWQnLCAoeDogVGV4dExheWVyUmVuZGVyZWRFdmVudCkgPT4ge1xuICAgICAgdGhpcy50ZXh0TGF5ZXJSZW5kZXJlZC5lbWl0KHgpO1xuICAgIH0pO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3Njcm9sbG1vZGVjaGFuZ2VkJywgKHg6IFNjcm9sbE1vZGVDaGFuZ2VkRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuc2Nyb2xsTW9kZUNoYW5nZS5lbWl0KHgubW9kZSk7XG4gICAgfSk7XG5cbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXNsb2FkZWQnLCAoeDogUGFnZXNMb2FkZWRFdmVudCkgPT4ge1xuICAgICAgdGhpcy5wYWdlc0xvYWRlZC5lbWl0KHgpO1xuICAgICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlID09PSAnaW5maW5pdGUtc2Nyb2xsJykge1xuICAgICAgICBjb25zdCBoID0geC5zb3VyY2Uudmlld2VyLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlKSB7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSBoICsgMzUgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaCArICdweCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJvdGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHIgPSBOdW1iZXIodGhpcy5yb3RhdGlvbik7XG4gICAgICAgIGlmIChyID09PSAwIHx8IHIgPT09IDkwIHx8IHIgPT09IDE4MCB8fCByID09PSAyNzApIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IHI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gMDtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XG4gICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcbiAgICAgICAgICBpZiAodGhpcy5uYW1lZGRlc3QpIHtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkxpbmtTZXJ2aWNlLm5hdmlnYXRlVG8odGhpcy5uYW1lZGRlc3QpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlKSB7XG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlID0gTnVtYmVyKHRoaXMucGFnZSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZ2VMYWJlbCkge1xuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTGFiZWwgPSB0aGlzLnBhZ2VMYWJlbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRab29tKCk7XG4gICAgfSk7XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VyZW5kZXJlZCcsICh4OiBQYWdlUmVuZGVyZWRFdmVudCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5wYWdlUmVuZGVyZWQuZW1pdCh4KTtcbiAgICAgICAgdGhpcy5maWxsRm9ybUZpZWxkcyh0aGlzLmZvcm1EYXRhKTtcbiAgICAgICAgdGhpcy5hZGRGb3JtRmllbGRMaXN0ZW5lcnModGhpcy5mb3JtRGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignZG93bmxvYWQnLCAoeDogUGRmRG93bmxvYWRlZEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnBkZkRvd25sb2FkZWQuZW1pdCh4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzY2FsZWNoYW5naW5nJywgKHg6IFNjYWxlQ2hhbmdpbmdFdmVudCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50Wm9vbUZhY3Rvci5lbWl0KHguc2NhbGUpO1xuICAgICAgICAgIGNvbnN0IHNjYWxlID0gKHRoaXMucm9vdC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCcjc2NhbGVTZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICAgICAgICBsZXQgdXNlclpvb21GYWN0b3IgPSB0aGlzLnpvb207XG4gICAgICAgICAgaWYgKHNjYWxlKSB7XG4gICAgICAgICAgICB1c2VyWm9vbUZhY3RvciA9IHNjYWxlLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodXNlclpvb21GYWN0b3IgIT09ICdhdXRvJyAmJiB1c2VyWm9vbUZhY3RvciAhPT0gJ3BhZ2UtZml0JyAmJiB1c2VyWm9vbUZhY3RvciAhPT0gJ3BhZ2UtYWN0dWFsJyAmJiB1c2VyWm9vbUZhY3RvciAhPT0gJ3BhZ2Utd2lkdGgnKSB7XG4gICAgICAgICAgICB0aGlzLnpvb21DaGFuZ2UuZW1pdCh4LnNjYWxlICogMTAwKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuem9vbSAhPT0gdXNlclpvb21GYWN0b3IpIHtcbiAgICAgICAgICAgIC8vIGNhbGxlZCB3aGVuIHRoZSB1c2VyIHNlbGVjdHMgb25lIG9mIHRoZSB0ZXh0IHZhbHVlcyBvZiB0aGUgem9vbSBzZWxlY3QgZHJvcGRvd25cbiAgICAgICAgICAgIHRoaXMuem9vbUNoYW5nZS5lbWl0KHVzZXJab29tRmFjdG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncm90YXRpb25jaGFuZ2luZycsICh4OiBQYWdlc1JvdGF0aW9uRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMucm90YXRpb25DaGFuZ2UuZW1pdCh4LnBhZ2VzUm90YXRpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2ZpbGVpbnB1dGNoYW5nZScsICh4OiBGaWxlSW5wdXRDaGFuZ2VkKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXRoID0geC5maWxlSW5wdXQudmFsdWUucmVwbGFjZSgnQzpcXFxcZmFrZXBhdGhcXFxcJywgJycpO1xuICAgICAgICB0aGlzLnNyY0NoYW5nZS5lbWl0KHBhdGgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2N1cnNvcnRvb2xjaGFuZ2VkJywgKHg6IEhhbmR0b29sQ2hhbmdlZCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kVG9vbENoYW5nZS5lbWl0KHgudG9vbCA9PT0gUGRmQ3Vyc29yVG9vbHMuSEFORCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzaWRlYmFydmlld2NoYW5nZWQnLCAoeDogU2lkZWJhcnZpZXdDaGFuZ2UpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2lkZWJhclZpc2libGVDaGFuZ2UuZW1pdCh4LnZpZXcgPiAwKTtcbiAgICAgICAgaWYgKHRoaXMuc2lkZWJhckNvbXBvbmVudCkge1xuICAgICAgICAgIHRoaXMuc2lkZWJhckNvbXBvbmVudC5zaG93VG9vbGJhcldoZW5OZWNlc3NhcnkoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignZG9jdW1lbnRsb2FkZWQnLCAocGRmTG9hZGVkRXZlbnQ6IFBkZkRvY3VtZW50TG9hZGVkRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZENvbXBsZXRlKHBkZkxvYWRlZEV2ZW50LnNvdXJjZS5wZGZEb2N1bWVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhpZGVTaWRlYmFyVG9vbGJhciA9ICgpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNpZGViYXJDb21wb25lbnQpIHtcbiAgICAgICAgICB0aGlzLnNpZGViYXJDb21wb25lbnQuc2hvd1Rvb2xiYXJXaGVuTmVjZXNzYXJ5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignb3V0bGluZWxvYWRlZCcsIGhpZGVTaWRlYmFyVG9vbGJhcik7XG5cbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYXR0YWNobWVudHNsb2FkZWQnLCBoaWRlU2lkZWJhclRvb2xiYXIpO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2xheWVyc2xvYWRlZCcsIGhpZGVTaWRlYmFyVG9vbGJhcik7XG5cbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndXBkYXRlZmluZGNvbnRyb2xzdGF0ZScsICh4OiBGaW5kUmVzdWx0KSA9PiB7XG4gICAgICBpZiAodGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50KSB7XG4gICAgICAgIGlmICh4LnN0YXRlID09PSBGaW5kU3RhdGUuTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50LmVtaXQoeyBjdXJyZW50OiAwLCB0b3RhbDogMCB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh4Lm1hdGNoZXNDb3VudC50b3RhbCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlRmluZE1hdGNoZXNDb3VudC5lbWl0KHgubWF0Y2hlc0NvdW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy51cGRhdGVGaW5kU3RhdGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGaW5kU3RhdGUuZW1pdCh4LnN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndXBkYXRlZmluZG1hdGNoZXNjb3VudCcsICh4OiBGaW5kUmVzdWx0KSA9PiB7XG4gICAgICBpZiAodGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50KSB7XG4gICAgICAgIGlmICh4Lm1hdGNoZXNDb3VudC50b3RhbCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlRmluZE1hdGNoZXNDb3VudC5lbWl0KHgubWF0Y2hlc0NvdW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VjaGFuZ2luZycsICh4OiBQYWdlTnVtYmVyQ2hhbmdlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XG4gICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXI7XG4gICAgICAgICAgY29uc3QgY3VycmVudFBhZ2VMYWJlbCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsO1xuXG4gICAgICAgICAgaWYgKGN1cnJlbnRQYWdlICE9PSB0aGlzLnBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KGN1cnJlbnRQYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGN1cnJlbnRQYWdlTGFiZWwgIT09IHRoaXMucGFnZUxhYmVsKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VMYWJlbENoYW5nZS5lbWl0KGN1cnJlbnRQYWdlTGFiZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoZWNrSGVpZ2h0KCk7XG4gICAgLy8gb3BlbiBhIGZpbGUgaW4gdGhlIHZpZXdlclxuICAgIGlmICghIXRoaXMuX3NyYykge1xuICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgdmVyYm9zaXR5OiB0aGlzLmxvZ0xldmVsLFxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLl9zcmNbJ3JhbmdlJ10pIHtcbiAgICAgICAgb3B0aW9ucy5yYW5nZSA9IHRoaXMuX3NyY1sncmFuZ2UnXTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmh0dHBIZWFkZXJzKSB7XG4gICAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMgPSB0aGlzLmh0dHBIZWFkZXJzO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYXV0aG9yaXphdGlvbikge1xuICAgICAgICBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgIGlmIChvcHRpb25zLmh0dHBIZWFkZXJzKSB7XG4gICAgICAgICAgaWYgKCFvcHRpb25zLmh0dHBIZWFkZXJzLkF1dGhvcml6YXRpb24pIHtcbiAgICAgICAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRoaXMuYXV0aG9yaXphdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9ucy5odHRwSGVhZGVycyA9IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRoaXMuYXV0aG9yaXphdGlvbixcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5vbkVycm9yID0gKGVycm9yOiBFcnJvcikgPT4gdGhpcy5wZGZMb2FkaW5nRmFpbGVkLmVtaXQoZXJyb3IpO1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ub3Blbih0aGlzLl9zcmMsIG9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnBkZkxvYWRlZC5lbWl0KHsgcGFnZXNDb3VudDogUERGVmlld2VyQXBwbGljYXRpb24ucGFnZXNDb3VudCB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcbiAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcbiAgICAgICAgaWYgKHRoaXMucGFnZSkge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2UgPSBOdW1iZXIodGhpcy5wYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cblxuICBwdWJsaWMgb3BlblBERjIoKTogdm9pZCB7XG4gICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICB2ZXJib3NpdHk6IHRoaXMubG9nTGV2ZWwsXG4gICAgfTtcbiAgICBpZiAodGhpcy5fc3JjWydyYW5nZSddKSB7XG4gICAgICBvcHRpb25zLnJhbmdlID0gdGhpcy5fc3JjWydyYW5nZSddO1xuICAgIH1cbiAgICBpZiAodGhpcy5odHRwSGVhZGVycykge1xuICAgICAgb3B0aW9ucy5odHRwSGVhZGVycyA9IHRoaXMuaHR0cEhlYWRlcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLmF1dGhvcml6YXRpb24pIHtcbiAgICAgIG9wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgIGlmIChvcHRpb25zLmh0dHBIZWFkZXJzKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5odHRwSGVhZGVycy5BdXRob3JpemF0aW9uKSB7XG4gICAgICAgICAgb3B0aW9ucy5odHRwSGVhZGVycy5BdXRob3JpemF0aW9uID0gdGhpcy5hdXRob3JpemF0aW9uO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zLmh0dHBIZWFkZXJzID0ge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IHRoaXMuYXV0aG9yaXphdGlvbixcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24ub3Blbih0aGlzLl9zcmMsIG9wdGlvbnMpLnRoZW4oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucGRmTG9hZGVkLmVtaXQoeyBwYWdlc0NvdW50OiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlc0NvdW50IH0pO1xuICAgICAgfSxcbiAgICAgIChlcnJvcjogRXJyb3IpID0+IHRoaXMucGRmTG9hZGluZ0ZhaWxlZC5lbWl0KGVycm9yKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdEN1cnNvclRvb2woKSB7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc3dpdGNoY3Vyc29ydG9vbCcsIHsgdG9vbDogdGhpcy5oYW5kVG9vbCA/IDEgOiAwIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgdGhpcy5zaHV0dGluZ0Rvd24gPSB0cnVlO1xuXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmluaXRUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5pbml0VGltZW91dCk7XG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24pIHtcbiAgICAgIGlmICh0aGlzLnBpbmNoT25Nb2JpbGVTdXBwb3J0KSB7XG4gICAgICAgIHRoaXMucGluY2hPbk1vYmlsZVN1cHBvcnQuZGVzdHJveVBpbmNoWm9vbSgpO1xuICAgICAgICB0aGlzLnBpbmNoT25Nb2JpbGVTdXBwb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5jbGVhbnVwKCk7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5jbG9zZSgpO1xuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyKSB7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wcmludEtleURvd25MaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24uX2JvdW5kRXZlbnRzKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnVuYmluZFdpbmRvd0V2ZW50cygpO1xuICAgICAgfVxuICAgICAgY29uc3QgYnVzID0gUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXM7XG4gICAgICBpZiAoYnVzKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnVuYmluZEV2ZW50cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBidXMuX2xpc3RlbmVycykge1xuICAgICAgICAgIGlmIChidXMuX2xpc3RlbmVyc1trZXldKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gYnVzLl9saXN0ZW5lcnNba2V5XTtcbiAgICAgICAgICAgIC8vIG5vdCBzdXJlIGlmIHRoZSBmb3IgbG9vcCBpcyBuZWNlc3NhcnkgLSBidXRcbiAgICAgICAgICAgIC8vIGl0IG1pZ2h0IGltcHJvdmUgZ2FyYmFnZSBjb2xsZWN0aW9uIGlmIHRoZSBcImxpc3RlbmVyc1wiXG4gICAgICAgICAgICAvLyBhcnJheSBpcyBzdG9yZWQgc29tZXdoZXJlIGVsc2VcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBsaXN0W2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnVzLl9saXN0ZW5lcnNba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cyBhcyBhbnkpID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICBpZiAoYm9keVswXSkge1xuICAgICAgY29uc3QgdG9wTGV2ZWxFbGVtZW50cyA9IGJvZHlbMF0uY2hpbGRyZW47XG4gICAgICBmb3IgKGxldCBpID0gdG9wTGV2ZWxFbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBlID0gdG9wTGV2ZWxFbGVtZW50cy5pdGVtKGkpO1xuICAgICAgICBpZiAoZSAmJiBlLmlkID09PSAncHJpbnRDb250YWluZXInKSB7XG4gICAgICAgICAgYm9keVswXS5yZW1vdmVDaGlsZChlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlICYmIGUuaWQgPT09ICdmaWxlSW5wdXQnKSB7XG4gICAgICAgICAgYm9keVswXS5yZW1vdmVDaGlsZChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNQcmltYXJ5TWVudVZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuc2hvd1Rvb2xiYXIpIHtcbiAgICAgIGNvbnN0IHZpc2libGUgPVxuICAgICAgICB0aGlzLnNob3dCb29rbWFya0J1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dEb3dubG9hZEJ1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uIHx8XG4gICAgICAgIHRoaXMuc2hvd09wZW5GaWxlQnV0dG9uIHx8XG4gICAgICAgIHRoaXMuc2hvd1BhZ2luZ0J1dHRvbnMgfHxcbiAgICAgICAgdGhpcy5zaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dQcmludEJ1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dQcm9wZXJ0aWVzQnV0dG9uIHx8XG4gICAgICAgIHRoaXMuc2hvd1JvdGF0ZUJ1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dTY3JvbGxpbmdCdXR0b24gfHxcbiAgICAgICAgdGhpcy5zaG93U2lkZWJhckJ1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dab29tQnV0dG9ucztcblxuICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuXG4gICAgaWYgKE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcbiAgICAgIGlmICgnc3JjJyBpbiBjaGFuZ2VzIHx8ICdiYXNlNjRTcmMnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCEhdGhpcy5fc3JjKSB7XG4gICAgICAgICAgdGhpcy5vcGVuUERGMigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgnem9vbScgaW4gY2hhbmdlcykge1xuICAgICAgICB0aGlzLnNldFpvb20oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdtYXhab29tJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21heFpvb20nLCB0aGlzLm1heFpvb20pO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ21pblpvb20nIGluIGNoYW5nZXMpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnbWluWm9vbScsIHRoaXMubWluWm9vbSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgnaGFuZFRvb2wnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RDdXJzb3JUb29sKCk7XG4gICAgICB9XG4gICAgICBpZiAoJ3BhZ2UnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSkge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdHJpcGxlLWVxdWFsc1xuICAgICAgICAgIGlmICh0aGlzLnBhZ2UgIT0gUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSkge1xuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSA9IHRoaXMucGFnZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgncGFnZUxhYmVsJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VMYWJlbCkge1xuICAgICAgICAgIGlmICh0aGlzLnBhZ2VMYWJlbCAhPT0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTGFiZWwpIHtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsID0gdGhpcy5wYWdlTGFiZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgncm90YXRpb24nIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMucm90YXRpb24pIHtcbiAgICAgICAgICBjb25zdCByID0gTnVtYmVyKHRoaXMucm90YXRpb24pO1xuICAgICAgICAgIGlmIChyID09PSAwIHx8IHIgPT09IDkwIHx8IHIgPT09IDE4MCB8fCByID09PSAyNzApIHtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VzUm90YXRpb24gPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoJ3Njcm9sbE1vZGUnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsTW9kZSkge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zY3JvbGxNb2RlID0gTnVtYmVyKHRoaXMuc2Nyb2xsTW9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgnc2lkZWJhclZpc2libGUnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2lkZWJhclZpc2libGUpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLm9wZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgnZmlsZW5hbWVGb3JEb3dubG9hZCcgaW4gY2hhbmdlcykge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcuZmlsZW5hbWVGb3JEb3dubG9hZCA9IHRoaXMuZmlsZW5hbWVGb3JEb3dubG9hZDtcbiAgICAgIH1cbiAgICAgIGlmICgnbmFtZWRkZXN0JyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLm5hbWVkZGVzdCkge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkxpbmtTZXJ2aWNlLm5hdmlnYXRlVG8odGhpcy5uYW1lZGRlc3QpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgnc3ByZWFkJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnNwcmVhZCA9PT0gJ2V2ZW4nKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc3ByZWFkTW9kZU9uTG9hZCA9IDI7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAyO1xuICAgICAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ2V2ZW4nKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwcmVhZCA9PT0gJ29kZCcpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zcHJlYWRNb2RlT25Mb2FkID0gMTtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDE7XG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2RkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc3ByZWFkTW9kZU9uTG9hZCA9IDA7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAwO1xuICAgICAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29mZicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgnZW5hYmxlUGluY2hPbk1vYmlsZScgaW4gY2hhbmdlcykge1xuICAgICAgICBpZiAoIWNoYW5nZXNbJ2VuYWJsZVBpbmNoT25Nb2JpbGUnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgICBpZiAoY2hhbmdlc1snZW5hYmxlUGluY2hPbk1vYmlsZSddLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlc1snZW5hYmxlUGluY2hPbk1vYmlsZSddLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVuYWJsZVBpbmNoT25Nb2JpbGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5waW5jaE9uTW9iaWxlU3VwcG9ydCA9IG5ldyBQaW5jaE9uTW9iaWxlU3VwcG9ydCh0aGlzLm5nWm9uZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAodGhpcy5waW5jaE9uTW9iaWxlU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGluY2hPbk1vYmlsZVN1cHBvcnQuZGVzdHJveVBpbmNoWm9vbSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGluY2hPbk1vYmlsZVN1cHBvcnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSB0aGlzLnNob3dUb29sYmFyO1xuICAgICAgaWYgKCF0aGlzLnNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uIHx8IHRoaXMuaGlkZUtlYmFiTWVudUZvclNlY29uZGFyeVRvb2xiYXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUHJpbWFyeU1lbnVWaXNpYmxlKCkpIHtcbiAgICAgICAgICB0aGlzLnByaW1hcnlNZW51VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpO1xuICAgIH0gLy8gZW5kIG9mIGlmIChOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKVxuICAgIHRoaXMub25SZXNpemUoKTtcblxuICAgIGlmICgncHJpbnRSZXNvbHV0aW9uJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucy5zZXQoJ3ByaW50UmVzb2x1dGlvbicsIHRoaXMucHJpbnRSZXNvbHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCdpZ25vcmVLZXlib2FyZCcgaW4gY2hhbmdlcykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCdpZ25vcmVLZXlzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoJ2FjY2VwdEtleXMnIGluIGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgnc2hvd0JvcmRlcnMnIGluIGNoYW5nZXMpIHtcbiAgICAgIGlmICghY2hhbmdlc1snc2hvd0JvcmRlcnMnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XG4gICAgICAgICAgY29uc3Qgdmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlcicpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgIGlmICh0aGlzLnNob3dCb3JkZXJzKSB7XG4gICAgICAgICAgICB2aWV3ZXIuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlUGFnZUJvcmRlcnMnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld2VyLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVBhZ2VCb3JkZXJzJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzID0gIXRoaXMuc2hvd0JvcmRlcnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHpvb21FdmVudCA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogdmlld2VyLFxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgIHNjYWxlOiAoTnVtYmVyKHRoaXMuem9vbSkgfCAxMDApIC8gMTAwLFxuICAgICAgICAgICAgcHJlc2V0VmFsdWU6IHRoaXMuem9vbSxcbiAgICAgICAgICB9IGFzIFNjYWxlQ2hhbmdpbmdFdmVudDtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc2NhbGVjaGFuZ2luZycsIHpvb21FdmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCdzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uICYmIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50KSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuX3RyYW5zcG9ydC5tZXNzYWdlSGFuZGxlci5zZW5kKCdzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMnLCB0aGlzLnNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCdmb3JtRGF0YScgaW4gY2hhbmdlcykge1xuICAgICAgICBjb25zdCBuZXdGb3JtRGF0YSA9IHRoaXMuYWRkTWlzc2luZ0Zvcm1GaWVsZHMoY2hhbmdlc1snZm9ybURhdGEnXS5jdXJyZW50VmFsdWUpO1xuICAgICAgICBpZiAoIXRoaXMuZXF1YWxzKG5ld0Zvcm1EYXRhLCBjaGFuZ2VzWydmb3JtRGF0YSddLnByZXZpb3VzVmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5maWxsRm9ybUZpZWxkcyh0aGlzLmZvcm1EYXRhKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgnZW5hYmxlUHJpbnQnIGluIGNoYW5nZXMpIHtcbiAgICAgIGlmICghY2hhbmdlc1snZW5hYmxlUHJpbnQnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZW5hYmxlUHJpbnQgPSB0aGlzLmVuYWJsZVByaW50O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoXG4gICAgICAoJ2N1c3RvbUZpbmRiYXInIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2N1c3RvbUZpbmRiYXInXS5pc0ZpcnN0Q2hhbmdlKCkpIHx8XG4gICAgICAoJ2N1c3RvbUZpbmRiYXJCdXR0b25zJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFyQnV0dG9ucyddLmlzRmlyc3RDaGFuZ2UoKSkgfHxcbiAgICAgICgnY3VzdG9tRmluZGJhcklucHV0QXJlYScgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tRmluZGJhcklucHV0QXJlYSddLmlzRmlyc3RDaGFuZ2UoKSkgfHxcbiAgICAgICgnY3VzdG9tVG9vbGJhcicgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tVG9vbGJhciddLmlzRmlyc3RDaGFuZ2UoKSlcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLmR1bW15Q29tcG9uZW50cykge1xuICAgICAgICB0aGlzLmR1bW15Q29tcG9uZW50cy5hZGRNaXNzaW5nU3RhbmRhcmRXaWRnZXRzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCdoZWlnaHQnIGluIGNoYW5nZXMpIHtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVxdWFscyhvYmplY3QxOiBhbnksIG9iamVjdDI6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICghb2JqZWN0MSB8fCAhb2JqZWN0Mikge1xuICAgICAgcmV0dXJuIG9iamVjdDEgPT09IG9iamVjdDI7XG4gICAgfVxuICAgIGNvbnN0IGtleXMxID0gT2JqZWN0LmtleXMob2JqZWN0MSk7XG4gICAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyhvYmplY3QyKTtcblxuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMxKSB7XG4gICAgICBpZiAob2JqZWN0MS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmIChvYmplY3QxW2tleV0gIT09IHVuZGVmaW5lZCAmJiBvYmplY3QyW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChvYmplY3QxW2tleV0gIT09IG9iamVjdDJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMyKSB7XG4gICAgICBpZiAob2JqZWN0Mi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmIChvYmplY3QxW2tleV0gIT09IHVuZGVmaW5lZCAmJiBvYmplY3QyW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChvYmplY3QxW2tleV0gIT09IG9iamVjdDJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRab29tKCkge1xuICAgIGxldCB6b29tQXNOdW1iZXIgPSB0aGlzLnpvb207XG4gICAgaWYgKFN0cmluZyh6b29tQXNOdW1iZXIpLmVuZHNXaXRoKCclJykpIHtcbiAgICAgIHpvb21Bc051bWJlciA9IE51bWJlcihTdHJpbmcoem9vbUFzTnVtYmVyKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICB9IGVsc2UgaWYgKCFpc05hTihOdW1iZXIoem9vbUFzTnVtYmVyKSkpIHtcbiAgICAgIHpvb21Bc051bWJlciA9IE51bWJlcih6b29tQXNOdW1iZXIpIC8gMTAwO1xuICAgIH1cbiAgICBpZiAoIXpvb21Bc051bWJlcikge1xuICAgICAgem9vbUFzTnVtYmVyID0gJ2F1dG8nO1xuICAgIH1cbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuXG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uKSB7XG4gICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdkZWZhdWx0Wm9vbVZhbHVlJywgem9vbUFzTnVtYmVyKTtcbiAgICB9XG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRTY2FsZVZhbHVlID0gem9vbUFzTnVtYmVyO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBwZGZWaWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdodG1sJyk7XG4gICAgaWYgKHBkZlZpZXdlciAmJiBwZGZWaWV3ZXIubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dGVyQ29udGFpbmVyJyk7XG4gICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLnRvb2xiYXJXaWR0aEluUGl4ZWxzID0gd2lkdGg7XG4gICAgICAgIGlmICh0aGlzLnNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQpIHtcbiAgICAgICAgICB0aGlzLnNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQuY2hlY2tWaXNpYmlsaXR5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScpXG4gIHB1YmxpYyBvbkNvbnRleHRNZW51KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRNZW51QWxsb3dlZDtcbiAgfVxuXG4gIHB1YmxpYyBvblNlY29uZGFyeU1lbnVJc0VtcHR5KGhpZGVLZWJhYkJ1dHRvbjogYm9vbGVhbikge1xuICAgIHRoaXMuaGlkZUtlYmFiTWVudUZvclNlY29uZGFyeVRvb2xiYXIgPSBoaWRlS2ViYWJCdXR0b247XG4gICAgaWYgKGhpZGVLZWJhYkJ1dHRvbikge1xuICAgICAgaWYgKCF0aGlzLmlzUHJpbWFyeU1lbnVWaXNpYmxlKCkpIHtcbiAgICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZmlsbEZvcm1GaWVsZHMoZm9ybURhdGE6IEZvcm1EYXRhVHlwZSk6IHZvaWQge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG5cbiAgICBpZiAoIVBERlZpZXdlckFwcGxpY2F0aW9uIHx8ICFQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudCB8fCAhUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuYW5ub3RhdGlvblN0b3JhZ2UpIHtcbiAgICAgIC8vIG5nT25DaGFuZ2VzIGNhbGxzIHRoaXMgbWV0aG9kIHRvbyBlYXJseSAtIHNvIGp1c3QgaWdub3JlIGl0XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYW5ub3RhdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5hbm5vdGF0aW9uU3RvcmFnZS5nZXRBbGwoKTtcbiAgICBmb3IgKGNvbnN0IGFubm90YXRpb24gaW4gYW5ub3RhdGlvbnMpIHtcbiAgICAgIGlmIChhbm5vdGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFubm90YXRpb24taWQ9XCInICsgYW5ub3RhdGlvbiArICdcIl0nKTtcbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuXG4gICAgICAgICAgY29uc3QgZmllbGQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IGZpZWxkLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGZvcm1EYXRhW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94JykgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IHVzZSBleHBvcnRWYWx1ZSBmcm9tIHRoZSBmaWVsZCBhbm5vdGF0aW9uIGZvciB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhW2ZpZWxkTmFtZV0gPSBmaWVsZC5jaGVja2VkP3RoaXMuYnV0dG9uVmFsdWVzW2Fubm90YXRpb25dOm51bGw7IFxuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZC50eXBlID09PSAncmFkaW8nKSBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIEFkZGl0aW9uYWwgUERGIEZvcm0gRmllbGQgVHlwZXMgIzU2NzogdXNlIGJ1dHRvblZhbHVlIGZyb20gdGhlIGZpZWxkIGFubm90YXRpb24gZm9yIHRoZSB2YWx1ZVxuXG4gICAgICAgICAgICAgICAgaWYoZmllbGQuY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybURhdGFbZmllbGROYW1lXSA9IHRoaXMuYnV0dG9uVmFsdWVzW2Fubm90YXRpb25dOyBcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgZWxzZSBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybURhdGFbZmllbGROYW1lXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5hbm5vdGF0aW9uU3RvcmFnZS5zZXRWYWx1ZShhbm5vdGF0aW9uLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IFN0cmluZyhuZXdWYWx1ZSkgPT0gdGhpcy5idXR0b25WYWx1ZXNbYW5ub3RhdGlvbl07IFxuICAgICAgICAgICAgICAgIGZpZWxkLmNoZWNrZWQgPSB2O1xuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IFN0cmluZyhuZXdWYWx1ZSkgPT0gdGhpcy5idXR0b25WYWx1ZXNbYW5ub3RhdGlvbl07XG4gICAgICAgICAgICAgICAgZmllbGQuY2hlY2tlZCA9IHY7XG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpZWxkLnZhbHVlID0gPHN0cmluZz5uZXdWYWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZGl0aW9uYWwgUERGIEZvcm0gRmllbGQgVHlwZXMgIzU2NzogaGFuZGxlIG11bHRpIGxpbmUgdGV4dCBmaWVsZHNcbiAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgICAgICAgIGlmICh0ZXh0YXJlYSkge1xuICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gdGV4dGFyZWEubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZm9ybURhdGFbZmllbGROYW1lXTtcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybURhdGFbZmllbGROYW1lXSA9IHRleHRhcmVhLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuYW5ub3RhdGlvblN0b3JhZ2Uuc2V0VmFsdWUoYW5ub3RhdGlvbiwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IDxzdHJpbmc+bmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICAgIGlmIChzZWxlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IHNlbGVjdC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBmb3JtRGF0YVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBQREYgRm9ybSBGaWVsZCBUeXBlcyAjNTY3OiBtb3ZlZCBzZXR0aW5nIGFuZCByZXRyaWV2aW5nIDxzZWxlY3Q+IGZpZWxkIHZhbHVlcyB0byBmdW5jdGlvbnMgdG8gaGFuZGxlIHNpbmdsZSBvciBtdWx0aSBzZWxlY3QgZmllbGRzXG4gICAgICAgICAgICAgIHRoaXMuZm9ybURhdGFbZmllbGROYW1lXSA9IHRoaXMuZ2V0U2VsZWN0VmFsdWUoc2VsZWN0KTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5hbm5vdGF0aW9uU3RvcmFnZS5zZXRWYWx1ZShhbm5vdGF0aW9uLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgIC8vIEFkZGl0aW9uYWwgUERGIEZvcm0gRmllbGQgVHlwZXMgIzU2NzogbW92ZWQgc2V0dGluZyBhbmQgcmV0cmlldmluZyA8c2VsZWN0PiBmaWVsZCB2YWx1ZXMgdG8gZnVuY3Rpb25zIHRvIGhhbmRsZSBzaW5nbGUgb3IgbXVsdGkgc2VsZWN0IGZpZWxkc1xuICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdFZhbHVlKHNlbGVjdCxuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRGb3JtRmllbGRMaXN0ZW5lcnMoZm9ybURhdGE6IEZvcm1EYXRhVHlwZSk6IHZvaWQge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG5cbiAgICBjb25zdCBhbm5vdGF0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50LmFubm90YXRpb25TdG9yYWdlLmdldEFsbCgpO1xuICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbiBpbiBhbm5vdGF0aW9ucykge1xuICAgICAgaWYgKGFubm90YXRpb24pIHtcblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hbm5vdGF0aW9uLWlkPVwiJyArIGFubm90YXRpb24gKyAnXCJdJyk7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcblxuICAgICAgICAgIGNvbnN0IGZpZWxkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBmaWVsZC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBmb3JtRGF0YVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IHVzZSBleHBvcnRWYWx1ZS9idXR0b25WYWx1ZSBmcm9tIHRoZSBmaWVsZCBhbm5vdGF0aW9uIGZvciB0aGUgdmFsdWUgZm9yIGNoZWNrYm94ZXMvcmFkaW8gYnV0dG9uc1xuICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94JyB8fCBmaWVsZC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICAgICAgaWYoZmllbGQuY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybURhdGFbZmllbGROYW1lXSA9IHRoaXMuYnV0dG9uVmFsdWVzW2Fubm90YXRpb25dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhW2ZpZWxkTmFtZV0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdGhpcy5lbWl0Rm9ybURhdGFDaGFuZ2UoYW5ub3RhdGlvbixmaWVsZE5hbWUsIGZpZWxkKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQWRkaXRpb25hbCBQREYgRm9ybSBGaWVsZCBUeXBlcyAjNTY3OiBoYW5kbGUgbXVsdGkgbGluZSB0ZXh0IGZpZWxkc1xuICAgICAgICAgIGNvbnN0IHRleHRhcmVhID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgaWYgKHRleHRhcmVhKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSB0ZXh0YXJlYS5uYW1lO1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBmb3JtRGF0YVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRGF0YVtmaWVsZE5hbWVdID0gdGV4dGFyZWEudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHRoaXMuZW1pdEZvcm1EYXRhQ2hhbmdlKGFubm90YXRpb24sZmllbGROYW1lLCB0ZXh0YXJlYSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICBpZiAoc2VsZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBzZWxlY3QubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZm9ybURhdGFbZmllbGROYW1lXTtcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIC8vIEFkZGl0aW9uYWwgUERGIEZvcm0gRmllbGQgVHlwZXMgIzU2NzogbW92ZWQgc2V0dGluZyBhbmQgcmV0cmlldmluZyA8c2VsZWN0PiBmaWVsZCB2YWx1ZXMgdG8gZnVuY3Rpb25zIHRvIGhhbmRsZSBzaW5nbGUgb3IgbXVsdGkgc2VsZWN0IGZpZWxkc1xuICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhW2ZpZWxkTmFtZV0gPSB0aGlzLmdldFNlbGVjdFZhbHVlKHNlbGVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB0aGlzLmVtaXRGb3JtRGF0YUNoYW5nZShhbm5vdGF0aW9uLGZpZWxkTmFtZSwgc2VsZWN0KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYWRkTWlzc2luZ0Zvcm1GaWVsZHMoZm9ybURhdGE6IEZvcm1EYXRhVHlwZSk6IEZvcm1EYXRhVHlwZSB7XG4gICAgY29uc3QgcmVzdWx0ID0geyAuLi5mb3JtRGF0YSB9O1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uICYmIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50KSB7XG4gICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50LmFubm90YXRpb25TdG9yYWdlLmdldEFsbCgpO1xuICAgICAgZm9yIChjb25zdCBhbm5vdGF0aW9uIGluIGFubm90YXRpb25zKSB7XG4gICAgICAgIGlmIChhbm5vdGF0aW9uKSB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYW5ub3RhdGlvbi1pZD1cIicgKyBhbm5vdGF0aW9uICsgJ1wiXScpO1xuICAgICAgICAgIGlmIChjb250YWluZXIpIHtcblxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBmaWVsZC5uYW1lO1xuICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHJlc3VsdFtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vIEFkZGl0aW9uYWwgUERGIEZvcm0gRmllbGQgVHlwZXMgIzU2NzogdXNlIGV4cG9ydFZhbHVlL2J1dHRvblZhbHVlIGZyb20gdGhlIGZpZWxkIGFubm90YXRpb24gZm9yIHRoZSB2YWx1ZSBmb3IgY2hlY2tib3hlcy9yYWRpbyBidXR0b25zXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFtmaWVsZE5hbWVdID0gZmllbGQuY2hlY2tlZD90aGlzLmJ1dHRvblZhbHVlc1thbm5vdGF0aW9uXTpudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICAgICAgICAgICBpZihmaWVsZC5jaGVja2VkKVxuICAgICAgICAgICAgICAgICAgICByZXN1bHRbZmllbGROYW1lXSA9IHRoaXMuYnV0dG9uVmFsdWVzW2Fubm90YXRpb25dO1xuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0W2ZpZWxkTmFtZV0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgaWYgKHNlbGVjdCkge1xuICAgICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBzZWxlY3QubmFtZTtcbiAgICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSByZXN1bHRbZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IG1vdmVkIHNldHRpbmcgYW5kIHJldHJpZXZpbmcgPHNlbGVjdD4gZmllbGQgdmFsdWVzIHRvIGZ1bmN0aW9ucyB0byBoYW5kbGUgc2luZ2xlIG9yIG11bHRpIHNlbGVjdCBmaWVsZHNcbiAgICAgICAgICAgICAgICByZXN1bHRbZmllbGROYW1lXSA9IHRoaXMuZ2V0U2VsZWN0VmFsdWUoc2VsZWN0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IGhhbmRsZSBtdWx0aSBsaW5lIHRleHQgZmllbGRzXG4gICAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgaWYgKHRleHRhcmVhKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IHRleHRhcmVhLm5hbWU7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcmVzdWx0W2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ZpZWxkTmFtZV0gPSB0ZXh0YXJlYS52YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VsZWN0VmFsdWUoZmllbGQ6SFRNTFNlbGVjdEVsZW1lbnQpXG4gIHtcbiAgICBpZihmaWVsZC5tdWx0aXBsZSlcbiAgICB7XG4gICAgICBsZXQgdmFsdWVzOnN0cmluZ1tdID0gW107XG4gICAgICBsZXQgb3B0aW9ucyA9IGZpZWxkLm9wdGlvbnM7XG4gICAgXG4gICAgICBmb3IgKGxldCBpPTA7IGk8b3B0aW9ucy5sZW5ndGg7IGkrKykgXG4gICAgICB7XG4gICAgICAgIGlmIChvcHRpb25zW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgICAgdmFsdWVzLnB1c2gob3B0aW9uc1tpXS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybih2YWx1ZXMpO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICByZXR1cm4oZmllbGQudmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTZWxlY3RWYWx1ZShmaWVsZDpIVE1MU2VsZWN0RWxlbWVudCx2YWx1ZTpzdHJpbmcgfCBzdHJpbmdbXSlcbiAge1xuICAgIGlmKGZpZWxkLm11bHRpcGxlICYmIEFycmF5LmlzQXJyYXkodmFsdWUpIClcbiAgICB7XG4gICAgICBsZXQgdmFsdWVzOnN0cmluZ1tdPSB2YWx1ZTtcbiAgICAgIGxldCBvcHRpb25zID0gZmllbGQub3B0aW9ucztcbiAgICBcbiAgICAgIGZvciAobGV0IGk9MDsgaTxvcHRpb25zLmxlbmd0aDsgaSsrKSBcbiAgICAgICAgb3B0aW9uc1tpXS5zZWxlY3RlZCA9ICAodmFsdWVzLmluZGV4T2Yob3B0aW9uc1tpXS52YWx1ZSkgIT0gLTEpO1xuICAgIH1cbiAgICBlbHNlXG4gICAgICBmaWVsZC52YWx1ZSA9IDxzdHJpbmc+dmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGVtaXRGb3JtRGF0YUNoYW5nZShhbm5vdGF0aW9uOnN0cmluZywgZmllbGROYW1lOiBzdHJpbmcsIGZpZWxkOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGxldCB2YWx1ZTphbnkgPSBudWxsO1xuXG4gICAgaWYgKGZpZWxkIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5nZXRTZWxlY3RWYWx1ZShmaWVsZCk7XG4gICAgfVxuICAgIC8vIEFkZGl0aW9uYWwgUERGIEZvcm0gRmllbGQgVHlwZXMgIzU2NzogaGFuZGxlIG11bHRpIGxpbmUgdGV4dCBmaWVsZHNcbiAgICBlbHNlIGlmIChmaWVsZCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHsgICAgICBcbiAgICAgIHZhbHVlID0gZmllbGQudmFsdWU7XG4gICAgfSAgXG4gICAgZWxzZSBpZiAoZmllbGQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IHVzZSBleHBvcnRWYWx1ZS9idXR0b25WYWx1ZSBmcm9tIHRoZSBmaWVsZCBhbm5vdGF0aW9uIGZvciB0aGUgdmFsdWUgZm9yIGNoZWNrYm94ZXMvcmFkaW8gYnV0dG9uc1xuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcblxuICAgICAgICBpZihmaWVsZC5jaGVja2VkKVxuICAgICAgICAgIHZhbHVlID0gdGhpcy5idXR0b25WYWx1ZXNbYW5ub3RhdGlvbl07XG4gICAgICB9IFxuICAgICAgZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3JhZGlvJykge1xuXG4gICAgICAgIGlmKGZpZWxkLmNoZWNrZWQpXG4gICAgICAgICAgdmFsdWUgPSB0aGlzLmJ1dHRvblZhbHVlc1thbm5vdGF0aW9uXTtcbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBmaWVsZC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmZvcm1EYXRhW2ZpZWxkTmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmZvcm1EYXRhW2ZpZWxkTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5mb3JtRGF0YUNoYW5nZS5lbWl0KHRoaXMuZm9ybURhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLypcbiAgcHJpdmF0ZSBhZGRJbnB1dChhbm5vdGF0aW9uOiBQREZBbm5vdGF0aW9uRGF0YSwgcmVjdDogbnVtYmVyW10pOiB2b2lkIHtcbiAgICAvLyBhZGQgaW5wdXQgdG8gcGFnZVxuICAgIGNvbnNvbGUubG9nKGFubm90YXRpb24pO1xuICB9XG4gICovXG5cbiAgcHVibGljIGxvYWRDb21wbGV0ZShwZGY6IGFueSAvKiBQREZEb2N1bWVudFByb3h5ICovKTogdm9pZCB7XG4gICAgLyoqIFRoaXMgbWV0aG9kIGhhcyBiZWVuIGluc3BpcmVkIGJ5IGh0dHBzOi8vbWVkaXVtLmNvbS9mYWN0b3J5LW1pbmQvYW5ndWxhci1wZGYtZm9ybXMtZmE3MmIxNWMzZmJkLiBUaGFua3MsIEpvbm55IEZveCEgKi9cbiAgICAvLyBzY3JlZW4gRFBJIC8gUERGIERQSVxuICAgIGNvbnN0IGRwaVJhdGlvID0gOTYgLyA3MjtcbiAgICB0aGlzLmhhc1NpZ25hdHVyZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5idXR0b25WYWx1ZXMgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBkZi5udW1QYWdlczsgaSsrKSB7XG4gICAgICAvLyB0cmFjayB0aGUgY3VycmVudCBwYWdlXG4gICAgICBsZXQgY3VycmVudFBhZ2U6IGFueSA9IG51bGw7XG4gICAgICBwZGZcbiAgICAgICAgLmdldFBhZ2UoaSlcbiAgICAgICAgLnRoZW4oKHApID0+IHtcbiAgICAgICAgICBjdXJyZW50UGFnZSA9IHA7XG5cbiAgICAgICAgICAvLyBnZXQgdGhlIGFubm90YXRpb25zIG9mIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICByZXR1cm4gcC5nZXRBbm5vdGF0aW9ucygpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigoYW5uKSA9PiB7XG4gICAgICAgICAgLy8gdWdseSBjYXN0IGR1ZSB0byBtaXNzaW5nIHR5cGVzY3JpcHQgZGVmaW5pdGlvbnNcbiAgICAgICAgICAvLyBwbGVhc2UgY29udHJpYnV0ZSB0byBjb21wbGV0ZSBAdHlwZXMvcGRmanMtZGlzdFxuICAgICAgICAgIGNvbnN0IGFubm90YXRpb25zID0gYW5uOyAvKiAoPGFueT5hbm4pIGFzIFBERkFubm90YXRpb25EYXRhW107ICovXG5cbiAgICAgICAgICBhbm5vdGF0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcigoYSkgPT4gYS5zdWJ0eXBlID09PSAnV2lkZ2V0JykgLy8gZ2V0IHRoZSBmb3JtIGZpZWxkIGFubm90YXRpb24gb25seVxuICAgICAgICAgICAgLmZvckVhY2goKGEpID0+IHtcblxuICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IFN0b3JlIHRoZSBleHBvcnRWYWx1ZSBmb3IgdGhlIGNoZWNrIGJveGVzIGFuZCBidXR0b25WYWx1ZSBmb3IgcmFkaW8gYnV0dG9ucyBmb3IgcXVpY2sgcmVmZXJlbmNlIFxuICAgICAgICAgICAgICBpZihhLmNoZWNrQm94KVxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uVmFsdWVzW2EuaWRdID0gYS5leHBvcnRWYWx1ZTtcbiAgICAgICAgICAgICAgZWxzZSBpZihhLnJhZGlvQnV0dG9uKVxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uVmFsdWVzW2EuaWRdID0gYS5idXR0b25WYWx1ZTtcblxuICAgICAgICAgICAgICBpZiAoYS5maWVsZFR5cGUgPT09ICdTaWcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaGFzU2lnbmF0dXJlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld2VyQ29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5zY3JvbGxCeSgwLCAtMzIpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgLy8gZ2V0IHRoZSByZWN0YW5nbGUgdGhhdCByZXByZXNlbnQgdGhlIHNpbmdsZSBmaWVsZFxuICAgICAgICAgICAgICAvLyBhbmQgcmVzaXplIGl0IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBEUElcbiAgICAgICAgICAgICAgY29uc3QgZmllbGRSZWN0ID0gY3VycmVudFBhZ2UuZ2V0Vmlld3BvcnQoZHBpUmF0aW8pLmNvbnZlcnRUb1ZpZXdwb3J0UmVjdGFuZ2xlKGEucmVjdCk7XG5cbiAgICAgICAgICAgICAgLy8gYWRkIHRoZSBjb3JyZXNwb25kaW5nIGlucHV0XG4gICAgICAgICAgICAgIHRoaXMuYWRkSW5wdXQoYSwgZmllbGRSZWN0KTtcbiAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==