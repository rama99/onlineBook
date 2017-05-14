import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    constructor() { }

    nodes = [
   /* {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }*/
  ];

    loaddata() {

        /*  this.nodes.push( {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    }); */
    
        return this.nodes;
    }

    addChapter(newChapter:string) {

        this.nodes.push( {
      id: 4,
      name: newChapter,
      overView:"All about overview",
      children: [
        { id: 2, name: 'child1' , children:  [
        { id: 2, name: 'A'},
        { id: 3, name: 'B'}
      ] }
      ]
    });


    }
}