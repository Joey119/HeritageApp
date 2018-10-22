import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'evaluatortype' })
export class EvaluatorTypePipe implements PipeTransform {
  
  transform(id: number): string {
    var evaluatorTypes = [
      { id: 1, type: '传承人' },
      { id: 2, type: '企业' },
      { id: 3, type: '专家' },
      { id: 4, type: '政府' },
      { id: 5, type: '消费者' }
    ]
    return evaluatorTypes.filter(x => x.id == id)[0].type;
  }
}

