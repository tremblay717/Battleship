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

export default function computerGrid(playerShips) {

    console.log(playerShips)

    const explosion = new Audio();
    explosion.src = Explosion

    const carrier = new Image();
    carrier.id = 'carrier';
    carrier.src = Carrier;
    carrier.style.height = '44px';
    carrier.style.width = '224px';
    carrier.style.backgroundColor = 'red'

    const battleship = new Image();
    battleship.id = 'battleshipComputer';
    battleship.src = Battleship;
    battleship.style.height = '44px';
    battleship.style.width = '179px';

    const cruiser = new Image();
    cruiser.id = 'cruiser';
    cruiser.src = Cruiser;
    cruiser.style.height = '44px';
    cruiser.style.width = '134px';

    const submarine = new Image();
    submarine.id = 'submarine';
    submarine.src = Submarine;
    submarine.style.height = '44px';
    submarine.style.width = '134px';

    const destroyer = new Image();
    destroyer.id = 'destroyer';
    destroyer.src = Destroyer;
    destroyer.style.height = '44px';
    destroyer.style.width = '89px';

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

    const playerGameGrid = document.createElement('div');
    playerGameGrid.className = 'grid overlay';
    playerGameGrid.id = 'playerGameGrid';
    document.querySelector('.playerDiv').appendChild(playerGameGrid);

    // Overlay Grid where user can click on squares
    let h = 1;
    while (h <= 100) {
        const tileComputer = document.createElement('div');
        tileComputer.id = `${h}-playerGame`;
        tileComputer.className = 'tilePlayer';
        playerGameGrid.appendChild(tileComputer);
        h++;
    }


    // Grid where images will be inserted into
    let i = 1;
    while (i <= 100) {
        const tile = document.createElement('div');
        tile.id = `${i}-Computer`;
        tile.className = 'computertile';
        computerGrid.appendChild(tile);
        i++;
    }

    // Overlay Grid where user can click on squares
    let j = 1;
    while (j <= 100) {
        const tileComputer = document.createElement('div');
        tileComputer.id = `${j}-ComputerGame`;
        tileComputer.className = 'tileComputer';
        tileComputer.addEventListener('click', testClick)
        gameGrid.appendChild(tileComputer);
        j++;
    }


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
    const cruiserTiles = [document.getElementById('56-ComputerGame'), document.getElementById('57-ComputerGame'), document.getElementById('58-ComputerGame')]
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
    const submarineTiles = [document.getElementById('72-ComputerGame'), document.getElementById('73-ComputerGame'), document.getElementById('74-ComputerGame')]
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
    const destroyerTiles = [document.getElementById('88-ComputerGame'), document.getElementById('89-ComputerGame')]
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

    let playerArray = []; // Player strokes are stored in this array
    let computerArray = []; // Computer strokes are stored in this array

    function testClick() {
        const target = document.getElementById(this.id);

        if (target.textContent === 'X' || target.textContent === 'O') {
            // Nothing happens
        } else {

            let targetHuman = undefined
            let x = undefined;

            while (x == undefined) {
                let number = Math.floor(Math.random() * 101);
                if (!playerArray.includes(number) && number !== 0) {
                    playerArray.push(number);
                    targetHuman = document.getElementById(number);
                    break
                }
            }

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
                target.setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:blue;');

            } else { // Red X if we hit target
                target.textContent = 'X';
                target.setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:blue;background-color:rgba(0, 0, 0, 0.692);');
                explosion.play();

                ship.shipTiles.push(target);
                ship.life--;

                if (ship.life === 0) {
                    computerShips = computerShips.filter(element => element.name !== ship.name);

                }
                if (computerShips.length === 0) {
                    const computerTiles = document.querySelectorAll('.tileComputer');
                    for (let i = 0; i < computerTiles.length; i++) {
                        computerTiles[i].removeEventListener('click', testClick);
                        targetHuman = undefined; // preventing computer to tag our player grid
                        instructions.textContent = 'Game Over! You won!'

                    }
                }
            }

            let humanShip = undefined;

            for (let i = 0; i < playerShips.length; i++) {
                for (let key in playerShips[i]) {
                    if (playerShips[i][key] === targetHuman) {
                        humanShip = playerShips[i];
                        break;
                    }
                }
            }

            if (humanShip === undefined) {
                document.getElementById(`${targetHuman.id}-playerGame`).textContent = 'O';
                document.getElementById(`${targetHuman.id}-playerGame`).setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:red;');
            } else {
                document.getElementById(`${targetHuman.id}-playerGame`).textContent = 'X';
                document.getElementById(`${targetHuman.id}-playerGame`).setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:red;background-color:rgba(0, 0, 0, 0.692);');
                explosion.play();

                humanShip.life--;

                if (humanShip.life === 0) {
                    playerShips = playerShips.filter(element => element.name !== humanShip.name);

                }
                if (playerShips.length === 0) {
                    const computerTiles = document.querySelectorAll('.tileComputer');
                    for (let i = 0; i < computerTiles.length; i++) {
                        computerTiles[i].removeEventListener('click', testClick);
                    }
                    instructions.textContent = 'Game Over! You lost!'
                }
            }
        }
    }
}