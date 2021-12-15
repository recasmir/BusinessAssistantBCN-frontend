import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap"
import { LoginFormComponent } from 'src/app/modules/login/login-form/login-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openLoginForm(): any {
    const modalRef = this.modalService.open(LoginFormComponent);
  }

}