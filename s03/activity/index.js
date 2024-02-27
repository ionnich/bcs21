const prompt = require("prompt-sync")();

function Pokemon(name, hp) {
  this.name = name;
  this.hp = hp;
  this.tackle = function (target) {
    console.log(`${this.name} used Tackle on ${target.name}!`);
    target.hp -= 10;
    if (target.hp <= 0) {
      console.log(`${target.name} fainted!`);
    } else {
      console.log(`${target.name}: ${target.hp + 10} hp >>> ${target.hp} hp`);
    }
  };
}

const trainer = (name, pokemon) => {
  return {
    name: name,
    pokemon: pokemon,
    catch(pokemon) {
      this.pokemon.push(pokemon);
      console.log(`${this.name} successfully caught ${pokemon.name}!`);
    }
  };
};

const selectPokemon = () => {
  const pokedex = [
    new Pokemon("Pikachu", 50),
    new Pokemon("Squirtle", 60),
    new Pokemon("Charizard", 100),
    new Pokemon("Arceus", 999)
  ];

  console.log("Choose a pokemon:");
  pokedex.forEach((pokemon, index) => {
    console.log(`${index + 1}. ${pokemon.name} (${pokemon.hp} hp)`);
  });
  let choice = prompt("Enter the number of the pokemon you want to choose: ");

  while (choice < 1 || choice > pokedex.length) {
    choice = "Invalid choice! Please try again.";
  }

  choice = parseInt(choice);
  return pokedex[choice - 1];
};

const player1 = trainer("Enter player 1 name: ", selectPokemon());
const player2 = trainer(prompt("Enter player 2 name: "), selectPokemon());

const battle = (player1, player2) => {
  console.log(`\n${player1.name} blocks ${player2.name}'s way!`);
  console.log(player1["name"] + " is forced to battle " + player2.name + "!");

  let turn = 1;
  while (player1.pokemon.hp > 0 && player2.pokemon.hp > 0) {
    console.log(`\nTurn ${turn}`);
    player1.pokemon.tackle(player2.pokemon);
    if (player2.pokemon.hp > 0) {
      player2.pokemon.tackle(player1.pokemon);
    }
    console.log("press any key to continue...");
    prompt();
    turn++;
  }
  console.log(
    `\n${player1.pokemon.hp > 0 ? player1.name : player2.name} wins!`
  );
};

battle(player1, player2);
