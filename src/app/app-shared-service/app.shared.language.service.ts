

import { Subject } from 'rxjs/Subject';
export class AppLanguageService {
    appLanguageSubject = new Subject();
    userName: Subject<String> = new Subject();
    validUser: Subject<String> = new Subject();

}
