import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
  //ce component est statique: n'est pas impacté par le reste, donc il ne change pas car aucun @Input
  changeDetection: ChangeDetectionStrategy.OnPush // better to have it even no inputs here
})
export class ArticleFormComponent implements OnInit {
  @Output() addedArticle = new EventEmitter<{ title: string; link: string }>();

  // accéder à un elt dans HTML
  @ViewChild('title', { static: true }) title: ElementRef;
  @ViewChild('link', { static: false }) link: ElementRef;

  placeholder = 'manel';

  ngOnInit(): void {
    console.log('static true: title is available', this.title);
    console.log(
      'static false: link is available in ngAfterViewInit',
      this.link
    );
  }

  addArticle(title: string, link: string): void {
    if (title && link) {
      this.addedArticle.emit({ title, link });
      // faut mettre nativeElement pour accéder au DOM
      this.title.nativeElement.value = '';
      this.link.nativeElement.value = '';
    }
  }
}
