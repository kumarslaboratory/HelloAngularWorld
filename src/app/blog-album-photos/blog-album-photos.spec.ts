import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAlbumPhotos } from './blog-album-photos';

describe('BlogAlbumPhotos', () => {
  let component: BlogAlbumPhotos;
  let fixture: ComponentFixture<BlogAlbumPhotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAlbumPhotos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogAlbumPhotos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
