import { TestBed, inject, async } from '@angular/core/testing';
import { Http, HttpModule, BaseRequestOptions } from '@angular/http';
import { ImsBackendMock } from '../mocks/ims-backend-mock';
import { TokenService } from './token-service';
import { ImsService } from './ims-service';
import { Token } from '../models/token';

describe('Provider: TokenService', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [],

      providers: [
        TokenService,
        ImsService,
        ImsBackendMock,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (ImsBackendMock, options) => {
            return new Http(ImsBackendMock, options);
          },
          deps: [ImsBackendMock, BaseRequestOptions]
        }
      ],
      imports: [HttpModule]
    }).compileComponents();
  }));

  it('Should get Token Location for Segment Name', inject([TokenService, ImsBackendMock], (tokenService: TokenService, imsBackendMock: ImsBackendMock) => {
    tokenService.getTokenForSegment(imsBackendMock.credential).subscribe(
      location => { expect(location).toEqual(imsBackendMock.tokenLoadingUrl); },
      err => fail(err));
  }));

  it('Should get Token from Url', inject([TokenService, ImsBackendMock], (tokenService: TokenService, imsBackendMock: ImsBackendMock) => {
    tokenService.getTokenFromUrl(imsBackendMock.credential, imsBackendMock.tokenLoadingUrl).subscribe(
      token => expect(token.token).toEqual(imsBackendMock.tokenName),
      err => fail(err));
  }));

  it('Should load Token from Rest API', inject([TokenService, ImsBackendMock], (tokenService: TokenService, imsBackendMock: ImsBackendMock) => {
    tokenService.getToken(imsBackendMock.credential).subscribe(
      token => expect(token.token).toEqual(imsBackendMock.tokenName),
      err => fail(err));
  }));

  it('Should load Token from Rest API and then from cache', inject([TokenService, ImsBackendMock], (tokenService: TokenService, imsBackendMock: ImsBackendMock) => {
    imsBackendMock.token = new Token(imsBackendMock.tokenName, '2080-10-28T16:45:12Z');
    const spy = spyOn(tokenService, 'getTokenForSegment').and.callThrough();
    tokenService.getToken(imsBackendMock.credential).subscribe();
    tokenService.getToken(imsBackendMock.credential).subscribe();
    expect(spy.calls.count()).toEqual(1);
  }));
});
