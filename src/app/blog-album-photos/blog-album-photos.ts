import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo-service';

@Component({
  selector: 'app-blog-album-photos',
  imports: [],
  templateUrl: './blog-album-photos.html',
  styleUrl: './blog-album-photos.css'
})
export class BlogAlbumPhotos implements OnInit {
  protected photos : any[] = [];
  constructor(private _photoService : PhotoService) { 
  }

  ngOnInit(): void {
    this._photoService.getAll()
    .subscribe({ next: (response) => this.photos = response } );
  }
}
