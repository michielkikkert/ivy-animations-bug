import { animate, state, style, transition, trigger } from '@angular/animations';

export const RevealerAnimation = [
    trigger('revealer', [
        transition(':enter',
            [
                style({
                    height: '0px',
                    overflow: 'hidden'
                }),
                animate('300ms ease-out',
                    style(
                        {height: '*'}
                    )
                )
            ]
        ),
        transition(':leave',
            [
                style({
                    height: '*',
                    overflow: 'hidden',
                }),
                animate('200ms ease-in',
                    style(
                        {
                            height: '0px',
                            overflow: 'hidden',
                            opacity: 0
                        }
                    )
                )
            ]
        )
    ])
];
