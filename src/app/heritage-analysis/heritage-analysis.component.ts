import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Tree } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
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
  param: any;

  @ViewChild('expandingTree')
  expandingTree: Tree;

  decisionTree: TreeNode[];




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
