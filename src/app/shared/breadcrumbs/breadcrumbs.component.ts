import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from "@angular/router";
import { map, Subscription } from 'rxjs';
import { filter } from "rxjs/internal/operators/filter";


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public title!: string;
  public titleSubs$: Subscription;

  constructor(private router: Router) {
    this.titleSubs$ = this.getArgumentsRouter()
              .subscribe( ({title}) => { 
              console.log(title);
              this.title = title;
              document.title = `AdminXpert - ${title}`;
            });
  }
  
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getArgumentsRouter(){

    return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: any) =>  event.snapshot.firstChild === null ),
      map( (event: any) =>  event.snapshot.data )
    );
    
  }


  
}
