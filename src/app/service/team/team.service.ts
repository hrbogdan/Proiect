import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  public member: Member[] = [];
  constructor(private http: HttpClient) {}

  public getMember(): Observable<Member[]> {
    return this.http.get<Member[]>('http://localhost:3000/team');
  }
  public addMember(member: Member): Observable<Member> {
    return this.http.post<Member>('http://localhost:3000/team', member);
  }
  public deleteMember(member: Member): Observable<Member> {
    return this.http.delete<Member>(`http://localhost:3000/team/${member.id}`);
  }
}

export interface Member {
  id: number;
  photo: string;
  fullName: string;
  role: string;
  phone: string;
  mail: string;
}
