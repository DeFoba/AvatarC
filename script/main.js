'use strict';

const canvas = document.getElementById('canvas');

document.addEventListener('click', ({ target }) => {
    if ( target.id != 'block' ) return;
    if ( target.className == 'game-block' ) target.className = 'game-block game-block-hover';
    else target.className = 'game-block';
});

function createBlockIn(parent, name) {
    let body = document.createElement('div');
    parent.append(body);
    body.id = 'block';
    body.className = 'game-block';
    body.dataset.name = name;
}

function addBlocksInCanvas() {
    const limitXY = 7;
    let countXY = [0, 0];
    for ( let x = 0; x < limitXY * limitXY; x++ ) {
        if ( countXY[0] < limitXY ) {
            countXY[0]++;
        } else {
            countXY[0] = 0; countXY[1]++;
        }
        createBlockIn(canvas, `${countXY[0]} ${countXY[1]}`);
    }
}

addBlocksInCanvas()