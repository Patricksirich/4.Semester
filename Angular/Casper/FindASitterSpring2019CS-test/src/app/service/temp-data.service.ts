import { Injectable } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { GeneratedFile } from '@angular/compiler';
import { getRenderedText } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {
  quizzes: Quiz[];

  constructor() { }
}
