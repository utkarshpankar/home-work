import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WordSorter } from './word-sorter';

describe('WordSorter', () => {
  let component: WordSorter;
  let fixture: ComponentFixture<WordSorter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordSorter],
    }).compileComponents();

    fixture = TestBed.createComponent(WordSorter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
