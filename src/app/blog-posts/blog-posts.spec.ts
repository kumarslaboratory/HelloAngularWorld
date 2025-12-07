import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogPosts } from './blog-posts';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { from } from 'rxjs';
import { PostService } from '../services/post-service';

describe('BlogPosts', () => {
  let component: BlogPosts;
  let fixture: ComponentFixture<BlogPosts>;
  let service: PostService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogPosts],
      providers: [
        PostService,
        provideHttpClient(), // Provide the HttpClient along with HttpClientTesting
        provideHttpClientTesting()
      ],
    }).compileComponents();
    service = TestBed.inject(PostService);

    fixture = TestBed.createComponent(BlogPosts);
    component = fixture.componentInstance;
  });

  it('should load posts from server', () => {
    let service = TestBed.inject(PostService);
    spyOn(service, 'getAll').and.returnValue(from([1, 2, 3]));
    fixture.autoDetectChanges();

    expect(component.posts.length).toBe(3);
  });
});
