import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  // constructor(applicationStateService: ApplicationStateService, private hotelService: HotelService) {
  //   super(applicationStateService);
  //   this.hotelService.load(new HotelFilter());
  // }

  // get hotelList(): Hotel[] {
  //   return this.hotelService.hotelList;
  // }


  filePath: string;
  myForm: FormGroup;

  constructor(applicationStateService: ApplicationStateService, public fb: FormBuilder) {
    super(applicationStateService);
    this.myForm = this.fb.group({
      img: [null],
      filename: ['']
    })
  }

  ngOnInit(): void { }

  imagePreview(e) {
    const file = (e.target as HTMLInputElement).files[0];
    alert(file)
    this.myForm.patchValue({
      img: file
    });

    this.myForm.get('img').updateValueAndValidity()

    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(file)
    alert(this.filePath)
  }

  submit() {
    console.log(this.myForm.value)
  }

  somethingChanged($event) {
    var message = "AAAA"//(_selector.checked) ? "Toggle Switch is on" : "Toggle Switch is off";
    ['ScrollCallback'].postMessage('END OF PAGE!!!');
    // if (messageHandler) {
    //   Print.postMessage(message);
    // }
  }

}
