import { Component, computed, HostListener, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  education,
  experience,
  filters,
  galleryCategories,
  galleryItems,
  navItems,
  professionalSkills,
  projects,
  skills,
} from './portfolio.data';

type GalleryItem = (typeof galleryItems)[number];

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit, OnDestroy {
  private readonly formBuilder = inject(FormBuilder);
  protected readonly navItems = navItems;
  protected readonly skills = skills;
  protected readonly projects = projects;
  protected readonly filters = filters;
  protected readonly galleryItems = galleryItems;
  protected readonly galleryCategories = galleryCategories;
  protected readonly experience = experience;
  protected readonly education = education;
  protected readonly professionalSkills = professionalSkills;
  protected readonly menuOpen = signal(false);
  protected readonly showBackToTop = signal(false);
  protected readonly activeFilter = signal('Todos');
  protected readonly activeGalleryCategory = signal('Todas');
  protected readonly activeRole = signal('');
  protected readonly selectedMedia = signal<GalleryItem | null>(null);
  protected readonly cvAvailable = signal(false);
  protected readonly uploadedVideoUrl = signal<string | null>(null);
  protected readonly formNotice = signal('');
  protected readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    return filter === 'Todos' ? this.projects : this.projects.filter((project) => project.category === filter);
  });
  protected readonly filteredGalleryItems = computed(() => {
    const category = this.activeGalleryCategory();
    return category === 'Todas'
      ? this.galleryItems
      : this.galleryItems.filter((item) => item.category === category);
  });

  protected readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  private readonly roles = [
    'Estudiante de Ingeniería de Sistemas',
    'Desarrollador Web',
    'Apasionado por la Tecnología',
  ];
  private roleIndex = 0;
  private characterIndex = 0;
  private deleting = false;
  private pauseTypingUntil = 0;
  private mediaOpener: HTMLElement | null = null;
  private mediaIndex = -1;
  private readonly typingTimer = window.setInterval(() => this.tickTyping(), 82);

  ngOnInit(): void {
    void this.checkCvAvailability();
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.showBackToTop.set(window.scrollY > 480);
  }

  @HostListener('document:keydown', ['$event'])
  protected onDocumentKeydown(event: KeyboardEvent): void {
    if (!this.selectedMedia()) return;
    if (event.key === 'Escape') {
      this.closeMedia();
      return;
    }
    if (event.key === 'ArrowRight') {
      this.navigateMedia(1);
      return;
    }
    if (event.key === 'ArrowLeft') {
      this.navigateMedia(-1);
      return;
    }
    if (event.key !== 'Tab') return;

    const focusable = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.lightbox button:not([disabled]), .lightbox a[href], .lightbox input:not([disabled]), .lightbox video[controls], .lightbox [tabindex]:not([tabindex="-1"])',
      ),
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected openMedia(item: GalleryItem): void {
    this.mediaOpener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.mediaIndex = this.filteredGalleryItems().indexOf(item);
    this.selectedMedia.set(item);
    window.setTimeout(() => document.querySelector<HTMLElement>('.lightbox__close')?.focus(), 0);
  }

  protected navigateMedia(direction: number): void {
    const visibleItems = this.filteredGalleryItems();
    if (this.mediaIndex < 0 || visibleItems.length === 0) return;
    this.mediaIndex = (this.mediaIndex + direction + visibleItems.length) % visibleItems.length;
    this.selectedMedia.set(visibleItems[this.mediaIndex]);
  }

  protected closeMedia(): void {
    this.selectedMedia.set(null);
    const opener = this.mediaOpener;
    window.setTimeout(() => opener?.focus(), 0);
    this.mediaOpener = null;
  }

  protected onVideoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (this.uploadedVideoUrl()) URL.revokeObjectURL(this.uploadedVideoUrl()!);
    const url = URL.createObjectURL(file);
    this.uploadedVideoUrl.set(url);
    this.openMedia({
      title: file.name,
      image: '',
      description: 'Vídeo seleccionado desde este dispositivo. El archivo no se sube a ningún servidor.',
      kind: 'video',
      category: 'Tecnología',
    });
    input.value = '';
  }

  protected submitContact(): void {
    this.formNotice.set('');
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.formNotice.set('El formulario es válido, pero no hay un servidor configurado. El mensaje no fue enviado.');
  }

  ngOnDestroy(): void {
    window.clearInterval(this.typingTimer);
    if (this.uploadedVideoUrl()) URL.revokeObjectURL(this.uploadedVideoUrl()!);
  }

  protected setImageFallback(event: Event, fallback: string): void {
    const image = event.target as HTMLImageElement;
    if (!image.src.endsWith(fallback)) image.src = fallback;
  }

  private async checkCvAvailability(): Promise<void> {
    try {
      const response = await fetch('documentos/CV_Mathew_Gomez_2026.pdf', { method: 'HEAD' });
      this.cvAvailable.set(response.ok);
    } catch {
      this.cvAvailable.set(false);
    }
  }

  private tickTyping(): void {
    if (Date.now() < this.pauseTypingUntil) return;
    const role = this.roles[this.roleIndex];
    const nextIndex = this.characterIndex + (this.deleting ? -1 : 1);
    this.characterIndex = nextIndex;
    this.activeRole.set(role.slice(0, nextIndex));

    if (!this.deleting && nextIndex === role.length) {
      this.deleting = true;
      this.pauseTypingUntil = Date.now() + 1050;
      return;
    }
    if (this.deleting && nextIndex === 0) {
      this.deleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.pauseTypingUntil = Date.now() + 260;
    }
  }
}
