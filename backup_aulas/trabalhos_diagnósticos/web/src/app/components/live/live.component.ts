import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  videos = [
    {
      indice: 0,
      titulo: 'SIX INVITATIONAL 2022 - FINAIS SIX INVITATIONAL - Rainbow Six Siege',
      video: 'https://www.youtube.com/embed/JnV9oCfo1Kw'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
