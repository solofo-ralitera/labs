/**
 * Exo1: un personne peut ecrire sur un support (standard output, fichier, bdd, tableau, cahier...)
 * 
 * Etape 1: 
 *  - 2 classes:  Person et StdOutput
 * Evolution: rajouter un nouveau support pour ecrire
 */

class StdOutput {
  public ecrire(text: string): void {
    console.log('Standard output: ', text);
  }
}

class Person {
  public ecrireStdOutput(text: string) {
    const output = new StdOutput();
    output.ecrire(text);
  }
}

const moi = new Person();
moi.ecrireStdOutput('Hello');
