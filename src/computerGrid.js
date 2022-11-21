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

export default function computerGrid() {

    const carrier = new Image();
    carrier.id = 'carrier';
    carrier.src = Carrier;
    carrier.style.height = '45px';
    carrier.style.width = '225px';
    carrier.style.backgroundColor = 'red'

    const battleship = new Image();
    battleship.id = 'battleshipComputer';
    battleship.src = Battleship;
    battleship.style.height = '45px';
    battleship.style.width = '180px';

    const cruiser = new Image();
    cruiser.id = 'cruiser';
    cruiser.src = Cruiser;
    cruiser.style.height = '45px';
    cruiser.style.width = '135px';

    const submarine = new Image();
    submarine.id = 'submarine';
    submarine.src = Submarine;
    submarine.style.height = '45px';
    submarine.style.width = '135px';

    const destroyer = new Image();
    destroyer.id = 'destroyer';
    destroyer.src = Destroyer;
    destroyer.style.height = '45px';
    destroyer.style.width = '90px';

    document.getElementById('shipDiv').remove();
    const computerDiv = document.createElement('div');
    computerDiv.className = 'computerDiv';
    document.querySelector('.gameDiv').appendChild(computerDiv);

    const computerName = document.createElement('span');
    computerName.className = 'name';
    computerName.textContent = 'Computer';
    computerName.style.marginTop = '4%';
    computerDiv.appendChild(computerName);

    const computerGrid = document.createElement('div');
    computerGrid.className = 'grid';
    computerGrid.id = 'computerGrid';
    computerDiv.appendChild(computerGrid);

    const gameGrid = document.createElement('div');
    gameGrid.className = 'grid overlay';
    gameGrid.id = 'gameGrid';
    computerDiv.appendChild(gameGrid);

    let i = 1;
    while (i <= 100) {
        const tile = document.createElement('div');
        tile.id = `${i}-Computer`;
        tile.className = 'computertile';
        // tile.addEventListener('click', testClick)
        computerGrid.appendChild(tile);
        i++;
    }

    let j = 1;
    while (j <= 100) {
        const tileComputer = document.createElement('div');
        tileComputer.id = `${j}-ComputerGame`;
        tileComputer.className = 'tileComputer';
        tileComputer.addEventListener('click', testClick)
        gameGrid.appendChild(tileComputer);
        j++;
    }



    // Generating ship position in computer screen

    // 1. Carrier :

    document.getElementById('12-Computer').appendChild(carrier)
    const carrierTiles = [document.getElementById('12-ComputerGame'), document.getElementById('13-ComputerGame'), document.getElementById('14-ComputerGame'), document.getElementById('15-ComputerGame'), document.getElementById('16-ComputerGame')]
    for (let i = 0; i < carrierTiles.length; i++) {
        carrierTiles[i].style.backgroundColor = 'transparent';
    }
    carrier.style.height = '43px';
    carrier.style.width = '223px';
    carrier.style.position = 'absolute';

    const ComputerCarrier = {
        name: 'Carrier',
        position1: carrierTiles[0],
        position2: carrierTiles[1],
        position3: carrierTiles[2],
        position4: carrierTiles[3],
        position5: carrierTiles[4],
        shipTiles: [],
        life: 5,
        src: Carrier
    }

    // 2. Battleship :

    document.getElementById('32-Computer').appendChild(battleship)
    const battleshipTiles = [document.getElementById('32-ComputerGame'), document.getElementById('33-ComputerGame'), document.getElementById('34-ComputerGame'), document.getElementById('35-ComputerGame')]
    for (let i = 0; i < battleshipTiles.length; i++) {
        // battleshipTiles[i].style.backgroundColor = 'transparent';
    }
    battleship.style.height = document.getElementById('32-Computer').offsetHeight;
    battleship.style.position = 'absolute';

    const ComputerBattleship = {
        name: 'BattleShip',
        position1: battleshipTiles[0],
        position2: battleshipTiles[1],
        position3: battleshipTiles[2],
        position4: battleshipTiles[3],
        shipTiles: [],
        life: 4,
        src: Battleship
    }

    // 3. Cruiser :

    document.getElementById('56-Computer').appendChild(cruiser)
    const cruiserTiles = [document.getElementById('56-Computer'), document.getElementById('57-Computer'), document.getElementById('58-Computer')]
    for (let i = 0; i < cruiserTiles.length; i++) {
        cruiserTiles[i].style.backgroundColor = 'transparent';
    }
    cruiser.style.height = document.getElementById('56-Computer').offsetHeight;
    cruiser.style.position = 'absolute';

    const ComputerCruiser = {
        name: 'Cruiser',
        position1: cruiserTiles[0],
        position2: cruiserTiles[1],
        position3: cruiserTiles[2],
        shipTiles: [],
        life: 3
    }

    // 4. Submarine :

    document.getElementById('72-Computer').appendChild(submarine)
    const submarineTiles = [document.getElementById('72-Computer'), document.getElementById('73-Computer'), document.getElementById('74-Computer')]
    for (let i = 0; i < submarineTiles.length; i++) {
        submarineTiles[i].style.backgroundColor = 'transparent';
    }
    submarine.style.height = document.getElementById('72-Computer').offsetHeight;
    submarine.style.position = 'absolute';

    const ComputerSubmarine = {
        name: 'Submarine',
        position1: submarineTiles[0],
        position2: submarineTiles[1],
        position3: submarineTiles[2],
        shipTiles: [],
        life: 3
    }

    // 5. Destroyer :

    document.getElementById('88-Computer').appendChild(destroyer)
    const destroyerTiles = [document.getElementById('88-Computer'), document.getElementById('89-Computer')]
    for (let i = 0; i < destroyerTiles.length; i++) {
        destroyerTiles[i].style.backgroundColor = 'transparent';
    }
    destroyer.style.height = document.getElementById('88-Computer').offsetHeight;
    destroyer.style.position = 'absolute';

    const ComputerDestroyer = {
        name: 'Destroyer',
        position1: destroyerTiles[0],
        position2: destroyerTiles[1],
        position3: destroyerTiles[2],
        shipTiles: [],
        life: 2
    }

    let computerShips = [ComputerCarrier, ComputerBattleship, ComputerCruiser, ComputerSubmarine, ComputerDestroyer];

    const instructionDiv = document.createElement('div');
    instructionDiv.className = 'instructionDiv';
    document.querySelector('.playerDiv').appendChild(instructionDiv);

    const instructions = document.createElement('span');
    instructions.textContent = 'Click on a square in Computer Grid to start a game';
    instructions.style.fontSize = '1.25rem';
    instructions.style.color = 'white';
    instructions.style.marginTop = '4%';
    instructionDiv.appendChild(instructions);

    let playerArray = []

    function testClick() {
        const target = document.getElementById(this.id);
        console.log(target)

        if (target.textContent === 'X' || target.textContent === 'O') {
            // Nothing happens
        } else {

            let targetHuman = undefined
            let x = undefined;

            while (x == undefined) {
                let number = Math.floor(Math.random() * 101);
                if (!playerArray.includes(number)) {
                    playerArray.push(number);
                    targetHuman = document.getElementById(number);
                    break
                }
            }

            console.log(targetHuman)

            target.style.textAlign = 'center';
            let ship = undefined;
            for (let i = 0; i < computerShips.length; i++) {
                for (let key in computerShips[i]) {
                    if (computerShips[i][key] === target) {
                        ship = computerShips[i]
                        break
                    }
                }
            }

            // Red 'O' if there's no ship on target
            if (ship === undefined) {
                target.textContent = 'O';
                target.setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:red;');

            } else { // Red X if we hit target
                target.textContent = 'X';
                target.setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:red;background-color:rgba(0, 0, 0, 0.692);');

                ship.shipTiles.push(target);
                ship.life--;
                if (ship.life === 0) {
                    computerShips = computerShips.filter(element => element.name !== ship.name);

                }
                if (computerShips.length === 0) {
                    const computerTiles = document.querySelectorAll('.computertile');
                    for (let i = 0; i < computerTiles.length; i++) {
                        computerTiles[i].removeEventListener('click', testClick);
                    }
                }

                // if (target.textContent === 'X') {
                //     // Nothing happens
                // } else {
                //     target.style.textAlign = 'center';
                //     target.setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:red;');
                //     let ship = undefined;
                //     for (let i = 0; i < computerShips.length; i++) {
                //         for (let key in computerShips[i]) {
                //             if (computerShips[i][key] === target) {
                //                 ship = computerShips[i]
                //                 break
                //             }
                //         }
                //     }
                //     // Red 'O' if there's no ship on target
                //     if (ship === undefined) {
                //         target.textContent = 'O';
                //     } else { // Red X if we hit target
                //         target.textContent = 'X';
                //         ship.shipTiles.push(target)
                //         ship.life--
                //         if (ship.life === 0) {
                //             computerShips = computerShips.filter(element => element.name !== ship.name);
                //             console.log(ship.name)
                //             console.log(computerShips);
                //         }
                //         if (computerShips.length === 0) {
                //             const computerTiles = document.querySelectorAll('.computertile')
                //             for (let i = 0; i < computerTiles.length; i++) {
                //                 computerTiles[i].removeEventListener('click', testClick);
                //             }
                //         }
                //     }
                //     console.log(ship)
                // }
            }
        }
    }
}