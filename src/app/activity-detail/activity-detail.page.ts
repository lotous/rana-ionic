import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivityService} from '../@core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
  @Input() id;

  public activityDetail: Observable<Activity>;

  constructor(private activityService: ActivityService, private activatedRoute: ActivatedRoute) {
    this.id = '';
  }

  ngOnInit() {
    const activityID = this.activatedRoute.snapshot.params.activityID;
    this.activityDetail = this.activityService.getActivity(activityID);
  }

  share(){}

  async openModal(){}
}
