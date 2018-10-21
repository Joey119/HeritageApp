import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Tree } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';
import { IHeritage, IHeritageGameAnalysis } from '../_models';
import { HeritageService, UserService, HeritageGameAnalysisService } from '../_services';
import { Global } from '../_shared';

@Component({
  selector: 'app-heritage-analysis',
  templateUrl: './heritage-analysis.component.html',
  styleUrls: ['./heritage-analysis.component.scss']
})
export class HeritageAnalysisComponent implements OnInit {

  heritage: IHeritage;
  heritageGameAnalysis: IHeritageGameAnalysis;
  param: any;

  @ViewChild('expandingTree')
  expandingTree: Tree;
  decisionTree: TreeNode[];


  constructor(private route: ActivatedRoute,
    private heritageService: HeritageService,
    private heritageGameAnalysisService: HeritageGameAnalysisService,
    private userService: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.param = params['id'];
      // check if ID exists in route & call update or add methods accordingly
      if (this.param && this.param != null && this.param != undefined) {
        this.heritageService.getHeritage(Global.BASE_HERITAGE_ENDPOINT + this.param).subscribe(
          result => {
            this.heritage = result;

            if (this.heritage.heritageGameAnalysisId && this.heritage.heritageGameAnalysisId != null && this.heritage.heritageGameAnalysisId != undefined) {
              this.heritageGameAnalysisService.getHeritageGameAnalysis(Global.BASE_HERITAGE_GAME_ANALYSIS_ENDPOINT).subscribe(
                data => {
                  this.heritageGameAnalysis = data;
                }
              )
            }
            else {
              this.heritageGameAnalysis = {
                id: 0,
                heritageId: this.heritage.id,
                ciA: 0.0,
                ciB: 0.0,
                ii: 0.0,
                piA: 0.0,
                piB: 0.0,
                vi5A: 0.0,
                vi5B: 0.0,
                vi4A: 0.0,
                vi4B: 0.0,
                vi3A: 0.0,
                vi3B: 0.0,
                vi1: 0.0,
                ai4: 0.0,
                ai3: 0.0,
                ai2: 0.0,
                aij: 0.0,
                ai1: 0.0,

                route1: '',
                route2: '',
                route3: '',
                route4: '',
                route5: '',
                route6: '',
                route7: '',
                route8: '',
                route9: '',
                route10: '',
                route11: '',
                route12: '',
                route13: '',
                route14: '',
                route15: '',
                route16: '',
                route17: '',
                route18: '',
                route19: '',
                route20: '',
                route21: '',
                route22: '',
                route23: '',
                route24: '',
                createdUserId: 0,
                createdUserName: '',
                createdOn: undefined,
                modifiedUserId: 0,
                modifiedUserName: '',
                modifiedOn: undefined
              }
            }
          }
        )
      }
    });

    this.loadTree();

  }

  onSubmit() {

    var userId = this.userService.currentUserId();
    if (this.heritageGameAnalysis.id != 0) {
      this.heritageGameAnalysis.modifiedUserId = userId;
      this.heritageGameAnalysisService.updateHeritageGameAnalysis(Global.BASE_HERITAGE_ENDPOINT + this.heritageGameAnalysis.id, this.heritageGameAnalysis)
        .subscribe(
          data => {
            this.heritageGameAnalysis = data;
            this.showSuccess();
          },
          error => {
            this.showError();
          }
        );
    }
    else {
      this.heritageGameAnalysis.createdUserId = userId;
      this.heritageGameAnalysis.modifiedUserId = userId;
      this.heritageGameAnalysisService.addHeritageGameAnalysis(Global.BASE_HERITAGE_ENDPOINT, this.heritageGameAnalysis)
        .subscribe(
          data => {
            this.heritageGameAnalysis = data;
            this.heritage.heritageGameAnalysisId = this.heritageGameAnalysis.id;
            this.heritageService.updateHeritage(Global.BASE_HERITAGE_ENDPOINT + this.heritage.id, this.heritage)
              .subscribe(
                result => {
                  this.heritage = result;
                  this.showSuccess();
                }
              )
          },
          error => {
            this.showError();
          }
        );
    }

  }

  showSuccess() {
    this.toastr.success('Heritage Game Analysis Saved Successfully', 'Succeeded');
  }

  showError() {
    this.toastr.error('Failed to Save Heritage Game Analysis!', 'Failed');
  }

  loadTree() {
    this.decisionTree = [
      {
        "label": "传承人",
        "children": [
          {
            "label": "专家",
            "children": [{
              "label": "政府",
              "children": [{
                "label": "消费者",
                "children": [{
                  "label": "R1"
                },
                {
                  "label": "R2"
                }]
              },
              {
                "label": "消费者",
                "children": [{
                  "label": "R3"
                },
                {
                  "label": "R4"
                }]
              }]
            },
            {
              "label": "政府",
              "children": [{
                "label": "消费者",
                "children": [{
                  "label": "R5"
                },
                {
                  "label": "R6"
                }]
              },
              {
                "label": "消费者",
                "children": [{
                  "label": "R7"
                },
                {
                  "label": "R8"
                }]
              }]
            }]
          },
          {
            "label": "企业",
            "children": [{
              "label": "专家",
              "children": [{
                "label": "政府",
                "children": [{
                  "label": "消费者",
                  "children": [{
                    "label": "R9"
                  },
                  {
                    "label": "R10"
                  }]
                },
                {
                  "label": "消费者",
                  "children": [{
                    "label": "R11"
                  },
                  {
                    "label": "R12"
                  }]
                }]
              },
              {
                "label": "政府",
                "data": "Home Folder",
                "children": [{
                  "label": "消费者",
                  "children": [{
                    "label": "R13"
                  },
                  {
                    "label": "R14"
                  }]
                },
                {
                  "label": "消费者",
                  "children": [{
                    "label": "R15"
                  },
                  {
                    "label": "R16"
                  }]
                }]
              }]
            },
            {
              "label": "专家",
              "data": "De Niro Movies",
              "children": [{
                "label": "政府",
                "children": [{
                  "label": "消费者",
                  "children": [{
                    "label": "R17"
                  },
                  {
                    "label": "R18"
                  }]
                },
                {
                  "label": "消费者",
                  "children": [{
                    "label": "R19"
                  },
                  {
                    "label": "R20"
                  }]
                }]
              },
              {
                "label": "政府",
                "data": "Home Folder",
                "children": [{
                  "label": "消费者",
                  "children": [{
                    "label": "R21"
                  },
                  {
                    "label": "R22"
                  }]
                },
                {
                  "label": "消费者",
                  "children": [{
                    "label": "R23"
                  },
                  {
                    "label": "R24"
                  }]
                }]
              }]
            }]
          }

        ]
      }

    ]

    this.decisionTree.forEach(node => {
      this.expandRecursive(node, true);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

}
