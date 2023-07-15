/**
 * Exo1: un personne peut ecrire sur un support (standard output, fichier, bdd, tableau, cahier...)
 * 
 * Etape 7: 
 *  Création de deux interface Writable et Deletable à la plasse de Support
 *  Composition par implements des types de support
*/

interface Writable {
  ecrire(text: string): void;
} 

interface Deletable {
  delete(): void;
}

class StdOutput implements Writable, Deletable {
  public ecrire(text: string): void {
    console.log('Standard output: ', text);
  }

  public delete(): void {
    console.log('Standard output delete');
  }
}

class Fichier implements Writable, Deletable {
  public ecrire(text: string): void {
    console.log('Fichier ecrire: ', text);
  }

  public delete(): void {
    console.log('Fichier delete');
  }
}

class Cd implements Writable {
  public ecrire(text: string): void {
    console.log('CD ecrire: ', text);
  }
}

class Person {
  public ecrire(text: string, support: Writable) {
      support.ecrire(text);
  }

  public delete(support: Deletable) {
    support.delete();
  }

  public write<T>(support: T, text: string): T {

    
    return {} as T;
  }
}

const stdOutput = new StdOutput();
const fichier = new Fichier();
const cd = new Cd();

const moi = new Person();
moi.ecrire('Hello', stdOutput);
moi.ecrire('Hello', fichier);
moi.ecrire('Hello', cd);

moi.delete(stdOutput);
moi.delete(fichier);

moi.write<Fichier>(fichier, 'helllo');