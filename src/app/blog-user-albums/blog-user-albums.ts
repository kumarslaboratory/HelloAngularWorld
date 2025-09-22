import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album-service';

@Component({
  selector: 'app-blog-user-albums',
  imports: [],
  templateUrl: './blog-user-albums.html',
  styleUrl: './blog-user-albums.css'
})
export class BlogUserAlbums implements OnInit {
  protected albums : any[] = [];
  constructor(private _albumService : AlbumService) { 
  }

  ngOnInit(): void {
    this._albumService.getAll()
    .subscribe({ next: (response) => this.albums = response } );
  }
}
