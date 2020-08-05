/* Copyright 2020 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
import {Component, ChangeDetectionStrategy} from '@angular/core';
import {select, Store} from '@ngrx/store';

import {State} from '../../../../app_state';
import {getRunSelection} from '../../../../core/store/core_selectors';

/** @typehack */ import * as _typeHackRxjs from 'rxjs';

@Component({
  selector: 'npmi-main',
  template: `
    <main-component [runs]="runs$ | async"></main-component>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainer {
  readonly runs$ = this.store.pipe(select(getRunSelection));

  constructor(private readonly store: Store<State>) {}
}
