import { CookieService } from 'angular2-cookie/services/cookies.service';

export class LocaleUtil {
  public languages = ['Русский', 'English', 'Українська'];
  protected LANGUAGE_KEY = 'language';

  constructor(protected cookieService: CookieService) {}

  public selectLanguage(languageId: any) {
    this.cookieService.put(this.LANGUAGE_KEY, this.languages[languageId]);
  }

  public getCurrentLanguage() {
    return this.cookieService.get(this.LANGUAGE_KEY);
  }
}
