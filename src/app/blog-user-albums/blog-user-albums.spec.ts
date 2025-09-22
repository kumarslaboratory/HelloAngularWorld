import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogUserAlbums } from './blog-user-albums';

describe('BlogUserAlbums', () => {
  let component: BlogUserAlbums;
  let fixture: ComponentFixture<BlogUserAlbums>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogUserAlbums]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogUserAlbums);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
