import { Component, OnInit } from '@angular/core';
import { Screen123522Service } from './screen123522.service';

@Component({
  selector: 'app-screen123522',
  templateUrl: './screen123522.component.html',
  styleUrls: ['./screen123522.component.scss'],
})

export class Screen123522Component implements OnInit {
    columnDefs: any = [];
    public firebase = {
        name: '',
        email: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private screen123522Service: Screen123522Service,
    ) { }

    ngOnInit() {
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}