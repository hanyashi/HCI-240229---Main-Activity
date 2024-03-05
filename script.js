console.log("Hello World");

function Pokemon(name, level, health) {
    return {
      name: name,
      level: level,
      health: health,
      tackle: function(opponent) {
        opponent.health -= 2 * this.level;
        console.log(`${this.name} tackled ${opponent.name}.`);
        console.log(`${opponent.name} now has ${opponent.health} health.`);
        if (opponent.health <= 0) {
          console.log(`${opponent.name} fainted!`);
        }
      }
    };
  }
  

  let trainer = {
    name: "Ash",
    age: 16,
    pokemonTeam: [],
    addPokemon: function(pokemon) {
      this.pokemonTeam.push(pokemon);
      console.log(`${pokemon.name} added to ${this.name}'s team!`);
    }
  };

  let pikachu = Pokemon("Pikachu", 10, 100);
  let charmander = Pokemon("Charmander", 8, 120);
  
  trainer.addPokemon(pikachu);
  trainer.addPokemon(charmander);

  console.log(trainer.name);
  console.log(trainer['age']);
  console.log(trainer.pokemonTeam); 
  console.log(trainer);
  console.log(pikachu); 
  console.log(charmander);
  while (pikachu.health > 0 && charmander.health > 0) {
    pikachu.tackle(charmander);
    if (charmander.health > 0) {
    charmander.tackle(pikachu);
}
}
  