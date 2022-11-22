import './style.css';
import layout from './layout.js';
import computerGrid from './computerGrid.js';
import Carrier from '/images/carrier.png';
import Carrier90 from '/images/carrier90.png';
import Battleship from '/images/battleship.png';
import Battleship90 from '/images/battleship90.png';
import Cruiser from '/images/cruiser.png';
import Submarine from '/images/submarine.png';
import Destroyer from '/images/destroyer.png';
import Cruiser90 from '/images/cruiser90.png';
import Submarine90 from '/images/submarine90.png';
import Destroyer90 from '/images/destroyer90.png';
import Explosion from './explosion.wav';

layout();

const shipDiv = document.getElementById('shipDiv');

const carrier = new Image();
carrier.id = 'carrier';
carrier.src = Carrier;
carrier.setAttribute('style', 'cursor:move;');
carrier.draggable = true;
carrier.style.height = '45px';
carrier.style.width = '225px';

document.querySelector('.shipGrid').appendChild(carrier);
carrier.addEventListener('drop', dropCarrier);
carrier.addEventListener('dragover', allowDrop);
carrier.addEventListener('dragstart', drag);
carrier.addEventListener('click', rotateCarrier);

let items = document.querySelectorAll('.playerTile');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('drop', dropCarrier);
    items[i].addEventListener('dragover', allowDrop);
}

const battleship = new Image();
battleship.id = 'battleship';
battleship.src = Battleship;
battleship.draggable = false;
battleship.setAttribute('style', 'cursor:move;z-index:1');
battleship.style.height = '45px';
battleship.style.width = '180px';
document.querySelector('.shipGrid').appendChild(battleship);

const cruiser = new Image();
cruiser.id = 'cruiser';
cruiser.src = Cruiser;
cruiser.draggable = false;
cruiser.setAttribute('style', 'cursor:move;z-index:1;');
cruiser.style.height = '45px';
cruiser.style.width = '135px';
document.querySelector('.shipGrid').appendChild(cruiser);

const submarine = new Image();
submarine.id = 'submarine';
submarine.src = Submarine;
submarine.draggable = false;
submarine.setAttribute('style', 'cursor:move;z-index:1;');
submarine.style.height = '45px';
submarine.style.width = '135px';
document.querySelector('.shipGrid').appendChild(submarine);

const destroyer = new Image();
destroyer.id = 'destroyer';
destroyer.src = Destroyer;
destroyer.draggable = false;
destroyer.setAttribute('style', 'cursor:move;z-index:1;');
destroyer.style.height = '45px';
destroyer.style.width = '90px';
document.querySelector('.shipGrid').appendChild(destroyer);

const HumanCarrier = {
    name: 'Carrier',
    position1: undefined,
    position2: undefined,
    position3: undefined,
    position4: undefined,
    position5: undefined,
    shipTiles: [],
    life: 5,
    src: undefined
}

const HumanBattleship = {
    name: 'BattleShip',
    position1: undefined,
    position2: undefined,
    position3: undefined,
    position4: undefined,
    shipTiles: [],
    life: 4,
    src: undefined
}

const HumanCruiser = {
    name: 'Cruiser',
    position1: undefined,
    position2: undefined,
    position3: undefined,
    shipTiles: [],
    life: 3,
    src: undefined
}

const HumanSubmarine = {
    name: 'Submarine',
    position1: undefined,
    position2: undefined,
    position3: undefined,
    shipTiles: [],
    life: 3,
    src: undefined
}

const HumanDestroyer = {
    name: 'Destroyer',
    position1: undefined,
    position2: undefined,
    shipTiles: [],
    life: 2,
    src: undefined
}

function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);

}

function allowDrop(ev) {
    ev.preventDefault();
}

function dropCarrier(ev) {
    if (carrier.src == Carrier) {

        if (this.id > 6 && this.id <= 10 ||
            this.id > 16 && this.id <= 20 ||
            this.id > 26 && this.id <= 30 ||
            this.id > 36 && this.id <= 40 ||
            this.id > 46 && this.id <= 50 ||
            this.id > 56 && this.id <= 60 ||
            this.id > 66 && this.id <= 70 ||
            this.id > 76 && this.id <= 80 ||
            this.id > 86 && this.id <= 90 ||
            this.id > 96 && this.id <= 100) {
            //nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('carrier'));
            let num = Number(this.id)
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1), document.getElementById(num + 2), document.getElementById(num + 3), document.getElementById(num + 4)]

            HumanCarrier.position1 = document.getElementById(this.id);
            HumanCarrier.position2 = document.getElementById(num + 1);
            HumanCarrier.position3 = document.getElementById(num + 2);
            HumanCarrier.position4 = document.getElementById(num + 3);
            HumanCarrier.position5 = document.getElementById(num + 4);
            HumanCarrier.src = Carrier;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropCarrier)
                items[i].addEventListener('drop', dropBattleShip)
            }

            shipDiv.style.height = '700px';

            carrier.style.height = '44px';
            carrier.style.width = '224px';
            carrier.style.position = 'absolute';
            carrier.draggable = false;
            carrier.removeEventListener('click', rotateCarrier);
            carrier.style.cursor = 'default';

            battleship.draggable = true
            battleship.addEventListener('click', rotateBattleship)
            battleship.addEventListener('drop', dropBattleShip)
            battleship.addEventListener('dragover', allowDrop)
            battleship.addEventListener('dragstart', drag)
        }
    } else {

        if (this.id >= 61) {
            // nothing
        } else {

            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('carrier'));
            let num = Number(this.id)
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10), document.getElementById(num + 20), document.getElementById(num + 30), document.getElementById(num + 40)]

            HumanCarrier.position1 = document.getElementById(this.id);
            HumanCarrier.position2 = document.getElementById(num + 10);
            HumanCarrier.position3 = document.getElementById(num + 20);
            HumanCarrier.position4 = document.getElementById(num + 30);
            HumanCarrier.position5 = document.getElementById(num + 40);
            HumanCarrier.src = Carrier90;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropCarrier);
                items[i].addEventListener('drop', dropBattleShip);
            }

            carrier.style.height = '224px';
            carrier.style.width = '44px';
            carrier.style.position = 'absolute'
            carrier.draggable = false;
            carrier.removeEventListener('click', rotateCarrier);
            carrier.style.cursor = 'default'
            shipDiv.style.height = '700px';

            battleship.draggable = true;
            battleship.addEventListener('click', rotateBattleship);
            battleship.addEventListener('drop', dropBattleShip);
            battleship.addEventListener('dragover', allowDrop);
            battleship.addEventListener('dragstart', drag);
        }
    }
}

function dropBattleShip(ev) {
    let num = Number(this.id);
    if (battleship.src == Battleship) {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 1).style.backgroundColor === 'transparent' || document.getElementById(num + 2).style.backgroundColor === 'transparent' || document.getElementById(num + 3).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id > 7 && this.id <= 10 ||
            this.id > 17 && this.id <= 20 ||
            this.id > 27 && this.id <= 30 ||
            this.id > 37 && this.id <= 40 ||
            this.id > 47 && this.id <= 50 ||
            this.id > 57 && this.id <= 60 ||
            this.id > 67 && this.id <= 70 ||
            this.id > 77 && this.id <= 80 ||
            this.id > 87 && this.id <= 90 ||
            this.id > 97 && this.id <= 100) {
            // nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('battleship'));
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1), document.getElementById(num + 2), document.getElementById(num + 3)]

            HumanBattleship.position1 = document.getElementById(this.id);
            HumanBattleship.position2 = document.getElementById(num + 1);
            HumanBattleship.position3 = document.getElementById(num + 2);
            HumanBattleship.position4 = document.getElementById(num + 3);
            HumanBattleship.src = Battleship;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropBattleShip);
                items[i].addEventListener('drop', dropCruiser);
            }

            shipDiv.style.height = '700px'
            battleship.style.height = '44px';
            battleship.style.width = '179px';
            battleship.style.position = 'absolute';
            battleship.draggable = false;
            battleship.style.cursor = 'default'
            battleship.removeEventListener('click', rotateBattleship);

            cruiser.draggable = true;
            cruiser.addEventListener('click', rotateCruiser);
            cruiser.addEventListener('drop', dropCruiser);
            cruiser.addEventListener('dragover', allowDrop);
            cruiser.addEventListener('dragstart', drag);
        }
    } else {

        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 10).style.backgroundColor === 'transparent' || document.getElementById(num + 20).style.backgroundColor === 'transparent' || document.getElementById(num + 30).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id >= 71) {
            // nothing
        } else {
            ev.preventDefault();
            // var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('battleship'));
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10), document.getElementById(num + 20), document.getElementById(num + 30)]

            HumanBattleship.position1 = document.getElementById(this.id);
            HumanBattleship.position2 = document.getElementById(num + 10);
            HumanBattleship.position3 = document.getElementById(num + 20);
            HumanBattleship.position4 = document.getElementById(num + 30);
            HumanBattleship.src = Battleship90;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }
            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropBattleShip);
                items[i].addEventListener('drop', dropCruiser);
            }
            battleship.style.height = '179px';
            battleship.style.width = '44px';
            battleship.style.position = 'absolute';
            battleship.draggable = false;
            battleship.style.cursor = 'default'
            battleship.removeEventListener('click', rotateBattleship);

            shipDiv.style.height = '700px';

            cruiser.draggable = true;
            cruiser.addEventListener('click', rotateCruiser);
            cruiser.addEventListener('drop', dropCruiser);
            cruiser.addEventListener('dragover', allowDrop);
            cruiser.addEventListener('dragstart', drag);
        }
    }
}

function dropCruiser(ev) {
    let num = Number(this.id);
    if (cruiser.src == Cruiser) {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 1).style.backgroundColor === 'transparent' || document.getElementById(num + 2).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id > 8 && this.id <= 10 ||
            this.id > 18 && this.id <= 20 ||
            this.id > 28 && this.id <= 30 ||
            this.id > 38 && this.id <= 40 ||
            this.id > 48 && this.id <= 50 ||
            this.id > 58 && this.id <= 60 ||
            this.id > 68 && this.id <= 70 ||
            this.id > 78 && this.id <= 80 ||
            this.id > 88 && this.id <= 90 ||
            this.id > 98 && this.id <= 100) {
            // nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('cruiser'));
            let num = Number(this.id);
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1), document.getElementById(num + 2)];

            HumanCruiser.position1 = document.getElementById(this.id);
            HumanCruiser.position2 = document.getElementById(num + 1);
            HumanCruiser.position3 = document.getElementById(num + 2);
            HumanCruiser.src = Cruiser;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropCruiser);
                items[i].addEventListener('drop', dropSubmarine);
            }

            cruiser.style.height = '44px';
            cruiser.style.width = '134px';
            cruiser.style.position = 'absolute';
            cruiser.draggable = false;
            cruiser.removeEventListener('click', rotateCruiser);
            cruiser.style.cursor = 'default';

            shipDiv.style.height = '700px';

            submarine.draggable = true;
            submarine.addEventListener('click', rotateSubmarine);
            submarine.addEventListener('drop', dropSubmarine);
            submarine.addEventListener('dragover', allowDrop);
            submarine.addEventListener('dragstart', drag);
        }
    } else {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 10).style.backgroundColor === 'transparent' || document.getElementById(num + 20).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id >= 81) {
            // nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('cruiser'));
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10), document.getElementById(num + 20)];

            HumanCruiser.position1 = document.getElementById(this.id);
            HumanCruiser.position2 = document.getElementById(num + 10);
            HumanCruiser.position3 = document.getElementById(num + 20);
            HumanCruiser.src = Cruiser90;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropCruiser)
                items[i].addEventListener('drop', dropSubmarine)
            }

            cruiser.style.height = '134px';
            cruiser.style.width = '44px';
            cruiser.style.position = 'absolute';
            cruiser.draggable = false;
            cruiser.style.cursor = 'default'
            cruiser.removeEventListener('click', rotateCruiser);

            shipDiv.style.height = '700px';

            submarine.draggable = true;
            submarine.addEventListener('click', rotateSubmarine);
            submarine.addEventListener('drop', dropSubmarine);
            submarine.addEventListener('dragover', allowDrop);
            submarine.addEventListener('dragstart', drag);
        }
    }
}

function dropSubmarine(ev) {
    let num = Number(this.id);
    if (submarine.src == Submarine) {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 1).style.backgroundColor === 'transparent' || document.getElementById(num + 2).style.backgroundColor === 'transparent') {
            // nothing
        } else if (
            this.id > 8 && this.id <= 10 ||
            this.id > 18 && this.id <= 20 ||
            this.id > 28 && this.id <= 30 ||
            this.id > 38 && this.id <= 40 ||
            this.id > 48 && this.id <= 50 ||
            this.id > 58 && this.id <= 60 ||
            this.id > 68 && this.id <= 70 ||
            this.id > 78 && this.id <= 80 ||
            this.id > 88 && this.id <= 90 ||
            this.id > 98 && this.id <= 100
        ) {
            // nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('submarine'));
            let num = Number(this.id)
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1), document.getElementById(num + 2)]

            HumanSubmarine.position1 = document.getElementById(this.id)
            HumanSubmarine.position2 = document.getElementById(num + 1)
            HumanSubmarine.position3 = document.getElementById(num + 2)
            HumanSubmarine.src = Submarine

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropSubmarine)
                items[i].addEventListener('drop', dropDestroyer)
            }

            submarine.style.height = '44px'
            submarine.style.width = '134px'
            submarine.style.position = 'absolute'
            submarine.draggable = false;
            submarine.style.cursor = 'default'
            submarine.removeEventListener('click', rotateSubmarine);

            destroyer.draggable = true;
            destroyer.addEventListener('click', rotateDestroyer);
            destroyer.addEventListener('drop', dropDestroyer);
            destroyer.addEventListener('dragover', allowDrop);
            destroyer.addEventListener('dragstart', drag);
        }
    } else {

        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 10).style.backgroundColor === 'transparent' || document.getElementById(num + 20).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id >= 81) {
            // nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('submarine'));
            let num = Number(this.id);
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10), document.getElementById(num + 20)]

            HumanSubmarine.position1 = document.getElementById(this.id);
            HumanSubmarine.position2 = document.getElementById(num + 10);
            HumanSubmarine.position3 = document.getElementById(num + 20);
            HumanSubmarine.src = Submarine90;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropSubmarine);
                items[i].addEventListener('drop', dropDestroyer);
            }

            submarine.style.height = '134px'
            submarine.style.width = '44px'
            submarine.style.position = 'absolute';
            submarine.draggable = false;
            submarine.style.cursor = 'default'
            submarine.removeEventListener('click', rotateSubmarine);

            destroyer.draggable = true;
            destroyer.addEventListener('click', rotateDestroyer);
            destroyer.addEventListener('drop', dropDestroyer);
            destroyer.addEventListener('dragover', allowDrop);
            destroyer.addEventListener('dragstart', drag);
        }
    }
}

function dropDestroyer(ev) {
    let num = Number(this.id);
    if (destroyer.src == Destroyer) {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 1).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id > 9 && this.id <= 10 ||
            this.id > 19 && this.id <= 20 ||
            this.id > 29 && this.id <= 30 ||
            this.id > 39 && this.id <= 40 ||
            this.id > 49 && this.id <= 50 ||
            this.id > 59 && this.id <= 60 ||
            this.id > 69 && this.id <= 70 ||
            this.id > 79 && this.id <= 80 ||
            this.id > 89 && this.id <= 90 ||
            this.id > 99 && this.id <= 100) {
            // nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('destroyer'));
            let num = Number(this.id);
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1)];

            HumanDestroyer.position1 = document.getElementById(this.id);
            HumanDestroyer.position2 = document.getElementById(num + 1);
            HumanDestroyer.src = Destroyer;

            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }
            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropDestroyer);
            }
            destroyer.style.height = '44px';
            destroyer.style.width = '89px';
            destroyer.style.position = 'absolute';
            destroyer.draggable = false;
            destroyer.style.cursor = 'default';
            destroyer.removeEventListener('click', rotateDestroyer);
        }
        computerGrid(playerShips);

    } else {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent' || document.getElementById(num + 10).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id >= 91) {
            // nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('destroyer'));
            let num = Number(this.id);
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10)]
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
                console.log(tiles[i]);
            }
            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropDestroyer)
            }
            destroyer.style.height = '89px';
            destroyer.style.width = '44px';
            destroyer.style.position = 'absolute';
            destroyer.draggable = false;
            destroyer.style.cursor = 'default';
            destroyer.removeEventListener('click', rotateDestroyer);
        }
        computerGrid(playerShips);
    }
}

function rotateCarrier() {
    if (carrier.src == Carrier) {
        carrier.src = Carrier90;
        carrier.style.height = '225px';
        carrier.style.width = '45px';
        shipDiv.style.height = '1000px';
    } else {
        carrier.src = Carrier;
        carrier.style.height = '45px';
        carrier.style.width = '225px';
        shipDiv.style.height = '700px';
    }
}

function rotateBattleship() {
    if (battleship.src == Battleship) {
        battleship.src = Battleship90;
        battleship.style.height = '180px';
        battleship.style.width = '45px';
        shipDiv.style.height = '800px';
    } else {
        battleship.src = Battleship;
        battleship.style.height = '45px';
        battleship.style.width = '180px';
        shipDiv.style.height = '700px';
    }
}

function rotateCruiser() {
    if (cruiser.src == Cruiser) {
        cruiser.src = Cruiser90;
        cruiser.style.height = '135px';
        cruiser.style.width = '45px';
    } else {
        cruiser.src = Cruiser;
        cruiser.style.height = '45px';
        cruiser.style.width = '135px';
        shipDiv.style.height = '700px';
    }
}

function rotateSubmarine() {
    if (submarine.src == Submarine) {
        submarine.src = Submarine90;
        submarine.style.height = '135px';
        submarine.style.width = '45px';
    } else {
        submarine.src = Submarine;
        submarine.style.height = '45px';
        submarine.style.width = '135px';
        shipDiv.style.height = '700px';
    }
}

function rotateDestroyer() {
    if (destroyer.src == Destroyer) {
        destroyer.src = Destroyer90;
        destroyer.style.height = '90px';
        destroyer.style.width = '45px';
    } else {
        destroyer.src = Destroyer;
        destroyer.style.height = '45px';
        destroyer.style.width = '90px';
        shipDiv.style.height = '700px';
    }
}

let playerShips = [HumanCarrier, HumanBattleship, HumanCruiser, HumanSubmarine, HumanDestroyer];