import { BrowserFileuploadSelectorService } from './../../providers/browser-fileupload-selector-service';
import { ContainerUploadService } from './../../providers/container-upload-service';
import { ImsUploadError } from './../../models/errors/ims-upload-error';
import { ImsLoadingError } from './../../models/errors/ims-loading-error';
import { Credential } from './../../models/credential';
import { DoubleValidator } from './../../validators/double-validator';
import { FieldValidatorService } from './../../providers/field-validator-service';
import { Entry } from './../../models/entry';
import { Image } from './../../models/image';
import { ModelService } from './../../providers/model-service';
import { Info } from './../../models/info';
import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { UploadPage } from './upload';
import { App, Config, Form, IonicModule, Keyboard, DomController, LoadingController, NavController, Platform, NavParams, AlertController, ToastController, PopoverController, GestureController } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AuthService } from '../../providers/auth-service';
import { ImsService } from '../../providers/ims-service';
import { ConfigMock, PlatformMock, NavParamsMock, ToastMock, AppMock, AlertMock, LoadingMock, PopoverControllerMock, StorageMock } from '../../mocks/mocks';
import { Http, HttpModule, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { Storage } from '@ionic/storage';
import { ImsBackendMock } from '../../mocks/ims-backend-mock';
import { UploadService } from '../../providers/upload-service';
import { TokenService } from '../../providers/token-service';
import { CameraService } from '../../providers/camera-service';
import { LoadingService } from '../../providers/loading-service';
import { Camera } from '@ionic-native/camera';
import { AlertService } from '../../providers/alert-service';
import { Observable } from 'rxjs/Observable';
import { Transfer } from '@ionic-native/transfer';
import { SettingService } from '../../providers/setting-service';
import 'rxjs/add/observable/throw';

describe('Page: Upload', () => {

  let fixture: ComponentFixture<UploadPage> = null;
  let page: UploadPage = null;

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [UploadPage],

      providers: [
        App, DomController, Form, Keyboard, NavController, LoadingController, AlertController, AuthService, ImsService,
        TokenService, UploadService, ImsBackendMock, BaseRequestOptions, CameraService, Camera, LoadingService, AlertService, Transfer, ModelService, GestureController, SettingService,
        FieldValidatorService, ContainerUploadService, BrowserFileuploadSelectorService,
        { provide: App, useClass: AppMock },
        { provide: AlertController, useClass: AlertMock },
        { provide: Config, useClass: ConfigMock },
        { provide: Platform, useClass: PlatformMock },
        { provide: NavParams, useClass: NavParamsMock },
        { provide: ToastController, useClass: ToastMock },
        { provide: LoadingController, useClass: LoadingMock },
        { provide: PopoverController, useClass: PopoverControllerMock },
        { provide: Storage, useClass: StorageMock },
        {
          provide: Http,
          useFactory: (ImsBackendMock, options) => {
            return new Http(ImsBackendMock, options);
          },
          deps: [ImsBackendMock, BaseRequestOptions]
        },
      ],
      imports: [HttpModule, FormsModule, IonicModule, ReactiveFormsModule]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(UploadPage);
      page = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('Show and Hide Loading while uploading', inject([LoadingService, UploadService], (loadingService: LoadingService, uploadService: UploadService) => {
    spyOn(loadingService, 'showLoading').and.callThrough();
    spyOn(loadingService, 'hideLoading').and.callThrough();
    spyOn(uploadService, 'uploadImage').and.returnValue(Observable.of(new Response(new ResponseOptions())));
    page.uploadPicture();
    expect(loadingService.showLoading).toHaveBeenCalledTimes(1);
    expect(loadingService.hideLoading).toHaveBeenCalledTimes(1);
  }));

  it('Show Toast after successfull upload', inject([ToastController, UploadService], (toastController: ToastController, uploadService: UploadService) => {
    spyOn(toastController, 'create').and.callThrough();
    spyOn(uploadService, 'uploadImage').and.returnValue(Observable.of(new Response(new ResponseOptions())));
    page.uploadPicture();
    expect(toastController.create).toHaveBeenCalled();
  }));

  it('Show Error after failed upload', inject([UploadService], (uploadService: UploadService) => {
    spyOn(uploadService, 'uploadImage').and.returnValue(Observable.throw('oops'));
    expect(() => page.uploadPicture()).toThrowError(ImsUploadError);
  }));

  it('set imageSrc after taking picture', inject([CameraService, LoadingService], (cameraService: CameraService, loadingService: LoadingService) => {
    let image = new Image('picture.jpg', '/my/picture.jpg');
    spyOn(loadingService, 'subscribeWithLoading').and.callThrough();
    spyOn(cameraService, 'takePicture').and.returnValue(Observable.of(image));
    page.takePicture();
    expect(loadingService.subscribeWithLoading).toHaveBeenCalled();
    expect(cameraService.takePicture).toHaveBeenCalled();
    expect(page.image).toBe(image);
  }));

  it('calls camera error handler when failing to take picture', inject([CameraService], (cameraService: CameraService) => {
    spyOn(cameraService, 'takePicture').and.returnValue(Observable.throw('oops'));
    spyOn(cameraService, 'handleError').and.returnValue(null);
    page.takePicture();
    expect(cameraService.takePicture).toHaveBeenCalled();
    expect(cameraService.handleError).toHaveBeenCalled();
  }));

  it('set image after getting image from gallery', inject([CameraService], (cameraService: CameraService) => {
    let image = new Image('picture.jpg', '/my/picture.jpg');
    spyOn(cameraService, 'getGalleryPicture').and.returnValue(Observable.of(image));
    page.getGalleryPicture();
    expect(cameraService.getGalleryPicture).toHaveBeenCalled();
    expect(page.image).toBe(image);
  }));

  it('On browser open file dialog on  after click get picture from gallery', inject([Platform], (platform: Platform) => {
    let element = document.getElementById('fileUpload');
    spyOn(platform, 'is').and.returnValue(true);
    spyOn(element, 'click').and.returnValue(null);
    page.getGalleryPicture();
    expect(element.click).toHaveBeenCalledTimes(1);
  }));

  it('calls camera error handler when failing to get image from gallery', inject([CameraService], (cameraService: CameraService) => {
    spyOn(cameraService, 'getGalleryPicture').and.returnValue(Observable.throw('oops'));
    spyOn(cameraService, 'handleError').and.returnValue(null);
    page.getGalleryPicture();
    expect(cameraService.getGalleryPicture).toHaveBeenCalled();
    expect(cameraService.handleError).toHaveBeenCalled();
  }));

  it('Update imagename when new file in fileinput is selected', () => {
    let fileName = 'newFile.jpg';
    let fileURI = '/dev/0/';
    let oldImage = new Image ('oldvalue', 'oldvalue.jpg');
    let newFile: File = new File([new Blob()], fileName);
    let newImage = new Image(fileName, fileURI, newFile);
    spyOn(window.URL, 'createObjectURL').and.returnValue(fileURI);
    page.image = oldImage;
    let event = { target: { files: [newFile] } };
    page.fileSelected(event);
    expect(page.image).toEqual(newImage);
  });

  it('Do nothing when no file available in input file dialog', () => {
    let oldImage = new Image ('oldvalue', 'oldvalue.jpg');
    page.image = oldImage;
    let event = { target: { files: [] } };
    page.fileSelected(event);
    expect(page.image).toEqual(oldImage);
  });

  it('Show and hide loading when loading parent image reference field', inject([ImsBackendMock, AuthService, LoadingService, SettingService], (imsBackendMock: ImsBackendMock, authService: AuthService, loadingService: LoadingService, settingService: SettingService) => {
    spyOn(loadingService, 'subscribeWithLoading').and.callThrough();
    let testInfo: Info = { version: '9000' };
    authService.setCurrentCredential(testInfo, imsBackendMock.credential);
    authService.setArchive(imsBackendMock.policeFilter);
    page.loadParentImageReferenceField();
    expect(page.parentImageReferenceField).toEqual(imsBackendMock.modelFieldParentreferenceName);
    expect(loadingService.subscribeWithLoading).toHaveBeenCalled();
  }));

  it('Show and hide loading when loading configured metadata fields', inject([ImsBackendMock, AuthService, LoadingService, SettingService], (imsBackendMock: ImsBackendMock, authService: AuthService, loadingService: LoadingService, settingService: SettingService) => {
    spyOn(loadingService, 'subscribeWithLoading').and.callThrough();
    spyOn(settingService, 'getFieldState').and.returnValue(Observable.of(true));
    let testInfo: Info = { version: '9000' };
    authService.setCurrentCredential(testInfo, imsBackendMock.credential);
    authService.setArchive(imsBackendMock.policeFilter);
    page.loadUploadFields();
    expect(page.fields.length).toBeGreaterThan(0);
    expect(loadingService.subscribeWithLoading).toHaveBeenCalled();
  }));

  it('Show and hide loading with error thrown when failed to load parent image reference field', inject([ImsBackendMock, AuthService, LoadingService, ModelService, SettingService], (imsBackendMock: ImsBackendMock, authService: AuthService, loadingService: LoadingService, modelService: ModelService, settingService: SettingService) => {
    spyOn(loadingService, 'subscribeWithLoading').and.callThrough();
    spyOn(modelService, 'getMetadataFieldsOfImageTable').and.returnValue(Observable.throw('oops'));
    expect(() => page.loadParentImageReferenceField()).toThrowError(ImsLoadingError);
    expect(loadingService.subscribeWithLoading).toHaveBeenCalled();
  }));

  it('Show and hide loading with error thrown when failed to load metadata fields', inject([ImsBackendMock, AuthService, LoadingService, ModelService, SettingService], (imsBackendMock: ImsBackendMock, authService: AuthService, loadingService: LoadingService, modelService: ModelService, settingService: SettingService) => {
    spyOn(loadingService, 'subscribeWithLoading').and.callThrough();
    spyOn(modelService, 'getMetadataFieldsOfImageTable').and.returnValue(Observable.throw('oops'));
    spyOn(settingService, 'getFieldState').and.returnValue(Observable.of(true));
    expect(() => page.loadUploadFields()).toThrowError(ImsLoadingError);
    expect(loadingService.subscribeWithLoading).toHaveBeenCalled();
  }));

  it('Show and hide loading with error thrown when failing to load saved metadata fields', inject([ImsBackendMock, AuthService, LoadingService, ModelService, SettingService], (imsBackendMock: ImsBackendMock, authService: AuthService, loadingService: LoadingService, modelService: ModelService, settingService: SettingService) => {
    spyOn(loadingService, 'subscribeWithLoading').and.callThrough();
    spyOn(modelService, 'getMetadataFieldsOfImageTable').and.returnValue(Observable.of(true));
    spyOn(settingService, 'getFieldState').and.returnValue(Observable.throw('oops'));
    expect(() => page.loadUploadFields()).toThrowError(ImsLoadingError);
    expect(loadingService.subscribeWithLoading).toHaveBeenCalled();
  }));

  it('Check if parent reference is not included', inject([ImsBackendMock, AuthService, SettingService], (imsBackendMock: ImsBackendMock, authService: AuthService, settingService: SettingService) => {
    let testInfo: Info = { version: '9000' };
    spyOn(settingService, 'getFieldState').and.returnValue(Observable.of(false));
    authService.setCurrentCredential(testInfo, imsBackendMock.credential);
    authService.setArchive(imsBackendMock.policeFilter);
    page.ionViewDidLoad();
    expect(page.fields).not.toContain(imsBackendMock.modelFieldParentreference);
  }));

  it('Additional not mandatory fields', inject([ImsBackendMock, AuthService, SettingService, Storage], (imsBackendMock: ImsBackendMock, authService: AuthService, settingService: SettingService, storage: Storage) => {
    spyOn(settingService, 'getFieldState').and.returnValue(Observable.of(true));
    let testInfo: Info = { version: '9000' };
    authService.setCurrentCredential(testInfo, imsBackendMock.credential);
    authService.setArchive(imsBackendMock.policeFilter);
    page.ionViewDidLoad();
    expect(page.fields).toContain(imsBackendMock.modelFieldOptionalString);
  }));

  it('Do not add additional not mandatory fields when not configured', inject([ImsBackendMock, AuthService, SettingService, Storage], (imsBackendMock: ImsBackendMock, authService: AuthService, settingService: SettingService, storage: Storage) => {
    spyOn(settingService, 'getFieldState').and.returnValue(Observable.of(false));
    let testInfo: Info = { version: '9000' };
    authService.setCurrentCredential(testInfo, imsBackendMock.credential);
    authService.setArchive(imsBackendMock.policeFilter);
    page.ionViewDidLoad();
    expect(page.fields).not.toContain(imsBackendMock.modelFieldOptionalString);
  }));

  it('should upload non empty fields metadata fields', inject([UploadService, ImsBackendMock, AuthService], (uploadService: UploadService, imsBackendMock: ImsBackendMock, authService: AuthService) => {
    spyOn(uploadService, 'uploadImage').and.returnValue(Observable.of(new Response(new ResponseOptions())));
    let testInfo: Info = { version: '9000' };
    let testCredentials: Credential = new Credential('https://test', 'testuser', 'testpass', 'testsegment');
    authService.setCurrentCredential(testInfo, testCredentials);
    authService.setArchive(imsBackendMock.policeFilter);
    page.fields.push(imsBackendMock.modelFieldOptionalString);
    let formData = {};
    formData[imsBackendMock.modelFieldOptionalString.name] = ['value'];
    page.fieldsForm = page.formBuilder.group(formData);
    page.parentImageReferenceField = imsBackendMock.modelFieldParentreferenceName;
    page.image = new Image('picture.jpg', '/my/picture.jpg');
    page.uploadPicture();
    let entry = new Entry();
    entry = entry.set(imsBackendMock.modelFieldParentreferenceName, 'default');
    entry = entry.set(imsBackendMock.modelFieldOptionalString.name, 'value');
    expect(uploadService.uploadImage).toHaveBeenCalledWith(testCredentials, Number(imsBackendMock.policeFilter.id), entry, page.image);
  }));

  it('should not upload empty fields metadata fields', inject([UploadService, ImsBackendMock, AuthService], (uploadService: UploadService, imsBackendMock: ImsBackendMock, authService: AuthService) => {
    spyOn(uploadService, 'uploadImage').and.returnValue(Observable.of(new Response(new ResponseOptions())));
    let testInfo: Info = { version: '9000' };
    let testCredentials: Credential = new Credential('https://test', 'testuser', 'testpass', 'testsegment');
    authService.setCurrentCredential(testInfo, testCredentials);
    authService.setArchive(imsBackendMock.policeFilter);
    page.fields.push(imsBackendMock.modelFieldOptionalString);
    let formData = {};
    formData[imsBackendMock.modelFieldOptionalString.name] = [''];
    page.fieldsForm = page.formBuilder.group(formData);
    page.parentImageReferenceField = imsBackendMock.modelFieldParentreferenceName;
    page.image = new Image('picture.jpg', '/my/picture.jpg');
    page.uploadPicture();
    let entry = new Entry();
    entry = entry.set(imsBackendMock.modelFieldParentreferenceName, 'default');
    expect(uploadService.uploadImage).toHaveBeenCalledWith(testCredentials, Number(imsBackendMock.policeFilter.id), entry, page.image);
  }));

  it('should initialize parent image reference field', inject([ImsBackendMock, AuthService, LoadingService], (imsBackendMock: ImsBackendMock, authService: AuthService, loadingService: LoadingService) => {
    let testInfo: Info = { version: '9000' };
    authService.setCurrentCredential(testInfo, imsBackendMock.credential);
    authService.setArchive(imsBackendMock.policeFilter);
    page.loadParentImageReferenceField();
    expect(page.parentImageReferenceField).toEqual(imsBackendMock.modelFieldParentreferenceName);
  }));

  it('should call field validator service in case of an error', inject([FieldValidatorService], (fieldValidatorService: FieldValidatorService) => {
    spyOn(fieldValidatorService, 'getErrorMessage').and.callThrough();
    let control = new FormControl('12a', DoubleValidator.isValid);
    page.getErrorMessage(control);
    expect(fieldValidatorService.getErrorMessage).toHaveBeenCalledWith(control);
  }));

});
