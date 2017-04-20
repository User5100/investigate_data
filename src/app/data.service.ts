import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Field, Hit } from './models';
import { Observable } from 'rxjs/Observable';
import { BASE_URL } from './config';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getMockData() {
    return Observable.of([
      {
        summary: "In the post-Suharto era, Indonesia has undertaken radical public sector ... in 2014 Jokowi also promised to reduce corruption practices. The jury is still out on whether he has succeeded with this. To assess the performance of elected political leaders ...",
        url: "http://www.bbc.co.uk",
        title: "The challenge after the Indonesia local elections",
        wordCount: { suharto: 1, indonesia: 2, radical: 1, jokowi: 1 }
      },
      {
        summary: "To be charged with corruption was a deep humiliation for Indonesia's once all-powerful leader, writes Asia analyst Alice Donald ",
        url: "http://news.bbc.co.uk/2/hi/asia-pacific/903024.stm",
        title: "BBC News | ASIA-PACIFIC | Rise and fall of strongman Suharto",
        wordCount: { corruption: 1, indonesia: 1, suharto: 1 }

      },
      {
        summary: "Dec 5, 2001 ... Hutomo 'Tommy' Mandala Putra was the first of the Suharto clan to face prosecution for corruption. After being unsuccessfully prosecuted in ...",
        url: "https://newint.org/features/2001/12/05/worldbeaters",
        title: "Tommy Suharto -- New Internationalist",
        wordCount: { suharto: 2, corruption: 1 }
      },
      {
        summary: "The middle and upper classes, likely to be more educated, might be more sensitive to the stigma attached to the New Order, including the rampant corruption, collusion and nepotism within the family, as well as the human rights violations during Soeharto ...",
        url: "http://www.thejakartapost.com/news/2017/03/20/soeharto-familys-support-could-backfire-in-jakarta-poll.html",
        title: "Soeharto family’s support could backfire in Jakarta poll",
        wordCount: { suharto: 2, corruption: 1 }
      },
      {
        summary: "\"If you are corrupt, I will fetch you using a helicopter to Manila and ... In the 2014 election he saw off his opponent, a former general and ex-son-in-law of the old dictator Suharto, with ease. But there are signs of rising extremism in the world's ...",
        url: "http://www.koreatimes.co.kr/www/opinion/2017/04/197_226685.html",
        title: "What's wrong with Southeast Asia?",
        wordCount: { suharto: 1, corruption: 1, manila: 1, extremism: 1, asia: 1 }
      },
      {
        summary: "A 2015 survey by Transparency International, for instance, placed the police as one of the most corrupt government agencies as perceived ... The dwifungsi doctrine implemented by former President Suharto’s military-dominated “New Order” government ...",
        url: "http://www.todayonline.com/commentary/indonesias-days-pseudo-military-leaders-are-not-over-yet",
        title: "Indonesia’s days of pseudo-military leaders are not over yet",
        wordCount: { suharto: 1, corruption: 1, dwifungsi: 1, indonesia: 1 }
      },
      {
        summary: "President Rodrigo Duterte is a populist who is more focused on domestic issues such as public safety and corruption. He appears to have little ... Mahathir Mohamad and former Indonesian President Suharto. The disappearance of the anti-protectionist mantra ...",
        url: "http://asia.nikkei.com/Politics-Economy/Economy/ASEAN-finds-free-trade-a-tougher-sell-in-today-s-environment",
        title: "ASEAN finds free trade a tougher sell in today's environment",
        wordCount: { suharto: 1, corruption: 1, duterte: 1, indonesia: 1, mahathir: 1 }
      }
    ]);
  }

  getWordStats() {

    var stats;
    this.getCommonWords()
               .map((data: any) => {
                 data.map(d => {
                   this.getMockData()
                     .subscribe(_data => {

                       _data.map(article => {
                                 var obj = article.wordCount;
                                 for(var props in obj) {
                                   if(props === d.word) {
                                     d.quantity += obj[props];
                                   }
                                 }
                       })
                     })

                 })
                 stats = data.sort((a, b) => {
                   if(a.quantity > b.quantity) {
                     return -1;
                   }

                   if(a.quantity < b.quantity) {
                     return 1;
                   }

                   return 0;
                 });
               }).subscribe(() => {})
    return stats;
  }

  getCommonWords() {
    return this.getMockData()
               .switchMap(data => {

                 var wordList = [];

                 data.map((articles: any) => articles.wordCount)
                     .map(words => {
                       var keys = Object.keys(words);

                       keys.map(key => {
                         var exists = false;

                         if(wordList.length > 0) {
                           //Check if key already exists in wordList array
                           wordList.map(_wordInList => {
                             if(_wordInList.word === key) { exists = true }
                           })
                         }
                         //Create an array of unique words
                         if(!exists) { wordList.push({ word: key, quantity: 0 }) }
                       })
                     })

                 return Observable.of(wordList);
               })
  }
}
