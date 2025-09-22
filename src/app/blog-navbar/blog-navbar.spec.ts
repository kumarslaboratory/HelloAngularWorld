import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNavbar } from './blog-navbar';

describe('BlogNavbar', () => {
  let component: BlogNavbar;
  let fixture: ComponentFixture<BlogNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
