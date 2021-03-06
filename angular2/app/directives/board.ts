/// <reference path="../typings/_custom.d.ts" />

// Angular 2
import {Component, View, EventEmitter, coreDirectives} from 'angular2/angular2';

@Component({
  selector: 'board',
  properties: [ 'board' ],
  events: [ 'select' ]
})
@View({
  directives: [ coreDirectives ],
  template: `
    <style>
      .container {
        width: 165px;
        height: 200px;
        position: relative;
        -webkit-perspective: 800px;
        -moz-perspective: 800px;
        -ms-perspective: 800px;
        -o-perspective: 800px;
        perspective: 800px;
      }
      .card .back .front{
        width: 100%;
        height: 100%;
        -webkit-transition: -webkit-transform 1s;
        -moz-transition: -moz-transform 1s;
        -ms-transition: -ms-transform 1s;
        -o-transition: -o-transform 1s;
        transition: transform 1s;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        -o-transform-style: preserve-3d;
        transform-style: preserve-3d;
      }
      .card.flipped {
        -webkit-transform: rotateY( 180deg );
        -moz-transform: rotateY( 180deg );
        -ms-transform: rotateY( 180deg );
        -o-transform: rotateY( 180deg );
        transform: rotateY( 180deg );
      }
      .card:active {
        -webkit-transform: rotateY( 180deg );
        -moz-transform: rotateY( 180deg );
        -ms-transform: rotateY( 180deg );
        -o-transform: rotateY( 180deg );
        transform: rotateY( 180deg );
      }
      .back:active {
        -webkit-transform: rotateY( 180deg );
        -moz-transform: rotateY( 180deg );
        -ms-transform: rotateY( 180deg );
        -o-transform: rotateY( 180deg );
        transform: rotateY( 180deg );
      }
      .front:active {
        -webkit-transform: rotateY( 180deg );
        -moz-transform: rotateY( 180deg );
        -ms-transform: rotateY( 180deg );
        -o-transform: rotateY( 180deg );
        transform: rotateY( 180deg );
      }
      .card img {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -ms-backface-visibility: hidden;
        -o-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      .card .back {
        background: blue;
        -webkit-transform: rotateY( 180deg );
        -moz-transform: rotateY( 180deg );
        -ms-transform: rotateY( 180deg );
        -o-transform: rotateY( 180deg );
        transform: rotateY( 180deg );
      }
      .message {
        width: 660px;
        text-align: center;
      }
    </style>
  `

})
export class Board {
  select: EventEmitter = new EventEmitter();
}
