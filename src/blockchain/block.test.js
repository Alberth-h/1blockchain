import Block from "./block";

describe("Block", () => {
    let timestamp;
    let previuosBlock;
    let data;
    let hash;

    beforeEach(() => {
        timestamp = new Date(2010, 0, 1);
        previuosBlock = Block.genesis;
        data = 'transaction0';
        hash = 'hash0';
    });

    it('Crear instancia con parametros', () => {
        const block = new Block(timestamp, previuosBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previuosHash).toEqual(previuosBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);
    });

    it('usando static hash', () => {
        hash = Block.hash(timestamp, previuosBlock.hash, data);
        const hasOutput = "d5e6fb61034a61139a670407a7b6f6183a54134518bd9e31c6f6d5492e349bca";

        expect(hash).toEqual(hasOutput);
    });

    it('usando toString', () => {
        const block = Block.mine(previuosBlock, data);
        expect(typeof block.toString()).toEqual('string');
    });
});