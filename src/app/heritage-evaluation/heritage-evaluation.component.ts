import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { IHeritage, IHeritageEvaluation, IEvaluationOption, IEvaluatorType, IEvaluationParameter } from '../_models';
import { HeritageService, UserService, HeritageEvaluationService, EvaluationOptionService, EvaluatorTypeService, EvaluationParameterService } from '../_services';
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

  displayParameters: boolean;
  param1: IEvaluationParameter;
  param2: IEvaluationParameter;
  param3: IEvaluationParameter;
  param4: IEvaluationParameter;
  param5: IEvaluationParameter;

  constructor(private route: ActivatedRoute,
    private heritageService: HeritageService,
    private userService: UserService,
    private heritageEvaluationService: HeritageEvaluationService,
    private evaluationOptionService: EvaluationOptionService,
    private toastr: ToastrService,
    private evaluatorTypeSerice: EvaluatorTypeService,
    private confirmationService: ConfirmationService,
    private evalParameterService: EvaluationParameterService) { }

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
            this.heritageEvaluationService.getHeritageEvaluations(Global.BASE_HERITAGE_EVALUATION_ENDPOINT + 'getHeritageEvaluation/' + this.heritage.id)
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
      evaluatorTypeId: 5,
      evaluationValue: 0.0,
      agreementFactor: 0.2215,
      cognitionFactor: 0.2019,
      projectValueFactor: 0.1884,
      projectBasicInfoFactor: 0.1830,
      projectConditionStatusFactor: 0.20519,
      importanceValue: 5,
      nationalPrideValue: 5,
      govProtectionValue: 5,
      resourceCharacteristicsValue: 5,
      skillScopeValue: 5,
      skillInheritanceMethodValue: 5,
      skillInheritanceDifficultyValue: 5,
      artValue: 5,
      cultureValue: 5,
      economyValue: 5,
      historyValue: 5,
      educationValue: 5,
      societyValue: 5,
      scienceValue: 5,
      ecologicalEnvironmentValue: 5,
      qualityValue: 5,
      rarenessValue: 5,
      ecologyValue: 5,
      popularValue: 5,
      personalityValue: 5,
      timeSpanValue: 5,
      nationalEcomonicValue: 5,
      marketStatusValue: 5,
      basicResourceDevelopmentValue: 5,
      basicResourceValue: 5,
      introductionProbabilityValue: 5,
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

    if (!this.userService.canEdit()) {
      this.toastr.error("您没有对非物质文化遗产进行评估的权限。", "权限验证失败")
      return;
    }

    if (this.newEvaluation) {
      this.heritageEvaluationService.addHeritageEvaluation(Global.BASE_HERITAGE_EVALUATION_ENDPOINT, this.evaluation)
        .subscribe(
          data => {
            this.evaluation = data;
            this.toastr.success("非物质文化遗产评估添加成功。", "操作成功");
            this.heritageEvaluationService.getHeritageEvaluations(Global.BASE_HERITAGE_EVALUATION_ENDPOINT + 'getHeritageEvaluation/' + this.heritage.id)
              .subscribe(
                evals => {
                  this.evaluations = evals;
                }
              )
          },
          error => {
            this.toastr.error("非物质文化遗产评估添加失败。", "操作失败")
          }
        );
    }
    else {
      this.heritageEvaluationService.updateHeritageEvaluation(Global.BASE_HERITAGE_EVALUATION_ENDPOINT + this.evaluation.id, this.evaluation)
        .subscribe(
          data => {
            this.evaluation = data;
            this.toastr.success("非物质文化遗产评估修改成功。", "操作成功");
            this.heritageEvaluationService.getHeritageEvaluations(Global.BASE_HERITAGE_EVALUATION_ENDPOINT + 'getHeritageEvaluation/' + this.heritage.id)
              .subscribe(
                evals => {
                  this.evaluations = evals;
                }
              )
          },
          error => {
            this.toastr.error("非物质文化遗产评估修改失败。", "操作失败")
          }
        );
    }

    this.displayDialog = false;
  }

  delete() {

    if (!this.userService.canEdit()) {
      this.toastr.error("您没有删除非物质文化遗产评估的权限。", "权限验证失败")
      return;
    }

    if (this.evaluation.id == 0) {
      this.displayDialog = false;
      return;
    }

    this.confirmationService.confirm({
      message: '您确定要删除所选择的为物质文化遗产评估吗？',
      header: '确认删除',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.heritageEvaluationService.deleteHeritageEvaluation(Global.BASE_HERITAGE_EVALUATION_ENDPOINT, this.evaluation.id)
          .subscribe(
            data => {
              this.toastr.success("非物质文化遗产评估删除成功。", "操作成功");
              this.heritageEvaluationService.getHeritageEvaluations(Global.BASE_HERITAGE_EVALUATION_ENDPOINT + 'getHeritageEvaluation/' + this.heritage.id)
                .subscribe(
                  evals => {
                    this.evaluations = evals;
                  }
                )
            },
            error => {
              this.toastr.error("非物质文化遗产评估删除失败。", "操作失败")
            }
          );
        this.displayDialog = false;
      },
      reject: () => { }
    });


  }

  onRowSelect(event) {

    if (!this.userService.canEdit()) {
      this.toastr.error("您没有修改非物质文化遗产评估的权限。", "权限验证失败")
      return;
    }

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

  evaluateheritage() {

    if (!this.userService.canEdit()) {
      this.toastr.error("您没有计算非物质文化遗产旅游价值的权限。", "权限验证失败");
      return;
    }

    this.heritageEvaluationService.evaluateHeritage(Global.BASE_HERITAGE_EVALUATION_ENDPOINT + 'evaluateHeritage/' + this.heritage.id)
      .subscribe(
        res => {
          this.heritage = res;
          this.toastr.success("非物质文化遗产旅游价值计算成功。", "操作成功");
        },
        error => {
          this.toastr.error("非物质文化遗产旅游价值计算失败。", "操作失败");
        }
      );
  }

  saveparam1() {
    this.evalParameterService.updateEvaluationParameter(Global.BASE_EVALUATION_PARAMETER_ENDPOINT + '1', this.param1)
    .subscribe(
      data => {
        this.param1 = data;
        this.displayParameters = false;
      }
    )
  }

  saveparam2() {
    this.evalParameterService.updateEvaluationParameter(Global.BASE_EVALUATION_PARAMETER_ENDPOINT + '2', this.param2)
    .subscribe(
      data => {
        this.param2 = data;
        this.displayParameters = false;
      }
    )
  }

  saveparam3() {
    this.evalParameterService.updateEvaluationParameter(Global.BASE_EVALUATION_PARAMETER_ENDPOINT + '3', this.param3)
    .subscribe(
      data => {
        this.param3 = data;
        this.displayParameters = false;
      }
    )
  }

  saveparam4() {
    this.evalParameterService.updateEvaluationParameter(Global.BASE_EVALUATION_PARAMETER_ENDPOINT + '4', this.param4)
    .subscribe(
      data => {
        this.param4 = data;
        this.displayParameters = false;
      }
    )
  }

  saveparam5() {
    this.evalParameterService.updateEvaluationParameter(Global.BASE_EVALUATION_PARAMETER_ENDPOINT + '5', this.param5)
    .subscribe(
      data => {
        this.param5 = data;
        this.displayParameters = false;
      }
    )
  }

  showParameters() {
    this.evalParameterService.getEvaluationParameter(Global.BASE_EVALUATION_PARAMETER_ENDPOINT + '1')
      .subscribe(
        dataParam1 => {
          this.param1 = dataParam1;
          this.evalParameterService.getEvaluationParameter(Global.BASE_EVALUATION_PARAMETER_ENDPOINT + '2')
            .subscribe(
              dataParam2 => {
                this.param2 = dataParam2;
                this.evalParameterService.getEvaluationParameter(Global.BASE_EVALUATION_PARAMETER_ENDPOINT + '3')
                  .subscribe(
                    dataParam3 => {
                      this.param3 = dataParam3;
                      this.evalParameterService.getEvaluationParameter(Global.BASE_EVALUATION_PARAMETER_ENDPOINT + '4')
                        .subscribe(
                          dataParam4 => {
                            this.param4 = dataParam4;
                            this.evalParameterService.getEvaluationParameter(Global.BASE_EVALUATION_PARAMETER_ENDPOINT + '5')
                              .subscribe(
                                dataParam5 => {
                                  this.param5 = dataParam5;
                                  this.displayParameters = true;
                                }
                              )
                          }
                        )
                    }
                  )
              }
            )
        }
      )
  }

}

