/**
 * Exo1: un personne peut ecrire sur un support (standard output, fichier, bdd, tableau, cahier...)
 * 
 * Etape 2: 
 *  une classs par type de support
 * Contrainte: 
 *  - si nouveau support, il faut rajouter la méthode d'ecriture correspondants à ce support 
 *  - on a une dépendance de chaque support dans Person (ligne 27 et 32) + new à chaque ecriture
 * 
 * Evolution: traiter cette dépendance et minimiser les modifications à faire à chaque rajout de support
 */

class StdOutput {
  public ecrire(text: string): void {
    console.log('Standard output: ', text);
  }
}

class Fichier {
  public ecrire(text: string): void {
    console.log('Fichier ecrire: ', text);
  }
}

class Person {
  public ecrireStdOutput(text: string) {
    const output = new StdOutput();
    output.ecrire(text);
  }

  public ecrireFichier(text: string) {
    const output = new Fichier();
    output.ecrire(text);
  }

}

const moi = new Person();
moi.ecrireStdOutput('Hello');
moi.ecrireFichier('Hello');
