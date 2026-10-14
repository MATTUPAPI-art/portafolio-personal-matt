import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('renders the portfolio identity and main sections', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#hero-title')?.textContent).toContain('Mathew');
    expect(compiled.querySelectorAll('main > section').length).toBe(7);
    expect(compiled.querySelector('.profile__name')?.textContent).toContain('Mathew Gómez');
  });

  it('filters projects by category', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const filter = Array.from(buttons).find(
      (button) => button.textContent?.trim() === 'Electrónica',
    );
    expect(filter).toBeDefined();
    if (!filter) return;
    filter.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.project-card').length).toBe(2);
    expect(fixture.nativeElement.querySelector('.project-card h3')?.textContent).toBe('Traductor Braille');
  });

  it('shows validation errors without claiming to send the contact form', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    (fixture.nativeElement.querySelector('form button[type="submit"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.field-error').length).toBe(4);
    expect(fixture.nativeElement.querySelector('.contact-form__disclaimer')?.textContent).toContain('no tiene backend');
  });

  it('renders the supplied social links and professional timeline', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const githubLink = compiled.querySelector('.hero__social-link--github') as HTMLAnchorElement;
    const whatsappLink = compiled.querySelector('.hero__social-link--whatsapp') as HTMLAnchorElement;

    expect(githubLink.href).toBe('https://github.com/MATTUPAPI-art');
    expect(whatsappLink.href).toBe('https://wa.me/59175859930');
    expect(githubLink.target).toBe('_blank');
    expect(whatsappLink.rel).toBe('noopener noreferrer');
    expect(compiled.querySelectorAll('.timeline-item').length).toBe(7);
    expect(compiled.querySelectorAll('.competency-list li').length).toBe(9);
  });

  it('keeps keyboard gallery navigation within the active category', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const professionalFilter = Array.from(
      compiled.querySelectorAll('.gallery__filters button') as NodeListOf<HTMLButtonElement>,
    ).find((button) => button.textContent?.trim() === 'Profesional');
    expect(professionalFilter).toBeDefined();
    professionalFilter?.click();
    fixture.detectChanges();

    (compiled.querySelector('.gallery-item') as HTMLButtonElement).click();
    fixture.detectChanges();
    (compiled.querySelector('[aria-label="Fotografía siguiente"]') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(compiled.querySelector('#lightbox-title')?.textContent).toBe('Traje gris');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    fixture.detectChanges();
    expect(compiled.querySelector('#lightbox-title')?.textContent).toBe('Traje negro');
  });
});
