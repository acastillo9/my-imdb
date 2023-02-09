import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { BsMenuComponent } from './bs-menu/bs-menu.component';
import { Item } from './item';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  faBars = faBars;
  // isMenuOpened = false;
  @ViewChild(BsMenuComponent)
  bsMenu: BsMenuComponent | undefined;

  constructor(private menuService: MenuService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Item[]>(`${environment.apiUrl}/menuItems`)
      .subscribe((data) => {
        this.menuService.menuItemsBehaviorSubject.next(data);
        console.log(data);
      });
  }

  ngAfterViewInit(): void {
    this.bsMenu?.testViewChild();
  }

  /* toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  } */
}
