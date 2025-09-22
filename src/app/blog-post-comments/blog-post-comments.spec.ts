import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostComments } from './blog-post-comments';

describe('BlogPostComments', () => {
  let component: BlogPostComments;
  let fixture: ComponentFixture<BlogPostComments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPostComments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogPostComments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
