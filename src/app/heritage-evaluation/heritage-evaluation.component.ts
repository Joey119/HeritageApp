import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IHeritage, IHeritageEvaluation, IEvaluationOption, IEvaluatorType } from '../_models';
import { HeritageService, UserService, HeritageEvaluationService, EvaluationOptionService, EvaluatorTypeService } from '../_services';
import { Global } from '../_shared';
import { SelectItem } from 'primeng/api';

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
  evaluation: any = { a: '1', b: '', c: '', d: '', e: '', f: '', g: '', h: '1', i: '1', j: '1', k: '1', l: '1', m: '1', n: '1', o: '1', p: '1', q: '1', r: '1', s: '1', t: '1', u: '1', v: '1', w: '1', x: '1', y: '1', z: '1', aa: '1', bb: '1', cc: '1', dd: '1', ee: '1', ff: '1', gg: '1' };
  newEvaluation: boolean;
  displayDialog: boolean;
  availableEvalOptions: SelectItem[];
  availableEvalTypes: SelectItem[];

  constructor(private route: ActivatedRoute,
    private heritageService: HeritageService,
    private userService: UserService,
    private heritageEvaluationService: HeritageEvaluationService,
    private evaluationOptionService: EvaluationOptionService,
    private evaluatorTypeSerice: EvaluatorTypeService) { }

  ngOnInit() {

    this.populateEvaluationOptions();
    this.populateEvaluatorTypes();

    this.route.params.subscribe(params => {
      this.param = params['id'];
      // check if ID exists in route & call update or add methods accordingly
      if (this.param && this.param != null && this.param != undefined) {
        this.heritageService.getHeritage(Global.BASE_HERITAGE_ENDPOINT + this.param).subscribe(
          result => {
            this.heritage = result;
            this.heritageEvaluationService.getAllHeritageEvaluations(Global.BASE_HERITAGE_EVALUATION_ENDPOINT)
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
    this.evaluation = { a: '传承人', b: '', c: '', d: '', e: '', f: '', g: '', h: '5', i: '4', j: '5', k: '4', l: '4', m: '5', n: '5', o: '5', p: '5', q: '4', r: '4', s: '4', t: '4', u: '5', v: '5', w: '5', x: '4', y: '4', z: '4', aa: '5', bb: '5', cc: '5', dd: '4', ee: '4', ff: '5', gg: '5' };
    this.displayDialog = true;

  }

  delete() {
    let index = this.evaluations.indexOf(this.selectedEvaluation);
    this.evaluations = this.evaluations.filter((val, i) => i != index);
    this.evaluation = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newEvaluation = false;
    this.evaluation = this.cloneEvaluation(event.data);
    this.displayDialog = true;
  }

  cloneEvaluation(c: any): any {
    let evaluation = { a: '传承人', b: '', c: '', d: '', e: '', f: '', g: '', h: '5', i: '4', j: '5', k: '4', l: '4', m: '5', n: '5', o: '5', p: '5', q: '4', r: '4', s: '4', t: '4', u: '5', v: '5', w: '5', x: '4', y: '4', z: '4', aa: '5', bb: '5', cc: '5', dd: '4', ee: '4', ff: '5', gg: '5' };
    for (let prop in c) {
      evaluation[prop] = c[prop];
    }
    return evaluation;
  }

  populateEvaluationOptions() {
    this.availableEvalOptions = [];
    this.evaluationOptionService.getEvaluationOptions(Global.BASE_EVALUATION_OPTION_ENDPOINT)
    .subscribe(
      data => {
        var options = data;
        for (let i=0; i<options.length; i++){
          this.availableEvalOptions.push({label: options[i].option, value: options[i]});
        }
      }
    )
  }

  populateEvaluatorTypes() {
    this.availableEvalTypes = [];
    this.evaluatorTypeSerice.getEvaluatorTypes(Global.BASE_EVALUATOR_TYPE_ENDPOINT)
    .subscribe(
      result => {
        var types = result;
        for (let j=0; j<types.length; j++){
          this.availableEvalTypes.push({label: types[j].type, value: types[j]});
        }
      }
    )
  }

}

