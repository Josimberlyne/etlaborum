interface HasID {
  id: number;
}

function myObj2(obj: HasID & { name: string }): void {
  console.log(`Name: ${obj.name}, ID: ${obj.id}`);
}

// Usage
const result = myObj2({ name: "Riyad", id: 1 });
