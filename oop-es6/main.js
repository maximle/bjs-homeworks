class Weapon {
  constructor(obj) {
      this.name = obj.name;
      this.attack = obj.attack;
      this.durability = obj.durability;
      this.range = obj.range;
      this.initialDurability = obj.durability;
  };
  
  //obj.initialDurability = obj.durability;
  
  takeDamage(damage) {
    //console.log(this.name);
    //console.log(this.durability);
    if (this.durability >= damage) {
      this.durability -= damage;
    } else {
        console.log('Ошибка! durability < damage');
        this.durability = 0;
    };
  };
  getDamage() {
    if (this.durability >= (0.3 * this.initialDurability)) {
      //console.log(this.attack);
    } else if (0 < this.durability & this.durability <= (0.3 * this.initialDurability)) {
      this.attack /= 2;
      //console.log(this.attack);
    } else if (this.durability === 0) {
      this.attack = 0;
      //console.log(this.attack);
    };
    return this.attack;
  };
  isBroken() {
    return this.durability === 0;
  }
};

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

arm.takeDamage(20);
console.log(arm.durability); // Infinity

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

const sword = new Weapon({
    name: 'Меч',
    attack: 25,
    durability: 500,
    range: 1,
});

const knife = new Weapon({
    name: 'Нож',
    attack: 5,
    durability: 300,
    range: 1,
});

const wand = new Weapon({
    name: 'Посох',
    attack: 8,
    durability: 300,
    range: 2,
});

const longBow = new Weapon({
    name: 'Длинный лук',
    attack: 15,
    durability: 200,
    range: 4,
});

const axe = new Weapon({
    name: 'Секира',
    attack: 27,
    durability: 800,
    range: 1,
});

const stormWand = new Weapon({
    name: 'Посох бури',
    attack: 20,
    durability: 10,
    range: 1,
});

bow.takeDamage(180);
console.log(bow.durability); // 180
console.log(bow.getDamage());
console.log(bow.isBroken());


class Bow extends Weapon {
  constructor(obj) {
    super(obj);
    
  };
};
const bow1 = new Bow(bow);

console.log(bow1.name); // Лук
console.log(bow1.attack); // 10
console.log(bow1.durability); // 200
console.log(bow1.range); // 3

console.log(bow1.getDamage());
console.log(bow1.isBroken());
bow1.takeDamage(20);
console.log(bow1.isBroken());

class Arm extends Weapon {
  constructor(obj) {
    super(obj);
    
  };
};

const arm1 = new Arm(arm);

class Sword extends Weapon {
  constructor(obj) {
    super(obj);
    
  };
};

const sword1 = new Sword(sword);

class Knife extends Weapon {
  constructor(obj) {
    super(obj);
    
  };
};

const knife1 = new Knife(knife);

class Wand extends Weapon {
  constructor(obj) {
    super(obj);
    
  };
};

const wand1 = new Wand(wand);

class LongBow extends Bow {
  constructor(obj) {
    super(obj);
    this.attack = 15;
    this.range = 4;
  };
};

const longbow1 = new LongBow(bow);

class Axe extends Sword {
  constructor(obj) {
    super(obj);
    this.attack = 27;
    this.durability = 800;
  };
};

const axe1 = new Axe(sword);

class StormWand extends Wand {
  constructor(obj) {
    super(obj);
    this.attack = 10;
    this.range = 3;
  };
};

const stormwand1 = new StormWand(wand);


console.log(stormwand1.attack);
console.log(stormwand1.getDamage());
console.log(stormwand1.isBroken());
stormwand1.takeDamage(20);
console.log(stormwand1.durability);
console.log(stormwand1.isBroken());