// tslint:disable:no-magic-numbers

import { Component } from '@angular/core';
import { OriginalClassName } from '../../../core/decorators';
import { DtChartOptions, DtChartSeries } from '@dynatrace/angular-components';
import { generateData } from './docs-micro-chart.service';

@Component({
  template: '<dt-micro-chart [options]="options" [series]="series"></dt-micro-chart>',
})
@OriginalClassName('MicroChartColumnsExampleComponent')
export class MicroChartColumnsExampleComponent {
  options: DtChartOptions = {
    chart: {
      type: 'column',
    },
  };

  series: DtChartSeries = {
    name: 'Requests',
    data: generateData(40, 200000, 300000, 1370304000000, 900000),
  };
}
