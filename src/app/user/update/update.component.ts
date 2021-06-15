import {Component, OnInit} from '@angular/core';
import {Login} from '../../interface/login';
import {UserService} from '../../service/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFireStorage} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  selectedFile: File = null;
  downloadURL: Observable<string>;
  appUser: Login = {
    id: 0,
    userName: '',
    passWord: '',
    email: '',
    confirmPassword: '',
    phone: '',
    role: [],
  };
  message = 'Old password incorrect, please try again';
  isPasswordCorrect = false;
  id = 0;

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paraMap => {
        this.id = Number(paraMap.get('id'));
        this.userService.findUserById(this.id).subscribe(data => {
          this.appUser = data;
        });
      }
    );
  }

  onFileSelected(event: any) {
    const n = Date.now();
    const file = event.target.files[0];
    const filePath = `trelloFIle/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.appUser.avatar = url;
            }
          });
        })
      ).subscribe(url => {
      if (url) {
        console.log('Upload success');
      }
    });
  }

  editUser() {
    this.userService.editAppUser(this.appUser, this.id).subscribe(() => {
      this.router.navigateByUrl('/');
      this.isPasswordCorrect = false;
    }, error => {
      this.isPasswordCorrect = true;
    });
  }

}
