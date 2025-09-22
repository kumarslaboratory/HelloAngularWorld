import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCreatePost } from './blog-create-post';

describe('BlogCreatePost', () => {
  let component: BlogCreatePost;
  let fixture: ComponentFixture<BlogCreatePost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCreatePost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCreatePost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
