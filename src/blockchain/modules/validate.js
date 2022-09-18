import Block from "../block";

export default (blockchain) => {
    const [genesisBlock, ...blocks] = blockchain;
    if (JSON.stringify(genesisBlock) !== JSON.stringify(Block.genesis)) throw Error('Bloque genesis invalido');

    for (let i = 0; i < blocks.length; i++) {
        const {
            previousHash,
            timestamp,
            hash,
            data,
            nonce,
            difficulty,
        } = blocks[i];

        const previousBlock = blockchain[i];

        if (previousHash !== previousBlock.hash) throw Error('Hash previo invalido o corrupto');
        if (hash !== Block.hash(timestamp, previousHash, data, nonce, difficulty)) throw Error('Hash Invalido');
    }

    return true;
};