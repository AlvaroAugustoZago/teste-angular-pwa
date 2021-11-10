import { Component, EventEmitter, Output } from '@angular/core';
import { ApplicationStateService } from 'src/app/application-state.service';
import { HotelService } from '../../api/hotel.api.service';
import { Hotel } from '../../model/hotel';
import { HotelFilter } from '../../model/hotel-filter';
import { UserProfileComponent } from '../user-profile.component';


@Component({
  selector: 'app-user-profile-desktop',
  templateUrl: './user-profile.component.desktop.html',
  styleUrls: ['./user-profile.component.desktop.scss']
})
export class UserProfileComponentDesktop extends UserProfileComponent {

  constructor(applicationStateService: ApplicationStateService, private hotelService: HotelService) {
    super(applicationStateService);
  }
  filter = new HotelFilter();
  selectedHotel!: Hotel;
  feedback: any = {};

  get hotelList(): Hotel[] {
    return this.hotelService.hotelList;
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.hotelService.load(this.filter);
  }

  select(selected: Hotel): void {
    this.selectedHotel = selected;
  }

  delete(hotel: Hotel): void {
    if (confirm('Are you sure?')) {
      this.hotelService.delete(hotel).subscribe(() => {
        this.feedback = { type: 'success', message: 'Delete was successful!' };
        setTimeout(() => {
          this.search();
        }, 1000);
      },
        err => {
          this.feedback = { type: 'warning', message: 'Error deleting.' };
        }
      );
    }
  }
}



