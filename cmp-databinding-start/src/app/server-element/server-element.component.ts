import { Component, OnInit, Input, ViewEncapsulation,OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated //None,Native
})
export class ServerElementComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef {
  nativeElement: any;
  descendants: boolean;
  first: boolean;
  read: any;
  isViewQuery: boolean;
  selector: any;

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name : string;
  @ViewChild('heading') header : ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);

  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text content : '+this.header.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDocheck called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('Text content : '+this.header.nativeElement.textContent);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }

}
