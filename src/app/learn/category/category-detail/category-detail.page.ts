import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
  standalone: false,
})
export class CategoryDetailPage implements OnInit {
  questions: any;
  category = {
    _id: '1',
    slug: 'react',
    title: 'React',
    description: 'A JavaScript library for building user interfaces',
    color: '#3dc5ff',
  };
  constructor() {}

  ngOnInit() {}
}
