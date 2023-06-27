/**
 * Exo1: un personne peut ecrire sur un support (standard output, fichier, bdd, tableau, cahier...)
 * 
 * Etape 4: 
 *  Création d'une lcass mère pour tous les support
 *  Plus besoin de modifier Person pour écrire sur un nouveau support
 * 
 * Contrainte: 
 *  - Chaque support n'est pas obligé d'implémenter la méthode écrire
 * 
 * Evolution: forcer chaque support à implémenter ecrire
 */

class Support {
  public ecrire(text: string): void {
  }
} 

class StdOutput extends Support {
  public override ecrire(text: string): void {
    console.log('Standard output: ', text);
  }
}

class Fichier extends Support {
  public override ecrire(text: string): void {
    console.log('Fichier ecrire: ', text);
  }
}

class Person {
  public ecrire(text: string, support: Support) {
      support.ecrire(text);
  }
}

const stdOutput = new StdOutput();
const fichier = new Fichier();

const moi = new Person();
moi.ecrire('Hello', stdOutput);
moi.ecrire('Hello', fichier);
