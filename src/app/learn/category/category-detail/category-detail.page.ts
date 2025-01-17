import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
  standalone: false,
})
export class CategoryDetailPage implements OnInit {
  questions: any;
  category: any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      if (params['category'] === 'react') {
        this.category = {
          _id: '1',
          slug: 'react',
          title: 'React',
          description: 'A JavaScript library for building user interfaces',
          color: '#3dc5ff',
        };
        this.category.color = '#3dc5ff';
      } else if (params['category'] === 'capacitor') {
        this.category = {
          _id: '2',
          slug: 'capacitor',
          title: 'Capacitor',
          description: 'Cross-platform Native Runntime for Web Apps',
          color: '#1d2833',
        };
      } else if (params['category'] === 'ionic') {
        this.category = {
          _id: '3',
          slug: 'ionic',
          title: 'Ionic',
          description:
            'Open source mobile UI toolkit for building cross-platform apps',
          color: '#3076fe',
        };
      } else if (params['category'] === 'angular') {
        this.category = {
          _id: '4',
          slug: 'angular',
          title: 'Angular',
          description:
            'A platform for building mobile and desktop web application',
          color: '#e34040',
        };
      }
    });
  }

  ngOnInit() {}
}
