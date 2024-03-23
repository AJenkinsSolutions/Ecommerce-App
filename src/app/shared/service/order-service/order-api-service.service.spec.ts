import { TestBed } from '@angular/core/testing';

import { OrderApiServiceService } from './order-api-service.service';

describe('OrderApiServiceService', () => {
  let service: OrderApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
