var createGame = require('voxel-hello-world');

var game = createGame({
    materials: [
        'grass',
        ['grass', 'dirt', 'grass_dirt'],
        'dirt',
        'obsidian',
        'plank',
        'glass'
    ],
    texturePath: './textures/',
});






