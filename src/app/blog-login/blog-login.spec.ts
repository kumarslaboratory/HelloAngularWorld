import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLogin } from './blog-login';

describe('BlogLogin', () => {
  let component: BlogLogin;
  let fixture: ComponentFixture<BlogLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
