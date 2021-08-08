import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Member, TeamService } from 'src/app/service/team/team.service';

@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css'],
})
export class TeamEditComponent implements OnInit {
  constructor(public teamService: TeamService) {}
  checkTeamInputs() {
    const photo: any = document.getElementById('photo');
    const fullName: any = document.getElementById('fullName');
    const role: any = document.getElementById('role');
    const phone: any = document.getElementById('phone');
    const mail: any = document.getElementById('mail');
    if (
      photo.value &&
      fullName.value &&
      role.value &&
      phone.value &&
      mail.value
    ) {
      return false;
    }
    return true;
  }

  ngOnInit(): void {
    this.teamService.getMember().subscribe((allTeam: Member[]) => {
      console.log(allTeam);
      this.teamService.member = allTeam;
    });
  }

  public addMember(form: NgForm) {
    console.log(form.value);
    console.log(this.teamService.member);
    this.teamService.addMember(form.value).subscribe((newMember: Member) => {
      this.teamService.member.push(newMember);
    });
  }
}
