class Block {
    constructor(timestamp, previuosHash, hash, data) {
        this.timestamp = timestamp;
        this.previuosHash = previuosHash;
        this.hash = hash;
        this.data = data;
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