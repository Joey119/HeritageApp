import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { IHeritage } from '../_models';
import { HeritageService, UserService } from '../_services';
import { Global } from '../_shared';


@Component({
  selector: 'app-heritage-detail',
  templateUrl: './heritage-detail.component.html',
  styleUrls: ['./heritage-detail.component.scss']
})
export class HeritageDetailComponent implements OnInit {

  heritage: IHeritage;
  param:any;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }



  constructor(
    private route: ActivatedRoute,
    private heritageService: HeritageService,
    private userService: UserService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    /*
    var id = this.route.snapshot.params["id"];
    if (id < 1)
      return;
    */

    // Check for route params
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
      else
      {
        this.heritage = {
          id: 0,
          name: '',
          registrationDistrict: '',
          registrationYear: '',
          province: '',
          typeofProject: '',
          batchNo: '',
          inheritors: '',
          projectOverview: '',
          history: '',
          currentStatus: '',
          presentValue: 0,
          endangeredStatus: '',
          masterpiece: '',
          tourismStatus: '',
          tourismMarketCharacteristics: '',
          tourismProduct: '',
          tourismPrice: 0,
          tourismDevelopmentModel: '',
          tourismBenefit: 0,
          story: '',
          createdUserId: 0,
          createdUserName: '',
          createdOn: undefined,
          modifiedUserId: 0,
          modifiedUserName: '',
          modifiedOn: undefined
        }
      }
    });

    

  }

  onSubmit() {

    var userId = this.userService.currentUserId();
    if (this.heritage.id != 0)
    {      
      this.heritage.createdUserId = userId;
      this.heritage.modifiedUserId = userId;
      this.heritageService.updateHeritage(Global.BASE_HERITAGE_ENDPOINT + this.heritage.id, this.heritage);
      this.showSuccess();
    }
    else
    {
      this.heritage.modifiedUserId = userId;
      this.heritageService.addHeritage(Global.BASE_HERITAGE_ENDPOINT, this.heritage);
    }
    
  }

  	 
	showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  
  showError() {
    this.toastr.error('Error!', 'Something is wrong!');
  }

}
