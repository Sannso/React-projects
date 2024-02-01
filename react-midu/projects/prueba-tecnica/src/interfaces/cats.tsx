export type APICatFact = {
    fact:   string;
    length: number;
}

export type APICatImg = {
    tags:      string[];
    createdAt: Date;
    updatedAt: Date;
    mimetype:  string;
    size:      number;
    _id:       string;
}
