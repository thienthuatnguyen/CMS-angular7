import { NgModule } from "../../node_modules/@angular/core";
import { TranslationChildModule } from './translation.child.module';
import { HeaderComponent } from 'src/component/header/header.component';
import { FooterComponent } from 'src/component/footer/footer.component';


@NgModule({
    imports: [
        TranslationChildModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    entryComponents: [
    ]
})
export class ComponentsModule {

}