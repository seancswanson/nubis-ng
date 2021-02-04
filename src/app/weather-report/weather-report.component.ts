import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map, filter, concatMap } from 'rxjs/operators';
import {WeatherService} from './weather.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {
  data$: Observable<any>;
  locationName: string;
  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit() {
    console.log(this.route)

    this.data$ = this.route.params.pipe(
      map(params => params['locationName']),
      filter(name => !!name),
      concatMap(name => this.weatherService.getWeatherForCity(name))
    );
  }

}
