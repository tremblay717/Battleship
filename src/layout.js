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


}