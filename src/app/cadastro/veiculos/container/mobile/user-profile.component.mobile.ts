import {Component, EventEmitter, Output} from '@angular/core';
import { ApplicationStateService } from 'src/app/application-state.service';
import { HotelService } from '../../api/hotel.api.service';
import { Hotel } from '../../model/hotel';
import { HotelFilter } from '../../model/hotel-filter';
import { UserProfileComponent } from '../user-profile.component';


@Component({
  selector: 'app-user-profile-mobile',
  templateUrl: './user-profile.component.mobile.html',
  styleUrls: ['./user-profile.component.mobile.scss']
})
export class UserProfileComponentMobile extends UserProfileComponent {

  constructor(applicationStateService: ApplicationStateService, private hotelService: HotelService) {
    super(applicationStateService);
    this.hotelService.load(new HotelFilter());
  }

  get hotelList(): Hotel[] {
    return this.hotelService.hotelList;
  }


}
