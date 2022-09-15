import Block from "../block";

export default (blockchain) => {
    const [genesisBlock, ...blocks] = blockchain;
    if (JSON.stringify(genesisBlock) !== JSON.stringify(Block.genesis)) throw Error('Bloque Genesis IOnvalido');

    for (let i = 0; i < blocks.length; i++) {
        const {
            previousHash,
            timestamp,
            hash,
            data,
        } = blocks[i];

        const previousBlock = blockchain[i];

        if (previousHash !== previousBlock.hash) throw Error('Hash Prevcio invado o corrupto');
        if (hash !== Block.hash(timestamp, previousHash, data)) throw Error('Hash Invalido');
    }
};