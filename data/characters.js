export const characters = [
    {
        id: 'liu-kang',
        name: 'Liu Kang',
        image: require('../assets/images/characters/liukang.jpeg'),
        description: 'Monje shaolin y campeón del Mortal Kombat, lucha por defender la Tierra del emperador Shao Kahn.',
        fullDescription: 'Liu Kang es un monje shaolin que se ha convertido en el campeón del Mortal Kombat. Su dedicación a las artes marciales y su fuerte sentido de la justicia lo convierten en el defensor perfecto de la Tierra. Entrenado desde joven en los templos de Shaolin, ha perfeccionado técnicas de combate que combinan la disciplina espiritual con una fuerza devastadora.',
        realm: 'Earthrealm'
    },
    {
        id: 'sub-zero',
        name: 'Sub-Zero',
        image: require('../assets/images/characters/sub-zero.jpeg'),
        description: 'Un guerrero del clan Lin Kuei que ha roto sus lazos con ellos para detener su corrupción.',
        fullDescription: 'Kuai Liang, conocido como Sub-Zero, es un cryomancer que puede manipular el hielo a voluntad. Después de que su hermano mayor fuera asesinado, tomó el manto de Sub-Zero y se convirtió en Grandmaster del clan Lin Kuei, reformándolo para el bien.',
        realm: 'Earthrealm'
    },
    {
        id: 'scorpion',
        name: 'Scorpion',
        image: require('../assets/images/characters/scorpion.jpeg'),
        description: 'Espíritu vengativo que regresa del infierno para castigar a quienes destruyeron su clan.',
        fullDescription: 'Hanzo Hasashi era un miembro del clan Shirai Ryu hasta que fue asesinado por Sub-Zero. Regresó del Netherrealm como Scorpion, un espectro sed de venganza. Posteriormente descubrió la verdad y se convirtió en un aliado poderoso.',
        realm: 'Netherrealm'
    },
    {
        id: 'sonya-blade',
        name: 'Sonya Blade',
        image: require('../assets/images/characters/sonya.jpeg'),
        description: 'Agente de las fuerzas especiales que busca detener a Kano y combatir a las fuerzas del mal.',
        fullDescription: 'Teniente de las Fuerzas Especiales, Sonya Blade combina entrenamiento militar con determinación inquebrantable. Su persecución de Kano la llevó al torneo Mortal Kombat, donde demostró ser una guerrera formidable.',
        realm: 'Earthrealm'
    },
    {
        id: 'jax',
        name: 'Jax',
        image: require('../assets/images/characters/jax.jpeg'),
        description: 'Comandante militar con brazos cibernéticos, busca justicia y proteger la Tierra.',
        fullDescription: 'Jackson Briggs es el comandante de las Fuerzas Especiales y mentor de Sonya Blade. Después de perder sus brazos, recibió implantes cibernéticos que multiplicaron su fuerza ya considerable.',
        realm: 'Earthrealm'
    },
    {
        id: 'noob-saibot',
        name: 'Noob Saibot',
        image: require('../assets/images/characters/noob-saibot.png'),
        description: 'El antiguo Sub-Zero, ahora un espectro que busca venganza y caos en el mundo mortal.',
        fullDescription: 'Bi-Han, el Sub-Zero original, fue resucitado como Noob Saibot por el hechicero Quan Chi. Despojado de su humanidad, se convirtió en una sombra maligna con poder sobre la oscuridad.',
        realm: 'Netherrealm'
    },
    {
        id: 'sindel',
        name: 'Sindel',
        image: require('../assets/images/characters/sindel.jpeg'),
        description: 'Reina resucitada de Edenia, ahora sirviente de Shao Kahn con un grito mortal.',
        fullDescription: 'Sindel fue la reina de Edenia hasta que Shao Kahn conquistó su reino. Resucitada por magia oscura, fue controlada para servir al emperador, usando su grito sónico como arma letal.',
        realm: 'Edenia'
    },
    {
        id: 'shao-kahn',
        name: 'Shao Kahn',
        image: require('../assets/images/characters/shao-khan.jpeg'),
        description: 'El tiránico emperador de Outworld que busca conquistar la Tierra por completo.',
        fullDescription: 'Shao Kahn es el emperador conquistador de Outworld, conocido por su crueldad y ambición sin límites. Ha absorbido incontables reinos y ahora pone sus ojos en Earthrealm como su próxima conquista.',
        realm: 'Outworld'
    },
    {
        id: 'kitana',
        name: 'Kitana',
        image: require('../assets/images/characters/kitana.jpeg'),
        description: 'Princesa de Edenia y guerrera experta, lucha por la libertad de su reino.',
        fullDescription: 'Kitana es la princesa de Edenia, adoptada por Shao Kahn después de conquistar su reino. Eventualmente descubre la verdad sobre su pasado y se rebela contra el emperador para liberar a su pueblo.',
        realm: 'Edenia'
    },
    {
        id: 'raiden',
        name: 'Raiden',
        image: require('../assets/images/characters/raiden.jpeg'),
        description: 'Dios del trueno y protector de la Tierra, lucha contra las fuerzas del mal.',
        fullDescription: 'Raiden es el dios del trueno y protector de Earthrealm. Su sabiduría ancestral y poderes sobre la electricidad lo convierten en un mentor y guardián poderoso para los guerreros de la Tierra.',
        realm: 'Earthrealm'
    },
    {
        id: 'shang-tsung',
        name: 'Shang Tsung',
        image: require('../assets/images/characters/shang-tsung.jpeg'),
        description: 'Hechicero que puede robar las almas y habilidades de otros combatientes.',
        fullDescription: 'Shang Tsung es un hechicero ancestral que ha mantenido su juventud robando almas. Puede transformarse en cualquier luchador y usar sus habilidades, lo que lo convierte en un oponente impredecible.',
        realm: 'Outworld'
    },
    {
        id: 'johnny-cage',
        name: 'Johnny Cage',
        image: require('../assets/images/characters/cage.jpeg'),
        description: 'Actor de Hollywood y experto en artes marciales, busca demostrar su valía en el Mortal Kombat.',
        fullDescription: 'Johnny Cage es una estrella de películas de acción de Hollywood que participó en el Mortal Kombat para demostrar que sus habilidades de lucha son reales. Su ego es tan grande como su corazón.',
        realm: 'Earthrealm'
    }
];

let customCharacters = [];

export const getCharacterById = (id) => {
    let character = characters.find(character => character.id === id);
    if (!character) {
        character = customCharacters.find(character => character.id === id);
    }
    return character;
};

export const getAllCharacters = () => {
    return [...characters, ...customCharacters];
};

export const addCustomCharacter = (characterData) => {
    const newCharacter = {
        id: `custom-${Date.now()}`,
        name: characterData.name,
        image: { uri: characterData.image },
        description: characterData.description,
        fullDescription: characterData.description,
        isCustom: true
    };

    customCharacters.push(newCharacter);
    return newCharacter;
};

export const getCustomCharacters = () => {
    return customCharacters;
};

export const deleteCustomCharacter = (id) => {
    customCharacters = customCharacters.filter(character => character.id !== id);
};
