import { Component, Input } from "@angular/core";

import { Project } from "../../projects/project.model";
import { PortfolioService } from "./portfolio.service.ts";

@Component({
  selector: 'portfolio-index-item',
  templateUrl: './project_index_item.component.html',
  styleUrls: ['./project_index_item.component.css']
})

export class PortfolioIndexItem {
  @Input() project: Project;

  constructor(private portfolioService: PortfolioService) {}
}
