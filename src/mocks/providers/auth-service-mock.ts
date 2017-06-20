import { ImsBackendMock } from './../ims-backend-mock';
import { SettingService } from './../../providers/setting-service';
import { ImsService } from './../../providers/ims-service';
import { Http } from '@angular/http';
import { AuthService } from './../../providers/auth-service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceMock extends AuthService {

  constructor(public http: Http, public imsService: ImsService, public settingService: SettingService, public imsBackendMock: ImsBackendMock) {
    super(http, imsService, settingService);
    this.currentCredential = imsBackendMock.credential;
    this.setArchive(imsBackendMock.policeFilter);

}
