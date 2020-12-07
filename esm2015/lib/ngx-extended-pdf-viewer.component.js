/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-extended-pdf-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NgxExtendedPdfViewerComponent {
    /**
     * @param {?} ngZone
     * @param {?} platformId
     * @param {?} notificationService
     * @param {?} location
     * @param {?} elementRef
     */
    constructor(ngZone, platformId, notificationService, location, elementRef) {
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
    /**
     * @param {?} url
     * @return {?}
     */
    set src(url) {
        if (url instanceof Uint8Array) {
            this._src = url.buffer;
        }
        else if (url instanceof Blob) {
            /** @type {?} */
            const reader = new FileReader();
            reader.onloadend = (/**
             * @return {?}
             */
            () => {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.src = new Uint8Array((/** @type {?} */ (reader.result)));
                    if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
                        this.openPDF2();
                        // else openPDF is called later, so we should load the PDF file twice
                    }
                }));
            });
            reader.readAsArrayBuffer(url);
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
    }
    /**
     * @param {?} base64
     * @return {?}
     */
    set base64Src(base64) {
        /** @type {?} */
        const binary_string = window.atob(base64);
        /** @type {?} */
        const len = binary_string.length;
        /** @type {?} */
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        this.src = bytes.buffer;
    }
    /**
     * @param {?} h
     * @return {?}
     */
    set height(h) {
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
        () => {
            this.checkHeight();
        }));
    }
    /**
     * @return {?}
     */
    get height() {
        return this._height;
    }
    /**
     * @return {?}
     */
    get showSidebarButton() {
        return this._showSidebarButton;
    }
    /**
     * @param {?} show
     * @return {?}
     */
    set showSidebarButton(show) {
        this._showSidebarButton = show;
        /** @type {?} */
        const isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
        /** @type {?} */
        let factor = 1;
        if (isIE) {
            factor = Number((this._mobileFriendlyZoom || '100').replace('%', '')) / 100;
        }
        if (this._showSidebarButton) {
            this.findbarLeft = (68 * factor).toString() + 'px';
        }
        else {
            this.findbarLeft = '0px';
        }
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} p
     * @return {?}
     */
    set page(p) {
        if (p) {
            // silently cope with strings
            this._page = Number(p);
        }
        else {
            this._page = undefined;
        }
    }
    /**
     * @return {?}
     */
    get mobileFriendlyZoom() {
        return this._mobileFriendlyZoom;
    }
    /**
     * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     * @param {?} zoom
     * @return {?}
     */
    set mobileFriendlyZoom(zoom) {
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
        let factor = 1;
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
    }
    /**
     * @return {?}
     */
    get sidebarPositionTop() {
        if (!this.isPrimaryMenuVisible()) {
            return '0';
        }
        if (this.mobileFriendlyZoom) {
            if (this.mobileFriendlyZoom.endsWith('%')) {
                /** @type {?} */
                const zoom = Number(this.mobileFriendlyZoom.substring(0, this.mobileFriendlyZoom.length - 1));
                return (2 + 0.29 * zoom).toString() + 'px';
            }
            if (this.mobileFriendlyZoom.endsWith('px')) {
                return this.mobileFriendlyZoom;
            }
            return (16 + 0.16 * Number(this.mobileFriendlyZoom)).toString() + 'px';
        }
        return '32px';
    }
    /**
     * @return {?}
     */
    calcViewerPositionTop() {
        if (!this.isPrimaryMenuVisible()) {
            this.viewerPositionTop = '0';
            return;
        }
        if (this.mobileFriendlyZoom) {
            if (this.mobileFriendlyZoom.endsWith('%')) {
                /** @type {?} */
                const zoom = Number(this.mobileFriendlyZoom.substring(0, this.mobileFriendlyZoom.length - 1));
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
    }
    /**
     * @private
     * @return {?}
     */
    iOSVersionRequiresES5() {
        /** @type {?} */
        const match = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        if (match !== undefined && match !== null) {
            return parseInt(match[1], 10) < 13;
        }
        return false;
    }
    /**
     * @private
     * @return {?}
     */
    loadViewer() {
        if (!window['pdfjs-dist/build/pdf']) {
            setTimeout((/**
             * @return {?}
             */
            () => this.loadViewer()), 25);
        }
        else {
            /** @type {?} */
            const isIE = !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
            /** @type {?} */
            const isEdge = /Edge\/\d./i.test(navigator.userAgent);
            /** @type {?} */
            const isIOs12OrBelow = this.iOSVersionRequiresES5();
            /** @type {?} */
            const needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
            /** @type {?} */
            const suffix = this.minifiedJSLibraries ? '.min.js' : '.js';
            /** @type {?} */
            const script2 = document.createElement('script');
            /** @type {?} */
            const assets = pdfDefaultOptions.assetsFolder;
            /** @type {?} */
            const versionSuffix = getVersionSuffix(assets);
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const link = document.createElement('link');
        link.href = this.localeFolderPath + '/locale.properties';
        link.setAttribute('origin', 'ngx-extended-pdf-viewer');
        link.rel = 'resource';
        link.type = 'application/l10n';
        /** @type {?} */
        const widget = this.elementRef.nativeElement;
        widget.appendChild(link);
        this.onResize();
        if (isPlatformBrowser(this.platformId)) {
            if (!window['pdfjs-dist/build/pdf']) {
                /** @type {?} */
                const isIE = !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
                /** @type {?} */
                const isEdge = /Edge\/\d./i.test(navigator.userAgent);
                /** @type {?} */
                const needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
                /** @type {?} */
                const isIOs12OrBelow = this.iOSVersionRequiresES5();
                /** @type {?} */
                const suffix = this.minifiedJSLibraries ? '.min.js' : '.js';
                if (this.minifiedJSLibraries) {
                    if (!pdfDefaultOptions.workerSrc().endsWith('.min.js')) {
                        /** @type {?} */
                        const src = pdfDefaultOptions.workerSrc();
                        pdfDefaultOptions.workerSrc = (/**
                         * @return {?}
                         */
                        () => src.replace('.js', '.min.js'));
                    }
                }
                /** @type {?} */
                const assets = pdfDefaultOptions.assetsFolder;
                /** @type {?} */
                const versionSuffix = getVersionSuffix(assets);
                /** @type {?} */
                const script = document.createElement('script');
                script.src = this.location.normalize(isIE || isEdge || isIOs12OrBelow || needsES5 ? assets + '/pdf-' + versionSuffix + '-es5' + suffix : assets + '/pdf-' + versionSuffix + suffix);
                script.type = 'text/javascript';
                script.async = true;
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            if (!((/** @type {?} */ (window))).webViewerLoad) {
                this.loadViewer();
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.shuttingDown) {
            // hurried users sometimes reload the PDF before it has finished initializing
            if (((/** @type {?} */ (window))).webViewerLoad) {
                this.doInitPDFViewer();
            }
            else {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.ngAfterViewInit()), 50);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    assignTabindexes() {
        if (this.startTabindex) {
            /** @type {?} */
            const r = (/** @type {?} */ (this.root.nativeElement.cloneNode(true)));
            r.classList.add('offscreen');
            this.showElementsRecursively(r);
            document.body.appendChild(r);
            /** @type {?} */
            const elements = this.collectElementPositions(r, this.root.nativeElement, []);
            document.body.removeChild(r);
            /** @type {?} */
            const sorted = elements.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                if (a.y - b.y > 15) {
                    return 1;
                }
                if (b.y - a.y > 15) {
                    return -1;
                }
                return a.x - b.x;
            }));
            for (let i = 0; i < sorted.length; i++) {
                sorted[i].element.tabIndex = this.startTabindex + i;
            }
        }
    }
    /**
     * @private
     * @param {?} root
     * @return {?}
     */
    showElementsRecursively(root) {
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
            for (let i = 0; i < root.childElementCount; i++) {
                /** @type {?} */
                const c = root.children.item(i);
                if (c) {
                    this.showElementsRecursively(c);
                }
            }
        }
    }
    /**
     * @private
     * @param {?} copy
     * @param {?} original
     * @param {?} elements
     * @return {?}
     */
    collectElementPositions(copy, original, elements) {
        if (copy instanceof HTMLButtonElement || copy instanceof HTMLAnchorElement || copy instanceof HTMLInputElement || copy instanceof HTMLSelectElement) {
            /** @type {?} */
            const rect = copy.getBoundingClientRect();
            /** @type {?} */
            const elementAndPos = (/** @type {?} */ ({
                element: original,
                x: Math.round(rect.left),
                y: Math.round(rect.top),
            }));
            elements.push(elementAndPos);
        }
        else if (copy.childElementCount > 0) {
            for (let i = 0; i < copy.childElementCount; i++) {
                /** @type {?} */
                const c = copy.children.item(i);
                /** @type {?} */
                const o = original.children.item(i);
                if (c && o) {
                    elements = this.collectElementPositions(c, o, elements);
                }
            }
        }
        return elements;
    }
    /**
     * @private
     * @return {?}
     */
    doInitPDFViewer() {
        /** @type {?} */
        const langLinks = document.querySelectorAll('link[type="application/l10n"]');
        /** @type {?} */
        const langCount = langLinks.length;
        if (langCount === 0) {
            /** @type {?} */
            const dict = document.querySelector('script[type="application/l10n"]');
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
            const o = langLinks[0].attributes['origin'];
            if (o && o.value !== 'ngx-extended-pdf-viewer') {
                console.error(
                // tslint:disable-next-line:quotemark
                "Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
            }
        }
        /** @type {?} */
        const callback = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            document.removeEventListener('localized', callback);
            this.initTimeout = setTimeout((/**
             * @return {?}
             */
            () => {
                if (!this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    this.afterLibraryInit();
                    this.openPDF();
                    this.assignTabindexes();
                }
            }), this.delayFirstView);
        });
        window.addEventListener('afterprint', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.afterPrint.emit();
        }));
        window.addEventListener('beforeprint', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.beforePrint.emit();
        }));
        document.addEventListener('localized', callback);
        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("You're trying to open two instances of the PDF viewer. Most likely, this will result in errors.");
        }
        /** @type {?} */
        const onLoaded = (/**
         * @return {?}
         */
        () => {
            this.overrideDefaultSettings();
            document.removeEventListener('webviewerloaded', onLoaded);
            if (this.enablePinchOnMobile) {
                this.pinchOnMobileSupport = new PinchOnMobileSupport(this.ngZone);
            }
        });
        document.addEventListener('webviewerloaded', onLoaded);
        this.activateTextlayerIfNecessary(null);
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (!this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                // This initializes the webviewer, the file may be passed in to it to initialize the viewer with a pdf directly
                this.primaryMenuVisible = this.showToolbar;
                /** @type {?} */
                const hideSecondaryMenu = this.hideKebabMenuForSecondaryToolbar && !this.showSecondaryToolbarButton;
                if (hideSecondaryMenu) {
                    if (!this.isPrimaryMenuVisible()) {
                        this.primaryMenuVisible = false;
                    }
                }
                this.calcViewerPositionTop();
                this.dummyComponents.addMissingStandardWidgets();
                ((/** @type {?} */ (window))).webViewerLoad();
                /** @type {?} */
                const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
                PDFViewerApplication.appConfig.defaultUrl = ''; // IE bugfix
                PDFViewerApplication.appConfig.filenameForDownload = this.filenameForDownload;
                /** @type {?} */
                const PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
                PDFViewerApplicationOptions.set('locale', this.language);
                PDFViewerApplicationOptions.set('imageResourcesPath', this.imageResourcesPath);
                PDFViewerApplicationOptions.set('minZoom', this.minZoom);
                PDFViewerApplicationOptions.set('maxZoom', this.maxZoom);
                PDFViewerApplicationOptions.set('pageViewMode', this.pageViewMode);
                PDFViewerApplicationOptions.set('verbosity', this.logLevel);
                PDFViewerApplicationOptions.set('initialZoom', this.zoom);
                PDFViewerApplication.isViewerEmbedded = true;
                if (PDFViewerApplication.printKeyDownListener) {
                    window.addEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
                }
                /** @type {?} */
                const pc = document.getElementById('printContainer');
                if (pc) {
                    document.getElementsByTagName('body')[0].appendChild(pc);
                }
            }
        }), 0);
    }
    /**
     * Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available
     * @private
     * @return {?}
     */
    afterLibraryInit() {
        this.notificationService.onPDFJSInit.next();
    }
    /**
     * @return {?}
     */
    checkHeight() {
        /** @type {?} */
        const container = document.getElementsByClassName('zoom')[0];
        if (container) {
            if (container.clientHeight === 0 && this._height.includes('%')) {
                /** @type {?} */
                const available = window.innerHeight;
                /** @type {?} */
                const rect = container.getBoundingClientRect();
                /** @type {?} */
                const top = rect.top;
                /** @type {?} */
                let mh = available - top;
                /** @type {?} */
                const factor = Number(this._height.replace('%', ''));
                mh = (mh * factor) / 100;
                if (mh > 100) {
                    this.minHeight = mh + 'px';
                }
                else {
                    this.minHeight = '100px';
                }
            }
        }
    }
    /**
     * @param {?} newSpread
     * @return {?}
     */
    onSpreadChange(newSpread) {
        this.spreadChange.emit(newSpread);
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    activateTextlayerIfNecessary(options) {
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
                    () => {
                        // todo remove this hack:
                        /** @type {?} */
                        const viewFind = (/** @type {?} */ (document.getElementById('viewFind')));
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        /** @type {?} */
                        const findbar = (/** @type {?} */ (document.getElementById('findbar')));
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
                        () => {
                            this.showFindButton = false;
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
                    () => {
                        // todo remove this hack:
                        /** @type {?} */
                        const viewFind = (/** @type {?} */ (document.getElementById('viewFind')));
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        /** @type {?} */
                        const findbar = (/** @type {?} */ (document.getElementById('findbar')));
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
                        () => {
                            this.showFindButton = false;
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
    }
    /**
     * @private
     * @return {?}
     */
    overrideDefaultSettings() {
        /** @type {?} */
        const options = (/** @type {?} */ (((/** @type {?} */ (window))).PDFViewerApplicationOptions));
        // tslint:disable-next-line:forin
        for (const key in pdfDefaultOptions) {
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
        const sidebarVisible = this.sidebarVisible;
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
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
    }
    /**
     * @private
     * @return {?}
     */
    openPDF() {
        ServiceWorkerOptions.showUnverifiedSignatures = this.showUnverifiedSignatures;
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
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
        (x) => {
            this.textLayerRendered.emit(x);
        }));
        PDFViewerApplication.eventBus.on('scrollmodechanged', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.scrollModeChange.emit(x.mode);
        }));
        PDFViewerApplication.eventBus.on('pagesloaded', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.pagesLoaded.emit(x);
            if (this.pageViewMode === 'infinite-scroll') {
                /** @type {?} */
                const h = x.source.viewer.clientHeight;
                if (this.primaryMenuVisible) {
                    this.height = h + 35 + 'px';
                }
                else {
                    this.height = h + 'px';
                }
            }
            if (this.rotation) {
                /** @type {?} */
                const r = Number(this.rotation);
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
            () => {
                if (!this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    if (this.nameddest) {
                        PDFViewerApplication.pdfLinkService.navigateTo(this.nameddest);
                    }
                    else if (this.page) {
                        PDFViewerApplication.page = Number(this.page);
                    }
                    else if (this.pageLabel) {
                        PDFViewerApplication.pdfViewer.currentPageLabel = this.pageLabel;
                    }
                }
            }));
            this.setZoom();
        }));
        PDFViewerApplication.eventBus.on('pagerendered', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.pageRendered.emit(x);
                this.fillFormFields(this.formData);
                this.addFormFieldListeners(this.formData);
            }));
        }));
        PDFViewerApplication.eventBus.on('download', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.pdfDownloaded.emit(x);
            }));
        }));
        PDFViewerApplication.eventBus.on('scalechanging', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    this.currentZoomFactor.emit(x.scale);
                    /** @type {?} */
                    const scale = (/** @type {?} */ (((/** @type {?} */ (this.root.nativeElement))).querySelector('#scaleSelect')));
                    /** @type {?} */
                    let userZoomFactor = this.zoom;
                    if (scale) {
                        userZoomFactor = scale.value;
                    }
                    if (userZoomFactor !== 'auto' && userZoomFactor !== 'page-fit' && userZoomFactor !== 'page-actual' && userZoomFactor !== 'page-width') {
                        this.zoomChange.emit(x.scale * 100);
                    }
                    else if (this.zoom !== userZoomFactor) {
                        // called when the user selects one of the text values of the zoom select dropdown
                        this.zoomChange.emit(userZoomFactor);
                    }
                }));
            }));
        }));
        PDFViewerApplication.eventBus.on('rotationchanging', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.rotationChange.emit(x.pagesRotation);
            }));
        }));
        PDFViewerApplication.eventBus.on('fileinputchange', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const path = x.fileInput.value.replace('C:\\fakepath\\', '');
                this.srcChange.emit(path);
            }));
        }));
        PDFViewerApplication.eventBus.on('cursortoolchanged', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.handToolChange.emit(x.tool === PdfCursorTools.HAND);
            }));
        }));
        PDFViewerApplication.eventBus.on('sidebarviewchanged', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.sidebarVisibleChange.emit(x.view > 0);
                if (this.sidebarComponent) {
                    this.sidebarComponent.showToolbarWhenNecessary();
                }
            }));
        }));
        PDFViewerApplication.eventBus.on('documentloaded', (/**
         * @param {?} pdfLoadedEvent
         * @return {?}
         */
        (pdfLoadedEvent) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.loadComplete(pdfLoadedEvent.source.pdfDocument);
            }));
        }));
        /** @type {?} */
        const hideSidebarToolbar = (/**
         * @return {?}
         */
        () => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                if (this.sidebarComponent) {
                    this.sidebarComponent.showToolbarWhenNecessary();
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
        (x) => {
            if (this.updateFindMatchesCount) {
                if (x.state === FindState.NOT_FOUND) {
                    this.updateFindMatchesCount.emit({ current: 0, total: 0 });
                }
                else if (x.matchesCount.total) {
                    this.updateFindMatchesCount.emit(x.matchesCount);
                }
            }
            if (this.updateFindState) {
                this.updateFindState.emit(x.state);
            }
        }));
        PDFViewerApplication.eventBus.on('updatefindmatchescount', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            if (this.updateFindMatchesCount) {
                if (x.matchesCount.total) {
                    this.updateFindMatchesCount.emit(x.matchesCount);
                }
            }
        }));
        PDFViewerApplication.eventBus.on('pagechanging', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            if (!this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                this.ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
                    /** @type {?} */
                    const currentPageLabel = PDFViewerApplication.pdfViewer.currentPageLabel;
                    if (currentPage !== this.page) {
                        this.pageChange.emit(currentPage);
                    }
                    if (currentPageLabel !== this.pageLabel) {
                        this.pageLabelChange.emit(currentPageLabel);
                    }
                }));
            }
        }));
        this.checkHeight();
        // open a file in the viewer
        if (!!this._src) {
            /** @type {?} */
            const options = {
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
            (error) => this.pdfLoadingFailed.emit(error));
            PDFViewerApplication.open(this._src, options).then((/**
             * @return {?}
             */
            () => {
                this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount });
            }));
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (!this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                if (this.page) {
                    PDFViewerApplication.page = Number(this.page);
                }
            }
        }), 100);
    }
    /**
     * @return {?}
     */
    openPDF2() {
        this.overrideDefaultSettings();
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        const options = {
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
        () => {
            this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount });
        }), (/**
         * @param {?} error
         * @return {?}
         */
        (error) => this.pdfLoadingFailed.emit(error)));
    }
    /**
     * @private
     * @return {?}
     */
    selectCursorTool() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: this.handTool ? 1 : 0 });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
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
            const bus = PDFViewerApplication.eventBus;
            if (bus) {
                PDFViewerApplication.unbindEvents();
                for (const key in bus._listeners) {
                    if (bus._listeners[key]) {
                        /** @type {?} */
                        const list = bus._listeners[key];
                        // not sure if the for loop is necessary - but
                        // it might improve garbage collection if the "listeners"
                        // array is stored somewhere else
                        for (let i = 0; i < list.length; i++) {
                            list[i] = undefined;
                        }
                        bus._listeners[key] = undefined;
                    }
                }
            }
            ((/** @type {?} */ (PDFViewerApplication.eventBus))) = null;
        }
        /** @type {?} */
        const body = document.getElementsByTagName('body');
        if (body[0]) {
            /** @type {?} */
            const topLevelElements = body[0].children;
            for (let i = topLevelElements.length - 1; i >= 0; i--) {
                /** @type {?} */
                const e = topLevelElements.item(i);
                if (e && e.id === 'printContainer') {
                    body[0].removeChild(e);
                }
                else if (e && e.id === 'fileInput') {
                    body[0].removeChild(e);
                }
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    isPrimaryMenuVisible() {
        if (this.showToolbar) {
            /** @type {?} */
            const visible = this.showBookmarkButton ||
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        const PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
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
                    const r = Number(this.rotation);
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
            const options = PDFViewerApplicationOptions;
            if (options) {
                options.set('printResolution', this.printResolution);
            }
        }
        if ('ignoreKeyboard' in changes) {
            /** @type {?} */
            const options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('ignoreKeys' in changes) {
            /** @type {?} */
            const options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('acceptKeys' in changes) {
            /** @type {?} */
            const options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('showBorders' in changes) {
            if (!changes['showBorders'].isFirstChange()) {
                /** @type {?} */
                const options = PDFViewerApplicationOptions;
                if (options) {
                    this.overrideDefaultSettings();
                    /** @type {?} */
                    const viewer = (/** @type {?} */ (document.getElementById('viewer')));
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
                    const zoomEvent = (/** @type {?} */ ({
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
                const newFormData = this.addMissingFormFields(changes['formData'].currentValue);
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
    }
    /**
     * @private
     * @param {?} object1
     * @param {?} object2
     * @return {?}
     */
    equals(object1, object2) {
        if (!object1 || !object2) {
            return object1 === object2;
        }
        /** @type {?} */
        const keys1 = Object.keys(object1);
        /** @type {?} */
        const keys2 = Object.keys(object2);
        for (const key of keys1) {
            if (object1.hasOwnProperty(key)) {
                if (object1[key] !== undefined && object2[key] !== undefined) {
                    if (object1[key] !== object2[key]) {
                        return false;
                    }
                }
            }
        }
        for (const key of keys2) {
            if (object2.hasOwnProperty(key)) {
                if (object1[key] !== undefined && object2[key] !== undefined) {
                    if (object1[key] !== object2[key]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    /**
     * @private
     * @return {?}
     */
    setZoom() {
        /** @type {?} */
        let zoomAsNumber = this.zoom;
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
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (PDFViewerApplication) {
            /** @type {?} */
            const PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
            PDFViewerApplicationOptions.set('defaultZoomValue', zoomAsNumber);
        }
        if (PDFViewerApplication.pdfViewer) {
            PDFViewerApplication.pdfViewer.currentScaleValue = zoomAsNumber;
        }
    }
    /**
     * @return {?}
     */
    onResize() {
        /** @type {?} */
        const pdfViewer = document.getElementsByClassName('html');
        if (pdfViewer && pdfViewer.length > 0) {
            /** @type {?} */
            const container = document.getElementById('outerContainer');
            if (container) {
                /** @type {?} */
                const width = container.clientWidth;
                this.toolbarWidthInPixels = width;
                if (this.secondaryToolbarComponent) {
                    this.secondaryToolbarComponent.checkVisibility();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    onContextMenu() {
        return this.contextMenuAllowed;
    }
    /**
     * @param {?} hideKebabButton
     * @return {?}
     */
    onSecondaryMenuIsEmpty(hideKebabButton) {
        this.hideKebabMenuForSecondaryToolbar = hideKebabButton;
        if (hideKebabButton) {
            if (!this.isPrimaryMenuVisible()) {
                this.primaryMenuVisible = false;
            }
        }
    }
    /**
     * @param {?} formData
     * @return {?}
     */
    fillFormFields(formData) {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (!PDFViewerApplication || !PDFViewerApplication.pdfDocument || !PDFViewerApplication.pdfDocument.annotationStorage) {
            // ngOnChanges calls this method too early - so just ignore it
            return;
        }
        /** @type {?} */
        const annotations = PDFViewerApplication.pdfDocument.annotationStorage.getAll();
        for (const annotation in annotations) {
            if (annotation) {
                /** @type {?} */
                const container = document.querySelector('[data-annotation-id="' + annotation + '"]');
                if (container) {
                    /** @type {?} */
                    const field = container.querySelector('input');
                    if (field) {
                        /** @type {?} */
                        const fieldName = field.name;
                        /** @type {?} */
                        const newValue = formData[fieldName];
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
                                const v = String(newValue) == this.buttonValues[annotation];
                                field.checked = v;
                            }
                            else if (field.type === 'radio') {
                                /** @type {?} */
                                const v = String(newValue) == this.buttonValues[annotation];
                                field.checked = v;
                            }
                            else {
                                field.value = (/** @type {?} */ (newValue));
                            }
                        }
                    }
                    // Additional PDF Form Field Types #567: handle multi line text fields
                    /** @type {?} */
                    const textarea = container.querySelector('textarea');
                    if (textarea) {
                        /** @type {?} */
                        const fieldName = textarea.name;
                        /** @type {?} */
                        const newValue = formData[fieldName];
                        if (newValue === undefined) {
                            this.formData[fieldName] = textarea.value;
                        }
                        if (newValue !== undefined) {
                            PDFViewerApplication.pdfDocument.annotationStorage.setValue(annotation, newValue);
                            textarea.value = (/** @type {?} */ (newValue));
                        }
                    }
                    /** @type {?} */
                    const select = container.querySelector('select');
                    if (select) {
                        /** @type {?} */
                        const fieldName = select.name;
                        /** @type {?} */
                        const newValue = formData[fieldName];
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
    }
    /**
     * @param {?} formData
     * @return {?}
     */
    addFormFieldListeners(formData) {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        const annotations = PDFViewerApplication.pdfDocument.annotationStorage.getAll();
        for (const annotation in annotations) {
            if (annotation) {
                /** @type {?} */
                const container = document.querySelector('[data-annotation-id="' + annotation + '"]');
                if (container) {
                    /** @type {?} */
                    const field = container.querySelector('input');
                    if (field) {
                        /** @type {?} */
                        const fieldName = field.name;
                        /** @type {?} */
                        const newValue = formData[fieldName];
                        if (newValue === undefined) {
                            // Additional PDF Form Field Types #567: use exportValue/buttonValue from the field annotation for the value for checkboxes/radio buttons
                            if (field.type === 'checkbox' || field.type === 'radio') {
                                if (field.checked)
                                    this.formData[fieldName] = this.buttonValues[annotation];
                            }
                            else
                                this.formData[fieldName] = field.value;
                        }
                        field.addEventListener('input', (/**
                         * @return {?}
                         */
                        () => this.emitFormDataChange(annotation, fieldName, field)));
                    }
                    // Additional PDF Form Field Types #567: handle multi line text fields
                    /** @type {?} */
                    const textarea = container.querySelector('textarea');
                    if (textarea) {
                        /** @type {?} */
                        const fieldName = textarea.name;
                        /** @type {?} */
                        const newValue = formData[fieldName];
                        if (newValue === undefined) {
                            this.formData[fieldName] = textarea.value;
                        }
                        textarea.addEventListener('input', (/**
                         * @return {?}
                         */
                        () => this.emitFormDataChange(annotation, fieldName, textarea)));
                    }
                    /** @type {?} */
                    const select = container.querySelector('select');
                    if (select) {
                        /** @type {?} */
                        const fieldName = select.name;
                        /** @type {?} */
                        const newValue = formData[fieldName];
                        if (newValue === undefined) {
                            // Additional PDF Form Field Types #567: moved setting and retrieving <select> field values to functions to handle single or multi select fields
                            this.formData[fieldName] = this.getSelectValue(select);
                        }
                        select.addEventListener('input', (/**
                         * @return {?}
                         */
                        () => this.emitFormDataChange(annotation, fieldName, select)));
                    }
                }
            }
        }
    }
    /**
     * @param {?} formData
     * @return {?}
     */
    addMissingFormFields(formData) {
        /** @type {?} */
        const result = Object.assign({}, formData);
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (PDFViewerApplication && PDFViewerApplication.pdfDocument) {
            /** @type {?} */
            const annotations = PDFViewerApplication.pdfDocument.annotationStorage.getAll();
            for (const annotation in annotations) {
                if (annotation) {
                    /** @type {?} */
                    const container = document.querySelector('[data-annotation-id="' + annotation + '"]');
                    if (container) {
                        /** @type {?} */
                        const field = container.querySelector('input');
                        if (field) {
                            /** @type {?} */
                            const fieldName = field.name;
                            /** @type {?} */
                            const newValue = result[fieldName];
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
                        const select = container.querySelector('select');
                        if (select) {
                            /** @type {?} */
                            const fieldName = select.name;
                            /** @type {?} */
                            const newValue = result[fieldName];
                            if (newValue === undefined) {
                                // Additional PDF Form Field Types #567: moved setting and retrieving <select> field values to functions to handle single or multi select fields
                                result[fieldName] = this.getSelectValue(select);
                            }
                        }
                        // Additional PDF Form Field Types #567: handle multi line text fields
                        /** @type {?} */
                        const textarea = container.querySelector('textarea');
                        if (textarea) {
                            /** @type {?} */
                            const fieldName = textarea.name;
                            /** @type {?} */
                            const newValue = result[fieldName];
                            if (newValue === undefined) {
                                result[fieldName] = textarea.value;
                            }
                        }
                    }
                }
            }
        }
        return result;
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    getSelectValue(field) {
        if (field.multiple) {
            /** @type {?} */
            let values = [];
            /** @type {?} */
            let options = field.options;
            for (let i = 0; i < options.length; i++) {
                if (options[i].selected) {
                    values.push(options[i].value);
                }
            }
            return (values);
        }
        else
            return (field.value);
    }
    /**
     * @private
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    setSelectValue(field, value) {
        if (field.multiple && Array.isArray(value)) {
            /** @type {?} */
            let values = value;
            /** @type {?} */
            let options = field.options;
            for (let i = 0; i < options.length; i++)
                options[i].selected = (values.indexOf(options[i].value) != -1);
        }
        else
            field.value = (/** @type {?} */ (value));
    }
    /**
     * @private
     * @param {?} annotation
     * @param {?} fieldName
     * @param {?} field
     * @return {?}
     */
    emitFormDataChange(annotation, fieldName, field) {
        /** @type {?} */
        let value = null;
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
        () => {
            if (this.formData[fieldName] !== undefined) {
                this.formData[fieldName] = value;
                this.formDataChange.emit(this.formData);
            }
        }));
    }
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
    loadComplete(pdf /* PDFDocumentProxy */) {
        // screen DPI / PDF DPI
        /**
         * This method has been inspired by https://medium.com/factory-mind/angular-pdf-forms-fa72b15c3fbd. Thanks, Jonny Fox!
         * @type {?}
         */
        const dpiRatio = 96 / 72;
        this.hasSignature = false;
        this.buttonValues = {};
        for (let i = 1; i <= pdf.numPages; i++) {
            // track the current page
            /** @type {?} */
            let currentPage = null;
            pdf
                .getPage(i)
                .then((/**
             * @param {?} p
             * @return {?}
             */
            (p) => {
                currentPage = p;
                // get the annotations of the current page
                return p.getAnnotations();
            }))
                .then((/**
             * @param {?} ann
             * @return {?}
             */
            (ann) => {
                // ugly cast due to missing typescript definitions
                // please contribute to complete @types/pdfjs-dist
                /** @type {?} */
                const annotations = ann;
                annotations
                    .filter((/**
                 * @param {?} a
                 * @return {?}
                 */
                (a) => a.subtype === 'Widget')) // get the form field annotation only
                    .forEach((/**
                 * @param {?} a
                 * @return {?}
                 */
                (a) => {
                    // Additional PDF Form Field Types #567: Store the exportValue for the check boxes and buttonValue for radio buttons for quick reference 
                    if (a.checkBox)
                        this.buttonValues[a.id] = a.exportValue;
                    else if (a.radioButton)
                        this.buttonValues[a.id] = a.buttonValue;
                    if (a.fieldType === 'Sig') {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            this.hasSignature = true;
                            setTimeout((/**
                             * @return {?}
                             */
                            () => {
                                /** @type {?} */
                                const viewerContainer = (/** @type {?} */ (document.querySelector('#viewerContainer')));
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
        }
    }
}
NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = false;
NgxExtendedPdfViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-extended-pdf-viewer',
                template: "<link *ngIf=\"useBrowserLocale\" rel=\"resource\" type=\"application/l10n\" [attr.xhref]=\"localeFolderPath+'/locale.properties'\" origin=\"ngx-extended-pdf-viewer\" />\n<pdf-dark-theme *ngIf=\"theme==='dark'\"></pdf-dark-theme>\n<pdf-light-theme *ngIf=\"theme==='light'\"></pdf-light-theme>\n\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\n<div class=\"zoom\" [style.height]=\"height\" [style.minHeight]=\"minHeight\" #root>\n  <div class=\"html\">\n    <div class=\"loadingInProgress body\" [style.backgroundColor]=\"backgroundColor\">\n      <div id=\"outerContainer\" (window:resize)=\"onResize()\">\n        <div class=\"free-floating-bar\">\n          <ng-content *ngTemplateOutlet=\"customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar\"></ng-content>\n        </div>\n        <pdf-sidebar #pdfsidebar\n                     [sidebarPositionTop]=\"sidebarPositionTop\"\n                     [sidebarVisible]=\"sidebarVisible\"\n                     [showSidebarButton]=\"showSidebarButton\"\n                     [customSidebar]=\"customSidebar\"\n                     [customThumbnail]=\"customThumbnail\"\n                     (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\">\n        </pdf-sidebar>\n        <div id=\"mainContainer\">\n          <pdf-dummy-components></pdf-dummy-components>\n\n          <pdf-toolbar\n            [customToolbar]=\"customToolbar\"\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n            [primaryMenuVisible]=\"primaryMenuVisible\"\n            [showBookmarkButton]=\"showBookmarkButton\"\n            [showDownloadButton]=\"showDownloadButton\"\n            [showFindButton]=\"showFindButton\"\n            [showHandToolButton]=\"showHandToolButton\"\n            [showOpenFileButton]=\"showOpenFileButton\"\n            [showPrintButton]=\"showPrintButton && enablePrint\"\n            [showPagingButtons]=\"showPagingButtons\"\n            [showPresentationModeButton]=\"showPresentationModeButton\"\n            [showRotateButton]=\"showRotateButton\"\n            [showSecondaryToolbarButton]=\"showSecondaryToolbarButton && !hideKebabMenuForSecondaryToolbar\"\n            [showSidebarButton]=\"showSidebarButton\"\n            [showZoomButtons]=\"showZoomButtons\"\n            [textLayer]=\"textLayer\"\n            [toolbarPaddingTop]=\"toolbarPaddingTop\"\n            [toolbarWidth]=\"toolbarWidth\"\n            [zoomLevels]=\"zoomLevels\"\n          ></pdf-toolbar>\n\n          <pdf-secondary-toolbar #pdfSecondaryToolbarComponent\n            [customSecondaryToolbar]=\"customSecondaryToolbar\"\n            [secondaryToolbarTop]=\"secondaryToolbarTop\"\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n            [showPresentationModeButton]=\"showPresentationModeButton\"\n            [showOpenFileButton]=\"showOpenFileButton\"\n            [showPrintButton]=\"showPrintButton && enablePrint\"\n            [showDownloadButton]=\"showDownloadButton\"\n            [showBookmarkButton]=\"showBookmarkButton\"\n            [showPagingButtons]=\"showPagingButtons\"\n            [showRotateButton]=\"showRotateButton\"\n            [showHandToolButton]=\"showHandToolButton\"\n            [showScrollingButton]=\"showScrollingButton\"\n            [showSpreadButton]=\"showSpreadButton\"\n            [showPropertiesButton]=\"showPropertiesButton\"\n            (spreadChange)=\"onSpreadChange($event)\"\n            (secondaryMenuIsEmpty)=\"onSecondaryMenuIsEmpty($event)\"\n          >\n          </pdf-secondary-toolbar>\n\n          <pdf-findbar\n            [findbarLeft]=\"findbarLeft\"\n            [findbarTop]=\"findbarTop\"\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n            [showFindButton]=\"showFindButton\"\n            [customFindbarInputArea]=\"customFindbarInputArea\"\n            [customFindbarButtons]=\"customFindbarButtons\"\n          >\n          </pdf-findbar>\n\n          <pdf-context-menu></pdf-context-menu>\n\n          <div id=\"viewerContainer\" [style.top]=\"viewerPositionTop\">\n            <div class=\"unverified-signature-warning\" *ngIf=\"hasSignature\">\n              This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid. Please download the file and open it in Acrobat Reader to verify the signature is valid.\n            </div>\n            <div id=\"viewer\" class=\"pdfViewer\" [style.backgroundColor]=\"backgroundColor\">\n            </div>\n          </div>\n\n          <div id=\"errorWrapper\" hidden=\"true\">\n            <div id=\"errorMessageLeft\">\n              <span id=\"errorMessage\"></span>\n              <button type=\"button\" id=\"errorShowMore\" data-l10n-id=\"error_more_info\">\n                More Information\n              </button>\n              <button type=\"button\" id=\"errorShowLess\" data-l10n-id=\"error_less_info\" hidden=\"true\">\n                Less Information\n              </button>\n            </div>\n            <div id=\"errorMessageRight\">\n              <button type=\"button\" id=\"errorClose\" data-l10n-id=\"error_close\">Close</button>\n            </div>\n            <div class=\"clearBoth\"></div>\n            <textarea id=\"errorMoreInfo\" hidden=\"true\" readonly=\"readonly\"></textarea>\n          </div>\n        </div>\n        <!-- mainContainer -->\n\n        <div id=\"overlayContainer\" class=\"hidden\">\n          <div id=\"passwordOverlay\" class=\"container hidden\">\n            <div class=\"dialog\">\n              <div class=\"row\">\n                <p id=\"passwordText\" data-l10n-id=\"password_label\">\n                  Enter the password to open this PDF file:\n                </p>\n              </div>\n              <div class=\"row\">\n                <input id=\"password\" class=\"toolbarField\" />\n              </div>\n              <div class=\"buttonRow\">\n                <button type=\"button\" id=\"passwordCancel\" class=\"overlayButton\">\n                  <span data-l10n-id=\"password_cancel\">Cancel</span>\n                </button>\n                <button type=\"button\" id=\"passwordSubmit\" class=\"overlayButton\">\n                  <span data-l10n-id=\"password_ok\">OK</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <pdf-document-properties-overlay class=\"container hidden\" id=\"documentPropertiesOverlay\"> </pdf-document-properties-overlay>\n\n          <div id=\"printServiceOverlay\" class=\"container hidden\">\n            <div class=\"dialog\">\n              <div class=\"row\">\n                <span data-l10n-id=\"print_progress_message\">Preparing document for printing\u2026</span>\n              </div>\n              <div class=\"row\">\n                <progress value=\"0\" max=\"100\"></progress>\n                <span data-l10n-id=\"print_progress_percent\" data-l10n-args='{ \"progress\": 0 }' class=\"relative-progress\">0%</span>\n              </div>\n              <div class=\"buttonRow\">\n                <button type=\"button\" id=\"printCancel\" class=\"overlayButton\">\n                  <span data-l10n-id=\"print_progress_close\">Cancel</span>\n                </button>\n              </div>\n            </div>\n          </div>\n         </div>\n        <!-- overlayContainer -->\n      </div>\n      <!-- outerContainer -->\n      <div id=\"printContainer\"></div>\n    </div>\n  </div>\n</div>\n\n<ng-template #defaultFreeFloatingBar>\n\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NgxExtendedPdfViewerComponent.ctorParameters = () => [
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PDFNotificationService },
    { type: Location },
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBSUwsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsWUFBWSxFQUNaLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFRcEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQXNDLE1BQU0sc0JBQXNCLENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDekgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQTBCLGNBQWMsRUFBRSxN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SUFFbkMsMERBQWlDOztJQUVqQyxxREFBNkI7O0lBRTdCLDZEQUFrQzs7SUFFbEMsNERBQTJEOztJQUczRCxtREFBa0Q7O0lBR2xELG9EQUFtRDs7SUFHbkQscURBQThCOzs7OztJQW9DOUIscURBQTZCOzs7OztJQTBDM0IsK0NBQXNCOzs7OztJQUN0QixtREFBdUM7Ozs7O0lBQ3ZDLDREQUFtRDs7Ozs7SUFDbkQsaURBQTBCOzs7OztJQUMxQixtREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBIb3N0TGlzdGVuZXIsXG4gIE5nWm9uZSxcbiAgVGVtcGxhdGVSZWYsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSUQsXG4gIFZpZXdDaGlsZCxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VzTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlcy1sb2FkZWQtZXZlbnQnO1xuaW1wb3J0IHsgUGFnZVJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlLXJlbmRlcmVkLWV2ZW50JztcbmltcG9ydCB7IFBkZkRvd25sb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BkZi1kb3dubG9hZGVkLWV2ZW50JztcbmltcG9ydCB7IFBkZkxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLWxvYWRlZC1ldmVudCc7XG5pbXBvcnQgeyBnZXRWZXJzaW9uU3VmZml4LCBwZGZEZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtZGVmYXVsdC1vcHRpb25zJztcbmltcG9ydCB7IFNjYWxlQ2hhbmdpbmdFdmVudCB9IGZyb20gJy4vZXZlbnRzL3NjYWxlLWNoYW5naW5nLWV2ZW50JztcbmltcG9ydCB7IFBhZ2VzUm90YXRpb25FdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2VzLXJvdGF0aW9uLWV2ZW50JztcbmltcG9ydCB7IEZpbGVJbnB1dENoYW5nZWQgfSBmcm9tICcuL2V2ZW50cy9maWxlLWlucHV0LWNoYW5nZWQnO1xuaW1wb3J0IHsgU2lkZWJhcnZpZXdDaGFuZ2UgfSBmcm9tICcuL2V2ZW50cy9zaWRlYmFydmlldy1jaGFuZ2VkJztcbmltcG9ydCB7IEhhbmR0b29sQ2hhbmdlZCB9IGZyb20gJy4vZXZlbnRzL2hhbmR0b29sLWNoYW5nZWQnO1xuaW1wb3J0IHsgUGFnZU51bWJlckNoYW5nZSB9IGZyb20gJy4vZXZlbnRzL3BhZ2UtbnVtYmVyLWNoYW5nZSc7XG5pbXBvcnQgeyBTZXJ2aWNlV29ya2VyT3B0aW9uc1R5cGUgfSBmcm9tICcuL29wdGlvbnMvc2VydmljZS13b3JrZXItb3B0aW9ucyc7XG5pbXBvcnQgeyBWZXJib3NpdHlMZXZlbCB9IGZyb20gJy4vb3B0aW9ucy92ZXJib3NpdHktbGV2ZWwnO1xuaW1wb3J0IHsgRmluZFN0YXRlLCBGaW5kUmVzdWx0TWF0Y2hlc0NvdW50LCBGaW5kUmVzdWx0IH0gZnJvbSAnLi9ldmVudHMvZmluZC1yZXN1bHQnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uLW9wdGlvbnMnO1xuaW1wb3J0IHsgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IFBkZkN1cnNvclRvb2xzIH0gZnJvbSAnLi9vcHRpb25zL3BkZi1jdXJzb3ItdG9vbHMnO1xuaW1wb3J0IHsgVGV4dExheWVyUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3RleHRsYXllci1yZW5kZXJlZCc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQaW5jaE9uTW9iaWxlU3VwcG9ydCB9IGZyb20gJy4vcGluY2gtb24tbW9iaWxlLXN1cHBvcnQnO1xuaW1wb3J0IHsgUGRmVGh1bWJuYWlsRHJhd25FdmVudCB9IGZyb20gJy4vZXZlbnRzL3BkZi10aHVtYm5haWwtZHJhd24tZXZlbnQnO1xuaW1wb3J0IHsgUGRmU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2Nyb2xsTW9kZUNoYW5nZWRFdmVudCwgU2Nyb2xsTW9kZVR5cGUgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlcic7XG5pbXBvcnQgeyBQZGZEb2N1bWVudExvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvZG9jdW1lbnQtbG9hZGVkLWV2ZW50JztcbmltcG9ydCB7IGFkZExpbmtBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvc3JjL2Rpc3BsYXkvZGlzcGxheV91dGlscyc7XG5cbmRlY2xhcmUgY29uc3QgU2VydmljZVdvcmtlck9wdGlvbnM6IFNlcnZpY2VXb3JrZXJPcHRpb25zVHlwZTsgLy8gZGVmaW5lZCBpbiB2aWV3ZXIuanNcblxuaW50ZXJmYWNlIEVsZW1lbnRBbmRQb3NpdGlvbiB7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtRGF0YVR5cGUge1xuICBbZmllbGROYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHVibGljIHN0YXRpYyBuZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBkdW1teSBjb21wb25lbnRzIGFyZSBpbnNlcnRlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHVzZXIgY3VzdG9taXplcyB0aGUgdG9vbGJhclxuICAgKiB3aXRob3V0IGFkZGluZyBldmVyeSBvcmlnaW5hbCB0b29sYmFyIGl0ZW0uIFdpdGhvdXQgdGhlIGR1bW15IGNvbXBvbmVudHMsIHRoZVxuICAgKiBpbml0aWFsaXphdGlvbiBjb2RlIG9mIHBkZi5qcyBjcmFzaGVzIGJlY2F1c2UgaXQgYXNzdW1lIHRoYXQgZXZlcnkgc3RhbmRhcmQgd2lkZ2V0IGlzIHRoZXJlLlxuICAgKi9cbiAgQFZpZXdDaGlsZChQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQpXG4gIHB1YmxpYyBkdW1teUNvbXBvbmVudHM6IFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudDtcblxuICBAVmlld0NoaWxkKCdyb290JylcbiAgcHVibGljIHJvb3Q6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBwaW5jaE9uTW9iaWxlU3VwcG9ydDogUGluY2hPbk1vYmlsZVN1cHBvcnQgfCB1bmRlZmluZWQ7XG5cbiAgLyogVUkgdGVtcGxhdGVzICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFySW5wdXRBcmVhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21Ub29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyQnV0dG9uczogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tU2Vjb25kYXJ5VG9vbGJhcjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tU2lkZWJhcjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tVGh1bWJuYWlsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21GcmVlRmxvYXRpbmdCYXI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgcHVibGljIGZvcm1EYXRhOiBGb3JtRGF0YVR5cGUgPSB7fTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGZvcm1EYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtRGF0YVR5cGU+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBhZ2VWaWV3TW9kZTogJ3NpbmdsZScgfCAnYm9vaycgfCAnbXVsdGlwbGUnIHwgJ2luZmluaXRlLXNjcm9sbCcgPSAnbXVsdGlwbGUnO1xuXG4gIEBWaWV3Q2hpbGQoJ3BkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQnKVxuICBwcml2YXRlIHNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQ6IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQ7XG5cbiAgQFZpZXdDaGlsZCgncGRmc2lkZWJhcicpXG4gIHByaXZhdGUgc2lkZWJhckNvbXBvbmVudDogUGRmU2lkZWJhckNvbXBvbmVudDtcblxuICAvKiByZWd1bGFyIGF0dHJpYnV0ZXMgKi9cblxuICBwcml2YXRlIF9zcmM6IHN0cmluZyB8IEFycmF5QnVmZmVyIHwgeyByYW5nZTogYW55IH07XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzcmNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2Nyb2xsTW9kZTogU2Nyb2xsTW9kZVR5cGUgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzY3JvbGxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTY3JvbGxNb2RlVHlwZT4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgYXV0aG9yaXphdGlvbjogT2JqZWN0IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBodHRwSGVhZGVyczogT2JqZWN0IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb250ZXh0TWVudUFsbG93ZWQgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgYWZ0ZXJQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGJlZm9yZVByaW50ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY3VycmVudFpvb21GYWN0b3IgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZW5hYmxlUHJpbnQgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmV0d2VlbiBpbml0aWFsaXppbmcgdGhlIFBERiB2aWV3ZXIgYW5kIGxvYWRpbmcgdGhlIFBERiBmaWxlLlxuICAgKiBNb3N0IHVzZXJzIGNhbiBsZXQgdGhpcyBwYXJhbWV0ZXIgc2FmZWx5IGF0IGl0J3MgZGVmYXVsdCB2YWx1ZSBvZiB6ZXJvLlxuICAgKiBTZXQgdGhpcyB0byAxMDAwIG9yIGhpZ2hlciBpZiB5b3UgcnVuIGludG8gdGltaW5nIHByb2JsZW1zICh0eXBpY2FsbHkgY2F1c2VkIGJ5IGxvYWRpbmcgdGhlIGxvY2FsZSBmaWxlc1xuICAgKiBhZnRlciB0aGUgUERGIGZpbGVzLCBzbyB0aGV5IGFyZSBub3QgYXZhaWxhYmxlIHdoZW4gdGhlIFBERiB2aWV3ZXIgaXMgaW5pdGlhbGl6ZWQpLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGRlbGF5Rmlyc3RWaWV3ID0gMDtcblxuICAvKiogc3RvcmUgdGhlIHRpbWVvdXQgaWQgc28gaXQgY2FuIGJlIGNhbmNlbGVkIGlmIHVzZXIgbGVhdmVzIHRoZSBwYWdlIGJlZm9yZSB0aGUgUERGIGlzIHNob3duICovXG4gIHByaXZhdGUgaW5pdFRpbWVvdXQ6IGFueTtcblxuICAvKiogSG93IG1hbnkgbG9nIG1lc3NhZ2VzIHNob3VsZCBiZSBwcmludGVkP1xuICAgKiBMZWdhbCB2YWx1ZXM6IFZlcmJvc2l0eUxldmVsLklORk9TICg9IDUpLCBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUyAoPSAxKSwgVmVyYm9zaXR5TGV2ZWwuRVJST1JTICg9IDApICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsb2dMZXZlbCA9IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBlbmFibGVQaW5jaE9uTW9iaWxlID0gZmFsc2U7XG5cbiAgLyoqIFVzZSB0aGUgbWluaWZpZWQgKG1pbmlmaWVkSlNMaWJyYXJpZXM9XCJ0cnVlXCIsIHdoaWNoIGlzIHRoZSBkZWZhdWx0KSBvciB0aGUgdXNlci1yZWFkYWJsZSBwZGYuanMgbGlicmFyeSAobWluaWZpZWRKU0xpYnJhcmllcz1cImZhbHNlXCIpICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtaW5pZmllZEpTTGlicmFyaWVzID0gdHJ1ZTtcblxuICBwdWJsaWMgcHJpbWFyeU1lbnVWaXNpYmxlID0gdHJ1ZTtcblxuICAvKiogb3B0aW9uIHRvIGluY3JlYXNlIChvciByZWR1Y2UpIHByaW50IHJlc29sdXRpb24uIERlZmF1bHQgaXMgMTUwIChkcGkpLiBTZW5zaWJsZSB2YWx1ZXNcbiAgICogYXJlIDMwMCwgNjAwLCBhbmQgMTIwMC4gTm90ZSB0aGUgaW5jcmVhc2UgbWVtb3J5IGNvbnN1bXB0aW9uLCB3aGljaCBtYXkgZXZlbiByZXN1bHQgaW4gYSBicm93c2VyIGNyYXNoLiAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgcHJpbnRSZXNvbHV0aW9uID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcm90YXRpb246IDAgfCA5MCB8IDE4MCB8IDI3MDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHJvdGF0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwwIHwgOTAgfCAxODAgfCAyNzA+KCk7XG5cbiAgcHVibGljIGhhc1NpZ25hdHVyZTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNyYyh1cmw6IHN0cmluZyB8IEFycmF5QnVmZmVyIHwgQmxvYiB8IFVpbnQ4QXJyYXkgfCB7IHJhbmdlOiBhbnkgfSkge1xuICAgIGlmICh1cmwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICB0aGlzLl9zcmMgPSB1cmwuYnVmZmVyO1xuICAgIH0gZWxzZSBpZiAodXJsIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3JjID0gbmV3IFVpbnQ4QXJyYXkocmVhZGVyLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcik7XG4gICAgICAgICAgaWYgKE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3BlblBERjIoKTtcbiAgICAgICAgICAgIC8vIGVsc2Ugb3BlblBERiBpcyBjYWxsZWQgbGF0ZXIsIHNvIHdlIHNob3VsZCBsb2FkIHRoZSBQREYgZmlsZSB0d2ljZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHVybCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fc3JjID0gdXJsO1xuICAgICAgaWYgKHVybC5sZW5ndGggPiA5ODApIHtcbiAgICAgICAgLy8gbWluaW1hbCBsZW5ndGggb2YgYSBiYXNlNjQgZW5jb2RlZCBQREZcbiAgICAgICAgaWYgKHVybC5sZW5ndGggJSA0ID09PSAwKSB7XG4gICAgICAgICAgaWYgKC9eW2EtekEtWlxcZFxcLytdKz17MCwyfSQvLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIFVSTCBsb29rcyBsaWtlIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nLiBJZiBzbywgcGxlYXNlIHVzZSB0aGUgYXR0cmlidXRlIFtiYXNlNjRTcmNdIGluc3RlYWQgb2YgW3NyY10nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3JjID0gdXJsO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmFzZTY0U3JjKGJhc2U2NDogc3RyaW5nKSB7XG4gICAgY29uc3QgYmluYXJ5X3N0cmluZyA9IHdpbmRvdy5hdG9iKGJhc2U2NCk7XG4gICAgY29uc3QgbGVuID0gYmluYXJ5X3N0cmluZy5sZW5ndGg7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGJ5dGVzW2ldID0gYmluYXJ5X3N0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICB0aGlzLnNyYyA9IGJ5dGVzLmJ1ZmZlcjtcbiAgfVxuXG4gIHB1YmxpYyBtaW5IZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIF9oZWlnaHQgPSAnMTAwJSc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBoZWlnaHQoaDogc3RyaW5nKSB7XG4gICAgdGhpcy5taW5IZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGgpIHtcbiAgICAgIHRoaXMuX2hlaWdodCA9IGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tIZWlnaHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhpcyBmbGFnIGlzIHRydWUsIHRoaXMgY29tcG9uZW50cyBhZGRzIGEgbGluayB0byB0aGUgbG9jYWxlIGFzc2V0cy4gVGhlIHBkZiB2aWV3ZXJcbiAgICogc2VlcyB0aGlzIGxpbmsgYW5kIHVzZXMgaXQgdG8gbG9hZCB0aGUgbG9jYWxlIGZpbGVzIGF1dG9tYXRpY2FsbHkuXG4gICAqIEBwYXJhbSB1c2VCcm93c2VyTG9jYWxlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB1c2VCcm93c2VyTG9jYWxlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGJhY2tncm91bmRDb2xvciA9ICcjZThlOGViJztcblxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRlZmluZSB0aGUgbmFtZSBvZiB0aGUgZmlsZSBhZnRlciBjbGlja2luZyBcImRvd25sb2FkXCIgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGZpbGVuYW1lRm9yRG93bmxvYWQgPSAnZG9jdW1lbnQucGRmJztcblxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRpc2FibGUgdGhlIGtleWJvYXJkIGJpbmRpbmdzIGNvbXBsZXRlbHkgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGlnbm9yZUtleWJvYXJkID0gZmFsc2U7XG5cbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIGEgbGlzdCBvZiBrZXkgYmluZGluZ3MuICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpZ25vcmVLZXlzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBlbmFibGUgYSBsaXN0IG9mIGtleSBiaW5kaW5ncyBleHBsaWNpdGx5LiBJZiB0aGlzIHByb3BlcnR5IGlzIHNldCwgZXZlcnkgb3RoZXIga2V5IGJpbmRpbmcgaXMgaWdub3JlZC4gKi9cbiAgQElucHV0KClcbiAgcHVibGljIGFjY2VwdEtleXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIHB1dCB0aGUgdmlld2VyJ3Mgc3ZnIGltYWdlcyBpbnRvIGFuIGFyYml0cmFyeSBmb2xkZXIgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGltYWdlUmVzb3VyY2VzUGF0aCA9ICcuLycgKyBwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIgKyAnL2ltYWdlcy8nO1xuXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gcHV0IHRoZWlyIGxvY2FsZSBmb2xkZXIgaW50byBhbiBhcmJpdHJhcnkgZm9sZGVyICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsb2NhbGVGb2xkZXJQYXRoID0gJy4vJyArIHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlciArICcvbG9jYWxlJztcblxuICAvKiogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgbG9jYWxlLiBUaGlzIG11c3QgYmUgdGhlIGNvbXBsZXRlIGxvY2FsZSBuYW1lLCBzdWNoIGFzIFwiZXMtRVNcIi4gVGhlIHN0cmluZyBpcyBhbGxvd2VkIHRvIGJlIGFsbCBsb3dlcmNhc2UuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAvKiogQnkgZGVmYXVsdCwgbGlzdGVuaW5nIHRvIHRoZSBVUkwgaXMgZGVhY3RpdmF0ZWQgYmVjYXVzZSBvZnRlbiB0aGUgYW5jaG9yIHRhZyBpcyB1c2VkIGZvciB0aGUgQW5ndWxhciByb3V0ZXIgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGxpc3RlblRvVVJMID0gZmFsc2U7XG5cbiAgLyoqIE5hdmlnYXRlIHRvIGEgY2VydGFpbiBcIm5hbWVkIGRlc3RpbmF0aW9uXCIgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hbWVkZGVzdDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8qKiBhbGxvd3MgeW91IHRvIHBhc3MgYSBwYXNzd29yZCB0byByZWFkIHBhc3N3b3JkLXByb3RlY3RlZCBmaWxlcyAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgX3Nob3dTaWRlYmFyQnV0dG9uID0gdHJ1ZTtcblxuICBwdWJsaWMgdmlld2VyUG9zaXRpb25Ub3AgPSAnMzJweCc7XG5cbiAgLyoqIHBkZi5qcyBjYW4gc2hvdyBzaWduYXR1cmVzLCBidXQgZmFpbHMgdG8gdmVyaWZ5IHRoZW0uIFNvIHRoZXkgYXJlIHN3aXRjaGVkIG9mZiBieSBkZWZhdWx0LlxuICAgKiBTZXQgXCJbc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzXVwiPVwidHJ1ZVwiIHRvIGRpc3BsYXkgZS1zaWduYXR1cmVzIG5vbmV0aGVsZXNzLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdGFydFRhYmluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgcHVibGljIGdldCBzaG93U2lkZWJhckJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NpZGViYXJCdXR0b247XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaG93U2lkZWJhckJ1dHRvbihzaG93OiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1NpZGViYXJCdXR0b24gPSBzaG93O1xuICAgIGNvbnN0IGlzSUUgPSAvbXNpZVxcc3x0cmlkZW50XFwvL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgbGV0IGZhY3RvciA9IDE7XG4gICAgaWYgKGlzSUUpIHtcbiAgICAgIGZhY3RvciA9IE51bWJlcigodGhpcy5fbW9iaWxlRnJpZW5kbHlab29tIHx8ICcxMDAnKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc2hvd1NpZGViYXJCdXR0b24pIHtcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAoNjggKiBmYWN0b3IpLnRvU3RyaW5nKCkgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gJzBweCc7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNpZGViYXJWaXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2lkZWJhclZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dGaW5kQnV0dG9uOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1BhZ2luZ0J1dHRvbnMgPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1pvb21CdXR0b25zID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93T3BlbkZpbGVCdXR0b24gPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1ByaW50QnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dEb3dubG9hZEJ1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Qm9va21hcmtCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aGVtZTogJ2RhcmsnIHwgJ2xpZ2h0JyB8ICdjdXN0b20nID0gJ2xpZ2h0JztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1Rvb2xiYXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiA9IHRydWU7XG5cbiAgLyoqIFNldCBieSB0aGUgZXZlbnQgKHNlY29uZGFyeU1lbnVJc0VtcHR5KSAqL1xuICBwdWJsaWMgaGlkZUtlYmFiTWVudUZvclNlY29uZGFyeVRvb2xiYXIgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1JvdGF0ZUJ1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBoYW5kVG9vbCA9IHRydWU7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgaGFuZFRvb2xDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93SGFuZFRvb2xCdXR0b24gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dTY3JvbGxpbmdCdXR0b24gPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1NwcmVhZEJ1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UHJvcGVydGllc0J1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Qm9yZGVycyA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNwcmVhZDogJ29mZicgfCAnZXZlbicgfCAnb2RkJztcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHNwcmVhZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8J29mZicgfCAnZXZlbicgfCAnb2RkJz4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHRodW1ibmFpbERyYXduID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZUaHVtYm5haWxEcmF3bkV2ZW50PigpO1xuXG4gIHByaXZhdGUgX3BhZ2U6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgZ2V0IHBhZ2UoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGFnZShwOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAocCkge1xuICAgICAgLy8gc2lsZW50bHkgY29wZSB3aXRoIHN0cmluZ3NcbiAgICAgIHRoaXMuX3BhZ2UgPSBOdW1iZXIocCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhZ2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCB1bmRlZmluZWQ+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBhZ2VMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcGFnZUxhYmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB1bmRlZmluZWQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwYWdlc0xvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZXNMb2FkZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBhZ2VSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZVJlbmRlcmVkRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwZGZEb3dubG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZEb3dubG9hZGVkRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwZGZMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkxvYWRlZEV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcGRmTG9hZGluZ0ZhaWxlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHRleHRMYXllcjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHRleHRMYXllclJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxUZXh0TGF5ZXJSZW5kZXJlZEV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgdXBkYXRlRmluZE1hdGNoZXNDb3VudCA9IG5ldyBFdmVudEVtaXR0ZXI8RmluZFJlc3VsdE1hdGNoZXNDb3VudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHVwZGF0ZUZpbmRTdGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RmluZFN0YXRlPigpO1xuXG4gIC8qKiBMZWdhbCB2YWx1ZXM6IHVuZGVmaW5lZCwgJ2F1dG8nLCAncGFnZS1hY3R1YWwnLCAncGFnZV9maXQnLCAncGFnZS13aWR0aCcsIG9yICc1MCcgKG9yIGFueSBvdGhlciBwZXJjZW50YWdlKSAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgem9vbTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgem9vbUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkPigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB6b29tTGV2ZWxzID0gWydhdXRvJywgJ3BhZ2UtYWN0dWFsJywgJ3BhZ2UtZml0JywgJ3BhZ2Utd2lkdGgnLCAwLjUsIDEsIDEuMjUsIDEuNSwgMiwgMywgNF07XG5cbiAgQElucHV0KClcbiAgcHVibGljIG1heFpvb20gPSAxMDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgbWluWm9vbSA9IDAuMTtcblxuICAvKiogVGhpcyBhdHRyaWJ1dGVzIGFsbG93cyB5b3UgdG8gaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIFVJIGVsZW1lbnRzIHNvIHlvdSBjYW4gdXNlIHRoZW0gb24gc21hbGwgbW9iaWxlIGRldmljZXMuXG4gICAqIFRoaXMgYXR0cmlidXRlIGlzIGEgc3RyaW5nIHdpdGggYSBwZXJjZW50IGNoYXJhY3RlciBhdCB0aGUgZW5kIChlLmcuIFwiMTUwJVwiKS5cbiAgICovXG4gIEBJbnB1dCgpIF9tb2JpbGVGcmllbmRseVpvb20gPSAnMTAwJSc7XG5cbiAgcHVibGljIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gMTtcblxuICBwdWJsaWMgdG9vbGJhclBhZGRpbmdUb3AgPSAnMHB4JztcblxuICBwdWJsaWMgdG9vbGJhcldpZHRoID0gJzEwMCUnO1xuXG4gIHB1YmxpYyB0b29sYmFyV2lkdGhJblBpeGVscyA9IDEwMDtcblxuICBwdWJsaWMgc2Vjb25kYXJ5VG9vbGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxuICBwdWJsaWMgZmluZGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxuICBwdWJsaWMgZmluZGJhckxlZnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IFVzZWQgdG8gc3RvcmUgdGhlIGV4cG9ydGVkIHZhbHVlcyBvZiByYWRpbyBhbmQgY2hlY2tib3ggYnV0dG9uc1xuICBwdWJsaWMgYnV0dG9uVmFsdWVzOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgZ2V0IG1vYmlsZUZyaWVuZGx5Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9iaWxlRnJpZW5kbHlab29tO1xuICB9XG4gIC8qKlxuICAgKiBUaGlzIGF0dHJpYnV0ZXMgYWxsb3dzIHlvdSB0byBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgVUkgZWxlbWVudHMgc28geW91IGNhbiB1c2UgdGhlbSBvbiBzbWFsbCBtb2JpbGUgZGV2aWNlcy5cbiAgICogVGhpcyBhdHRyaWJ1dGUgaXMgYSBzdHJpbmcgd2l0aCBhIHBlcmNlbnQgY2hhcmFjdGVyIGF0IHRoZSBlbmQgKGUuZy4gXCIxNTAlXCIpLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtb2JpbGVGcmllbmRseVpvb20oem9vbTogc3RyaW5nKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXG4gICAgaWYgKHpvb20gPT0gJ3RydWUnKSB7XG4gICAgICB6b29tID0gJzE1MCUnO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXG4gICAgfSBlbHNlIGlmICh6b29tID09ICdmYWxzZScgfHwgem9vbSA9PT0gdW5kZWZpbmVkIHx8IHpvb20gPT09IG51bGwpIHtcbiAgICAgIHpvb20gPSAnMTAwJSc7XG4gICAgfVxuICAgIHRoaXMuX21vYmlsZUZyaWVuZGx5Wm9vbSA9IHpvb207XG4gICAgbGV0IGZhY3RvciA9IDE7XG4gICAgaWYgKCFTdHJpbmcoem9vbSkuaW5jbHVkZXMoJyUnKSkge1xuICAgICAgem9vbSA9IDEwMCAqIE51bWJlcih6b29tKSArICclJztcbiAgICB9XG4gICAgZmFjdG9yID0gTnVtYmVyKCh6b29tIHx8ICcxMDAnKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICB0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gZmFjdG9yO1xuICAgIHRoaXMudG9vbGJhcldpZHRoID0gKDEwMCAvIGZhY3RvcikudG9TdHJpbmcoKSArICclJztcbiAgICB0aGlzLnRvb2xiYXJQYWRkaW5nVG9wID0gKGZhY3RvciAtIDEpICogOCArICdweCc7XG4gICAgaWYgKHRoaXMuc2hvd1NpZGViYXJCdXR0b24pIHtcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAoNjggKiBmYWN0b3IpLnRvU3RyaW5nKCkgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gJzBweCc7XG4gICAgfVxuICAgIHRoaXMuc2Vjb25kYXJ5VG9vbGJhclRvcCA9ICgzNiArIDM2ICogKGZhY3RvciAtIDEpKS50b1N0cmluZygpICsgJ3B4JztcbiAgICB0aGlzLmZpbmRiYXJUb3AgPSAoMzYgKyA1MiAqIChmYWN0b3IgLSAxKSkudG9TdHJpbmcoKSArICdweCc7XG4gIH1cblxuICBwcml2YXRlIHNodXR0aW5nRG93biA9IGZhbHNlO1xuXG4gIHB1YmxpYyBnZXQgc2lkZWJhclBvc2l0aW9uVG9wKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLmlzUHJpbWFyeU1lbnVWaXNpYmxlKCkpIHtcbiAgICAgIHJldHVybiAnMCc7XG4gICAgfVxuICAgIGlmICh0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbSkge1xuICAgICAgaWYgKHRoaXMubW9iaWxlRnJpZW5kbHlab29tLmVuZHNXaXRoKCclJykpIHtcbiAgICAgICAgY29uc3Qgem9vbSA9IE51bWJlcih0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbS5zdWJzdHJpbmcoMCwgdGhpcy5tb2JpbGVGcmllbmRseVpvb20ubGVuZ3RoIC0gMSkpO1xuICAgICAgICByZXR1cm4gKDIgKyAwLjI5ICogem9vbSkudG9TdHJpbmcoKSArICdweCc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5tb2JpbGVGcmllbmRseVpvb20uZW5kc1dpdGgoJ3B4JykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9iaWxlRnJpZW5kbHlab29tO1xuICAgICAgfVxuICAgICAgcmV0dXJuICgxNiArIDAuMTYgKiBOdW1iZXIodGhpcy5tb2JpbGVGcmllbmRseVpvb20pKS50b1N0cmluZygpICsgJ3B4JztcbiAgICB9XG4gICAgcmV0dXJuICczMnB4JztcbiAgfVxuICBwdWJsaWMgY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1ByaW1hcnlNZW51VmlzaWJsZSgpKSB7XG4gICAgICB0aGlzLnZpZXdlclBvc2l0aW9uVG9wID0gJzAnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5tb2JpbGVGcmllbmRseVpvb20pIHtcbiAgICAgIGlmICh0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbS5lbmRzV2l0aCgnJScpKSB7XG4gICAgICAgIGNvbnN0IHpvb20gPSBOdW1iZXIodGhpcy5tb2JpbGVGcmllbmRseVpvb20uc3Vic3RyaW5nKDAsIHRoaXMubW9iaWxlRnJpZW5kbHlab29tLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzUHJpbWFyeU1lbnVWaXNpYmxlKCkpIHtcbiAgICAgICAgICB0aGlzLnZpZXdlclBvc2l0aW9uVG9wID0gJzAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSAoMSArIDAuMzIgKiB6b29tKS50b1N0cmluZygpICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5tb2JpbGVGcmllbmRseVpvb20uZW5kc1dpdGgoJ3B4JykpIHtcbiAgICAgICAgdGhpcy52aWV3ZXJQb3NpdGlvblRvcCA9IHRoaXMubW9iaWxlRnJpZW5kbHlab29tO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSAnMzJweCc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZCxcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge31cblxuICBwcml2YXRlIGlPU1ZlcnNpb25SZXF1aXJlc0VTNSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBtYXRjaCA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLm1hdGNoKC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Lyk7XG4gICAgaWYgKG1hdGNoICE9PSB1bmRlZmluZWQgJiYgbWF0Y2ggIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTApIDwgMTM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkVmlld2VyKCk6IHZvaWQge1xuICAgIGlmICghd2luZG93WydwZGZqcy1kaXN0L2J1aWxkL3BkZiddKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFZpZXdlcigpLCAyNSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlzSUUgPSAhISg8YW55PndpbmRvdykuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoPGFueT5kb2N1bWVudCkuZG9jdW1lbnRNb2RlO1xuICAgICAgY29uc3QgaXNFZGdlID0gL0VkZ2VcXC9cXGQuL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIGNvbnN0IGlzSU9zMTJPckJlbG93ID0gdGhpcy5pT1NWZXJzaW9uUmVxdWlyZXNFUzUoKTtcbiAgICAgIGNvbnN0IG5lZWRzRVM1ID0gdHlwZW9mIFJlYWRhYmxlU3RyZWFtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgUHJvbWlzZVsnYWxsU2V0dGxlZCddID09PSAndW5kZWZpbmVkJztcbiAgICAgIGNvbnN0IHN1ZmZpeCA9IHRoaXMubWluaWZpZWRKU0xpYnJhcmllcyA/ICcubWluLmpzJyA6ICcuanMnO1xuICAgICAgY29uc3Qgc2NyaXB0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgY29uc3QgYXNzZXRzID0gcGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyO1xuICAgICAgY29uc3QgdmVyc2lvblN1ZmZpeCA9IGdldFZlcnNpb25TdWZmaXgoYXNzZXRzKTtcblxuICAgICAgaWYgKG5lZWRzRVM1KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2luZyB0aGUgRVM1IHZlcnNpb24gb2YgdGhlIFBERiB2aWV3ZXIuJyk7XG4gICAgICB9XG5cbiAgICAgIHNjcmlwdDIuc3JjID0gdGhpcy5sb2NhdGlvbi5ub3JtYWxpemUoXG4gICAgICAgIGlzSUUgfHwgaXNFZGdlIHx8IGlzSU9zMTJPckJlbG93IHx8IG5lZWRzRVM1XG4gICAgICAgID8gYXNzZXRzICsgJy92aWV3ZXItJyArIHZlcnNpb25TdWZmaXggKyAnLWVzNScgKyBzdWZmaXhcbiAgICAgICAgOiBhc3NldHMgKyAnL3ZpZXdlci0nICsgdmVyc2lvblN1ZmZpeCArIHN1ZmZpeFxuICAgICAgKTtcbiAgICAgIHNjcmlwdDIudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgc2NyaXB0Mi5hc3luYyA9IHRydWU7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdDIpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay5ocmVmID0gdGhpcy5sb2NhbGVGb2xkZXJQYXRoICsgJy9sb2NhbGUucHJvcGVydGllcyc7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ29yaWdpbicsICduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlcicpO1xuICAgIGxpbmsucmVsID0gJ3Jlc291cmNlJztcbiAgICBsaW5rLnR5cGUgPSAnYXBwbGljYXRpb24vbDEwbic7XG4gICAgY29uc3Qgd2lkZ2V0OiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHdpZGdldC5hcHBlbmRDaGlsZChsaW5rKTtcblxuICAgIHRoaXMub25SZXNpemUoKTtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgaWYgKCF3aW5kb3dbJ3BkZmpzLWRpc3QvYnVpbGQvcGRmJ10pIHtcbiAgICAgICAgY29uc3QgaXNJRSA9ICEhKDxhbnk+d2luZG93KS5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhISg8YW55PmRvY3VtZW50KS5kb2N1bWVudE1vZGU7XG4gICAgICAgIGNvbnN0IGlzRWRnZSA9IC9FZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICAgIGNvbnN0IG5lZWRzRVM1ID0gdHlwZW9mIFJlYWRhYmxlU3RyZWFtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgUHJvbWlzZVsnYWxsU2V0dGxlZCddID09PSAndW5kZWZpbmVkJztcbiAgICAgICAgY29uc3QgaXNJT3MxMk9yQmVsb3cgPSB0aGlzLmlPU1ZlcnNpb25SZXF1aXJlc0VTNSgpO1xuICAgICAgICBjb25zdCBzdWZmaXggPSB0aGlzLm1pbmlmaWVkSlNMaWJyYXJpZXMgPyAnLm1pbi5qcycgOiAnLmpzJztcbiAgICAgICAgaWYgKHRoaXMubWluaWZpZWRKU0xpYnJhcmllcykge1xuICAgICAgICAgIGlmICghcGRmRGVmYXVsdE9wdGlvbnMud29ya2VyU3JjKCkuZW5kc1dpdGgoJy5taW4uanMnKSkge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gcGRmRGVmYXVsdE9wdGlvbnMud29ya2VyU3JjKCk7XG4gICAgICAgICAgICBwZGZEZWZhdWx0T3B0aW9ucy53b3JrZXJTcmMgPSAoKSA9PiBzcmMucmVwbGFjZSgnLmpzJywgJy5taW4uanMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhc3NldHMgPSBwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXI7XG4gICAgICAgIGNvbnN0IHZlcnNpb25TdWZmaXggPSBnZXRWZXJzaW9uU3VmZml4KGFzc2V0cyk7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQuc3JjID0gdGhpcy5sb2NhdGlvbi5ub3JtYWxpemUoXG4gICAgICAgICAgaXNJRSB8fCBpc0VkZ2UgfHwgaXNJT3MxMk9yQmVsb3cgfHwgbmVlZHNFUzUgPyBhc3NldHMgKyAnL3BkZi0nICsgdmVyc2lvblN1ZmZpeCArICctZXM1JyArIHN1ZmZpeCA6IGFzc2V0cyArICcvcGRmLScgKyB2ZXJzaW9uU3VmZml4ICsgc3VmZml4XG4gICAgICAgICk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIH1cbiAgICAgIGlmICghKHdpbmRvdyBhcyBhbnkpLndlYlZpZXdlckxvYWQpIHtcbiAgICAgICAgdGhpcy5sb2FkVmlld2VyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcbiAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXG4gICAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLndlYlZpZXdlckxvYWQpIHtcbiAgICAgICAgdGhpcy5kb0luaXRQREZWaWV3ZXIoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ0FmdGVyVmlld0luaXQoKSwgNTApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXNzaWduVGFiaW5kZXhlcygpIHtcbiAgICBpZiAodGhpcy5zdGFydFRhYmluZGV4KSB7XG4gICAgICBjb25zdCByID0gdGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgci5jbGFzc0xpc3QuYWRkKCdvZmZzY3JlZW4nKTtcbiAgICAgIHRoaXMuc2hvd0VsZW1lbnRzUmVjdXJzaXZlbHkocik7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHIpO1xuICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmNvbGxlY3RFbGVtZW50UG9zaXRpb25zKHIsIHRoaXMucm9vdC5uYXRpdmVFbGVtZW50LCBbXSk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHIpO1xuICAgICAgY29uc3Qgc29ydGVkID0gZWxlbWVudHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS55IC0gYi55ID4gMTUpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYi55IC0gYS55ID4gMTUpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGEueCAtIGIueDtcbiAgICAgIH0pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc29ydGVkW2ldLmVsZW1lbnQudGFiSW5kZXggPSB0aGlzLnN0YXJ0VGFiaW5kZXggKyBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvd0VsZW1lbnRzUmVjdXJzaXZlbHkocm9vdDogRWxlbWVudCk6IHZvaWQge1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblhYTFZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblhMVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuTGFyZ2VWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5NZWRpdW1WaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5TbWFsbFZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblRpbnlWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlWFhMVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVhMVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZUxhcmdlVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZU1lZGl1bVZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVTbWFsbFZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVUaW55VmlldycpO1xuXG4gICAgaWYgKHJvb3QgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCB8fCByb290IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgfHwgcm9vdCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgcm9vdCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChyb290LmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290LmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgYyA9IHJvb3QuY2hpbGRyZW4uaXRlbShpKTtcbiAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICB0aGlzLnNob3dFbGVtZW50c1JlY3Vyc2l2ZWx5KGMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb2xsZWN0RWxlbWVudFBvc2l0aW9ucyhjb3B5OiBFbGVtZW50LCBvcmlnaW5hbDogRWxlbWVudCwgZWxlbWVudHM6IEFycmF5PEVsZW1lbnRBbmRQb3NpdGlvbj4pOiBBcnJheTxFbGVtZW50QW5kUG9zaXRpb24+IHtcbiAgICBpZiAoY29weSBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8IGNvcHkgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCB8fCBjb3B5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCBjb3B5IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSBjb3B5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgZWxlbWVudEFuZFBvcyA9IHtcbiAgICAgICAgZWxlbWVudDogb3JpZ2luYWwsXG4gICAgICAgIHg6IE1hdGgucm91bmQocmVjdC5sZWZ0KSxcbiAgICAgICAgeTogTWF0aC5yb3VuZChyZWN0LnRvcCksXG4gICAgICB9IGFzIEVsZW1lbnRBbmRQb3NpdGlvbjtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudEFuZFBvcyk7XG4gICAgfSBlbHNlIGlmIChjb3B5LmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3B5LmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgYyA9IGNvcHkuY2hpbGRyZW4uaXRlbShpKTtcbiAgICAgICAgY29uc3QgbyA9IG9yaWdpbmFsLmNoaWxkcmVuLml0ZW0oaSk7XG4gICAgICAgIGlmIChjICYmIG8pIHtcbiAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuY29sbGVjdEVsZW1lbnRQb3NpdGlvbnMoYywgbywgZWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfVxuXG4gIHByaXZhdGUgZG9Jbml0UERGVmlld2VyKCkge1xuICAgIGNvbnN0IGxhbmdMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbdHlwZT1cImFwcGxpY2F0aW9uL2wxMG5cIl0nKTtcbiAgICBjb25zdCBsYW5nQ291bnQgPSBsYW5nTGlua3MubGVuZ3RoO1xuXG4gICAgaWYgKGxhbmdDb3VudCA9PT0gMCkge1xuICAgICAgY29uc3QgZGljdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24vbDEwblwiXScpO1xuICAgICAgaWYgKCFkaWN0KSB7XG4gICAgICAgIGlmICghdGhpcy51c2VCcm93c2VyTG9jYWxlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcbiAgICAgICAgICAgIFwiSWYgeW91IHNldCB0aGUgYXR0cmlidXRlICd1c2VCcm93c2VyTG9jYWxlJyB0byBmYWxzZSwgeW91IG11c3QgcHJvdmlkZSB0aGUgdHJhbnNsYXRpb25zIHlvdXJzZWxmIGluIGEgc2NyaXB0IG9yIGxpbmsgdGFnLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgZWFzaWVzdCB3YXkgdG8gZG8gdGhpcyBpcyB0byBhZGQgdGhlbSB0byB0aGUgaW5kZXguaHRtbC4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnVzZUJyb3dzZXJMb2NhbGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXG4gICAgICAgICAgXCJQbGVhc2Ugc2V0IHRoZSBhdHRyaWJ1dGUgJ3VzZUJyb3dzZXJMb2NhbGUnIHRvIGZhbHNlIGlmIHlvdSBwcm92aWRlIHRoZSB0cmFuc2xhdGlvbnMgeW91cnNlbGYgaW4gYSBzY3JpcHQgb3IgbGluayB0YWcuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudXNlQnJvd3NlckxvY2FsZSkge1xuICAgICAgY29uc3QgbyA9IGxhbmdMaW5rc1swXS5hdHRyaWJ1dGVzWydvcmlnaW4nXTtcbiAgICAgIGlmIChvICYmIG8udmFsdWUgIT09ICduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlcicpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXG4gICAgICAgICAgXCJQbGVhc2Ugc2V0IHRoZSBhdHRyaWJ1dGUgJ3VzZUJyb3dzZXJMb2NhbGUnIHRvIGZhbHNlIGlmIHlvdSBwcm92aWRlIHRoZSB0cmFuc2xhdGlvbnMgeW91cnNlbGYgaW4gYSBzY3JpcHQgb3IgbGluayB0YWcuXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY2FsbGJhY2sgPSAoZSkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9jYWxpemVkJywgY2FsbGJhY2spO1xuICAgICAgdGhpcy5pbml0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XG4gICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcbiAgICAgICAgICB0aGlzLmFmdGVyTGlicmFyeUluaXQoKTtcbiAgICAgICAgICB0aGlzLm9wZW5QREYoKTtcbiAgICAgICAgICB0aGlzLmFzc2lnblRhYmluZGV4ZXMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5kZWxheUZpcnN0Vmlldyk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdhZnRlcnByaW50JywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmFmdGVyUHJpbnQuZW1pdCgpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXByaW50JywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmJlZm9yZVByaW50LmVtaXQoKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvY2FsaXplZCcsIGNhbGxiYWNrKTtcblxuICAgIGlmIChOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXG4gICAgICBjb25zb2xlLmVycm9yKFwiWW91J3JlIHRyeWluZyB0byBvcGVuIHR3byBpbnN0YW5jZXMgb2YgdGhlIFBERiB2aWV3ZXIuIE1vc3QgbGlrZWx5LCB0aGlzIHdpbGwgcmVzdWx0IGluIGVycm9ycy5cIik7XG4gICAgfVxuICAgIGNvbnN0IG9uTG9hZGVkID0gKCkgPT4ge1xuICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Vidmlld2VybG9hZGVkJywgb25Mb2FkZWQpO1xuICAgICAgaWYgKHRoaXMuZW5hYmxlUGluY2hPbk1vYmlsZSkge1xuICAgICAgICB0aGlzLnBpbmNoT25Nb2JpbGVTdXBwb3J0ID0gbmV3IFBpbmNoT25Nb2JpbGVTdXBwb3J0KHRoaXMubmdab25lKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYnZpZXdlcmxvYWRlZCcsIG9uTG9hZGVkKTtcblxuICAgIHRoaXMuYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShudWxsKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xuICAgICAgICAvLyBodXJyaWVkIHVzZXJzIHNvbWV0aW1lcyByZWxvYWQgdGhlIFBERiBiZWZvcmUgaXQgaGFzIGZpbmlzaGVkIGluaXRpYWxpemluZ1xuICAgICAgICAvLyBUaGlzIGluaXRpYWxpemVzIHRoZSB3ZWJ2aWV3ZXIsIHRoZSBmaWxlIG1heSBiZSBwYXNzZWQgaW4gdG8gaXQgdG8gaW5pdGlhbGl6ZSB0aGUgdmlld2VyIHdpdGggYSBwZGYgZGlyZWN0bHlcbiAgICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSB0aGlzLnNob3dUb29sYmFyO1xuICAgICAgICBjb25zdCBoaWRlU2Vjb25kYXJ5TWVudSA9IHRoaXMuaGlkZUtlYmFiTWVudUZvclNlY29uZGFyeVRvb2xiYXIgJiYgIXRoaXMuc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b247XG5cbiAgICAgICAgaWYgKGhpZGVTZWNvbmRhcnlNZW51KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzUHJpbWFyeU1lbnVWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCk7XG4gICAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzLmFkZE1pc3NpbmdTdGFuZGFyZFdpZGdldHMoKTtcbiAgICAgICAgKDxhbnk+d2luZG93KS53ZWJWaWV3ZXJMb2FkKCk7XG5cbiAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmRlZmF1bHRVcmwgPSAnJzsgLy8gSUUgYnVnZml4XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5maWxlbmFtZUZvckRvd25sb2FkID0gdGhpcy5maWxlbmFtZUZvckRvd25sb2FkO1xuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2xvY2FsZScsIHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdpbWFnZVJlc291cmNlc1BhdGgnLCB0aGlzLmltYWdlUmVzb3VyY2VzUGF0aCk7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21pblpvb20nLCB0aGlzLm1pblpvb20pO1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdtYXhab29tJywgdGhpcy5tYXhab29tKTtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgncGFnZVZpZXdNb2RlJywgdGhpcy5wYWdlVmlld01vZGUpO1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCd2ZXJib3NpdHknLCB0aGlzLmxvZ0xldmVsKTtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnaW5pdGlhbFpvb20nLCB0aGlzLnpvb20pO1xuXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmlzVmlld2VyRW1iZWRkZWQgPSB0cnVlO1xuICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIpIHtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW50Q29udGFpbmVyJyk7XG4gICAgICAgIGlmIChwYykge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uYXBwZW5kQ2hpbGQocGMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICAvKiogTm90aWZpZXMgZXZlcnkgd2lkZ2V0IHRoYXQgaW1wbGVtZW50cyBvbkxpYnJhcnlJbml0KCkgdGhhdCB0aGUgUERGIHZpZXdlciBvYmplY3RzIGFyZSBhdmFpbGFibGUgKi9cbiAgcHJpdmF0ZSBhZnRlckxpYnJhcnlJbml0KCkge1xuICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5uZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tIZWlnaHQoKTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnem9vbScpWzBdO1xuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgIGlmIChjb250YWluZXIuY2xpZW50SGVpZ2h0ID09PSAwICYmIHRoaXMuX2hlaWdodC5pbmNsdWRlcygnJScpKSB7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY29uc3QgcmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgdG9wID0gcmVjdC50b3A7XG4gICAgICAgIGxldCBtaCA9IGF2YWlsYWJsZSAtIHRvcDtcbiAgICAgICAgY29uc3QgZmFjdG9yID0gTnVtYmVyKHRoaXMuX2hlaWdodC5yZXBsYWNlKCclJywgJycpKTtcbiAgICAgICAgbWggPSAobWggKiBmYWN0b3IpIC8gMTAwO1xuICAgICAgICBpZiAobWggPiAxMDApIHtcbiAgICAgICAgICB0aGlzLm1pbkhlaWdodCA9IG1oICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1pbkhlaWdodCA9ICcxMDBweCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25TcHJlYWRDaGFuZ2UobmV3U3ByZWFkOiAnb2ZmJyB8ICdldmVuJyB8ICdvZGQnKTogdm9pZCB7XG4gICAgdGhpcy5zcHJlYWRDaGFuZ2UuZW1pdChuZXdTcHJlYWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhY3RpdmF0ZVRleHRsYXllcklmTmVjZXNzYXJ5KG9wdGlvbnM6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRleHRMYXllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoIXRoaXMuaGFuZFRvb2wpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zLnNldCgndGV4dExheWVyTW9kZScsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dExheWVyID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gdG9kbyByZW1vdmUgdGhpcyBoYWNrOlxuICAgICAgICAgICAgY29uc3Qgdmlld0ZpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld0ZpbmQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmICh2aWV3RmluZCkge1xuICAgICAgICAgICAgICB2aWV3RmluZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZpbmRiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZGJhcicpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYgKGZpbmRiYXIpIHtcbiAgICAgICAgICAgICAgZmluZGJhci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zLnNldCgndGV4dExheWVyTW9kZScsIHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uID8gMSA6IDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zaG93SGFuZFRvb2xCdXR0b24pIHtcbiAgICAgICAgICBpZiAodGhpcy5zaG93RmluZEJ1dHRvbiB8fCB0aGlzLnNob3dGaW5kQnV0dG9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPj0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICAgICAgICAnSGlkaW5nIHRoZSBcImZpbmRcIiBidXR0b24gYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSBmaW5kIGJ1dHRvbi4nXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbikge1xuICAgICAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPj0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICAgICAgICAnSGlkaW5nIHRoZSBcImhhbmQgdG9vbCAvIHNlbGVjdGlvbiBtb2RlXCIgbWVudSBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIHRoZSBtZW51IGl0ZW1zLidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMudGV4dExheWVyKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHRMYXllciA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIHRvZG8gcmVtb3ZlIHRoaXMgaGFjazpcbiAgICAgICAgICAgIGNvbnN0IHZpZXdGaW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdGaW5kJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodmlld0ZpbmQpIHtcbiAgICAgICAgICAgICAgdmlld0ZpbmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmaW5kYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRiYXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmIChmaW5kYmFyKSB7XG4gICAgICAgICAgICAgIGZpbmRiYXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHRMYXllciA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5zaG93RmluZEJ1dHRvbikge1xuICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0hpZGluZyB0aGUgXCJmaW5kXCIgYnV0dG9uIGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgZmluZCBidXR0b24uJyk7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uKSB7XG4gICAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPj0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgICAnSGlkaW5nIHRoZSBcImhhbmQgdG9vbCAvIHNlbGVjdGlvbiBtb2RlXCIgbWVudSBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIHRoZSBtZW51IGl0ZW1zLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgYXMgSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwZGZEZWZhdWx0T3B0aW9ucykge1xuICAgICAgb3B0aW9ucy5zZXQoa2V5LCBwZGZEZWZhdWx0T3B0aW9uc1trZXldKTtcbiAgICB9XG4gICAgb3B0aW9ucy5zZXQoJ2Rpc2FibGVQcmVmZXJlbmNlcycsIHRydWUpO1xuICAgIHRoaXMuc2V0Wm9vbSgpO1xuXG4gICAgb3B0aW9ucy5zZXQoJ2lnbm9yZUtleWJvYXJkJywgdGhpcy5pZ25vcmVLZXlib2FyZCk7XG4gICAgb3B0aW9ucy5zZXQoJ2lnbm9yZUtleXMnLCB0aGlzLmlnbm9yZUtleXMpO1xuICAgIG9wdGlvbnMuc2V0KCdhY2NlcHRLZXlzJywgdGhpcy5hY2NlcHRLZXlzKTtcbiAgICB0aGlzLmFjdGl2YXRlVGV4dGxheWVySWZOZWNlc3Nhcnkob3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5zY3JvbGxNb2RlKSB7XG4gICAgICBvcHRpb25zLnNldCgnc2Nyb2xsTW9kZU9uTG9hZCcsIHRoaXMuc2Nyb2xsTW9kZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2lkZWJhclZpc2libGUgPSB0aGlzLnNpZGViYXJWaXNpYmxlO1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG5cbiAgICBpZiAoc2lkZWJhclZpc2libGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc2lkZWJhclZpZXdPbkxvYWQgPSBzaWRlYmFyVmlzaWJsZSA/IDEgOiAwO1xuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZykge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcuc2lkZWJhclZpZXdPbkxvYWQgPSBzaWRlYmFyVmlzaWJsZSA/IDEgOiAwO1xuICAgICAgfVxuICAgICAgb3B0aW9ucy5zZXQoJ3NpZGViYXJWaWV3T25Mb2FkJywgdGhpcy5zaWRlYmFyVmlzaWJsZSA/IDEgOiAwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3ByZWFkID09PSAnZXZlbicpIHtcbiAgICAgIG9wdGlvbnMuc2V0KCdzcHJlYWRNb2RlT25Mb2FkJywgMik7XG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMjtcbiAgICAgIH1cbiAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ2V2ZW4nKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3ByZWFkID09PSAnb2RkJykge1xuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAxKTtcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2RkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMuc2V0KCdzcHJlYWRNb2RlT25Mb2FkJywgMCk7XG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29mZicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcmludFJlc29sdXRpb24pIHtcbiAgICAgIG9wdGlvbnMuc2V0KCdwcmludFJlc29sdXRpb24nLCB0aGlzLnByaW50UmVzb2x1dGlvbik7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3dCb3JkZXJzID09PSBmYWxzZSkge1xuICAgICAgb3B0aW9ucy5zZXQoJ3JlbW92ZVBhZ2VCb3JkZXJzJywgIXRoaXMuc2hvd0JvcmRlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3BlblBERigpIHtcbiAgICBTZXJ2aWNlV29ya2VyT3B0aW9ucy5zaG93VW52ZXJpZmllZFNpZ25hdHVyZXMgPSB0aGlzLnNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcztcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmVuYWJsZVByaW50ID0gdGhpcy5lbmFibGVQcmludDtcbiAgICBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgaWYgKCF0aGlzLmxpc3RlblRvVVJMKSB7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZMaW5rU2VydmljZS5zZXRIYXNoID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuICAgIHRoaXMuaW5pdFRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0Q3Vyc29yVG9vbCgpO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3RleHRsYXllcnJlbmRlcmVkJywgKHg6IFRleHRMYXllclJlbmRlcmVkRXZlbnQpID0+IHtcbiAgICAgIHRoaXMudGV4dExheWVyUmVuZGVyZWQuZW1pdCh4KTtcbiAgICB9KTtcblxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzY3JvbGxtb2RlY2hhbmdlZCcsICh4OiBTY3JvbGxNb2RlQ2hhbmdlZEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnNjcm9sbE1vZGVDaGFuZ2UuZW1pdCh4Lm1vZGUpO1xuICAgIH0pO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VzbG9hZGVkJywgKHg6IFBhZ2VzTG9hZGVkRXZlbnQpID0+IHtcbiAgICAgIHRoaXMucGFnZXNMb2FkZWQuZW1pdCh4KTtcbiAgICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSA9PT0gJ2luZmluaXRlLXNjcm9sbCcpIHtcbiAgICAgICAgY29uc3QgaCA9IHguc291cmNlLnZpZXdlci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGlmICh0aGlzLnByaW1hcnlNZW51VmlzaWJsZSkge1xuICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaCArIDM1ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IGggKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yb3RhdGlvbikge1xuICAgICAgICBjb25zdCByID0gTnVtYmVyKHRoaXMucm90YXRpb24pO1xuICAgICAgICBpZiAociA9PT0gMCB8fCByID09PSA5MCB8fCByID09PSAxODAgfHwgciA9PT0gMjcwKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VzUm90YXRpb24gPSByO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IDA7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xuICAgICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXG4gICAgICAgICAgaWYgKHRoaXMubmFtZWRkZXN0KSB7XG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZMaW5rU2VydmljZS5uYXZpZ2F0ZVRvKHRoaXMubmFtZWRkZXN0KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZSkge1xuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSA9IE51bWJlcih0aGlzLnBhZ2UpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlTGFiZWwpIHtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsID0gdGhpcy5wYWdlTGFiZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0Wm9vbSgpO1xuICAgIH0pO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlcmVuZGVyZWQnLCAoeDogUGFnZVJlbmRlcmVkRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMucGFnZVJlbmRlcmVkLmVtaXQoeCk7XG4gICAgICAgIHRoaXMuZmlsbEZvcm1GaWVsZHModGhpcy5mb3JtRGF0YSk7XG4gICAgICAgIHRoaXMuYWRkRm9ybUZpZWxkTGlzdGVuZXJzKHRoaXMuZm9ybURhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2Rvd25sb2FkJywgKHg6IFBkZkRvd25sb2FkZWRFdmVudCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5wZGZEb3dubG9hZGVkLmVtaXQoeCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignc2NhbGVjaGFuZ2luZycsICh4OiBTY2FsZUNoYW5naW5nRXZlbnQpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY3VycmVudFpvb21GYWN0b3IuZW1pdCh4LnNjYWxlKTtcbiAgICAgICAgICBjb25zdCBzY2FsZSA9ICh0aGlzLnJvb3QubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcignI3NjYWxlU2VsZWN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnQgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgbGV0IHVzZXJab29tRmFjdG9yID0gdGhpcy56b29tO1xuICAgICAgICAgIGlmIChzY2FsZSkge1xuICAgICAgICAgICAgdXNlclpvb21GYWN0b3IgPSBzY2FsZS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHVzZXJab29tRmFjdG9yICE9PSAnYXV0bycgJiYgdXNlclpvb21GYWN0b3IgIT09ICdwYWdlLWZpdCcgJiYgdXNlclpvb21GYWN0b3IgIT09ICdwYWdlLWFjdHVhbCcgJiYgdXNlclpvb21GYWN0b3IgIT09ICdwYWdlLXdpZHRoJykge1xuICAgICAgICAgICAgdGhpcy56b29tQ2hhbmdlLmVtaXQoeC5zY2FsZSAqIDEwMCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnpvb20gIT09IHVzZXJab29tRmFjdG9yKSB7XG4gICAgICAgICAgICAvLyBjYWxsZWQgd2hlbiB0aGUgdXNlciBzZWxlY3RzIG9uZSBvZiB0aGUgdGV4dCB2YWx1ZXMgb2YgdGhlIHpvb20gc2VsZWN0IGRyb3Bkb3duXG4gICAgICAgICAgICB0aGlzLnpvb21DaGFuZ2UuZW1pdCh1c2VyWm9vbUZhY3Rvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3JvdGF0aW9uY2hhbmdpbmcnLCAoeDogUGFnZXNSb3RhdGlvbkV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnJvdGF0aW9uQ2hhbmdlLmVtaXQoeC5wYWdlc1JvdGF0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdmaWxlaW5wdXRjaGFuZ2UnLCAoeDogRmlsZUlucHV0Q2hhbmdlZCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHguZmlsZUlucHV0LnZhbHVlLnJlcGxhY2UoJ0M6XFxcXGZha2VwYXRoXFxcXCcsICcnKTtcbiAgICAgICAgdGhpcy5zcmNDaGFuZ2UuZW1pdChwYXRoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdjdXJzb3J0b29sY2hhbmdlZCcsICh4OiBIYW5kdG9vbENoYW5nZWQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZFRvb2xDaGFuZ2UuZW1pdCh4LnRvb2wgPT09IFBkZkN1cnNvclRvb2xzLkhBTkQpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignc2lkZWJhcnZpZXdjaGFuZ2VkJywgKHg6IFNpZGViYXJ2aWV3Q2hhbmdlKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNpZGViYXJWaXNpYmxlQ2hhbmdlLmVtaXQoeC52aWV3ID4gMCk7XG4gICAgICAgIGlmICh0aGlzLnNpZGViYXJDb21wb25lbnQpIHtcbiAgICAgICAgICB0aGlzLnNpZGViYXJDb21wb25lbnQuc2hvd1Rvb2xiYXJXaGVuTmVjZXNzYXJ5KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2RvY3VtZW50bG9hZGVkJywgKHBkZkxvYWRlZEV2ZW50OiBQZGZEb2N1bWVudExvYWRlZEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRDb21wbGV0ZShwZGZMb2FkZWRFdmVudC5zb3VyY2UucGRmRG9jdW1lbnQpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoaWRlU2lkZWJhclRvb2xiYXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zaWRlYmFyQ29tcG9uZW50KSB7XG4gICAgICAgICAgdGhpcy5zaWRlYmFyQ29tcG9uZW50LnNob3dUb29sYmFyV2hlbk5lY2Vzc2FyeSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ291dGxpbmVsb2FkZWQnLCBoaWRlU2lkZWJhclRvb2xiYXIpO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2F0dGFjaG1lbnRzbG9hZGVkJywgaGlkZVNpZGViYXJUb29sYmFyKTtcblxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdsYXllcnNsb2FkZWQnLCBoaWRlU2lkZWJhclRvb2xiYXIpO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZWZpbmRjb250cm9sc3RhdGUnLCAoeDogRmluZFJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHRoaXMudXBkYXRlRmluZE1hdGNoZXNDb3VudCkge1xuICAgICAgICBpZiAoeC5zdGF0ZSA9PT0gRmluZFN0YXRlLk5PVF9GT1VORCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlRmluZE1hdGNoZXNDb3VudC5lbWl0KHsgY3VycmVudDogMCwgdG90YWw6IDAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoeC5tYXRjaGVzQ291bnQudG90YWwpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmRNYXRjaGVzQ291bnQuZW1pdCh4Lm1hdGNoZXNDb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudXBkYXRlRmluZFN0YXRlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmluZFN0YXRlLmVtaXQoeC5zdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZWZpbmRtYXRjaGVzY291bnQnLCAoeDogRmluZFJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHRoaXMudXBkYXRlRmluZE1hdGNoZXNDb3VudCkge1xuICAgICAgICBpZiAoeC5tYXRjaGVzQ291bnQudG90YWwpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmRNYXRjaGVzQ291bnQuZW1pdCh4Lm1hdGNoZXNDb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlY2hhbmdpbmcnLCAoeDogUGFnZU51bWJlckNoYW5nZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xuICAgICAgICAvLyBodXJyaWVkIHVzZXJzIHNvbWV0aW1lcyByZWxvYWQgdGhlIFBERiBiZWZvcmUgaXQgaGFzIGZpbmlzaGVkIGluaXRpYWxpemluZ1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlTGFiZWwgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VMYWJlbDtcblxuICAgICAgICAgIGlmIChjdXJyZW50UGFnZSAhPT0gdGhpcy5wYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChjdXJyZW50UGFnZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjdXJyZW50UGFnZUxhYmVsICE9PSB0aGlzLnBhZ2VMYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5wYWdlTGFiZWxDaGFuZ2UuZW1pdChjdXJyZW50UGFnZUxhYmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jaGVja0hlaWdodCgpO1xuICAgIC8vIG9wZW4gYSBmaWxlIGluIHRoZSB2aWV3ZXJcbiAgICBpZiAoISF0aGlzLl9zcmMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgIHZlcmJvc2l0eTogdGhpcy5sb2dMZXZlbCxcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5fc3JjWydyYW5nZSddKSB7XG4gICAgICAgIG9wdGlvbnMucmFuZ2UgPSB0aGlzLl9zcmNbJ3JhbmdlJ107XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5odHRwSGVhZGVycykge1xuICAgICAgICBvcHRpb25zLmh0dHBIZWFkZXJzID0gdGhpcy5odHRwSGVhZGVycztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmF1dGhvcml6YXRpb24pIHtcbiAgICAgICAgb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICBpZiAob3B0aW9ucy5odHRwSGVhZGVycykge1xuICAgICAgICAgIGlmICghb3B0aW9ucy5odHRwSGVhZGVycy5BdXRob3JpemF0aW9uKSB7XG4gICAgICAgICAgICBvcHRpb25zLmh0dHBIZWFkZXJzLkF1dGhvcml6YXRpb24gPSB0aGlzLmF1dGhvcml6YXRpb247XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMgPSB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0aGlzLmF1dGhvcml6YXRpb24sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ub25FcnJvciA9IChlcnJvcjogRXJyb3IpID0+IHRoaXMucGRmTG9hZGluZ0ZhaWxlZC5lbWl0KGVycm9yKTtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLm9wZW4odGhpcy5fc3JjLCBvcHRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5wZGZMb2FkZWQuZW1pdCh7IHBhZ2VzQ291bnQ6IFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2VzQ291bnQgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XG4gICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXG4gICAgICAgIGlmICh0aGlzLnBhZ2UpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlID0gTnVtYmVyKHRoaXMucGFnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG5cbiAgcHVibGljIG9wZW5QREYyKCk6IHZvaWQge1xuICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgdmVyYm9zaXR5OiB0aGlzLmxvZ0xldmVsLFxuICAgIH07XG4gICAgaWYgKHRoaXMuX3NyY1sncmFuZ2UnXSkge1xuICAgICAgb3B0aW9ucy5yYW5nZSA9IHRoaXMuX3NyY1sncmFuZ2UnXTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaHR0cEhlYWRlcnMpIHtcbiAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMgPSB0aGlzLmh0dHBIZWFkZXJzO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdXRob3JpemF0aW9uKSB7XG4gICAgICBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICBpZiAob3B0aW9ucy5odHRwSGVhZGVycykge1xuICAgICAgICBpZiAoIW9wdGlvbnMuaHR0cEhlYWRlcnMuQXV0aG9yaXphdGlvbikge1xuICAgICAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRoaXMuYXV0aG9yaXphdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9ucy5odHRwSGVhZGVycyA9IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiB0aGlzLmF1dGhvcml6YXRpb24sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLm9wZW4odGhpcy5fc3JjLCBvcHRpb25zKS50aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnBkZkxvYWRlZC5lbWl0KHsgcGFnZXNDb3VudDogUERGVmlld2VyQXBwbGljYXRpb24ucGFnZXNDb3VudCB9KTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3I6IEVycm9yKSA9PiB0aGlzLnBkZkxvYWRpbmdGYWlsZWQuZW1pdChlcnJvcilcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RDdXJzb3JUb29sKCkge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaGN1cnNvcnRvb2wnLCB7IHRvb2w6IHRoaXMuaGFuZFRvb2wgPyAxIDogMCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIHRoaXMuc2h1dHRpbmdEb3duID0gdHJ1ZTtcblxuICAgIE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pbml0VGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaW5pdFRpbWVvdXQpO1xuICAgICAgdGhpcy5pbml0VGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uKSB7XG4gICAgICBpZiAodGhpcy5waW5jaE9uTW9iaWxlU3VwcG9ydCkge1xuICAgICAgICB0aGlzLnBpbmNoT25Nb2JpbGVTdXBwb3J0LmRlc3Ryb3lQaW5jaFpvb20oKTtcbiAgICAgICAgdGhpcy5waW5jaE9uTW9iaWxlU3VwcG9ydCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uY2xlYW51cCgpO1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uY2xvc2UoKTtcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wcmludEtleURvd25MaXN0ZW5lcikge1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLl9ib3VuZEV2ZW50cykge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi51bmJpbmRXaW5kb3dFdmVudHMoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJ1cyA9IFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzO1xuICAgICAgaWYgKGJ1cykge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gYnVzLl9saXN0ZW5lcnMpIHtcbiAgICAgICAgICBpZiAoYnVzLl9saXN0ZW5lcnNba2V5XSkge1xuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGJ1cy5fbGlzdGVuZXJzW2tleV07XG4gICAgICAgICAgICAvLyBub3Qgc3VyZSBpZiB0aGUgZm9yIGxvb3AgaXMgbmVjZXNzYXJ5IC0gYnV0XG4gICAgICAgICAgICAvLyBpdCBtaWdodCBpbXByb3ZlIGdhcmJhZ2UgY29sbGVjdGlvbiBpZiB0aGUgXCJsaXN0ZW5lcnNcIlxuICAgICAgICAgICAgLy8gYXJyYXkgaXMgc3RvcmVkIHNvbWV3aGVyZSBlbHNlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgbGlzdFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1cy5fbGlzdGVuZXJzW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAoUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMgYXMgYW55KSA9IG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XG4gICAgaWYgKGJvZHlbMF0pIHtcbiAgICAgIGNvbnN0IHRvcExldmVsRWxlbWVudHMgPSBib2R5WzBdLmNoaWxkcmVuO1xuICAgICAgZm9yIChsZXQgaSA9IHRvcExldmVsRWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgZSA9IHRvcExldmVsRWxlbWVudHMuaXRlbShpKTtcbiAgICAgICAgaWYgKGUgJiYgZS5pZCA9PT0gJ3ByaW50Q29udGFpbmVyJykge1xuICAgICAgICAgIGJvZHlbMF0ucmVtb3ZlQ2hpbGQoZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZSAmJiBlLmlkID09PSAnZmlsZUlucHV0Jykge1xuICAgICAgICAgIGJvZHlbMF0ucmVtb3ZlQ2hpbGQoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzUHJpbWFyeU1lbnVWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnNob3dUb29sYmFyKSB7XG4gICAgICBjb25zdCB2aXNpYmxlID1cbiAgICAgICAgdGhpcy5zaG93Qm9va21hcmtCdXR0b24gfHxcbiAgICAgICAgdGhpcy5zaG93RG93bmxvYWRCdXR0b24gfHxcbiAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dPcGVuRmlsZUJ1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dQYWdpbmdCdXR0b25zIHx8XG4gICAgICAgIHRoaXMuc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b24gfHxcbiAgICAgICAgdGhpcy5zaG93UHJpbnRCdXR0b24gfHxcbiAgICAgICAgdGhpcy5zaG93UHJvcGVydGllc0J1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dSb3RhdGVCdXR0b24gfHxcbiAgICAgICAgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gfHxcbiAgICAgICAgdGhpcy5zaG93U2Nyb2xsaW5nQnV0dG9uIHx8XG4gICAgICAgIHRoaXMuc2hvd1NpZGViYXJCdXR0b24gfHxcbiAgICAgICAgdGhpcy5zaG93Wm9vbUJ1dHRvbnM7XG5cbiAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcblxuICAgIGlmIChOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XG4gICAgICBpZiAoJ3NyYycgaW4gY2hhbmdlcyB8fCAnYmFzZTY0U3JjJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICghIXRoaXMuX3NyYykge1xuICAgICAgICAgIHRoaXMub3BlblBERjIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoJ3pvb20nIGluIGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5zZXRab29tKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgnbWF4Wm9vbScgaW4gY2hhbmdlcykge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdtYXhab29tJywgdGhpcy5tYXhab29tKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdtaW5ab29tJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21pblpvb20nLCB0aGlzLm1pblpvb20pO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ2hhbmRUb29sJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Q3Vyc29yVG9vbCgpO1xuICAgICAgfVxuICAgICAgaWYgKCdwYWdlJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2UpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHRyaXBsZS1lcXVhbHNcbiAgICAgICAgICBpZiAodGhpcy5wYWdlICE9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2UpIHtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2UgPSB0aGlzLnBhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoJ3BhZ2VMYWJlbCcgaW4gY2hhbmdlcykge1xuICAgICAgICBpZiAodGhpcy5wYWdlTGFiZWwpIHtcbiAgICAgICAgICBpZiAodGhpcy5wYWdlTGFiZWwgIT09IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsKSB7XG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VMYWJlbCA9IHRoaXMucGFnZUxhYmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3JvdGF0aW9uJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW9uKSB7XG4gICAgICAgICAgY29uc3QgciA9IE51bWJlcih0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICBpZiAociA9PT0gMCB8fCByID09PSA5MCB8fCByID09PSAxODAgfHwgciA9PT0gMjcwKSB7XG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IHI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCdzY3JvbGxNb2RlJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbE1vZGUpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc2Nyb2xsTW9kZSA9IE51bWJlcih0aGlzLnNjcm9sbE1vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoJ3NpZGViYXJWaXNpYmxlJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnNpZGViYXJWaXNpYmxlKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmU2lkZWJhci5vcGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmU2lkZWJhci5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoJ2ZpbGVuYW1lRm9yRG93bmxvYWQnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmZpbGVuYW1lRm9yRG93bmxvYWQgPSB0aGlzLmZpbGVuYW1lRm9yRG93bmxvYWQ7XG4gICAgICB9XG4gICAgICBpZiAoJ25hbWVkZGVzdCcgaW4gY2hhbmdlcykge1xuICAgICAgICBpZiAodGhpcy5uYW1lZGRlc3QpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZMaW5rU2VydmljZS5uYXZpZ2F0ZVRvKHRoaXMubmFtZWRkZXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3NwcmVhZCcgaW4gY2hhbmdlcykge1xuICAgICAgICBpZiAodGhpcy5zcHJlYWQgPT09ICdldmVuJykge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAyO1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMjtcbiAgICAgICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdldmVuJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcHJlYWQgPT09ICdvZGQnKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc3ByZWFkTW9kZU9uTG9hZCA9IDE7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAxO1xuICAgICAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29kZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAwO1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMDtcbiAgICAgICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdvZmYnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJ2VuYWJsZVBpbmNoT25Nb2JpbGUnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCFjaGFuZ2VzWydlbmFibGVQaW5jaE9uTW9iaWxlJ10uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZXNbJ2VuYWJsZVBpbmNoT25Nb2JpbGUnXS5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXNbJ2VuYWJsZVBpbmNoT25Nb2JpbGUnXS5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVQaW5jaE9uTW9iaWxlKSB7XG4gICAgICAgICAgICAgIHRoaXMucGluY2hPbk1vYmlsZVN1cHBvcnQgPSBuZXcgUGluY2hPbk1vYmlsZVN1cHBvcnQodGhpcy5uZ1pvbmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGluY2hPbk1vYmlsZVN1cHBvcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpbmNoT25Nb2JpbGVTdXBwb3J0LmRlc3Ryb3lQaW5jaFpvb20oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBpbmNoT25Nb2JpbGVTdXBwb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlID0gdGhpcy5zaG93VG9vbGJhcjtcbiAgICAgIGlmICghdGhpcy5zaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB8fCB0aGlzLmhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ByaW1hcnlNZW51VmlzaWJsZSgpKSB7XG4gICAgICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jYWxjVmlld2VyUG9zaXRpb25Ub3AoKTtcbiAgICB9IC8vIGVuZCBvZiBpZiAoTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZClcbiAgICB0aGlzLm9uUmVzaXplKCk7XG5cbiAgICBpZiAoJ3ByaW50UmVzb2x1dGlvbicgaW4gY2hhbmdlcykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMuc2V0KCdwcmludFJlc29sdXRpb24nLCB0aGlzLnByaW50UmVzb2x1dGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgnaWdub3JlS2V5Ym9hcmQnIGluIGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgnaWdub3JlS2V5cycgaW4gY2hhbmdlcykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCdhY2NlcHRLZXlzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoJ3Nob3dCb3JkZXJzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoIWNoYW5nZXNbJ3Nob3dCb3JkZXJzJ10uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgICAgIGNvbnN0IHZpZXdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3ZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICBpZiAodGhpcy5zaG93Qm9yZGVycykge1xuICAgICAgICAgICAgdmlld2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZVBhZ2VCb3JkZXJzJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdlci5jbGFzc0xpc3QuYWRkKCdyZW1vdmVQYWdlQm9yZGVycycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyA9ICF0aGlzLnNob3dCb3JkZXJzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB6b29tRXZlbnQgPSB7XG4gICAgICAgICAgICBzb3VyY2U6IHZpZXdlcixcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICBzY2FsZTogKE51bWJlcih0aGlzLnpvb20pIHwgMTAwKSAvIDEwMCxcbiAgICAgICAgICAgIHByZXNldFZhbHVlOiB0aGlzLnpvb20sXG4gICAgICAgICAgfSBhcyBTY2FsZUNoYW5naW5nRXZlbnQ7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3NjYWxlY2hhbmdpbmcnLCB6b29tRXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgnc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbiAmJiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudCkge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50Ll90cmFuc3BvcnQubWVzc2FnZUhhbmRsZXIuc2VuZCgnc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzJywgdGhpcy5zaG93VW52ZXJpZmllZFNpZ25hdHVyZXMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgnZm9ybURhdGEnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgY29uc3QgbmV3Rm9ybURhdGEgPSB0aGlzLmFkZE1pc3NpbmdGb3JtRmllbGRzKGNoYW5nZXNbJ2Zvcm1EYXRhJ10uY3VycmVudFZhbHVlKTtcbiAgICAgICAgaWYgKCF0aGlzLmVxdWFscyhuZXdGb3JtRGF0YSwgY2hhbmdlc1snZm9ybURhdGEnXS5wcmV2aW91c1ZhbHVlKSkge1xuICAgICAgICAgIHRoaXMuZmlsbEZvcm1GaWVsZHModGhpcy5mb3JtRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJ2VuYWJsZVByaW50JyBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoIWNoYW5nZXNbJ2VuYWJsZVByaW50J10uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmVuYWJsZVByaW50ID0gdGhpcy5lbmFibGVQcmludDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgKCdjdXN0b21GaW5kYmFyJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFyJ10uaXNGaXJzdENoYW5nZSgpKSB8fFxuICAgICAgKCdjdXN0b21GaW5kYmFyQnV0dG9ucycgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tRmluZGJhckJ1dHRvbnMnXS5pc0ZpcnN0Q2hhbmdlKCkpIHx8XG4gICAgICAoJ2N1c3RvbUZpbmRiYXJJbnB1dEFyZWEnIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2N1c3RvbUZpbmRiYXJJbnB1dEFyZWEnXS5pc0ZpcnN0Q2hhbmdlKCkpIHx8XG4gICAgICAoJ2N1c3RvbVRvb2xiYXInIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2N1c3RvbVRvb2xiYXInXS5pc0ZpcnN0Q2hhbmdlKCkpXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5kdW1teUNvbXBvbmVudHMpIHtcbiAgICAgICAgdGhpcy5kdW1teUNvbXBvbmVudHMuYWRkTWlzc2luZ1N0YW5kYXJkV2lkZ2V0cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgnaGVpZ2h0JyBpbiBjaGFuZ2VzKSB7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlcXVhbHMob2JqZWN0MTogYW55LCBvYmplY3QyOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoIW9iamVjdDEgfHwgIW9iamVjdDIpIHtcbiAgICAgIHJldHVybiBvYmplY3QxID09PSBvYmplY3QyO1xuICAgIH1cbiAgICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKG9iamVjdDEpO1xuICAgIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMob2JqZWN0Mik7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzMSkge1xuICAgICAgaWYgKG9iamVjdDEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpZiAob2JqZWN0MVtrZXldICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0MltrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAob2JqZWN0MVtrZXldICE9PSBvYmplY3QyW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzMikge1xuICAgICAgaWYgKG9iamVjdDIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpZiAob2JqZWN0MVtrZXldICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0MltrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAob2JqZWN0MVtrZXldICE9PSBvYmplY3QyW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Wm9vbSgpIHtcbiAgICBsZXQgem9vbUFzTnVtYmVyID0gdGhpcy56b29tO1xuICAgIGlmIChTdHJpbmcoem9vbUFzTnVtYmVyKS5lbmRzV2l0aCgnJScpKSB7XG4gICAgICB6b29tQXNOdW1iZXIgPSBOdW1iZXIoU3RyaW5nKHpvb21Bc051bWJlcikucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgfSBlbHNlIGlmICghaXNOYU4oTnVtYmVyKHpvb21Bc051bWJlcikpKSB7XG4gICAgICB6b29tQXNOdW1iZXIgPSBOdW1iZXIoem9vbUFzTnVtYmVyKSAvIDEwMDtcbiAgICB9XG4gICAgaWYgKCF6b29tQXNOdW1iZXIpIHtcbiAgICAgIHpvb21Bc051bWJlciA9ICdhdXRvJztcbiAgICB9XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcblxuICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbikge1xuICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcblxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnZGVmYXVsdFpvb21WYWx1ZScsIHpvb21Bc051bWJlcik7XG4gICAgfVxuICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50U2NhbGVWYWx1ZSA9IHpvb21Bc051bWJlcjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XG4gICAgY29uc3QgcGRmVmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHRtbCcpO1xuICAgIGlmIChwZGZWaWV3ZXIgJiYgcGRmVmlld2VyLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRlckNvbnRhaW5lcicpO1xuICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy50b29sYmFyV2lkdGhJblBpeGVscyA9IHdpZHRoO1xuICAgICAgICBpZiAodGhpcy5zZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50KSB7XG4gICAgICAgICAgdGhpcy5zZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LmNoZWNrVmlzaWJpbGl0eSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnKVxuICBwdWJsaWMgb25Db250ZXh0TWVudSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0TWVudUFsbG93ZWQ7XG4gIH1cblxuICBwdWJsaWMgb25TZWNvbmRhcnlNZW51SXNFbXB0eShoaWRlS2ViYWJCdXR0b246IGJvb2xlYW4pIHtcbiAgICB0aGlzLmhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyID0gaGlkZUtlYmFiQnV0dG9uO1xuICAgIGlmIChoaWRlS2ViYWJCdXR0b24pIHtcbiAgICAgIGlmICghdGhpcy5pc1ByaW1hcnlNZW51VmlzaWJsZSgpKSB7XG4gICAgICAgIHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZpbGxGb3JtRmllbGRzKGZvcm1EYXRhOiBGb3JtRGF0YVR5cGUpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuXG4gICAgaWYgKCFQREZWaWV3ZXJBcHBsaWNhdGlvbiB8fCAhUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQgfHwgIVBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50LmFubm90YXRpb25TdG9yYWdlKSB7XG4gICAgICAvLyBuZ09uQ2hhbmdlcyBjYWxscyB0aGlzIG1ldGhvZCB0b28gZWFybHkgLSBzbyBqdXN0IGlnbm9yZSBpdFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFubm90YXRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuYW5ub3RhdGlvblN0b3JhZ2UuZ2V0QWxsKCk7XG4gICAgZm9yIChjb25zdCBhbm5vdGF0aW9uIGluIGFubm90YXRpb25zKSB7XG4gICAgICBpZiAoYW5ub3RhdGlvbikge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hbm5vdGF0aW9uLWlkPVwiJyArIGFubm90YXRpb24gKyAnXCJdJyk7XG4gICAgICAgIGlmIChjb250YWluZXIpIHtcblxuICAgICAgICAgIGNvbnN0IGZpZWxkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBmaWVsZC5uYW1lO1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBmb3JtRGF0YVtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBQREYgRm9ybSBGaWVsZCBUeXBlcyAjNTY3OiB1c2UgZXhwb3J0VmFsdWUgZnJvbSB0aGUgZmllbGQgYW5ub3RhdGlvbiBmb3IgdGhlIHZhbHVlXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRGF0YVtmaWVsZE5hbWVdID0gZmllbGQuY2hlY2tlZD90aGlzLmJ1dHRvblZhbHVlc1thbm5vdGF0aW9uXTpudWxsOyBcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3JhZGlvJykgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IHVzZSBidXR0b25WYWx1ZSBmcm9tIHRoZSBmaWVsZCBhbm5vdGF0aW9uIGZvciB0aGUgdmFsdWVcblxuICAgICAgICAgICAgICAgIGlmKGZpZWxkLmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhW2ZpZWxkTmFtZV0gPSB0aGlzLmJ1dHRvblZhbHVlc1thbm5vdGF0aW9uXTsgXG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgIGVsc2UgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhW2ZpZWxkTmFtZV0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuYW5ub3RhdGlvblN0b3JhZ2Uuc2V0VmFsdWUoYW5ub3RhdGlvbiwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBTdHJpbmcobmV3VmFsdWUpID09IHRoaXMuYnV0dG9uVmFsdWVzW2Fubm90YXRpb25dOyBcbiAgICAgICAgICAgICAgICBmaWVsZC5jaGVja2VkID0gdjtcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBTdHJpbmcobmV3VmFsdWUpID09IHRoaXMuYnV0dG9uVmFsdWVzW2Fubm90YXRpb25dO1xuICAgICAgICAgICAgICAgIGZpZWxkLmNoZWNrZWQgPSB2O1xuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWVsZC52YWx1ZSA9IDxzdHJpbmc+bmV3VmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IGhhbmRsZSBtdWx0aSBsaW5lIHRleHQgZmllbGRzXG4gICAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICAgICAgICBpZiAodGV4dGFyZWEpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IHRleHRhcmVhLm5hbWU7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGZvcm1EYXRhW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhW2ZpZWxkTmFtZV0gPSB0ZXh0YXJlYS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50LmFubm90YXRpb25TdG9yYWdlLnNldFZhbHVlKGFubm90YXRpb24sIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSA8c3RyaW5nPm5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICBpZiAoc2VsZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBzZWxlY3QubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZm9ybURhdGFbZmllbGROYW1lXTtcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIC8vIEFkZGl0aW9uYWwgUERGIEZvcm0gRmllbGQgVHlwZXMgIzU2NzogbW92ZWQgc2V0dGluZyBhbmQgcmV0cmlldmluZyA8c2VsZWN0PiBmaWVsZCB2YWx1ZXMgdG8gZnVuY3Rpb25zIHRvIGhhbmRsZSBzaW5nbGUgb3IgbXVsdGkgc2VsZWN0IGZpZWxkc1xuICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhW2ZpZWxkTmFtZV0gPSB0aGlzLmdldFNlbGVjdFZhbHVlKHNlbGVjdCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuYW5ub3RhdGlvblN0b3JhZ2Uuc2V0VmFsdWUoYW5ub3RhdGlvbiwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IG1vdmVkIHNldHRpbmcgYW5kIHJldHJpZXZpbmcgPHNlbGVjdD4gZmllbGQgdmFsdWVzIHRvIGZ1bmN0aW9ucyB0byBoYW5kbGUgc2luZ2xlIG9yIG11bHRpIHNlbGVjdCBmaWVsZHNcbiAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RWYWx1ZShzZWxlY3QsbmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYWRkRm9ybUZpZWxkTGlzdGVuZXJzKGZvcm1EYXRhOiBGb3JtRGF0YVR5cGUpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuXG4gICAgY29uc3QgYW5ub3RhdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5hbm5vdGF0aW9uU3RvcmFnZS5nZXRBbGwoKTtcbiAgICBmb3IgKGNvbnN0IGFubm90YXRpb24gaW4gYW5ub3RhdGlvbnMpIHtcbiAgICAgIGlmIChhbm5vdGF0aW9uKSB7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYW5ub3RhdGlvbi1pZD1cIicgKyBhbm5vdGF0aW9uICsgJ1wiXScpO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG5cbiAgICAgICAgICBjb25zdCBmaWVsZCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gZmllbGQubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZm9ybURhdGFbZmllbGROYW1lXTtcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBQREYgRm9ybSBGaWVsZCBUeXBlcyAjNTY3OiB1c2UgZXhwb3J0VmFsdWUvYnV0dG9uVmFsdWUgZnJvbSB0aGUgZmllbGQgYW5ub3RhdGlvbiBmb3IgdGhlIHZhbHVlIGZvciBjaGVja2JveGVzL3JhZGlvIGJ1dHRvbnNcbiAgICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcgfHwgZmllbGQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgIGlmKGZpZWxkLmNoZWNrZWQpXG4gICAgICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhW2ZpZWxkTmFtZV0gPSB0aGlzLmJ1dHRvblZhbHVlc1thbm5vdGF0aW9uXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRGF0YVtmaWVsZE5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHRoaXMuZW1pdEZvcm1EYXRhQ2hhbmdlKGFubm90YXRpb24sZmllbGROYW1lLCBmaWVsZCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFkZGl0aW9uYWwgUERGIEZvcm0gRmllbGQgVHlwZXMgIzU2NzogaGFuZGxlIG11bHRpIGxpbmUgdGV4dCBmaWVsZHNcbiAgICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgICAgICAgIGlmICh0ZXh0YXJlYSkge1xuICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gdGV4dGFyZWEubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZm9ybURhdGFbZmllbGROYW1lXTtcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybURhdGFbZmllbGROYW1lXSA9IHRleHRhcmVhLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB0aGlzLmVtaXRGb3JtRGF0YUNoYW5nZShhbm5vdGF0aW9uLGZpZWxkTmFtZSwgdGV4dGFyZWEpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBzZWxlY3QgPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XG4gICAgICAgICAgaWYgKHNlbGVjdCkge1xuICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gc2VsZWN0Lm5hbWU7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGZvcm1EYXRhW2ZpZWxkTmFtZV07XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IG1vdmVkIHNldHRpbmcgYW5kIHJldHJpZXZpbmcgPHNlbGVjdD4gZmllbGQgdmFsdWVzIHRvIGZ1bmN0aW9ucyB0byBoYW5kbGUgc2luZ2xlIG9yIG11bHRpIHNlbGVjdCBmaWVsZHNcbiAgICAgICAgICAgICAgdGhpcy5mb3JtRGF0YVtmaWVsZE5hbWVdID0gdGhpcy5nZXRTZWxlY3RWYWx1ZShzZWxlY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdGhpcy5lbWl0Rm9ybURhdGFDaGFuZ2UoYW5ub3RhdGlvbixmaWVsZE5hbWUsIHNlbGVjdCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFkZE1pc3NpbmdGb3JtRmllbGRzKGZvcm1EYXRhOiBGb3JtRGF0YVR5cGUpOiBGb3JtRGF0YVR5cGUge1xuICAgIGNvbnN0IHJlc3VsdCA9IHsgLi4uZm9ybURhdGEgfTtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbiAmJiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudCkge1xuICAgICAgY29uc3QgYW5ub3RhdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5hbm5vdGF0aW9uU3RvcmFnZS5nZXRBbGwoKTtcbiAgICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbiBpbiBhbm5vdGF0aW9ucykge1xuICAgICAgICBpZiAoYW5ub3RhdGlvbikge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFubm90YXRpb24taWQ9XCInICsgYW5ub3RhdGlvbiArICdcIl0nKTtcbiAgICAgICAgICBpZiAoY29udGFpbmVyKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gZmllbGQubmFtZTtcbiAgICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSByZXN1bHRbZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IHVzZSBleHBvcnRWYWx1ZS9idXR0b25WYWx1ZSBmcm9tIHRoZSBmaWVsZCBhbm5vdGF0aW9uIGZvciB0aGUgdmFsdWUgZm9yIGNoZWNrYm94ZXMvcmFkaW8gYnV0dG9uc1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICByZXN1bHRbZmllbGROYW1lXSA9IGZpZWxkLmNoZWNrZWQ/dGhpcy5idXR0b25WYWx1ZXNbYW5ub3RhdGlvbl06bnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgICAgaWYoZmllbGQuY2hlY2tlZClcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ZpZWxkTmFtZV0gPSB0aGlzLmJ1dHRvblZhbHVlc1thbm5vdGF0aW9uXTtcbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdFtmaWVsZE5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3QpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gc2VsZWN0Lm5hbWU7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gcmVzdWx0W2ZpZWxkTmFtZV07XG4gICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBQREYgRm9ybSBGaWVsZCBUeXBlcyAjNTY3OiBtb3ZlZCBzZXR0aW5nIGFuZCByZXRyaWV2aW5nIDxzZWxlY3Q+IGZpZWxkIHZhbHVlcyB0byBmdW5jdGlvbnMgdG8gaGFuZGxlIHNpbmdsZSBvciBtdWx0aSBzZWxlY3QgZmllbGRzXG4gICAgICAgICAgICAgICAgcmVzdWx0W2ZpZWxkTmFtZV0gPSB0aGlzLmdldFNlbGVjdFZhbHVlKHNlbGVjdCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBQREYgRm9ybSBGaWVsZCBUeXBlcyAjNTY3OiBoYW5kbGUgbXVsdGkgbGluZSB0ZXh0IGZpZWxkc1xuICAgICAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcbiAgICAgICAgICAgIGlmICh0ZXh0YXJlYSkge1xuICAgICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSB0ZXh0YXJlYS5uYW1lO1xuICAgICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHJlc3VsdFtmaWVsZE5hbWVdO1xuICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtmaWVsZE5hbWVdID0gdGV4dGFyZWEudmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGdldFNlbGVjdFZhbHVlKGZpZWxkOkhUTUxTZWxlY3RFbGVtZW50KVxuICB7XG4gICAgaWYoZmllbGQubXVsdGlwbGUpXG4gICAge1xuICAgICAgbGV0IHZhbHVlczpzdHJpbmdbXSA9IFtdO1xuICAgICAgbGV0IG9wdGlvbnMgPSBmaWVsZC5vcHRpb25zO1xuICAgIFxuICAgICAgZm9yIChsZXQgaT0wOyBpPG9wdGlvbnMubGVuZ3RoOyBpKyspIFxuICAgICAge1xuICAgICAgICBpZiAob3B0aW9uc1tpXS5zZWxlY3RlZCkge1xuICAgICAgICAgIHZhbHVlcy5wdXNoKG9wdGlvbnNbaV0udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4odmFsdWVzKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgcmV0dXJuKGZpZWxkLnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2VsZWN0VmFsdWUoZmllbGQ6SFRNTFNlbGVjdEVsZW1lbnQsdmFsdWU6c3RyaW5nIHwgc3RyaW5nW10pXG4gIHtcbiAgICBpZihmaWVsZC5tdWx0aXBsZSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSApXG4gICAge1xuICAgICAgbGV0IHZhbHVlczpzdHJpbmdbXT0gdmFsdWU7XG4gICAgICBsZXQgb3B0aW9ucyA9IGZpZWxkLm9wdGlvbnM7XG4gICAgXG4gICAgICBmb3IgKGxldCBpPTA7IGk8b3B0aW9ucy5sZW5ndGg7IGkrKykgXG4gICAgICAgIG9wdGlvbnNbaV0uc2VsZWN0ZWQgPSAgKHZhbHVlcy5pbmRleE9mKG9wdGlvbnNbaV0udmFsdWUpICE9IC0xKTtcbiAgICB9XG4gICAgZWxzZVxuICAgICAgZmllbGQudmFsdWUgPSA8c3RyaW5nPnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0Rm9ybURhdGFDaGFuZ2UoYW5ub3RhdGlvbjpzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nLCBmaWVsZDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBsZXQgdmFsdWU6YW55ID0gbnVsbDtcblxuICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZ2V0U2VsZWN0VmFsdWUoZmllbGQpO1xuICAgIH1cbiAgICAvLyBBZGRpdGlvbmFsIFBERiBGb3JtIEZpZWxkIFR5cGVzICM1Njc6IGhhbmRsZSBtdWx0aSBsaW5lIHRleHQgZmllbGRzXG4gICAgZWxzZSBpZiAoZmllbGQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7ICAgICAgXG4gICAgICB2YWx1ZSA9IGZpZWxkLnZhbHVlO1xuICAgIH0gIFxuICAgIGVsc2UgaWYgKGZpZWxkIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgLy8gQWRkaXRpb25hbCBQREYgRm9ybSBGaWVsZCBUeXBlcyAjNTY3OiB1c2UgZXhwb3J0VmFsdWUvYnV0dG9uVmFsdWUgZnJvbSB0aGUgZmllbGQgYW5ub3RhdGlvbiBmb3IgdGhlIHZhbHVlIGZvciBjaGVja2JveGVzL3JhZGlvIGJ1dHRvbnNcbiAgICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XG5cbiAgICAgICAgaWYoZmllbGQuY2hlY2tlZClcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMuYnV0dG9uVmFsdWVzW2Fubm90YXRpb25dO1xuICAgICAgfSBcbiAgICAgIGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICdyYWRpbycpIHtcblxuICAgICAgICBpZihmaWVsZC5jaGVja2VkKVxuICAgICAgICAgIHZhbHVlID0gdGhpcy5idXR0b25WYWx1ZXNbYW5ub3RhdGlvbl07XG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhbHVlID0gZmllbGQudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5mb3JtRGF0YVtmaWVsZE5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5mb3JtRGF0YVtmaWVsZE5hbWVdID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZm9ybURhdGFDaGFuZ2UuZW1pdCh0aGlzLmZvcm1EYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qXG4gIHByaXZhdGUgYWRkSW5wdXQoYW5ub3RhdGlvbjogUERGQW5ub3RhdGlvbkRhdGEsIHJlY3Q6IG51bWJlcltdKTogdm9pZCB7XG4gICAgLy8gYWRkIGlucHV0IHRvIHBhZ2VcbiAgICBjb25zb2xlLmxvZyhhbm5vdGF0aW9uKTtcbiAgfVxuICAqL1xuXG4gIHB1YmxpYyBsb2FkQ29tcGxldGUocGRmOiBhbnkgLyogUERGRG9jdW1lbnRQcm94eSAqLyk6IHZvaWQge1xuICAgIC8qKiBUaGlzIG1ldGhvZCBoYXMgYmVlbiBpbnNwaXJlZCBieSBodHRwczovL21lZGl1bS5jb20vZmFjdG9yeS1taW5kL2FuZ3VsYXItcGRmLWZvcm1zLWZhNzJiMTVjM2ZiZC4gVGhhbmtzLCBKb25ueSBGb3ghICovXG4gICAgLy8gc2NyZWVuIERQSSAvIFBERiBEUElcbiAgICBjb25zdCBkcGlSYXRpbyA9IDk2IC8gNzI7XG4gICAgdGhpcy5oYXNTaWduYXR1cmUgPSBmYWxzZTtcblxuICAgIHRoaXMuYnV0dG9uVmFsdWVzID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwZGYubnVtUGFnZXM7IGkrKykge1xuICAgICAgLy8gdHJhY2sgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgbGV0IGN1cnJlbnRQYWdlOiBhbnkgPSBudWxsO1xuICAgICAgcGRmXG4gICAgICAgIC5nZXRQYWdlKGkpXG4gICAgICAgIC50aGVuKChwKSA9PiB7XG4gICAgICAgICAgY3VycmVudFBhZ2UgPSBwO1xuXG4gICAgICAgICAgLy8gZ2V0IHRoZSBhbm5vdGF0aW9ucyBvZiB0aGUgY3VycmVudCBwYWdlXG4gICAgICAgICAgcmV0dXJuIHAuZ2V0QW5ub3RhdGlvbnMoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGFubikgPT4ge1xuICAgICAgICAgIC8vIHVnbHkgY2FzdCBkdWUgdG8gbWlzc2luZyB0eXBlc2NyaXB0IGRlZmluaXRpb25zXG4gICAgICAgICAgLy8gcGxlYXNlIGNvbnRyaWJ1dGUgdG8gY29tcGxldGUgQHR5cGVzL3BkZmpzLWRpc3RcbiAgICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IGFubjsgLyogKDxhbnk+YW5uKSBhcyBQREZBbm5vdGF0aW9uRGF0YVtdOyAqL1xuXG4gICAgICAgICAgYW5ub3RhdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoKGEpID0+IGEuc3VidHlwZSA9PT0gJ1dpZGdldCcpIC8vIGdldCB0aGUgZm9ybSBmaWVsZCBhbm5vdGF0aW9uIG9ubHlcbiAgICAgICAgICAgIC5mb3JFYWNoKChhKSA9PiB7XG5cbiAgICAgICAgICAgICAgLy8gQWRkaXRpb25hbCBQREYgRm9ybSBGaWVsZCBUeXBlcyAjNTY3OiBTdG9yZSB0aGUgZXhwb3J0VmFsdWUgZm9yIHRoZSBjaGVjayBib3hlcyBhbmQgYnV0dG9uVmFsdWUgZm9yIHJhZGlvIGJ1dHRvbnMgZm9yIHF1aWNrIHJlZmVyZW5jZSBcbiAgICAgICAgICAgICAgaWYoYS5jaGVja0JveClcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblZhbHVlc1thLmlkXSA9IGEuZXhwb3J0VmFsdWU7XG4gICAgICAgICAgICAgIGVsc2UgaWYoYS5yYWRpb0J1dHRvbilcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblZhbHVlc1thLmlkXSA9IGEuYnV0dG9uVmFsdWU7XG5cbiAgICAgICAgICAgICAgaWYgKGEuZmllbGRUeXBlID09PSAnU2lnJykge1xuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmhhc1NpZ25hdHVyZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgdmlld2VyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZXdlckNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB2aWV3ZXJDb250YWluZXIuc2Nyb2xsQnkoMCwgLTMyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgIC8vIGdldCB0aGUgcmVjdGFuZ2xlIHRoYXQgcmVwcmVzZW50IHRoZSBzaW5nbGUgZmllbGRcbiAgICAgICAgICAgICAgLy8gYW5kIHJlc2l6ZSBpdCBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgRFBJXG4gICAgICAgICAgICAgIGNvbnN0IGZpZWxkUmVjdCA9IGN1cnJlbnRQYWdlLmdldFZpZXdwb3J0KGRwaVJhdGlvKS5jb252ZXJ0VG9WaWV3cG9ydFJlY3RhbmdsZShhLnJlY3QpO1xuXG4gICAgICAgICAgICAgIC8vIGFkZCB0aGUgY29ycmVzcG9uZGluZyBpbnB1dFxuICAgICAgICAgICAgICB0aGlzLmFkZElucHV0KGEsIGZpZWxkUmVjdCk7XG4gICAgICAgICAgICAgICovXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=