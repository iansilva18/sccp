import { Component } from '@angular/core';

//imports
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    //criar o objeto storage dentro do construtor
    private storage: Storage,
  ) {}

  async ngOnit() {
    await this.storage.create();
  }
}
