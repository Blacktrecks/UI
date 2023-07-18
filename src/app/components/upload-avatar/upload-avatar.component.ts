import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-avatar',
  templateUrl: './upload-avatar.component.html',
  styleUrls: ['./upload-avatar.component.css']
})

export class UploadAvatarComponent {
  imageUrl: string = "/assets/img/default.png";
  fileToUpload: File | null = null;

  constructor() {}

  ngOnInit() {}

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files && inputElement.files.length > 0) {
      this.fileToUpload = inputElement.files[0];
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
  }
}