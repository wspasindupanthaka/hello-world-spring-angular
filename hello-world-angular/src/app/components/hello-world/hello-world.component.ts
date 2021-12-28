import { Component, OnInit } from '@angular/core';
import { ResponseBody } from 'src/app/model/response-body';
import { HelloWorldService } from '../../service/hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html'
})
export class HelloWorldComponent implements OnInit {

  helloWorldResponse: ResponseBody = {};

  constructor(private helloWorldService: HelloWorldService) {}
  
  ngOnInit(): void {
    this.helloWorldService.helloWorld().subscribe(helloWorldResponse => {
      this.helloWorldResponse=helloWorldResponse;       
    });
  }
}
