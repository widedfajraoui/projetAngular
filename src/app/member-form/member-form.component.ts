import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form : any;
  constructor(private memberService: MemberService,private router : Router) { }

  ngOnInit(): void {
    this.intform();
  }
  intform() {
    this.form = new FormGroup({
      cin : new FormControl (null,[Validators.required]),
      name : new FormControl (null,[Validators.required]),
      cv : new FormControl (null,[Validators.required]),
      type : new FormControl (null,[Validators.required])
    })
  }
  OnSubmit():void{
    console.log(this.form.value);
    const objectToSubmit = this.form.value;
    this.memberService.saveMember(objectToSubmit).then(() => this.router.navigate(["./members"]))
  }
}
