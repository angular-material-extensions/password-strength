import {animate, animation, AnimationReferenceMetadata, keyframes, style} from '@angular/animations';

export function flipIn(timing: number, rotateX: number, rotateY: number): AnimationReferenceMetadata {
  const params = {timing: timing, delay: 0, rotateX, rotateY};

  return animation(
    [
      style({'backface-visibility': 'visible'}),
      animate(
        '{{ timing }}s {{ delay }}s ease-in',
        keyframes([
          style({
            opacity: 0,
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
            offset: 0,
          }),
          style({
            opacity: 1,
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
            offset: 0.4,
          }),
          style({
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
            offset: 0.6,
          }),
          style({
            transform:
              'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
            offset: 0.8,
          }),
          style({
            transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
            offset: 1,
          }),
        ])
      ),
    ],
    {params}
  );
}

export const flipInX = flipIn(1, 1, 0);
export const flipInY = flipIn(1, 0, 1);

export const shake = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({transform: 'translate3d(0, 0, 0)', offset: 0}),
      style({transform: 'translate3d(-10px, 0, 0)', offset: 0.1}),
      style({transform: 'translate3d(10px, 0, 0)', offset: 0.2}),
      style({transform: 'translate3d(-10px, 0, 0)', offset: 0.3}),
      style({transform: 'translate3d(10px, 0, 0)', offset: 0.4}),
      style({transform: 'translate3d(-10px, 0, 0)', offset: 0.5}),
      style({transform: 'translate3d(10px, 0, 0)', offset: 0.6}),
      style({transform: 'translate3d(-10px, 0, 0)', offset: 0.7}),
      style({transform: 'translate3d(10px, 0, 0)', offset: 0.8}),
      style({transform: 'translate3d(-10px, 0, 0)', offset: 0.9}),
      style({transform: 'translate3d(0, 0, 0)', offset: 1}),
    ])
  ),
  {params: {timing: 1, delay: 0}}
);
