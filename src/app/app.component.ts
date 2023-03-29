import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { EXTRAS, PLANS } from 'src/@shared/constants/form-data';
import { Extra, Plan } from 'src/@shared/models/commonType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel = {} as NgbCarousel;
  // title = 'MultiStepFormSelf';

  // get the total cost
  get getTotal(): number{
    const field = this.planForm.get('year')?.value ? 'yearPrice' : 'monthPrice'; 
    let selectedPlan = this.planForm.get('plan')?.value;
    let selectedAddons = this.addOnForm.get('addOns')?.value;
    let extraPrice = selectedAddons?.reduce((prev,curr) => prev + curr[field],0) || 0; 
    return selectedPlan ? selectedPlan[field] + extraPrice : 0;
  }

  public carouselIndex = 0;
  public btnDisabled = false;
  // different options
  public readonly availablePlans: Plan[] = PLANS;
  public readonly availableAddOns: Extra[] = EXTRAS;

  // create form for steps - NG reactive forms
  public infoForm;
  public planForm;
  public addOnForm;


  // 
  constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder) {
    // step1 info
    this.infoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],//,Validators.email
      phone: ['', Validators.required],//, Validators.pattern(new RegExp('^\\+?1\\d{9,11}'))
    })
    // step2 plan
    this.planForm = this.fb.group({
      plan: [this.availablePlans[0], Validators.required],
      year: [false],
    })
    // step3 add ons
    this.addOnForm = this.fb.group({
      addOns: [[] as Extra[]],
    })
  }

  ngOnInit() {
    this.primengConfig.ripple = true; // ripple: enabled when ripple = true, and animation for buttons or other component
    this.carouselIndex = 0; // for testing
  }

  //#region  carousel control
  /**
   * @description: will be triggered before the silde transition starts
   */
  onSlideStart(): void {
    this.btnDisabled = true;
  }

  /**
   * @description: will be triggered after the slide transition is completed
   */
  onSlideEnd(): void {
    this.btnDisabled = false;
  }

  onBack(): void {
    this.carouselIndex--;
    this.carousel.prev();
  }

  onNext(): void {
    this.carouselIndex++;
    this.carousel.next();
  }

  changePlan(event: MouseEvent): void {
    // prevent default and go to plan form
    event.preventDefault();
    this.carousel.select('plan'); //参数为html[id] Navigates to a slide with the specified identifier.
    this.carouselIndex = 1;
  }

  onReset():void{
    this.carousel.select('info');
    this.carouselIndex = 0;

    //  reset forms
    this.infoForm.reset();
    this.planForm.reset();
    this.addOnForm.reset();
  }

  //#endregion carousel control
}