import './style.css';
import layout from './layout.js'
import Carrier from '/images/carrier.png'
import Carrier90 from '/images/carrier90.png'
import Battleship from '/images/battleship.png'
import Battleship90 from '/images/battleship90.png'
import Cruiser from '/images/cruiser.png'
import Submarine from '/images/submarine.png'
import Destroyer from '/images/destroyer.png'
import Cruiser90 from '/images/cruiser90.png'
import Submarine90 from '/images/submarine90.png'
import Destroyer90 from '/images/destroyer90.png'

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
carrier.addEventListener('click', rotateCarrier)

let items = document.querySelectorAll('.tile');

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

function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);

}

function allowDrop(ev) {
    ev.preventDefault();
    console.log(this.id)
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
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }
            carrier.style.height = this.offsetHeight
            carrier.style.position = 'absolute'
            carrier.draggable = false;
            shipDiv.style.height = '700px'

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropCarrier)
                items[i].addEventListener('drop', dropBattleShip)
            }
            carrier.removeEventListener('click', rotateCarrier)
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
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }
            carrier.style.height = this.offsetHeight
            carrier.style.position = 'absolute'
            carrier.draggable = false;
            shipDiv.style.height = '700px'

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropCarrier)
                items[i].addEventListener('drop', dropBattleShip)
            }
            carrier.removeEventListener('click', rotateCarrier)
            battleship.draggable = true
            battleship.addEventListener('click', rotateBattleship);
            battleship.addEventListener('drop', dropBattleShip);
            battleship.addEventListener('dragover', allowDrop);
            battleship.addEventListener('dragstart', drag);
        }
    }
}

function dropBattleShip(ev) {

    if (battleship.src == Battleship) {

        if (document.getElementById(this.id).style.backgroundColor === 'transparent') {
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
            let num = Number(this.id)
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1), document.getElementById(num + 2), document.getElementById(num + 3)]
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
                console.log(tiles[i])
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropBattleShip)
                items[i].addEventListener('drop', dropCruiser)
            }
            shipDiv.style.height = '700px'

            battleship.style.height = this.offsetHeight
            battleship.style.position = 'absolute'
            battleship.draggable = false;
            battleship.removeEventListener('click', rotateBattleship);
            cruiser.draggable = true;
            cruiser.addEventListener('click', rotateCruiser)
            cruiser.addEventListener('drop', dropCruiser)
            cruiser.addEventListener('dragover', allowDrop)
            cruiser.addEventListener('dragstart', drag)
        }
    } else {

        if (document.getElementById(this.id).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id >= 71) {
            // nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('battleship'));
            let num = Number(this.id)
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10), document.getElementById(num + 20), document.getElementById(num + 30)]
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
            }
            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropBattleShip)
                items[i].addEventListener('drop', dropCruiser)
            }
            battleship.style.height = this.offsetHeight
            battleship.style.position = 'absolute'
            battleship.draggable = false;
            battleship.removeEventListener('click', rotateBattleship);

            shipDiv.style.height = '700px'

            cruiser.draggable = true;
            cruiser.addEventListener('click', rotateCruiser)
            cruiser.addEventListener('drop', dropCruiser)
            cruiser.addEventListener('dragover', allowDrop)
            cruiser.addEventListener('dragstart', drag)
        }
    }
}

function dropCruiser(ev) {

    if (cruiser.src == Cruiser) {

        if (document.getElementById(this.id).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id > 7 && this.id <= 10 ||
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
            let num = Number(this.id)
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1), document.getElementById(num + 2)]
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
                console.log(tiles[i])
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropCruiser)
                items[i].addEventListener('drop', dropSubmarine)
            }
            var height = this.offsetHeight - 1
            cruiser.style.height = height
            cruiser.style.position = 'absolute'
            cruiser.draggable = false;
            shipDiv.style.height = '700px'

            submarine.draggable = true
            submarine.addEventListener('click', rotateSubmarine)
            submarine.addEventListener('drop', dropSubmarine)
            submarine.addEventListener('dragover', allowDrop)
            submarine.addEventListener('dragstart', drag)
        }
    } else {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id >= 81) {
            // nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('cruiser'));
            let num = Number(this.id)
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10), document.getElementById(num + 20)]
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
                console.log(tiles[i])
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropCruiser)
                items[i].addEventListener('drop', dropSubmarine)
            }
            var height = this.offsetHeight - 1
            cruiser.style.height = height
            cruiser.style.position = 'absolute'
            cruiser.draggable = false;
            shipDiv.style.height = '700px'
            submarine.draggable = true
            cruiser.removeEventListener('click', rotateCruiser);
            submarine.addEventListener('click', rotateSubmarine)
            submarine.addEventListener('drop', dropSubmarine)
            submarine.addEventListener('dragover', allowDrop)
            submarine.addEventListener('dragstart', drag)
        }
    }
}

function dropSubmarine(ev) {

    if (submarine.src == Submarine) {

        if (document.getElementById(this.id).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id > 7 && this.id <= 10 ||
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
            ev.target.appendChild(document.getElementById('submarine'));
            let num = Number(this.id)
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1), document.getElementById(num + 2)]
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
                console.log(tiles[i])
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropSubmarine)
                items[i].addEventListener('drop', dropDestroyer)
            }

            submarine.style.height = this.offsetHeight
            submarine.style.position = 'absolute'
            submarine.draggable = false;
            destroyer.draggable = true
            submarine.removeEventListener('click', rotateSubmarine);
            destroyer.addEventListener('click', rotateDestroyer)
            destroyer.addEventListener('drop', dropDestroyer)
            destroyer.addEventListener('dragover', allowDrop)
            destroyer.addEventListener('dragstart', drag)
        }
    } else {

        if (document.getElementById(this.id).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id >= 81) {
            // nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('submarine'));
            let num = Number(this.id)
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10), document.getElementById(num + 20)]
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
                console.log(tiles[i])
            }

            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropSubmarine)
                items[i].addEventListener('drop', dropDestroyer)
            }

            submarine.style.height = this.offsetHeight;
            submarine.style.position = 'absolute';
            submarine.draggable = false;
            destroyer.draggable = true;
            submarine.removeEventListener('click', rotateSubmarine);
            destroyer.addEventListener('click', rotateDestroyer);
            destroyer.addEventListener('drop', dropDestroyer);
            destroyer.addEventListener('dragover', allowDrop);
            destroyer.addEventListener('dragstart', drag);
        }
    }
}

function dropDestroyer(ev) {

    if (destroyer.src == Destroyer) {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent') {
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
            let num = Number(this.id)
            let tiles = [document.getElementById(this.id), document.getElementById(num + 1)]
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
                console.log(tiles[i])
            }
            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropDestroyer)
            }
            destroyer.style.height = this.offsetHeight
            destroyer.style.position = 'absolute'
            destroyer.draggable = false;
            destroyer.removeEventListener('click', rotateDestroyer)
            document.getElementById('shipDiv').remove()

            const computerDiv = document.createElement('div');
            computerDiv.className = 'computerDiv';
            document.querySelector('.gameDiv').appendChild(computerDiv);

            const computerName = document.createElement('span');
            computerName.className = 'name';
            computerName.textContent = 'Computer';
            computerName.style.marginTop = '4%'
            computerDiv.appendChild(computerName);

            const computerGrid = document.createElement('div');
            computerGrid.className = 'grid';
            computerGrid.id = 'computerGrid';
            computerDiv.appendChild(computerGrid);

            const grids = [computerGrid];

            for (let i = 0; i < grids.length; i++) {
                let j = 1;
                while (j <= 100) {

                    const tile = document.createElement('div');
                    tile.id = j
                    tile.className = 'tile';
                    grids[i].appendChild(tile);
                    j++;
                }
            }
        }
    } else {
        if (document.getElementById(this.id).style.backgroundColor === 'transparent') {
            // nothing
        } else if (this.id >= 91) {
            // nothing
        } else {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById('destroyer'));
            let num = Number(this.id)
            let tiles = [document.getElementById(this.id), document.getElementById(num + 10)]
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].style.backgroundColor = 'transparent';
                console.log(tiles[i])
            }
            for (let i = 0; i < items.length; i++) {
                items[i].removeEventListener('drop', dropDestroyer)
            }
            destroyer.style.height = this.offsetHeight
            destroyer.style.position = 'absolute'
            destroyer.draggable = false;
            destroyer.removeEventListener('click', rotateDestroyer)
            document.getElementById('shipDiv').remove()

            const computerDiv = document.createElement('div');
            computerDiv.className = 'computerDiv';
            document.querySelector('.gameDiv').appendChild(computerDiv);

            const computerName = document.createElement('span');
            computerName.className = 'name';
            computerName.textContent = 'Computer';
            computerName.style.marginTop = '4%'
            computerDiv.appendChild(computerName);

            const computerGrid = document.createElement('div');
            computerGrid.className = 'grid';
            computerGrid.id = 'computerGrid';
            computerDiv.appendChild(computerGrid);

            const grids = [computerGrid];

            for (let i = 0; i < grids.length; i++) {
                let j = 1;
                while (j <= 100) {

                    const tile = document.createElement('div');
                    tile.id = j
                    tile.className = 'tile';
                    grids[i].appendChild(tile);
                    j++;
                }
            }
        }
    }
}

function rotateCarrier() {
    if (this.src == Carrier) {
        this.src = Carrier90
        this.style.height = '225px'
        this.style.width = '45px'
        shipDiv.style.height = '1000px'

    } else {
        this.src = Carrier
        this.style.height = '45px'
        this.style.width = '225px'
        shipDiv.style.height = '700px'
    }
}

function rotateBattleship() {
    if (this.src == Battleship) {
        this.src = Battleship90
        this.style.height = '180px'
        this.style.width = '45px'
        shipDiv.style.height = '1000px'

    } else {
        this.src = Battleship
        this.style.height = '45px'
        this.style.width = '180px'
        shipDiv.style.height = '700px'
    }
}

function rotateCruiser() {
    if (this.src == Cruiser) {
        this.src = Cruiser90;
        this.style.height = '135px';
        this.style.width = '45px';
    } else {
        this.src = Cruiser;
        this.style.height = '45px';
        this.style.width = '135px';
        shipDiv.style.height = '700px';
    }
}

function rotateSubmarine() {
    if (this.src == Submarine) {
        this.src = Submarine90
        this.style.height = '135px'
        this.style.width = '45px'

    } else {
        this.src = Submarine
        this.style.height = '45px'
        this.style.width = '135px'
        shipDiv.style.height = '700px'
    }
}

function rotateDestroyer() {
    if (this.src == Destroyer) {
        this.src = Destroyer90
        this.style.height = '90px'
        this.style.width = '45px'
    } else {
        this.src = Destroyer;
        this.style.height = '45px'
        this.style.width = '90px'
        shipDiv.style.height = '700px'
    }
}