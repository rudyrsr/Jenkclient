import {Component, OnInit} from '@angular/core';
import {Item} from '../../../shared/item';
import {ImageItemService} from '../../../services/image-item.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ItemService} from '../../../services/item.service';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {baseURL} from '../../../shared/baseurl';

@Component({
  selector: 'code-item-image',
  templateUrl: './item-image.component.html',
  styleUrls: ['./item-image.component.scss']
})
export class ItemImageComponent implements OnInit {

  itemimage: Item;
  itemIdimage: number;
  itemsimage = [];
  selectedFile: File = null;

  constructor(private imageService: ImageItemService, private activateRoute: ActivatedRoute,
              private location: Location, public itemService: ItemService, private http: HttpClient) {
  }

  ngOnInit() {
    this.activateRoute.params
      .subscribe(
        (paramss) => {
          this.itemIdimage = paramss.id;
          this.itemService.getItem(this.itemIdimage)
            .subscribe(item => this.itemimage = item);
          console.log('items:', this.itemimage);
        }
      );
  }

  edit() {
    this.activateRoute.params.subscribe((paramss) => {
      this.itemIdimage = paramss.id;
      this.itemService.getItem(this.itemIdimage).subscribe(res => this.itemimage = res);
      console.log('id image:', this.itemIdimage);
      console.log('item image:', this.itemimage);
      this.imageService.saveImage(this.itemIdimage, this.itemimage).subscribe((response) => {
        alert('the image of item has been updated');
        this.location.back();
      }, (error) => {
        console.log('error: ', error);
      });
    });
  }

  onSelect(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.put(baseURL + '/items' + this.itemIdimage + '/image', fd, {
      reportProgress: true,
      observe: 'events'
    }).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%');
      } else if (event.type === HttpEventType.Response) {
        console.log(event);
      }
    });
  }
}
