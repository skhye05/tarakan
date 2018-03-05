import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeToggle =
    trigger('fadeToggle', [
        state('off', style({
            transform: 'translateY(100px)',
            opacity: 0
        })),
        state('on', style({
            transform: 'translateY(0)',
            opacity: 1
        })),
        transition('off => on', animate('.4s 100ms ease-in')),
        transition('on => off', animate('.5s 100ms ease-out'))
    ]);

export const fadeToggleTeam =
    trigger('fadeToggleTeam', [
        state('off', style({
            opacity: 0
        })),
        state('on', style({
            opacity: 1
        })),
        transition('off => on', animate('.2s 100ms ease-in')),
        transition('on => off', animate('.3s 100ms ease-out'))
    ]);

    export const imgTeam =
    trigger('imgTeam', [
        state('off', style({
            transform: 'scale(.8)'
        })),
        state('on', style({
            transform: 'scale(1)'
        })),
        transition('off => on', animate('.4s 100ms ease-in')),
        transition('on => off', animate('.5s 100ms ease-out'))
    ]);