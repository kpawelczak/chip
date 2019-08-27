import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import 'clipboard';

import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

declare var Prism: any;

@Injectable()
export class HighlightService {

	constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

	highlightAll() {
		if (isPlatformBrowser(this.platformId)) {
			Prism.highlightAll();
		}
	}
}
