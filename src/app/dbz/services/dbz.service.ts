import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    { id:uuid(), name: 'Goku', power: 1000 },
    { id:uuid(), name: 'Vegeta', power: 800 },
    { id:uuid(), name: 'Otro', power: 700 },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {id:uuid(), ...character}
    this.characters.push(newCharacter);
  }

  // this.characters.splice(index, 1);
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
