import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';
export const slideInAnimation =
    trigger('routeAnimations', [
        transition('Home => photos , blog => Home, blog=>professional, blogwrite => my, blogwrite => professional, bloglist=>Home, bloglist=>my, bloglist=>professional, professional=>photos', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('photos => Home , Home => blog,professional=>blog, my => blogwrite, professional => blogwrite, Home=>bloglist, my=>bloglist, professional=>bloglist, photos=>professional',  [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)' })),
                ], { optional: true }),
            ])
        ]),
        transition('Home => professional, my => Home, blog=>bloglist, blogwrite=>blog, photos => pics , vids => photos', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateY(100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateY(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateY(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateY(-100%)' }))
                ], { optional: true }),
            ]),

        ]),
        transition('professional => Home,bloglist=>blog, blog=>blogwrite, pics => photos, photos =>vids', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateY(-100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateY(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateY(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateY(100%)' }))
                ], { optional: true }),
            ]),
        ]),
    ]);