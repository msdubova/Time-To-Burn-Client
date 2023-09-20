export type Character = { name: string, birth_year:string, mass:string };

export const StarWarsCharacter: React.FC<Character> = ({ name, birth_year, mass }) => (
  <div>Name:{name} Birth year:{birth_year} Mass:{mass}</div>
);
