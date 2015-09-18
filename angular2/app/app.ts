/// <reference path="typings/_custom.d.ts" />

// Angular 2
import {Component, View, coreDirectives} from 'angular2/angular2';

// Services
import {MemoryGame} from './services/game';

// Directives
import {Board} from './directives/board';

@
Component({
  selector: 'memory',
  viewBindings: [MemoryGame]
})@ View({
  directives: [coreDirectives, Board],
  template: `
    <div style="padding: 0 16px;">
      <h2>Memory Game</h2>
      <div class="panel panel-default">
        <div class="panel-body">
          <div>Pairs left to match: {{game.unmatchedPairs}}</div>
          <div>Matching: {{game.firstPick.title}}</div>
          <table>
            <tr *ng-for="#row of game.grid" class="row">
              <td *ng-for="#tile of row">
                <div class="card">
                  <img class="back" (click)="game.flipTile(tile)" [hidden]="tile.flipped" src="img/memory_game/back.png">
                  <img class="front" (click)="game.flipTile(tile)" [hidden]="!tile.flipped" src="img/memory_game/{{tile.title}}.png">
                </div>
              </td>
            </tr>
          </table>
          <div class="message">{{game.message}}</div>
        </div>
      </div>
    </div>`
})

export class Memory {
  game: MemoryGame;
  tileNames: Array < string > ;
  constructor() {
    this.tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
      'that-guy', 'zeppelin'];
    this.game = new MemoryGame(this.tileNames);
  }
}
