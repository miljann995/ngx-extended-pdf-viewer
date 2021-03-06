import { TemplateRef } from '@angular/core';
export declare class PdfToolbarComponent {
    customToolbar: TemplateRef<any>;
    mobileFriendlyZoomScale: number;
    primaryMenuVisible: boolean;
    showBookmarkButton: boolean;
    showDownloadButton: boolean;
    showFindButton: boolean | undefined;
    showHandToolButton: boolean;
    showOpenFileButton: boolean;
    showPrintButton: boolean;
    showPagingButtons: boolean;
    showPresentationModeButton: boolean;
    showRotateButton: boolean;
    showSecondaryToolbarButton: boolean;
    showSidebarButton: boolean;
    showZoomButtons: boolean;
    textLayer: boolean | undefined;
    toolbarPaddingTop: string;
    toolbarWidth: string;
    zoomLevels: (string | number)[];
    constructor();
}
