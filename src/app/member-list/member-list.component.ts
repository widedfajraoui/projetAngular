import { Component, OnInit } from '@angular/core';
import { Membre } from 'src/Models/Membre';
import { MemberService } from 'src/Services/member.service';
import { GLOBAL } from '../app-config';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cin', 'name', 'createDate','cv','type','action'];
  datasource : Membre[] ;
  constructor(private Ms:MemberService) {
    this.datasource = this.Ms.tab
   }

  ngOnInit(): void {
  }

}





