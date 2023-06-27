/**
 * Exo1: un personne peut ecrire sur un support (standard output, fichier, bdd, tableau, cahier...)
 * 
 * Etape 5: 
 *  forcer les enfants de SUpport à implémenter la méthode ecrire
 * 
 * 
 * Evolution: Possibilité d'effacer un support
 */

abstract class Support {
  public abstract ecrire(text: string): void;
} 

class StdOutput extends Support {
  public ecrire(text: string): void {
    console.log('Standard output: ', text);
  }
}

class Fichier extends Support {
  public ecrire(text: string): void {
    console.log('Fichier ecrire: ', text);
  }
}

class Cd extends Support {
  public ecrire(text: string): void {
    console.log('CD ecrire: ', text);
  }
}

class Person {
  public ecrire(text: string, support: Support) {
      support.ecrire(text);
  }
}

const stdOutput = new StdOutput();
const fichier = new Fichier();
const cd = new Cd();

const moi = new Person();
moi.ecrire('Hello', stdOutput);
moi.ecrire('Hello', fichier);
moi.ecrire('Hello', cd);
