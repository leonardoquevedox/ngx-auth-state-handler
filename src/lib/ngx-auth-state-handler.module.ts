/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxAuthStateHandler } from './ngx-auth-state-handler.service'

@NgModule({
    imports: [CommonModule],
    providers: [NgxAuthStateHandler]
})
export class NgxAuthStateHandlerModule { }