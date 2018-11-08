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
  bestRoute: string;


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
              this.heritageGameAnalysisService.getHeritageGameAnalysis(Global.BASE_HERITAGE_GAME_ANALYSIS_ENDPOINT + this.heritage.heritageGameAnalysisId).subscribe(
                data => {
                  this.heritageGameAnalysis = data;
                  this.loadTree();
                }
              )
            }
            else {
              this.heritageGameAnalysis = {
                id: 0,
                heritageId: this.heritage.id,
                ciA: undefined,
                ciB: undefined,
                ii: undefined,
                piA: undefined,
                piB: undefined,
                vi5A: undefined,
                vi5B: undefined,
                vi4A: undefined,
                vi4B: undefined,
                vi3A: undefined,
                vi3B: undefined,
                vi1: undefined,
                ai4: undefined,
                ai3: undefined,
                ai2: undefined,
                aij: undefined,
                ai1: undefined,

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
              this.loadTree();
            }
          }
        )
      }
    });

  }

  onSubmit() {

    if (!this.userService.canEdit())
    {
      this.toastr.error("您没有添加或修改非物质文化遗产的权限。","权限验证失败")
      return;
    }

    var userId = this.userService.currentUserId();
    if (this.heritageGameAnalysis.id != 0) {
      this.heritageGameAnalysis.modifiedUserId = userId;
      this.heritageGameAnalysisService.updateHeritageGameAnalysis(Global.BASE_HERITAGE_GAME_ANALYSIS_ENDPOINT + this.heritageGameAnalysis.id, this.heritageGameAnalysis)
        .subscribe(
          data => {
            this.heritageGameAnalysis = data;
            this.loadTree();
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
      this.heritageGameAnalysisService.addHeritageGameAnalysis(Global.BASE_HERITAGE_GAME_ANALYSIS_ENDPOINT, this.heritageGameAnalysis)
        .subscribe(
          data => {
            this.heritageGameAnalysis = data;
            this.heritage.heritageGameAnalysisId = this.heritageGameAnalysis.id;
            this.heritageService.updateHeritage(Global.BASE_HERITAGE_ENDPOINT + this.heritage.id, this.heritage)
              .subscribe(
                result => {
                  this.heritage = result;
                  this.loadTree();
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

  analyse() {

    if (this.heritage.heritageGameAnalysisId && this.heritage.heritageGameAnalysisId != null && this.heritage.heritageGameAnalysisId != undefined) {
      this.heritageGameAnalysisService.getHeritageAnalysisBestRoute(Global.BASE_HERITAGE_GAME_ANALYSIS_ENDPOINT + 'getHeritageAnalysisBestRoute/' + this.heritage.heritageGameAnalysisId).subscribe(
        res => {
          this.bestRoute = "最优路径为: " + "R" + res.id + ": { " + res.routeValue + " }";          
        }
      );
    }
    else {
      this.toastr.error('请先进行利益相关者博弈计算。', '分析失败');
    }
  }

  showSuccess() {
    this.toastr.success('利益相关者博弈计算及保存成功。', '操作成功');
  }

  showError() {
    this.toastr.error('利益相关者博弈计算及保存失败。', '操作失败');
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
                  "label": "R1 { " + this.heritageGameAnalysis.route1 + " }"
                },
                {
                  "label": "R2 { " + this.heritageGameAnalysis.route2 + " }"
                }]
              },
              {
                "label": "消费者",
                "children": [{
                  "label": "R3 { " + this.heritageGameAnalysis.route3 + " }"
                },
                {
                  "label": "R4 { " + this.heritageGameAnalysis.route4 + " }"
                }]
              }]
            },
            {
              "label": "政府",
              "children": [{
                "label": "消费者",
                "children": [{
                  "label": "R5 { " + this.heritageGameAnalysis.route5 + " }"
                },
                {
                  "label": "R6 { " + this.heritageGameAnalysis.route6 + " }"
                }]
              },
              {
                "label": "消费者",
                "children": [{
                  "label": "R7 { " + this.heritageGameAnalysis.route7 + " }"
                },
                {
                  "label": "R8 { " + this.heritageGameAnalysis.route8 + " }"
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
                    "label": "R9 { " + this.heritageGameAnalysis.route9 + " }"
                  },
                  {
                    "label": "R10 { " + this.heritageGameAnalysis.route10 + " }"
                  }]
                },
                {
                  "label": "消费者",
                  "children": [{
                    "label": "R11 { " + this.heritageGameAnalysis.route11 + " }"
                  },
                  {
                    "label": "R12 { " + this.heritageGameAnalysis.route12 + " }"
                  }]
                }]
              },
              {
                "label": "政府",
                "data": "Home Folder",
                "children": [{
                  "label": "消费者",
                  "children": [{
                    "label": "R13 { " + this.heritageGameAnalysis.route13 + " }"
                  },
                  {
                    "label": "R14 { " + this.heritageGameAnalysis.route14 + " }"
                  }]
                },
                {
                  "label": "消费者",
                  "children": [{
                    "label": "R15 { " + this.heritageGameAnalysis.route15 + " }"
                  },
                  {
                    "label": "R16 { " + this.heritageGameAnalysis.route16 + " }"
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
                    "label": "R17 { " + this.heritageGameAnalysis.route17 + " }"
                  },
                  {
                    "label": "R18 { " + this.heritageGameAnalysis.route18 + " }"
                  }]
                },
                {
                  "label": "消费者",
                  "children": [{
                    "label": "R19 { " + this.heritageGameAnalysis.route19 + " }"
                  },
                  {
                    "label": "R20 { " + this.heritageGameAnalysis.route20 + " }"
                  }]
                }]
              },
              {
                "label": "政府",
                "data": "Home Folder",
                "children": [{
                  "label": "消费者",
                  "children": [{
                    "label": "R21 { " + this.heritageGameAnalysis.route21 + " }"
                  },
                  {
                    "label": "R22 { " + this.heritageGameAnalysis.route22 + " }"
                  }]
                },
                {
                  "label": "消费者",
                  "children": [{
                    "label": "R23 { " + this.heritageGameAnalysis.route23 + " }"
                  },
                  {
                    "label": "R24 { " + this.heritageGameAnalysis.route24 + " }"
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
