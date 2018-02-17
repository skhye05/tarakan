import { sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild } from '@angular/animations';
const query = (s, a, o = { optional: true }) => q(s, a, o);

export const routerTransition = trigger('routerTransition', [
    transition('* => *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%', bottom: 0 })),
        query(':enter', style({ opacity: 0 })),
        sequence([
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    style({ opacity: 1 }),
                    animate('100ms cubic-bezier(.75,-0.48,.26,1.52)'),
                    style({ opacity: 0 })
                ]),
                query(':enter', [
                    style({ opacity: 0 }),
                    animate('100ms cubic-bezier(.75,-0.48,.26,1.52)',
                        style({ opacity: 1})),
                ]),
            ]),
            query(':enter', animateChild()),
        ])
    ])
]);

export const blockTransition = trigger('blockTransition', [
    transition(':enter', [
        query('.block', style({ opacity: 0 })),
        query('.block', stagger(300, [
            style({ transform: 'translateY(100px)' }),
            animate('.75s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(0px)', opacity: 1 })),
        ])),
    ]),
    transition(':leave', [
        query('.block', stagger(300, [
            style({ transform: 'translateY(0px)', opacity: 1 }),
            animate('.75s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(100px)', opacity: 0 })),
        ])),
    ])
]);