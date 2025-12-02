import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit{
  @ViewChild('form') form? : ElementRef<HTMLFormElement>;
  ngOnInit(): void {
    console.log("OnInit", this.form?.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit",this.form?.nativeElement);
  }
  onSubmit(title: string, ticketText: string){
    console.log(title);
    console.log(ticketText);

    this.form?.nativeElement.reset();
  }
}
