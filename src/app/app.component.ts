import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(titleService: Title, router: Router, translate: TranslateService) {
    // デフォルト表示言語設定
    translate.setDefaultLang('zh');
    // 表示言語設定
    translate.use('zh');
    // languageService.language.subscribe(lang => {
    //   console.log(`language = ${lang}`);
    //   if (lang) {
    //     translate.use(lang);
    //   }
    // });
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const titles: Array<string> = this.getTitle(router.routerState, router.routerState.root);
        if (titles.length > 0) {
          // 多言語対応
          translate.get(titles.pop()).subscribe(t => {
            titleService.setTitle(t);
          });
        }
      }
    });
  }

  /**
   * Routerタイトルを取得する。
   * @param state 状態
   * @param parent 親
   */
  private getTitle(state, parent): Array<string> {
    const data: Array<string> = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      // 再帰
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }

    return data;
  }
}
