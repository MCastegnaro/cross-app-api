interface ICreateCategoryDTO {
  name: string;
  description: string;
  isTeam: boolean;
  numberOfParticipants: number;
  numberOfEntries: number;
}

export { ICreateCategoryDTO };
