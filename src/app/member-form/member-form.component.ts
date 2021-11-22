import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form : any;
  currentId:any;
  item1 : any;
  constructor(private memberService: MemberService,private router : Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentId= this.activatedRoute.snapshot.params.id;
    if(!!this.currentId) //!!:if truly ;;je suis dans edit
    {
        this.memberService.getMemberById(this.currentId).then( (item) =>{this.item1=item ; this.intform(this.item1) });
    }
    else //je suis dans create
    {this.intform(null);}
  }
  intform(item:any):void {
    this.form = new FormGroup({
      cin : new FormControl (item?.cin,[Validators.required]),
      name : new FormControl (item?.name,[Validators.required]),
      cv : new FormControl (item?.cv,[Validators.required]),
      type : new FormControl (item?.type,[Validators.required])
    })
  }
  OnSubmit():void{
    console.log(this.form.value);
    const objectToSubmit = {...this.item1, ...this.form.value};
    this.memberService.saveMember(objectToSubmit).then(() => this.router.navigate(["./members"]))
  }
}
