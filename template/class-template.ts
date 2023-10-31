export class ResponseDataModel {
    domainMap: {
        [k in string]: Domain
    };

    constructor(entity: ResponseDataModel) {
        this.domainMap = entity.domainMap;
    }
}

export class Domain {
    domainName: string;
    isDomain: boolean;
    fields: any[];
    constructor(entity: Domain) {
        this.domainName = entity.domainName;
        this.isDomain = entity.isDomain;
        this.fields = entity.fields;
    }
}