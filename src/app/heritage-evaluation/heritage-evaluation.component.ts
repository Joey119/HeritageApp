import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IHeritage } from '../_models';
import { HeritageService } from '../_services';
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

  evaluations: any[];
  selectedEvaluation: any;
  evaluation: any = { a: '传承人', b: '', c: '', d: '', e: '', f: '', g: '', h: '5', i: '4', j: '5', k: '4', l: '4', m: '5', n: '5', o: '5', p: '5', q: '4', r: '4', s: '4', t: '4', u: '5', v: '5', w: '5', x: '4', y: '4', z: '4', aa: '5', bb: '5', cc: '5', dd: '4', ee: '4', ff: '5', gg: '5' };
  newEvaluation: boolean;
  displayDialog: boolean;
  availableoptions: SelectItem[];
  selectedOption: AvailableOption;
  

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

    this.availableoptions = [
      { label: '不同意', value: { id: "1", name: "不同意" } },
      { label: '不太同意', value: { id: "2", name: "不太同意" } },
      { label: '介于中间', value: { id: "3", name: "介于中间" } },
      { label: '比较同意', value: { id: "4", name: "比较同意" } },
      { label: '非常同意', value: { id: "5", name: "非常同意" } }
    ];

    this.evaluations = [
      { a: '传承人', b: '', c: '', d: '', e: '', f: '', g: '', h: '5', i: '4', j: '5', k: '4', l: '4', m: '5', n: '5', o: '5', p: '5', q: '4', r: '4', s: '4', t: '4', u: '5', v: '5', w: '5', x: '4', y: '4', z: '4', aa: '5', bb: '5', cc: '5', dd: '4', ee: '4', ff: '5', gg: '5' },
      { a: '传承人', b: '', c: '', d: '', e: '', f: '', g: '', h: '5', i: '4', j: '5', k: '4', l: '4', m: '5', n: '5', o: '5', p: '5', q: '4', r: '4', s: '4', t: '4', u: '5', v: '5', w: '5', x: '4', y: '4', z: '4', aa: '5', bb: '5', cc: '5', dd: '4', ee: '4', ff: '5', gg: '5' },
      { a: '传承人', b: '', c: '', d: '', e: '', f: '', g: '', h: '5', i: '4', j: '5', k: '4', l: '4', m: '5', n: '5', o: '5', p: '5', q: '4', r: '4', s: '4', t: '4', u: '5', v: '5', w: '5', x: '4', y: '4', z: '4', aa: '5', bb: '5', cc: '5', dd: '4', ee: '4', ff: '5', gg: '5' },
      { a: '传承人', b: '', c: '', d: '', e: '', f: '', g: '', h: '5', i: '4', j: '5', k: '4', l: '4', m: '5', n: '5', o: '5', p: '5', q: '4', r: '4', s: '4', t: '4', u: '5', v: '5', w: '5', x: '4', y: '4', z: '4', aa: '5', bb: '5', cc: '5', dd: '4', ee: '4', ff: '5', gg: '5' },
      { a: '传承人', b: '', c: '', d: '', e: '', f: '', g: '', h: '5', i: '4', j: '5', k: '4', l: '4', m: '5', n: '5', o: '5', p: '5', q: '4', r: '4', s: '4', t: '4', u: '5', v: '5', w: '5', x: '4', y: '4', z: '4', aa: '5', bb: '5', cc: '5', dd: '4', ee: '4', ff: '5', gg: '5' },
      { a: '传承人', b: '', c: '', d: '', e: '', f: '', g: '', h: '5', i: '4', j: '5', k: '4', l: '4', m: '5', n: '5', o: '5', p: '5', q: '4', r: '4', s: '4', t: '4', u: '5', v: '5', w: '5', x: '4', y: '4', z: '4', aa: '5', bb: '5', cc: '5', dd: '4', ee: '4', ff: '5', gg: '5' }
    ];


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
    this.evaluation = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: any): any {
    let evaluation = { a: '传承人', b: '', c: '', d: '', e: '', f: '', g: '', h: '5', i: '4', j: '5', k: '4', l: '4', m: '5', n: '5', o: '5', p: '5', q: '4', r: '4', s: '4', t: '4', u: '5', v: '5', w: '5', x: '4', y: '4', z: '4', aa: '5', bb: '5', cc: '5', dd: '4', ee: '4', ff: '5', gg: '5' };
    for (let prop in c) {
      evaluation[prop] = c[prop];
    }
    return evaluation;
  }

}


interface AvailableOption {
  id: number;
  name: string;
}
