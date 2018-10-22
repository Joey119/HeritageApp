import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { IHeritage, IHeritageEvaluation, IEvaluationOption, IEvaluatorType } from '../_models';
import { HeritageService, UserService, HeritageEvaluationService, EvaluationOptionService, EvaluatorTypeService } from '../_services';
import { Global } from '../_shared';
import { SelectItem, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-heritage-evaluation',
  templateUrl: './heritage-evaluation.component.html',
  styleUrls: ['./heritage-evaluation.component.scss']
})
export class HeritageEvaluationComponent implements OnInit {

  heritage: IHeritage;
  param: any;

  evaluations: IHeritageEvaluation[];
  selectedEvaluation: IHeritageEvaluation;
  evaluation: IHeritageEvaluation;
  newEvaluation: boolean;
  displayDialog: boolean;
  availableEvalOptions: SelectItem[];
  availableEvalTypes: SelectItem[];
  currentUserId: number;
  defaultEvalOption: SelectItem;
  defaultEvalType: SelectItem;

  constructor(private route: ActivatedRoute,
    private heritageService: HeritageService,
    private userService: UserService,
    private heritageEvaluationService: HeritageEvaluationService,
    private evaluationOptionService: EvaluationOptionService,
    private toastr: ToastrService,
    private evaluatorTypeSerice: EvaluatorTypeService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {

    this.populateEvaluationOptions();
    this.populateEvaluatorTypes();

    this.currentUserId = this.userService.currentUserId();

    this.route.params.subscribe(params => {
      this.param = params['id'];
      // check if ID exists in route & call update or add methods accordingly
      if (this.param && this.param != null && this.param != undefined) {
        this.heritageService.getHeritage(Global.BASE_HERITAGE_ENDPOINT + this.param).subscribe(
          result => {
            this.heritage = result;
            this.heritageEvaluationService.getAllHeritageEvaluations(Global.BASE_HERITAGE_EVALUATION_ENDPOINT + 'getHeritageEvaluation/' + this.heritage.id)
              .subscribe(
                evals => {
                  this.evaluations = evals;
                }
              )
          }
        )
      }
    });

  }

  showDialogToAdd() {
    this.newEvaluation = true;
    this.evaluation = {
      id: 0,
      heritageId: this.heritage.id,
      evaluatorTypeId: -1,
      evaluationValue: 0.0,
      agreementFactor: 0.2,
      cognitionFactor: 0.2,
      projectValueFactor: 0.2,
      projectBasicInfoFactor: 0.2,
      projectConditionStatusFactor: 0.2,
      importanceValue: -1,
      nationalPrideValue: -1,
      govProtectionValue: -1,
      resourceCharacteristicsValue: -1,
      skillScopeValue: -1,
      skillInheritanceMethodValue: -1,
      skillInheritanceDifficultyValue: -1,
      artValue: -1,
      cultureValue: -1,
      economyValue: -1,
      historyValue: -1,
      educationValue: -1,
      societyValue: -1,
      scienceValue: -1,
      ecologicalEnvironmentValue: -1,
      qualityValue: -1,
      rarenessValue: -1,
      ecologyValue: -1,
      popularValue: -1,
      personalityValue: -1,
      timeSpanValue: -1,
      nationalEcomonicValue: -1,
      marketStatusValue: -1,
      basicResourceDevelopmentValue: -1,
      basicResourceValue: -1,
      introductionProbabilityValue: -1,
      createdUserId: this.currentUserId,
      createdUserName: '',
      createdOn: undefined,
      modifiedUserId: this.currentUserId,
      modifiedUserName: '',
      modifiedOn: undefined
    };
    this.displayDialog = true;

  }

  save() {
    if (this.newEvaluation) {
      this.heritageEvaluationService.addHeritageEvaluation(Global.BASE_HERITAGE_EVALUATION_ENDPOINT, this.evaluation)
        .subscribe(
          data => {
            this.evaluation = data;
            this.toastr.success("Activation mode suceessfully added.", "Succeeded");
            this.heritageEvaluationService.getAllHeritageEvaluations(Global.BASE_HERITAGE_EVALUATION_ENDPOINT + 'getHeritageEvaluation/' + this.heritage.id)
              .subscribe(
                evals => {
                  this.evaluations = evals;
                }
              )
          },
          error => {
            this.toastr.error("Failed to add activation mode", "Failed")
          }
        );
    }
    else {
      this.heritageEvaluationService.updateHeritageEvaluation(Global.BASE_HERITAGE_EVALUATION_ENDPOINT + this.evaluation.id, this.evaluation)
        .subscribe(
          data => {
            this.evaluation = data;
            this.toastr.success("Activation mode suceessfully updated.", "Succeeded");
            this.heritageEvaluationService.getAllHeritageEvaluations(Global.BASE_HERITAGE_EVALUATION_ENDPOINT + 'getHeritageEvaluation/' + this.heritage.id)
              .subscribe(
                evals => {
                  this.evaluations = evals;
                }
              )
          },
          error => {
            this.toastr.error("Failed to update activation mode", "Failed")
          }
        );
    }

    this.displayDialog = false;
  }

  delete() {

    if (this.evaluation.id == 0) {
      this.displayDialog = false;
      return;
    }

    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.heritageEvaluationService.deleteHeritageEvaluation(Global.BASE_HERITAGE_EVALUATION_ENDPOINT, this.evaluation.id)
          .subscribe(
            data => {
              this.toastr.success("Activation mode suceessfully deleted.", "Succeeded");
              this.heritageEvaluationService.getAllHeritageEvaluations(Global.BASE_HERITAGE_EVALUATION_ENDPOINT + 'getHeritageEvaluation/' + this.heritage.id)
                .subscribe(
                  evals => {
                    this.evaluations = evals;
                  }
                )
            },
            error => {
              this.toastr.error("Failed to delete activation mode", "Failed")
            }
          );
        this.displayDialog = false;
      },
      reject: () => { }
    });


  }

  onRowSelect(event) {
    this.newEvaluation = false;
    this.evaluation = this.cloneEvaluation(event.data);
    this.displayDialog = true;
  }

  cloneEvaluation(c: any): any {
    let evaluation = {
      id: 0,
      heritageId: this.heritage.id,
      evaluatorTypeId: -1,
      evaluationValue: 0.0,
      agreementFactor: 0.2,
      cognitionFactor: 0.2,
      projectValueFactor: 0.2,
      projectBasicInfoFactor: 0.2,
      projectConditionStatusFactor: 0.2,
      importanceValue: -1,
      nationalPrideValue: -1,
      govProtectionValue: -1,
      resourceCharacteristicsValue: -1,
      skillScopeValue: -1,
      skillInheritanceMethodValue: -1,
      skillInheritanceDifficultyValue: -1,
      artValue: -1,
      cultureValue: -1,
      economyValue: -1,
      historyValue: -1,
      educationValue: -1,
      societyValue: -1,
      scienceValue: -1,
      ecologicalEnvironmentValue: -1,
      qualityValue: -1,
      rarenessValue: -1,
      ecologyValue: -1,
      popularValue: -1,
      personalityValue: -1,
      timeSpanValue: -1,
      nationalEcomonicValue: -1,
      marketStatusValue: -1,
      basicResourceDevelopmentValue: -1,
      basicResourceValue: -1,
      introductionProbabilityValue: -1,
      createdUserId: this.currentUserId,
      createdUserName: '',
      createdOn: undefined,
      codifiedUserId: this.currentUserId,
      modifiedUserName: '',
      modifiedOn: undefined
    };

    for (let prop in c) {
      evaluation[prop] = c[prop];
    }
    return evaluation;
  }

  populateEvaluationOptions() {
    this.availableEvalOptions = [];
    this.evaluationOptionService.getEvaluationOptions(Global.BASE_EVALUATION_OPTION_ENDPOINT + 'getAllEvaluationOption')
      .subscribe(
        data => {
          var options = data;
          for (let i = 0; i < options.length; i++) {
            this.availableEvalOptions.push({ label: options[i].option, value: options[i].id });
          }
          this.defaultEvalOption = this.availableEvalOptions[0].value;
        }
      )
  }

  populateEvaluatorTypes() {
    this.availableEvalTypes = [];
    this.evaluatorTypeSerice.getEvaluatorTypes(Global.BASE_EVALUATOR_TYPE_ENDPOINT + 'getAllEvaluatorType')
      .subscribe(
        result => {
          var types = result;
          for (let j = 0; j < types.length; j++) {
            this.availableEvalTypes.push({ label: types[j].type, value: types[j].id });
          }
          this.defaultEvalType = this.availableEvalTypes[0].value;
        }
      )
  }

}

