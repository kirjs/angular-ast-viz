import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const systemKeys = new Set(['type', 'start', 'end', 'loc', 'comments', 'tokens', 'sourceType', 'directives', 'extra']);

@Component({
  selector: 'app-ast-tree',
  templateUrl: './ast-tree.component.html',
  styleUrls: ['./ast-tree.component.css']
})
export class AstTreeComponent implements OnInit {
  @Input() node = {};
  @Input() key: string;
  @Output() selectNode = new EventEmitter();


  get specialKeys() {
    return Object.keys(this.node).filter(key => !systemKeys.has(key));
  }

  get stringKeys() {
    return this.specialKeys.filter(key => typeof this.node[key] === 'string' || typeof this.node[key] === 'number');
  }

  get objectKeys() {
    return this.specialKeys.filter(key => typeof this.node[key] === 'object').reverse();
  }

  get isArray() {
    return Array.isArray(this.node);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
