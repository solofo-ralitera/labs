/**
 * Exo1: un personne peut ecrire sur un support (standard output, fichier, bdd, tableau, cahier...)
 * 
 * Etape 6: 
 *  Implémentation de la methode delete
 * 
 * Contrainte:
 *  Chaque support doit implémenter la méthode delete même s'il n'est pas censé le supporter (ex CD)
 * 
 * Evolution: se soustraire à cette contrainte
 */

abstract class Support {
  public abstract ecrire(text: string): void;
  public abstract delete(): void;
} 

class StdOutput extends Support {
  public ecrire(text: string): void {
    console.log('Standard output: ', text);
  }

  public delete(): void {
    console.log('Standard output delete');
  }
}

class Fichier extends Support {
  public ecrire(text: string): void {
    console.log('Fichier ecrire: ', text);
  }

  public delete(): void {
    console.log('Fichier delete');
  }
}

class Cd extends Support {
  public ecrire(text: string): void {
    console.log('CD ecrire: ', text);
  }

  public delete(): void {
    throw new Error('CD cannot be erased');
  }
}

class Person {
  public ecrire(text: string, support: Support) {
      support.ecrire(text);
  }

  public delete(support: Support) {
    support.delete();
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
