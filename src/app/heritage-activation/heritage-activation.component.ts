import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IHeritage, IActivationMode } from '../_models';
import { HeritageService, ActivationModeService } from '../_services';
import { Global } from '../_shared';

@Component({
  selector: 'app-heritage-activation',
  templateUrl: './heritage-activation.component.html',
  styleUrls: ['./heritage-activation.component.scss']
})
export class HeritageActivationComponent implements OnInit {

  heritage: IHeritage;
  actModes: IActivationMode[];
  param: any;

  constructor(private route: ActivatedRoute,
    private heritageService: HeritageService,
    private actModeService: ActivationModeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params['id'];
      // check if ID exists in route & call update or add methods accordingly
      if (this.param && this.param != null && this.param != undefined) {
        this.heritageService.getHeritage(Global.BASE_HERITAGE_ENDPOINT + this.param).subscribe(
          result => {
            this.heritage = result;
            this.actModeService.getHeritageActModeById(Global.BASE_ACTIVATION_MODE_ENDPOINT + 'getHeritageActivationModes/' + this.heritage.id).subscribe(
              data => {
                this.actModes = data;
              }
            )
          }
        )
      }
    });
  }

}
