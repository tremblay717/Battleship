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
    playerName.style.marginTop='4%'
    playerDiv.appendChild(playerName);

    const playerGrid = document.createElement('div');
    playerGrid.className = 'grid';
    playerGrid.id = 'playerGrid'
    playerDiv.appendChild(playerGrid);


    const computerDiv = document.createElement('div');
    computerDiv.className = 'computerDiv';
    gameDiv.appendChild(computerDiv);

    const computerName = document.createElement('span');
    computerName.className = 'name';
    computerName.textContent = 'Computer';
    computerName.style.marginTop='4%'
    computerDiv.appendChild(computerName);

    const computerGrid = document.createElement('div');
    computerGrid.className = 'grid';
    computerGrid.id = 'computerGrid'
    computerDiv.appendChild(computerGrid);

    const grids = [playerGrid, computerGrid];

    for (let i = 0; i < grids.length; i++) {
        let j = 1;
        while (j <= 100) {

            const tile = document.createElement('div');
            tile.id = `${j}-${grids[i].id}`
            tile.className = 'tile';
            grids[i].appendChild(tile);
            j++
        }
    }
}