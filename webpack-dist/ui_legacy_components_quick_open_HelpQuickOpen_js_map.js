(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_quick_open_HelpQuickOpen_js_map"],{

/***/ "./ui/legacy/components/quick_open/HelpQuickOpen.js.map":
/*!**************************************************************!*\
  !*** ./ui/legacy/components/quick_open/HelpQuickOpen.js.map ***!
  \**************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"HelpQuickOpen.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/legacy/components/quick_open/HelpQuickOpen.ts\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"// Copyright 2017 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as IconButton from '../../../components/icon_button/icon_button.js';\\nimport * as UI from '../../legacy.js';\\n\\nimport {getRegisteredProviders, Provider, registerProvider, type ProviderRegistration} from './FilteredListWidget.js';\\nimport {QuickOpenImpl} from './QuickOpen.js';\\n\\nexport class HelpQuickOpen extends Provider {\\n  private providers: {\\n    prefix: string,\\n    iconName: string,\\n    iconWidth: string,\\n    title: string,\\n    jslogContext: string,\\n  }[];\\n\\n  constructor(jslogContext: string) {\\n    super(jslogContext);\\n    this.providers = [];\\n    getRegisteredProviders().forEach(this.addProvider.bind(this));\\n  }\\n\\n  private async addProvider(extension: ProviderRegistration): Promise<void> {\\n    if (extension.titleSuggestion) {\\n      this.providers.push({\\n        prefix: extension.prefix || '',\\n        iconName: extension.iconName,\\n        iconWidth: extension.iconWidth,\\n        title: extension.titlePrefix() + ' ' + extension.titleSuggestion(),\\n        jslogContext: (await extension.provider()).jslogContext,\\n      });\\n    }\\n  }\\n\\n  override itemCount(): number {\\n    return this.providers.length;\\n  }\\n\\n  override itemKeyAt(itemIndex: number): string {\\n    return this.providers[itemIndex].prefix;\\n  }\\n\\n  override itemScoreAt(itemIndex: number, _query: string): number {\\n    return -this.providers[itemIndex].prefix.length;\\n  }\\n\\n  override renderItem(itemIndex: number, _query: string, titleElement: Element, _subtitleElement: Element): void {\\n    const provider = this.providers[itemIndex];\\n\\n    const iconElement = new IconButton.Icon.Icon();\\n    iconElement.data = {\\n      iconName: provider.iconName,\\n      color: 'var(--icon-default)',\\n      width: provider.iconWidth,\\n    };\\n    titleElement.parentElement?.parentElement?.insertBefore(iconElement, titleElement.parentElement);\\n\\n    UI.UIUtils.createTextChild(titleElement, provider.title);\\n  }\\n\\n  override jslogContextAt(itemIndex: number): string {\\n    return this.providers[itemIndex].jslogContext;\\n  }\\n\\n  override selectItem(itemIndex: number|null, _promptValue: string): void {\\n    if (itemIndex !== null) {\\n      QuickOpenImpl.show(this.providers[itemIndex].prefix);\\n    }\\n  }\\n\\n  override renderAsTwoRows(): boolean {\\n    return false;\\n  }\\n}\\n\\nregisterProvider({\\n  prefix: '?',\\n  iconName: 'help',\\n  iconWidth: '20px',\\n  provider: () => Promise.resolve(new HelpQuickOpen('help')),\\n  titlePrefix: () => 'Help',\\n  titleSuggestion: undefined,\\n});\\n\"]}");

/***/ })

}]);