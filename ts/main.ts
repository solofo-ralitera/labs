
interface Deletable {
  delete(text: string): void;
}

interface Writable {
  write(text: string): void;
}

class StdOutput implements Writable {
  public write(text: string): void {
    console.log('Stdout write', text);
  }

}

class FileOutput implements Writable, Deletable {
  public write(text: string): void {
    console.log('File write', text);
  }
  public delete(text: string): void {
    console.log('text deleted', text);
  }  
}

class CdOutput implements Writable {
  public write(text: string) {
    console.log('Cd burn', text);
  }
}

class TableauOutput implements Writable, Deletable {
  public write(text: string) {
    console.log('Tableau', text);
  }
  public delete(text: string): void {
    console.log('delete text', text);
  }  
}

class BddOutput implements Writable, Deletable {
  public write(text: string) {
    console.log('Bdd', text);
  }
  public delete(text: string): void {
    console.log('delete text', text);
  }  
}

class Person {
  public ecrire(text: string, support: Writable): void {
    support.write(text);
  }

  public delete(text: string, support: Deletable): void {
    support.delete(text);
  }
}

const stdOut = new StdOutput();
const fileOut = new FileOutput();
const cdOut = new CdOutput();
const tableauOut = new TableauOutput();
const bddOut = new BddOutput();

const person = new Person();
person.ecrire('hello', stdOut);
person.ecrire('hello', fileOut);
person.ecrire('hello', cdOut);
person.ecrire('hello', tableauOut);
person.ecrire('hello', bddOut);


person.delete('hello', fileOut);
person.delete('hello', tableauOut);
person.delete('hello', bddOut);