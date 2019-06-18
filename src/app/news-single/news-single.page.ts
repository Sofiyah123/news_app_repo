import { Component, OnInit } from '@angular/core';
import {NewsServiceService } from '../news-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
article;
  constructor(private newsService:NewsServiceService,private router:Router) { }

  ngOnInit() {
    this.article=this.newsService.currentArticle;
    console.log(this.article);
  
  }
  backwardnavigation(){
    this.router.navigate(['/']);
  }
}
