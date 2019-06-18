import { Component, OnInit } from '@angular/core';
import {NewsServiceService} from '../news-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
articles:any;
  constructor(private newsService:NewsServiceService,private router:Router) { }

  ngOnInit() {
    this.newsService.getData('everything?q=bitcoin').subscribe(data=>{
      console.log(data);
      this.articles=data['articles'];
    });
  }

  onGotoToSinglenews(article){
this.newsService.currentArticle=article;
    this.router.navigate(['/news-single']);
   
 
  }
}
