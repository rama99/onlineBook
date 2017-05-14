import { Component , OnInit , ViewChild , Input , ElementRef , AfterViewInit } from '@angular/core';
import { AppService } from './app.service';
import { TreeComponent } from 'angular-tree-component';

//import { Overlay } from 'angular2-modal';
//import { Modal } from 'angular2-modal/plugins/bootstrap';

import { ContextMenuService , ContextMenuComponent} from 'ngx-contextmenu';

@Component({
    selector:'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit , AfterViewInit {

  nodes:any;
  content:string;

  public items = [
      { name: 'John', otherProperty: 'Foo' },
      { name: 'Joe', otherProperty: 'Bar' }
  ];

@ViewChild(TreeComponent) tree: TreeComponent;

@ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;


    newChapter:string;
    newOverView:string;

    @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;


    constructor(private service:AppService ,
    private contextMenuService: ContextMenuService
    //, public modal: Modal
    ) { }    

    ngOnInit() {
      this.nodes = this.service.loaddata();        
    }

    ngAfterViewInit() {
      
    }

    go(node:any) {
      alert(JSON.stringify(node.data));
      this.content = JSON.stringify(node.data);
    }

    addChapter() {

      console.log(this.newChapter);      
      this.service.addChapter(this.newChapter);
      this.tree.treeModel.update();
      //lgModal.hide();

    }

    onClick() {

  /*  this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open(); */
  }

}