import { NgModule  ,   } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TreeModule } from 'angular-tree-component';
import { AppService } from './app.service';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ContextMenuModule } from 'ngx-contextmenu';

//import { ModalModule } from 'angular2-modal';
//import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

@NgModule({
    imports:[BrowserModule , 
    CommonModule , 
    FormsModule ,  
    TreeModule ,
    ModalModule.forRoot(),
    ContextMenuModule
    //ModalModule ,
    //BootstrapModalModule

    ],
    exports:[],
    declarations:[AppComponent],
    providers:[AppService],
    bootstrap:[AppComponent]
})

export class AppModule { }
