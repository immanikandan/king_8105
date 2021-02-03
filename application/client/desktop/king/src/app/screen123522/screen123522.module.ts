import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Screen123522Component } from './screen123522.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule, ReactiveFormsModule,
        AgGridModule,
        RouterModule.forChild([
            { path: '', component: Screen123522Component },
        ])
    ],
    declarations: [
        Screen123522Component,
    ]
})
export class Screen123522Module { }