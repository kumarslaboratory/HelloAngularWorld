import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogUserTodos } from './blog-user-todos';

describe('BlogUserTodos', () => {
  let component: BlogUserTodos;
  let fixture: ComponentFixture<BlogUserTodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogUserTodos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogUserTodos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
