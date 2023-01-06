

class Cachorro {
   
    constructor(Raca, Cor, Tamanho) {
      this.Raca = Raca;
      
      this.Cor = Cor;
      
      this.Tamanho = Tamanho;
    }
   
    Comer() {
      console.log("O cachorro " + this.Raca + " Esta comendo");
    }
  }
   
  let Rex = new Cachorro("Buldog" , "Preto" , "Pequeno");

  
  let JJ = new Cachorro("Pitbull" , "Branco" , "Pequeno");

  Rex.Comer();

