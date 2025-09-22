import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogUsers } from './blog-users';

describe('BlogUsers', () => {
  let component: BlogUsers;
  let fixture: ComponentFixture<BlogUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogUsers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
