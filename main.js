//Create video game classes. The video game I chose is The Last of Us 


//Build out character class with attributes I want all characters to have
class Character {
    constructor(name, age, eyeColor, hairColor, gender, meleeWeaponsArr, weaponsArr, hobbiesArr){
        this.name = name
        this.age = age
        this.weapons = weaponsArr
        this.melee = meleeWeaponsArr
        this.eyeColor = eyeColor
        this.hairColor = hairColor
        this.gender = gender
        this.hobbies = hobbiesArr
    }

    checkWeapons(){
        console.log(`${this.name} has these distance weapons: ${this.weapons} and these melee weapons: ${this.melee} in their inventory`)
    }

    run(){
        console.log(`${this.name} starts running`)
    }

    selectWeapon(){
        let combineweapons = this.weapons.concat(this.melee)
        let equippedWeapon = combineweapons[Math.floor(Math.random() * combineweapons.length)]
        console.log(`${this.name} chooses ${equippedWeapon} from their inventory`)
    }

    useMelee(){
        let chooseMelee = this.melee[Math.floor(Math.random() * this.melee.length)]
        console.log(`${this.name} swings ${chooseMelee} at selected target` )
    }

    useDistance(){
        let chooseWeapon = this.weapons[Math.floor(Math.random() * this.weapons.length)]
        console.log(`${this.name} shoots ${chooseWeapon} at selected target` ) 
    }

    describe(){
        console.log(`${this.name} is a ${this.age} year old ${this.gender} with ${this,this.eyeColor} eyes, who enjoys ${this.hobbies}`)
    }

}

//Create a few characters 

const joel = new Character('Joel', 52,'hazel', 'black', 'male', ['hatchet', 'pipe'], ['revolver', 'assault rifle'], ['playing guitar', 'hunting', 'woodworking'])

const ellie = new Character('Ellie', 14,'green','auburn','female', ['2x4', 'shiv'], ['bow', 'hunting rifle'], ['drawing', 'playing guitar', '\"Lightening the mood\" with her jokebook'])

const tess = new Character('Tess', 51, 'hazel', 'brown', 'female', ['machete', 'fists'],['pistol', 'shotgun'],['smuggling products to survive'] )



//build out a Infected class for the zombie-like monsters from the game and the common attributes they have

class Infected {
    constructor(type, specialAbility, infectionStage){
        this.type = type 
        this.specialAbility = specialAbility
        this.infectionStage = infectionStage
    } 

    attack(){
        console.log(`Upon finding their prey, ${this.type} will attempt to attack their prey using ${this.specialAbility}`)
    }

    describe(){
        console.log(`${this.type} is an Infected that uses ${this.specialAbility} to attack/hunt their prey. When an Infected is a ${this.type}, they have reached ${this.infectionStage}`)
    }
}

//Create a few Infected characters 

const runner = new Infected('Runner', 'intense speed and their tendency to attack in hordes', 'Infected stage one')

const stalker = new Infected('Stalker', 'stalking, hiding, and attacking at opportune moments', 'Infected stage two')

const clicker = new Infected('Clicker', 'echolocation and enhanced strength', 'Infected stage three')

const bloater = new Infected('Bloater', 'enhanced strength and spore bombs', 'Infected stage four')

const shambler = new Infected('Shambler', 'spore clouds with acidic burns and grapples', 'Infected stage four(Alternate)')

//Create a Group class for groups(factions) from the game the common attributes

class Group{
    constructor(name, symbol, slogan, location){
        this.name = name
        this.symbol = symbol
        this.slogan = slogan
        this.location = location 
    }

    callToAction(){
        console.log(`${this.slogan}`)
    }

    describe(){
        console.log(`The ${this.name} is a group based out of ${this.location}, whose symbol is a ${this.symbol}`)
    }
}

//Create a few groups 

const fireflies = new Group('Fireflies', 'Firefly', 'When you\'re lost in the darkness, look for the light.', 'Boston, Massachusetts')

const hunters = new Group('Hunters', 'Hatchet', 'If you can stand then you can fight! Anyone that refuses to fight with us will be banished. Anyone that supports the army will be made an example of.', 'Pittsburgh, Pennsylvania')