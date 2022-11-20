export default function layout() {

    const title = document.createElement('div');
    title.className = 'title';
    document.body.appendChild(title);

    const titleSpan = document.createElement('span');
    titleSpan.textContent = 'BATTLESHIP';
    title.appendChild(titleSpan);

    const gameDiv = document.createElement('div');
    gameDiv.className = 'gameDiv';
    document.body.appendChild(gameDiv);

    const playerDiv = document.createElement('div');
    playerDiv.className = 'playerDiv';
    gameDiv.appendChild(playerDiv);

    const playerName = document.createElement('span');
    playerName.className = 'name';
    playerName.textContent = 'Human';
    playerName.style.marginTop = '4%';
    playerDiv.appendChild(playerName);

    const playerGrid = document.createElement('div');
    playerGrid.className = 'grid';
    playerGrid.id = 'playerGrid';
    playerDiv.appendChild(playerGrid);

    const shipDiv = document.createElement('div');
    shipDiv.className = 'shipDiv';
    shipDiv.id = 'shipDiv';
    gameDiv.appendChild(shipDiv);

    const shipSpan = document.createElement('span');
    shipSpan.textContent = 'Place your Ships in grid';
    shipSpan.className = 'name';
    shipSpan.style.marginTop = '4%';
    shipDiv.appendChild(shipSpan);

    const rotateSpan = document.createElement('span');
    rotateSpan.textContent = 'Click ship to change orientation';
    rotateSpan.className = 'rotate';
    rotateSpan.style.fontSize = '1.25rem';
    rotateSpan.style.cursor = 'pointer';
    rotateSpan.style.color = 'white';
    shipDiv.appendChild(rotateSpan);

    const shipGrid = document.createElement('div');
    shipGrid.className = 'shipGrid';
    shipGrid.id = 'shipGrid';
    shipDiv.appendChild(shipGrid);

    let j = 1;
    while (j <= 100) {

        const tile = document.createElement('div');
        tile.id = j;
        tile.className = 'tile';
        playerGrid.appendChild(tile);
        j++;
    }
}