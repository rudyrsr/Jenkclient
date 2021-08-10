import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: "code-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  // icons source: https://www.flaticon.com/packs/constructions-flat/6
  cards = [
    {
      id: "humanResources",
      title: "Human Resources",
      iconPath: '/assets/images/icons/human-resources.png',
      defaultPath: '/human-resources/employees',
      cols: 1,
      rows: 1
    },
    {
      id: "securityIssues",
      title: "Security Issues",
      iconPath: '/assets/images/icons/security-issues.png',
      defaultPath: '/security-issues/incident',
      cols: 1,
      rows: 1
    },
    {
      id: "catalogs",
      title: "Catalogs",
      iconPath: '/assets/images/icons/catalogs.png',
      defaultPath: '/catalogs/incidentCatalog',
      cols: 1,
      rows: 1
    },
    {
      id: "machinery",
      title: "Machinery",
      iconPath: '/assets/images/icons/machinery.png',
      defaultPath: '/construction-machinery/machinery',
      cols: 1,
      rows: 1
    },
    {
      id: "securityItems",
      title: "Security Items",
      iconPath: '/assets/images/icons/security-items.png',
      defaultPath: '/security-items/categories',
      cols: 1,
      rows: 1
    },
    {
      id: "projects",
      title: "Projects",
      iconPath: '/assets/images/icons/projects.png',
      defaultPath: 'projects/project',
      cols: 1,
      rows: 1
    },
    {
      id: "reports",
      title: "Reports",
      iconPath: '/assets/images/icons/reports.png',
      cols: 1,
      rows: 1
    },
    {
      id: "about",
      title: "About",
      iconPath: '/assets/images/icons/about.png',
      cols: 1,
      rows: 1
    }
  ];

  constructor(private router: Router){}

  selectedCard(card) {
    this.router.navigate([card.defaultPath]);
  }
}
