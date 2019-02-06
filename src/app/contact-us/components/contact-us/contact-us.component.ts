import { Component, Optional } from '@angular/core';
import { GeneratorService } from 'src/app/shared/services/generator.service';
import { ConfigOptionsService } from 'src/app/shared/services/config-options.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  generatorService: GeneratorService;

  constructor(
    @Optional() private localStorageService: LocalStorageService
  ) {
    this.generatorService = new GeneratorService(5);
  }

  getRandomString(): string {
    return this.generatorService.generate();
  }

  getConfigInfo(): object {
    return ConfigOptionsService.getConfig();
  }

}
