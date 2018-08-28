import { Component, OnInit, OnDestroy } from '@angular/core';
import { DevUser } from './app.user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Rx';
import { AppLanguageService } from './app-shared-service/app.shared.language.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{
  title = 'tester';
  currentDate = new Date();
  
  numbersObservableSubscription : Subscription;
  customObservableSubscription : Subscription;

  constructor(private appLanguageService : AppLanguageService) {

  }

  ngOnInit() {
    //Create a Observable
    /*const numbers = Observable.interval(1000);

    this.numbersObservableSubscription = numbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    )*/

    /*const numbers = Observable.interval(1000).take(5);
    let newNumbers = numbers.map(x =>{
       return x * 2;
    })

    let flatMapNewNumbers = numbers.flatMap(function(x) : number{
      return x * 2;
    })

    newNumbers.subscribe( value => {
      console.log("New Number" + value);
    })*/

    

    //Observable will fire after 3 sec, after 5 sec and fails after 7 and complete after 9 second

    /*const observableTest = Observable.create((observer : Observer<string>) => { //Just create a observer with the type of data it is retruning
      setTimeout( () => {
        observer.next('Data Package : 1') // Pushes the next data packet
      }, 5000); // 5th second

      setTimeout( () => {
        observer.next('Data Package : 2') // Pushes the next data packet
      }, 3000); // 3rd second

      setTimeout( () => {
        observer.error('Data Package ERROR') // Pushes the next data packet
      }, 7000); // 7th second

      setTimeout( () => {
        observer.complete(); // Complete the observable
        console.log('9000');
      }, 9000);// 9th second

      setTimeout( () => {
        observer.next('Data Package : 4')  // Pushes the next data packet, Thill will be never invoked as we are completing the observable at 9th second
      }, 11000);// 11thth second
    });

    //write observable handler by subsribing to it

    this.customObservableSubscription = observableTest.subscribe(
      (data: string) => { console.log(data); } , // Return Data
      (error: string) => { console.log(error); } , // Error
      (complete:string) => { console.log('Completed'); }  // Completed , this will be invoked once completed , but will not retrun anything here
    )*/

    //RxJS operator

    //Simple Promise
   /*this.simplePromiseTestUsername().then((resolve) => {
      console.log(resolve);
    }).catch((reject) => {
      console.log(reject);
    }); 

    //Chained Promises
    this.chainedPromiseTest();

    //Run promises parallely and asynchronously

    Promise.all([this.simplePromiseTestUsername() , this.simplePasswordTest()]).then((resolve) => {
      console.log('Worked')
    })

    //Return the outpur after one of them is executed

    Promise.race([this.simplePromiseTestUsername() , this.simplePasswordTest()]).then((resolve) => {
      console.log('One of them worked :' + resolve)
    })*/


    /*const numbers = Observable.interval(1000).take(5);

    let numberFmap: Observable<Observable<number>> = numbers.map((num) => {
        return Observable.of(num);
    });

    let numberMap = numbers.map((num) => {
      return num * 100;
    })

    numberMap.subscribe((name) => {
      console.log(name);
    });

    numberFmap.switchMap((num) => {
      return num;
    }).
    subscribe((num) => {
        console.log(num);
    });*/


    
  }


  ngOnDestroy() {
    /*this.numbersObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();*/
  }

  /*simplePromiseTestUsername(): Promise<string> {
    let username = "test1";
    let checkUserNamePromise: Promise<string> = new Promise((resolve, reject) => {
      if(username === 'test') {
        return resolve('Not valid');
      } else {
        return resolve ('valid');
      }
    })
    return checkUserNamePromise;
  }

  simplePasswordTest(): Promise<string> {
    let password = "test";
    let checkPasswordPromise: Promise<string> = new Promise((resolve, reject) => {
      if(password === 'test') {
        return resolve('Not valid');
      } else {
        return resolve ('valid');
      }
    })
    return checkPasswordPromise;
  }

  //Validate username only after validating password
  chainedPromiseTest() {
    this.simplePromiseTestUsername().then((resolve) => {
      return this.simplePasswordTest().then((resolve) => {
        console.log('validated')
      });
    });
  }*/

  handleLanguageChange(language: string) {
    this.appLanguageService.appLanguageSubject.next(language);
  }
  

}
