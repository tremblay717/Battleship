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

export default function game(playerShips) {

    const explosion = new Audio(); // Explosion sound when a ship is hit
    explosion.src = Explosion;

    document.getElementById('shipDiv').remove(); // Removing the grid where the drag and drop api was used to position player ships

    const computerDiv = document.createElement('div'); // Div that will display the grid used by the Computer
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

    // These two arrays are used to store different strategies for ship placement that will be used randomly
    let shipPositionOne = [{
            name: 'Carrier',
            imgLocation: 50,
            position1: document.getElementById('50-ComputerGame'),
            position2: document.getElementById('60-ComputerGame'),
            position3: document.getElementById('70-ComputerGame'),
            position4: document.getElementById('80-ComputerGame'),
            position5: document.getElementById('90-ComputerGame'),
            life: 5,
            height: '224px',
            width: '44px',
            src: Carrier90
        },
        {
            name: 'BattleShip',
            imgLocation: 37,
            position1: document.getElementById('37-ComputerGame'),
            position2: document.getElementById('38-ComputerGame'),
            position3: document.getElementById('39-ComputerGame'),
            position4: document.getElementById('40-ComputerGame'),
            life: 4,
            height: '44px',
            width: '179px',
            src: Battleship
        },
        {
            name: 'Cruiser',
            imgLocation: 14,
            position1: document.getElementById('14-ComputerGame'),
            position2: document.getElementById('15-ComputerGame'),
            position3: document.getElementById('16-ComputerGame'),
            height: '44px',
            width: '134px',
            life: 3,
            src: Cruiser
        },
        {
            name: 'Submarine',
            imgLocation: 12,
            position1: document.getElementById('12-ComputerGame'),
            position2: document.getElementById('22-ComputerGame'),
            position3: document.getElementById('32-ComputerGame'),
            life: 3,
            height: '134px',
            width: '44px',
            src: Submarine90
        },
        {
            name: 'Destroyer',
            imgLocation: 65,
            position1: document.getElementById('65-ComputerGame'),
            position2: document.getElementById('75-ComputerGame'),
            life: 2,
            height: '89px',
            width: '44px',
            src: Destroyer90
        }
    ]

    let shipPositionTwo = [{
            name: 'Carrier',
            imgLocation: 12,
            position1: document.getElementById('12-ComputerGame'),
            position2: document.getElementById('13-ComputerGame'),
            position3: document.getElementById('14-ComputerGame'),
            position4: document.getElementById('15-ComputerGame'),
            position5: document.getElementById('16-ComputerGame'),
            life: 5,
            height: '44px',
            width: '224px',
            src: Carrier
        },
        {
            name: 'BattleShip',
            imgLocation: 32,
            position1: document.getElementById('32-ComputerGame'),
            position2: document.getElementById('33-ComputerGame'),
            position3: document.getElementById('34-ComputerGame'),
            position4: document.getElementById('35-ComputerGame'),
            life: 4,
            height: '44px',
            width: '179px',
            src: Battleship
        },
        {
            name: 'Cruiser',
            imgLocation: 56,
            position1: document.getElementById('56-ComputerGame'),
            position2: document.getElementById('57-ComputerGame'),
            position3: document.getElementById('58-ComputerGame'),
            life: 3,
            height: '44px',
            width: '134px',
            src: Cruiser
        },
        {
            name: 'Submarine',
            imgLocation: 72,
            position1: document.getElementById('72-ComputerGame'),
            position2: document.getElementById('73-ComputerGame'),
            position3: document.getElementById('74-ComputerGame'),
            life: 3,
            height: '44px',
            width: '134px',
            src: Submarine
        },
        {
            name: 'Destroyer',
            imgLocation: 88,
            position1: document.getElementById('88-ComputerGame'),
            position2: document.getElementById('89-ComputerGame'),
            life: 2,
            height: '44px',
            width: '89px',
            src: Destroyer
        }
    ]

    const computerShipModels = [shipPositionOne, shipPositionTwo]
    // Random Selection of Computer strategy
    let randomNumber = Math.floor(Math.random() * computerShipModels.length);
    const shipChoice = computerShipModels[randomNumber];

    // 1. Carrier :
    const carrierTiles = [shipChoice[0].position1, shipChoice[0].position2, shipChoice[0].position3, shipChoice[0].position4, shipChoice[0].position5]
    for (let i = 0; i < carrierTiles.length; i++) {
        carrierTiles[i].style.backgroundColor = 'transparent';
    }

    // 2. Battleship :
    const battleshipTiles = [shipChoice[1].position1, shipChoice[1].position2, shipChoice[1].position3, shipChoice[1].position4]
    for (let i = 0; i < battleshipTiles.length; i++) {
        battleshipTiles[i].style.backgroundColor = 'transparent';
    }

    // 3. Cruiser :
    const cruiserTiles = [shipChoice[2].position1, shipChoice[2].position2, shipChoice[2].position3]
    for (let i = 0; i < cruiserTiles.length; i++) {
        cruiserTiles[i].style.backgroundColor = 'transparent';
    }

    // 4. Submarine :
    const submarineTiles = [shipChoice[3].position1, shipChoice[3].position2, shipChoice[3].position3]
    for (let i = 0; i < submarineTiles.length; i++) {
        submarineTiles[i].style.backgroundColor = 'transparent';
    }

    // 5. Destroyer :
    const destroyerTiles = [shipChoice[4].position1, shipChoice[4].position2]
    for (let i = 0; i < destroyerTiles.length; i++) {
        destroyerTiles[i].style.backgroundColor = 'transparent';
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

    const computerTiles = document.querySelectorAll('.tileComputer');

    function removeFire() {
        for (let i = 0; i < computerTiles.length; i++) {
            computerTiles[i].removeEventListener('click', fire);
        }
    }

    function addFire() {
        for (let i = 0; i < computerTiles.length; i++) {
            computerTiles[i].addEventListener('click', fire);
        }
    }

    function fire() { // This function enables a player to start a game and to make subsequent shots; 

        const target = document.getElementById(this.id); // Square in grid clicked by player
        target.style.textAlign = 'center';

        removeFire(); // disabling event listeners so player must wait for computer to hit a square

        if (target.textContent === 'X' || target.textContent === 'O') {
            // Nothing happens
        } else {

            let targetHuman = undefined;

            while (targetHuman === undefined) {
                let number = Math.floor(Math.random() * 101);
                if (!playerArray.includes(number) && number !== 0) {
                    playerArray.push(number);
                    targetHuman = document.getElementById(number);
                    break
                }
            }

            let ship = undefined;
            for (let i = 0; i < computerShips.length; i++) { // iterating through computer ships to find a matching position
                for (let key in computerShips[i]) {
                    if (computerShips[i][key] === target) {
                        ship = computerShips[i];
                        break
                    }
                }
            }

            if (ship === undefined) { // No ship hit
                target.textContent = 'O';
                target.setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:blue;');
                instructions.textContent = 'You miss!'

            } else { // Ship hit
                target.textContent = 'X';
                target.setAttribute('style', 'display:flex;align-content:center;justify-content:center;align-items:center;font-size:24px;text-align:center;color:blue;background-color:rgba(0, 0, 0, 0.692);');
                explosion.play();
                instructions.textContent = 'You hit one of their ships!';
                ship.life--;

                if (ship.life === 0) {

                    computerShips = computerShips.filter(element => element.name !== ship.name);

                    const destroyedShip = new Image();
                    destroyedShip.style.height = ship.height;
                    destroyedShip.style.width = ship.width;
                    destroyedShip.style.position = 'absolute';
                    destroyedShip.src = ship.src;

                    instructions.textContent = `You sunk their ${ship.name.toLowerCase()}!`;
                    document.getElementById(`${ship.imgLocation}-Computer`).appendChild(destroyedShip);
                }

                if (computerShips.length === 0) {
                    instructions.textContent = 'Game Over! You won!';
                    targetHuman = undefined;
                    removeFire();
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
                        document.getElementById(`${targetHuman.id}-playerGame`).textContent = 'X';
                        playerShips = playerShips.filter(element => element.name !== humanShip.name);
                        instructions.textContent = `They sunk your ${humanShip.name.toLowerCase()}!`;
                    }
                    if (playerShips.length === 0) {
                        removeFire(); // stopping the game
                        let ship = undefined;
                        instructions.textContent = 'Game Over! You lost!';
                        return;
                    }
                }, 2000)
            }
        }

        setTimeout(() => { // enabling squares so player can hit another shot
            addFire()
        }, 2000);

    }
}
