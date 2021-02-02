import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {
  locationName: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route)
    this.route.paramMap.subscribe(params => {
        this.locationName = params.get('locationName');
      })
  }

}
