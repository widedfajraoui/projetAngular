import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Membre } from 'src/Models/Membre';
import { MemberService } from 'src/Services/member.service';
import { GLOBAL } from '../app-config';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cin', 'name', 'createDate','cv','type','action'];
  datasource : MatTableDataSource<Membre> ;
  constructor(private Ms:MemberService,private dialog:MatDialog) {
    this.datasource = new MatTableDataSource(this.Ms.tab);
   }
   getData() :void{
     this.Ms.GetAll().then((data) => this.datasource.data=data);
   }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    
}
  ngOnInit(): void {
  }
  delete(CurrentId : any){
   const dialogRef = this.dialog.open(ConfirmDialogComponent,{});
   dialogRef.afterClosed().pipe().subscribe(
     isDeleteConfirmed =>{
     if(isDeleteConfirmed){
      this.Ms.deleteMemberById(CurrentId).then(()=> this.getData());
     }}
     )
  
 }
}





