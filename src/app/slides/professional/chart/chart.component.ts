import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"]
})
export class ChartComponent implements OnInit {
  type = "multilevelpie";
  dataFormat = "json";
  width = "100%";
  height = "100%";
  @Input() data;
  constructor() {
  }

  ngOnInit() {
  }
}
