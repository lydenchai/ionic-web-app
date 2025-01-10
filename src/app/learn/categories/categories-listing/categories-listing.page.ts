import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-categories-listing',
  templateUrl: './categories-listing.page.html',
  styleUrls: ['./categories-listing.page.scss'],
  standalone: false,
})
export class CategoriesListingPage implements OnInit {
  listingTopic = 'all';
  categories = [
    {
      _id: '1',
      slug: 'react',
      title: 'React',
      description: 'A JavaScript library for building user interfaces',
      color: '#3dc5ff',
    },
    {
      _id: '2',
      slug: 'capacitor',
      title: 'Capacitor',
      description: 'Cross-platform Native Runntime for Web Apps',
      color: '#1d2833',
    },
    {
      _id: '3',
      slug: 'ionic',
      title: 'Ionic',
      description:
        'Open source mobile UI toolkit for building cross-platform apps',
      color: '#3076fe',
    },
    {
      _id: '4',
      slug: 'angular',
      title: 'Angular',
      description: 'A platform for building mobile and desktop web application',
      color: '#e34040',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.route.data.subscribe((data: any) => {
    //   this.categories = data.categories;
    // });
    this.route.queryParams.subscribe((params) => {
      console.log('queryParams', params);
      // tslint:disable-next-line:no-string-literal
      this.listingTopic =
        params['topic'] && params['topic'] !== ''
          ? params['topic']
          : this.listingTopic;
    });
  }
}
