import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit{

  ngOnInit(): void {
    
    this.getUsuarios().then(usuarios => {
      console.log(usuarios)
    });

    // const promesa = new Promise((resolve,reject) => {
    //   if(false){

    //     resolve('Hola soy la promesa');
    //   }else{
    //     reject('algo salio mal');
    //   }

    // });

  //   promesa.then( (mensaje) => {
  //     console.log('Hey termine la promesa, ', mensaje)
  //   }).catch(error => console.log('Error en mi promesa: ', error))
  //   console.log('Fin del init')
  }

  getUsuarios(){
    return new Promise(resolve => {

      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data))

    })
  }

  

}
