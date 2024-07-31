import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })

export class DbzService {

  public characters: Character[] = [
    { name: 'Goku', power: 1000 },
    { name: 'Vegeta', power: 800 },
    { name: 'Otro', power: 700 },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
    //this.characters.unshift(character);
    // console.log(this.characters);

  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}
