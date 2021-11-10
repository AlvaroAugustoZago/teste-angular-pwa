import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../api/hotel.api.service';
import { Hotel } from '../../model/hotel';

@Component({
    selector: 'app-hotel-edit',
    templateUrl: './hotel-edit.component.html'
})
export class HotelEditComponent implements OnInit {

    id: string;
    hotel: Hotel = {
        name: 'Budget Hotel',
        city: 'ttt',
        id: 2
    } as Hotel;
    feedback: any = {};

    constructor(
        
        
        private hotelService: HotelService) {
    }

    ngOnInit() {
        // this
        //     .route
        //     .params
        //     .pipe(
        //         map(p => p.id),
        //         switchMap(id => {
        //             if (id === 'new') { return of({} as Hotel); }
        //             return this.hotelService.findById(id);
        //         })
        //     )
        //     .subscribe(hotel => {
        //         this.hotel = hotel;
        //         this.feedback = {};
        //     },
        //         err => {
        //             this.feedback = { type: 'warning', message: 'Error loading' };
        //         }
        //     );
    }

    save() {
        // this.hotelService.save(this.hotel).subscribe(
        //     hotel => {
        //         this.hotel = hotel;
        //         this.feedback = { type: 'success', message: 'Save was successful!' };
        //         setTimeout(() => {
        //             this.router.navigate(['/hotels']);
        //         }, 1000);
        //     },
        //     err => {
        //         this.feedback = { type: 'warning', message: 'Error saving' };
        //     }
        // );
    }

    cancel() {
        // this.router.navigate(['/hotels']);
    }
}
