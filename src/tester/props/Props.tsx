const PersonItem = ({ name, age }: { name: string; age: number }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{age}</h3>
    </div>
  );
};

export const Person = ({ shouldSee = false }: { shouldSee?: boolean }) => {
  return (
    <div>
      <h1>Person</h1>
      {shouldSee && <PersonItem name="cosiek" age={20} />}
    </div>
  );
};
