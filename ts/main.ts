/**
 * Exo1: un personne peut ecrire sur un support (standard output, fichier, bdd, tableau, cahier...)
 * 
 * Etape 3: 
 *  unification des méthodes ecrire dans la classe personne
 *  suppr des new ...() dans Person
 * 
 * Contrainte: 
 *  - si nouveau support, on doit toujours modifier la méthode ecrire pour le nouveau support
 * 
 * Evolution: minimiser les modifications à faire à chaque rajout de support
 */

class StdOutput {
  public log(text: string): void {
    console.log('Standard output: ', text);
  }
}

class Fichier {
  public ecrire(text: string): void {
    console.log('Fichier ecrire: ', text);
  }
}

class Person {
  public ecrire(text: string, support: StdOutput | Fichier) {
    if (support instanceof StdOutput) {
      support.log(text);
    } else if (support instanceof Fichier) {
      support.ecrire(text);
    }
  }
}
const stdOutput = new StdOutput();
const fichier = new Fichier();

const moi = new Person();
moi.ecrire('Hello', stdOutput);
moi.ecrire('Hello', fichier);
