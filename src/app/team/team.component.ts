import { Component, OnInit } from '@angular/core';
import { Member, TeamService } from '../service/team/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  constructor(public teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getMember().subscribe((allTeam: Member[]) => {
      this.teamService.member = allTeam;
    });
  }
}
