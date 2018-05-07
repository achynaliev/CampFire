import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Project } from "../../projects/project.model";
import { PortfolioService } from "./portfolio.service.ts";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
  projects: Project[];

  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    var username = this.route.snapshot.params.username;
    this.portfolioService.getProjects(username)
    .subscribe(
      (projects: Project[]) => {
        this.projects = projects;
      }
    )
  }
}
