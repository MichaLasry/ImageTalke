import { TestBed, inject } from '@angular/core/testing';

import { Firebase } from './firebase.service';

describe('FirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Firebase]
    });
  });

  it('should be created', inject([Firebase], (service: Firebase) => {
    expect(service).toBeTruthy();
  }));
});
