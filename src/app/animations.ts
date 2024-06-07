import { trigger, state, style, transition, animate } from '@angular/animations';

export const rowAnimation = trigger('rowAnimation', [
  state('void', style({
    opacity: 0,
    transform: 'translateY(-100%)'
  })),
  transition(':enter', [
    animate('300ms ease-out', style({
      opacity: 1,
      transform: 'translateY(0)'
    }))
  ]),
  transition(':leave', [
    animate('300ms ease-in', style({
      opacity: 0,
      transform: 'translateY(100%)'
    }))
  ])
]);
