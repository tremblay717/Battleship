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

export default function shipModels() {

    // 1st ship placement
    let shipPositionOne = [

        {
            name: 'Carrier',
            position1: document.getElementById('12-ComputerGame'),
            position2: document.getElementById('13-ComputerGame'),
            position3: document.getElementById('14-ComputerGame'),
            position4: document.getElementById('15-ComputerGame'),
            position5: document.getElementById('16-ComputerGame'),
            life: 5,
            src: Carrier
        },
        {
            name: 'BattleShip',
            position1: document.getElementById('32-Computer'),
            position2: document.getElementById('33-Computer'),
            position3: document.getElementById('34-Computer'),
            position4: document.getElementById('35-Computer'),
            life: 4,
            src: Battleship
        },
        {
            name: 'Cruiser',
            position1: document.getElementById('56-Computer'),
            position2: document.getElementById('57-Computer'),
            position3: document.getElementById('58-Computer'),
            life: 3
        },
        {
            name: 'Submarine',
            position1: document.getElementById('72-Computer'),
            position2: document.getElementById('73-Computer'),
            position3: document.getElementById('74-Computer'),
            life: 3,
            src: Submarine
        },
        {
            name: 'Destroyer',
            position1: document.getElementById('88-Computer'),
            position2: document.getElementById('89-Computer'),
            life: 2,
            src: Destroyer
        }
    ]
    return shipPositionOne;
}