import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogHeader } from "./blog-header/blog-header";
import { BlogNavbar } from "./blog-navbar/blog-navbar";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // SignupForm, 
    BlogHeader,
    BlogNavbar
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('Hello Angular World');
  constructor()
  {
    console.log('1. App Component Constructor Called');
  }

  ngOnChanges()
  {
    // runs only when any input property changes in the component
    console.log('App Component ngOnChanges Called');
  }

  ngOnInit()
  {
    console.log('2. App Component ngOnInit Called');
  }

  ngDoCheck()
  {
    console.log('3. App Component ngDoCheck Called');
  }

  ngAfterContentInit()
  {
    console.log('4. App Component ngAfterContentInit Called');
  }

  ngAfterContentChecked()
  {
    console.log('5. App Component ngAfterContentChecked Called');
  }

  ngAfterViewInit()
  {
    console.log('6. App Component ngAfterViewInit Called');
  }

  ngAfterViewChecked()
  {
    console.log('7. App Component ngAfterViewChecked Called');
  }

  ngAfterRender()
  {
    console.log('8. App Component ngAfterRender Called');
  }

  ngOnDestroy()
  {
    console.log('9. App Component ngOnDestroy Called');
  }
}
