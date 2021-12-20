const Id = {
    make():string {
        const randomNumber = Math.random() * 2;
        const randomString = String(randomNumber);
        const ID = randomString.substring(2, randomString.length);
        
        return ID;
    }
}

export default Id;