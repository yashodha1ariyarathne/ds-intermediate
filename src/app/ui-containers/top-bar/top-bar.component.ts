import { Component, OnInit } from '@angular/core';
import { IMessageStream, Interconnect } from 'ng-interconnect';
import { MainViews } from 'src/app/app.types';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  private changeView: IMessageStream | Promise<IMessageStream>;
  _MainViews = MainViews;

  constructor(private interconnect: Interconnect) {

    this.changeView = interconnect.connectToListener('leftbar/changeView', 'topbar');
    if (this.changeView['then']) {
      this.changeView['then']((notifier) => this.changeView = notifier);
    }

  }

  ngOnInit(): void {
  }

  userChangeView(viewId, showBackground: boolean, showCards: boolean){

    (this.changeView as IMessageStream).emit({viewId, showBackground, showCards});


  }

}
