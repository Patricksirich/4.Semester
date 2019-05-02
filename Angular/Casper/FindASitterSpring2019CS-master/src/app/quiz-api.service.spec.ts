import { TestBed } from '@angular/core/testing';

import { QuizAPIService } from './quiz-api.service';

describe('QuizAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizAPIService = TestBed.get(QuizAPIService);
    expect(service).toBeTruthy();
  });
});
