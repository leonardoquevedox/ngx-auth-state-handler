/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxAuthStateHandler } from './auth-state-handler'

@NgModule({
    imports: [CommonModule],
    providers: [NgxAuthStateHandler]
})
export class NgxAuthStateHandlerModule { }