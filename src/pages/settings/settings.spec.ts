import { ImsService } from './../../providers/ims-service';
import { ImsBackendMock } from './../../mocks/ims-backend-mock';
import { Http, BaseRequestOptions } from '@angular/http';
import { AuthService } from './../../providers/auth-service';
import { LoginPage } from './../login/login';
import { SettingArchivePage } from './../setting-archive/setting-archive';
import { SettingEntriesFieldsPage } from './../setting-entries-fields/setting-entries-fields';
import { SettingImageFieldsPage } from './../setting-image-fields/setting-image-fields';
import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { SettingsPage } from './settings';
import { App, Config, Form, IonicModule, Keyboard, Haptic, GestureController, DomController, NavController, Platform, NavParams } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SettingService } from '../../providers/setting-service';
import { ConfigMock, PlatformMock, NavParamsMock, AppMock, StorageMock } from '../../mocks/mocks';
import { Storage } from '@ionic/storage';

describe('Page: Settings', () => {

  let fixture: ComponentFixture<SettingsPage> = null;
  let page: SettingsPage = null;

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [SettingsPage],

      providers: [
        App, DomController, Form, Keyboard, NavController, SettingService, Haptic, GestureController, AuthService, ImsBackendMock, BaseRequestOptions, ImsService,
        { provide: App, useClass: AppMock },
        { provide: Config, useClass: ConfigMock },
        { provide: Platform, useClass: PlatformMock },
        { provide: NavParams, useClass: NavParamsMock },
        { provide: Storage, useClass: StorageMock },
        {
          provide: Http,
          useFactory: (imsBackendMock, options) => {
            return new Http(imsBackendMock, options);
          },
          deps: [ImsBackendMock, BaseRequestOptions]
        },
      ],
      imports: [FormsModule, IonicModule, ReactiveFormsModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(SettingsPage);
      page = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('SettingService called when toggling show rest url field', inject([SettingService], (settingService: SettingService) => {
    spyOn(settingService, 'setShowRestUrlField').and.callThrough();
    page.isShowRestUrlField = true;
    page.notify();
    expect(settingService.setShowRestUrlField).toHaveBeenCalledWith(true);

    page.isShowRestUrlField = false;
    page.notify();
    expect(settingService.setShowRestUrlField).toHaveBeenCalledWith(false);
  }));

  it('SettingService is initialized correctly', async(inject([SettingService], (settingService: SettingService) => {
    settingService.isShowRestUrlField().subscribe(val => expect(page.isShowRestUrlField).toBe(val));
  })));

  it('Should load SettingsImageFields page', async(inject([SettingService, NavController], (settingService: SettingService, navController: NavController) => {
    spyOn(navController, 'push').and.callThrough();
    page.loadImageFieldSettings();
    expect(navController.push).toHaveBeenCalledWith(SettingImageFieldsPage);
  })));

  it('Should load SettingEntriesFieldsPage page', async(inject([SettingService, NavController], (settingService: SettingService, navController: NavController) => {
    spyOn(navController, 'push').and.callThrough();
    page.loadEntriesListFieldSettings();
    expect(navController.push).toHaveBeenCalledWith(SettingEntriesFieldsPage);
  })));

  it('Should load SettingArchive page', async(inject([SettingService, NavController], (settingService: SettingService, navController: NavController) => {
    spyOn(navController, 'push').and.callThrough();
    page.loadArchiveSettings();
    expect(navController.push).toHaveBeenCalledWith(SettingArchivePage);
  })));

  it('Should invalidate credentials and go to login page on logout', async(inject([NavController, AuthService], (navController: NavController, authService: AuthService) => {
    spyOn(authService, 'logout').and.returnValue(null);
    spyOn(navController, 'setRoot').and.callThrough();
    page.logout();
    expect(authService.logout).toHaveBeenCalledTimes(1);
    expect(navController.setRoot).toHaveBeenCalledWith(LoginPage);
  })));
});
