import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from "./common/card/card.component";
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from "./common/header/header.component";
import { HomeComponent } from './features/home/home.component';
import { LinksComponent } from './features/links/links.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ResumeComponent } from './features/resume/resume.component';

@NgModule({
    declarations: [
        AppComponent,
        ProjectsComponent,
        ResumeComponent,
        LinksComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FooterComponent,
        BrowserAnimationsModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        HeaderComponent,
        CardComponent
    ]
})
export class AppModule { }
