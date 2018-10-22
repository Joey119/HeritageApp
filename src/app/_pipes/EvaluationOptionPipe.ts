import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'evaluationoption' })
export class EvaluationOptionPipe implements PipeTransform {

  transform(id: number): string {
    var evaluationOptions = [
        { id: 1, option: '不同意' },
        { id: 2, option: '不太同意' },
        { id: 3, option: '介于中间' },
        { id: 4, option: '比较同意' },
        { id: 5, option: '非常同意' }
    ]
    return evaluationOptions.filter(x => x.id == id)[0].option;
  }
}

