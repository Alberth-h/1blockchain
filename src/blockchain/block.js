class Block {
    constructor(timestamp, previuosHash, hash, data) {
        this.timestamp = timestamp;
        this.previuosHash = previuosHash;
        this.hash = hash;
        this.data = data;
    }

    static get genesis() {
        const timestamp = (new Date(2019, 0, 1)).getTime();
        return new this(timestamp, undefined, 'g3n3s1s-h4sh', 'g3n3s1s-d4t4');
    }

    static mine(previuosBlock, data) {
        const timestamp = Date.now()
        const hash = 'd4t4-newb';
        const { hash: previuosHash } = previuosBlock;

        return new thid(timestamp, previuosHash, hash, data);
    }

    toString() {
        const {
            timestamp,
            previuosHash,
            hash,
            data,
        } = this;

        return `Block - 
            timestamp   : ${timestamp}
            previuosHash: ${previuosHash}
            hash        : ${hash}
            data        : ${data}
        `;
    }
}

export default Block;