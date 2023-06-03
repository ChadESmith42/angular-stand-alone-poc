import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link.model';

@Component({
  selector: 'cbc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [ NgFor, NgIf ]
})
export class FooterComponent implements OnInit {
  @Input() copyrightStartYear?: number;
  @Input() links?: Link[];
  @Input() title: string = '';
  copyrightDateRange: string = '';
  ngOnInit(): void {
    this.copyrightDateRange = this.configureCopyrightDateRange();
  }

  configureCopyrightDateRange(): string {
    const now: number = new Date().getFullYear();
    return (this.copyrightStartYear !== undefined && this.copyrightStartYear < now) ? `${this.copyrightStartYear}-${now}` : `${now}`;
  }

}
