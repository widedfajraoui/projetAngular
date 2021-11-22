import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Membre } from 'src/Models/Membre';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  tab : Membre[] = [];
 

  constructor(private httpClient : HttpClient
    ) { 
    this.tab = GLOBAL._DB.membres;
  }
  getMemberById(id:string):Promise<Membre>
  {
    //return this.httpClient.get<Membre>('LinktoRestApi').toPromise();
    return new Promise((resolve =>resolve (this.tab.filter(item => item.id===id)[0]??null)));
      
    
  }
  saveMember(member : Membre) : Promise<Membre> {
    //return this.httpClient.post<Member>('linkToAPI'? member).toPromise();
    const memberToSave = {
      ...member , 

    }
    memberToSave.id = member.id ?? Math.ceil(Math.random ()* 10000).toString();
    memberToSave.createDate = member.createDate ?? new Date().toISOString();
    this.tab = [memberToSave, ...this.tab.filter(item => item.id != memberToSave.id )]
    return new Promise (resolve => resolve(memberToSave))
  }
  deleteMemberById(CurrentId:any) : Promise<void>{
    //return this.httpClient.delete<void>('linkToAPI').toPromise();
    this.tab = this.tab.filter((item) =>item.id != CurrentId)
    return new Promise(resolve => resolve());

  }
  GetAll():Promise<Membre[]>
  {
    //return this.httpClient.get<Membre[]>("linktoApi").toPromise;
    return new Promise(resolve => resolve(this.tab));
  }
}
