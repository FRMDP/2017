function Character() {
 
  this.life = () => {
  	return 3000;
  };
  this.attackDamage = () => {
  	return 25;
  };

  this.resistance = () => {
  	return 10;
  }
 
}

// Decorator 1
function sword( character ) {
 
  const base_attack = character.attackDamage();
  character.attackDamage = () => {
    return base_attack + 50;
  };
 
}

// Decorator 2
function maul( character ){
 
  const base_attack = character.attackDamage();
  character.attackDamage = () => {
    return base_attack + 75;
  };
 
}

// Decorator 3
function shield( character ){
 
  const base_resistance = character.resistance();
  character.resistance = () => {
     return base_resistance + 20;
  };
 
}

// Decorator 4
function armor( character ){
 
  const base_resistance = character.resistance();
  character.resistance = () => {
     return base_resistance + 50;
  };
 
}

const character = new Character();
sword(character);
armor(character);
shield(character);