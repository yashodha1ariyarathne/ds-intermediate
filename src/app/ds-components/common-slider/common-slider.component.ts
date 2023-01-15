import { Component, Input, OnInit } from '@angular/core';
import { ISliderConfig } from '../ds-types';
const selectedDotColor = "#F9A369";

@Component({
  selector: 'app-common-slider',
  templateUrl: './common-slider.component.html',
  styleUrls: ['./common-slider.component.scss']
})
export class CommonSliderComponent implements OnInit {

  @Input() sliderData: ISliderConfig[];

  currentContent;
  currentContentIndex = -1;
  currentHeader;
  currentHeader2;

  constructor() { }

  ngOnInit(): void {

    let defaultSlide = this.sliderData.find(el => el.default);
    this.currentContent = defaultSlide.content;
    this.currentHeader = defaultSlide.header;
    this.currentHeader2 = defaultSlide.header2;
    defaultSlide.dotPeref.color = selectedDotColor;
    // this.currentContentIndex = 0;
    
  }

  setContent(aSlide: ISliderConfig, idx: number){

    this.currentContent = aSlide.content;
    this.currentHeader = aSlide.header;
    this.currentHeader2 = aSlide.header2;

    this.sliderData.forEach((el, index) => {

      if(index === idx)
        el.dotPeref.color = selectedDotColor;
      else
        el.dotPeref.color = aSlide.dotPeref.defaultColor;
    })
    
  }

}
