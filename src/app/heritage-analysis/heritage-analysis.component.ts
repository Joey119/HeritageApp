import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IHeritage } from '../_models';
import { HeritageService } from '../_services';
import { Global } from '../_shared';

@Component({
  selector: 'app-heritage-analysis',
  templateUrl: './heritage-analysis.component.html',
  styleUrls: ['./heritage-analysis.component.scss']
})
export class HeritageAnalysisComponent implements OnInit {

  heritage: IHeritage;
  param:any;

  constructor(private route: ActivatedRoute,
    private heritageService: HeritageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params['id'];
      // check if ID exists in route & call update or add methods accordingly
      if (this.param && this.param != null && this.param != undefined) {
        this.heritageService.getHeritage(Global.BASE_HERITAGE_ENDPOINT + this.param).subscribe(
          result => {
            this.heritage = result;
          }
        )
      }
    });
  }

}
