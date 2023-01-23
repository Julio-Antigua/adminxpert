import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('value') progreso!: number;
  @Input() btnClass: string = 'btn-primary';

  @Output('value') valorSalida: EventEmitter<number> = new EventEmitter();


  changeValue(value: number){

    if(this.progreso >= 100 && value >= 0){
      this.valorSalida.emit(100);
        this.progreso = 100;
    }
    if(this.progreso <= 0 && value < 0){
      this.valorSalida.emit(0);
        this.progreso = 0;
    }

    this.progreso += value;
    this.valorSalida.emit(this.progreso);
  }

  onChange(valueNew: number){
    if(valueNew >= 100){
      this.progreso = 100;
    }else if(valueNew <= 0){
      this.progreso = 0;
    }else {
      this.progreso = valueNew;
    }
    this.valorSalida.emit(this.progreso);
  }
}
