import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from "./common/header/header.component";
import { ProjectsComponent } from './features/projects/projects.component';
import { ResumeComponent } from './features/resume/resume.component';
import { LinksComponent } from './features/links/links.component';
import { HomeComponent } from './features/home/home.component';
import { CardComponent } from './common/card/card.component';
import { ListComponent } from './common/list/list.component';
import { TableComponent } from './common/table/table.component';
import { ContactFormComponent } from './common/contact-form/contact-form.component';
import { AddressFormComponent } from './common/address-form/address-form.component';

@NgModule({
    declarations: [
        AppComponent,
        ProjectsComponent,
        ResumeComponent,
        LinksComponent,
        HomeComponent,
        CardComponent,
        ListComponent,
        TableComponent,
        ContactFormComponent,
        AddressFormComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FooterComponent,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        HeaderComponent
    ]
})
export class AppModule { }
