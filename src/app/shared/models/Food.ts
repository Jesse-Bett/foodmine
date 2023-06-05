export class Food {
  id!: number; // ? indicates that an id is optional, !indicates that the id is mandatory.
  name!: string;
  price!: number;
  tags?: string[];
  favorite: boolean = false;
  stars: number = 0;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
}
