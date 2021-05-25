import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText;

  lists = [
    {
      type: "Technical",
      title: "Terminal instructables",
    },
    {
      type: "Technical",
      title: "Installtion guides",
    },
    {
      type: "Human Resources",
      title: "Career opportunities",
    },
    {
      type: "Financial",
      title: "Customer onboarding",
    },
    {
      type: "Marketing",
      title: "Outlet Branding",
    },
    {
      type: "Financial",
      title: "Accounting procedures",
    },
    {
      type: "Human Resources",
      title: "Training",
    },
    {
      type: "Marketing",
      title: "Printing guidance",
    },
    {
      type: "Technical",
      title: "Technical support",
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
