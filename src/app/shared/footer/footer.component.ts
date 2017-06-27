import { Component, HostBinding } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'footer-cmp',
    templateUrl: 'footer.component.html',
    styles: [`.copyright span{margin-right: 30px;}`]
})

export class FooterComponent{
    test : Date = new Date();
}
