class Key {
  private signature: string;
  constructor() {
    this.signature = Math.random().toString();
  }
  public getSignature(): string {
    return this.signature;
  }
}
class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];
  constructor(key: Key) {
    this.key = key;
  }
  public abstract OpenDoor(key: Key): void;
  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("The person come in");
    } else {
      console.log("The door is close");
    }
  }
}
class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  public OpenDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("The door is open");
    } else {
      console.log("Wrong key");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};
