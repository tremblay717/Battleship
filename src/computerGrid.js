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
import shipModels from './shipModels.js';

export default function computerGrid(playerShips) {

    console.log(playerShips)
    // 1st ship placement
    
    const explosion = new Audio();
    explosion.src = Explosion

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
        tileComputer.addEventListener('click', fire)
        gameGrid.appendChild(tileComputer);
        j++;
    }

    let shipPositionOne = [
        {
            name: 'Carrier',
            imgLocation:50,
            position1: document.getElementById('50-ComputerGame'),
            position2: document.getElementById('60-ComputerGame'),
            position3: document.getElementById('70-ComputerGame'),
            position4: document.getElementById('80-ComputerGame'),
            position5: document.getElementById('90-ComputerGame'),
            life: 5,
            height:'224px',
            width:'44px',
            src: Carrier90
        },
        {
            name: 'BattleShip',
            imgLocation:37,
            position1: document.getElementById('37-ComputerGame'),
            position2: document.getElementById('38-ComputerGame'),
            position3: document.getElementById('39-ComputerGame'),
            position4: document.getElementById('40-ComputerGame'),
            life: 4,
            height:'44px',
            width:'179px',
            src: Battleship
        },
        {
            name: 'Cruiser',
            imgLocation:14,
            position1: document.getElementById('14-ComputerGame'),
            position2: document.getElementById('15-ComputerGame'),
            position3: document.getElementById('16-ComputerGame'),
            height:'44px',
            width:'134px',
            life: 3,
            src:Cruiser
        },
        {
            name: 'Submarine',
            imgLocation:12,
            position1: document.getElementById('12-ComputerGame'),
            position2: document.getElementById('22-ComputerGame'),
            position3: document.getElementById('32-ComputerGame'),
            life: 3,
            height:'134px',
            width:'44px',
            src: Submarine90
        },
        {
            name: 'Destroyer',
            imgLocation:65,
            position1: document.getElementById('65-ComputerGame'),
            position2: document.getElementById('75-ComputerGame'),
            life: 2,
            height:'89px',
            width:'44px',
            src: Destroyer90
        }
    ]

    let shipPositionTwo = [
        {
            name: 'Carrier',
            imgLocation:12,
            position1: document.getElementById('12-ComputerGame'),
            position2: document.getElementById('13-ComputerGame'),
            position3: document.getElementById('14-ComputerGame'),
            position4: document.getElementById('15-ComputerGame'),
            position5: document.getElementById('16-ComputerGame'),
            life: 5,
            height:'44px',
            width:'224px',
            src: Carrier
        },
        {
            name: 'BattleShip',
            imgLocation:32,
            position1: document.getElementById('32-ComputerGame'),
            position2: document.getElementById('33-ComputerGame'),
            position3: document.getElementById('34-ComputerGame'),
            position4: document.getElementById('35-ComputerGame'),
            life: 4,
            height:'44px',
            width:'179px',
            src: Battleship
        },
        {
            name: 'Cruiser',
            imgLocation:56,
            position1: document.getElementById('56-ComputerGame'),
            position2: document.getElementById('57-ComputerGame'),
            position3: document.getElementById('58-ComputerGame'),
            life: 3,
            height:'44px',
            width:'134px',
            src:Cruiser
        },
        {
            name: 'Submarine',
            imgLocation:72,
            position1: document.getElementById('72-ComputerGame'),
            position2: document.getElementById('73-ComputerGame'),
            position3: document.getElementById('74-ComputerGame'),
            life: 3,
            height:'44px',
            width:'134px',
            src: Submarine
        },
        {
            name: 'Destroyer',
            imgLocation:88,
            position1: document.getElementById('88-ComputerGame'),
            position2: document.getElementById('89-ComputerGame'),
            life: 2,
            height:'44px',
            width:'89px',
            src: Destroyer
        }
    ]

    const computerShipModels = [shipPositionOne,shipPositionTwo]
    let randomNumber = Math.floor(Math.random() * computerShipModels.length);
    const shipChoice = computerShipModels[randomNumber];
    console.log(randomNumber);
    console.log(shipChoice);

    const carrier = new Image();
    carrier.id = 'carrier';
    carrier.src = shipChoice[0].src;
    carrier.style.height = shipChoice[0].height;
    carrier.style.width = shipChoice[0].width;
    
    const battleship = new Image();
    battleship.id = 'battleshipComputer';
    battleship.src = shipChoice[1].src;
    battleship.style.height = shipChoice[1].height;
    battleship.style.width = shipChoice[1].width;
    battleship.style.position = 'absolute';

    const cruiser = new Image();
    cruiser.id = 'cruiser';
    cruiser.src = shipChoice[2].src;
    cruiser.style.height = shipChoice[2].height;
    cruiser.style.width = shipChoice[2].width;

    const submarine = new Image();
    submarine.id = 'submarine';
    submarine.src = shipChoice[3].src;
    submarine.style.height = shipChoice[3].height;
    submarine.style.width = shipChoice[3].width;

    const destroyer = new Image();
    destroyer.id = 'destroyer';
    destroyer.src = shipChoice[4].src;
    destroyer.style.height = shipChoice[4].height;
    destroyer.style.width = shipChoice[4].width;



    // 1. Carrier :

    document.getElementById(`${shipChoice[0].imgLocation}-Computer`).appendChild(carrier)
    const carrierTiles = [shipChoice[0].position1,shipChoice[0].position2,shipChoice[0].position3,shipChoice[0].position4,shipChoice[0].position5]
    for (let i = 0; i < carrierTiles.length; i++) {
        carrierTiles[i].style.backgroundColor = 'transparent';
    }
    carrier.style.position = 'absolute';

    const ComputerCarrier = {
        name: 'Carrier',
        position1: carrierTiles[0],
        position2: carrierTiles[1],
        position3: carrierTiles[2],
        position4: carrierTiles[3],
        position5: carrierTiles[4],
        life: 5,
        src: Carrier
    }

    // 2. Battleship :

    document.getElementById(`${shipChoice[1].imgLocation}-Computer`).appendChild(battleship)
    const battleshipTiles = [shipChoice[1].position1,shipChoice[1].position2,shipChoice[1].position3,shipChoice[1].position4]
    for (let i = 0; i < battleshipTiles.length; i++) {
        battleshipTiles[i].style.backgroundColor = 'transparent';
    }
    // battleship.style.height = document.getElementById('32-Computer').offsetHeight;

    const ComputerBattleship = {
        name: 'BattleShip',
        position1: battleshipTiles[0],
        position2: battleshipTiles[1],
        position3: battleshipTiles[2],
        position4: battleshipTiles[3],
        life: 4,
        src: Battleship
    }

    // 3. Cruiser :

    document.getElementById(`${shipChoice[2].imgLocation}-Computer`).appendChild(cruiser)
    const cruiserTiles = [shipChoice[2].position1,shipChoice[2].position2,shipChoice[2].position3]
    for (let i = 0; i < cruiserTiles.length; i++) {
        cruiserTiles[i].style.backgroundColor = 'transparent';
    }
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
    document.getElementById(`${shipChoice[3].imgLocation}-Computer`).appendChild(submarine)
    const submarineTiles = [shipChoice[3].position1,shipChoice[3].position2,shipChoice[3].position3]
    for (let i = 0; i < submarineTiles.length; i++) {
        submarineTiles[i].style.backgroundColor = 'transparent';
    }
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
    document.getElementById(`${shipChoice[4].imgLocation}-Computer`).appendChild(destroyer)
    const destroyerTiles = [shipChoice[4].position1,shipChoice[4].position2]
    for (let i = 0; i < destroyerTiles.length; i++) {
        destroyerTiles[i].style.backgroundColor = 'transparent';
    }
    destroyer.style.position = 'absolute';

    const ComputerDestroyer = {
        name: 'Destroyer',
        position1: destroyerTiles[0],
        position2: destroyerTiles[1],
        position3: destroyerTiles[2],
        shipTiles: [],
        life: 2
    }

    let computerShips = shipChoice;


    const instructionDiv = document.createElement('div');
    instructionDiv.className = 'instructionDiv';
    document.querySelector('.playerDiv').appendChild(instructionDiv);

    const instructions = document.createElement('span');
    instructions.textContent = 'Click on a square in Computer Grid to start a game';
    instructions.style.fontSize = '1.25rem';
    instructions.style.color = 'white';
    instructions.style.marginTop = '4%';
    instructionDiv.appendChild(instructions);

    let playerArray = []; // Player strokes are stored in this array so the computer doesnt hit a square twice

    function fire() {
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
                        console.log(ship)
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
                ship.life--;

                if (ship.life === 0) {
                    computerShips = computerShips.filter(element => element.name !== ship.name);

                }

                if (computerShips.length === 0) {
                    console.log('done')
                    const computerTiles = document.querySelectorAll('.tileComputer');
                    for (let i = 0; i < computerTiles.length; i++) {
                        computerTiles[i].removeEventListener('click', fire);
                    }
                    instructions.textContent = 'Game Over! You won!'
                    return;
                }
            }

            let humanShip = undefined;
            // Iterating over player ship array to find the ship with corresponding  value
            for (let i = 0; i < playerShips.length; i++) {
                for (let key in playerShips[i]) {
                    if (playerShips[i][key] === targetHuman) {
                        humanShip = playerShips[i];
                        break;
                    }
                }
            }

            if (humanShip === undefined) {
                setTimeout(() => {
                    document.getElementById(`${targetHuman.id}-playerGame`).textContent = 'O';
                }, 2000);
                document.getElementById(`${targetHuman.id}-playerGame`).setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:red;');
            } else {
                setTimeout(() => {
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
                }, 2000)
            }
        }
        console.log(computerShips)
    }
}