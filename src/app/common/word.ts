export class Word {

    constructor(public id: number,
                public igboWord: string,
                public englishWord: string,
                public igboDef: string,
                public englishDef: string,
                public dialect: string,
                public pos: string,
                public noMarks: string,
                public withTones: string,
                public variation: string,
                public englishSynonyms: string){}

}
