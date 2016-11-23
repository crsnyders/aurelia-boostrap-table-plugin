export class Country {

    private __name: string;
    public get _name(): string {
        return this.__name;
    }
    public set _name(v: string) {
        this.__name = v;
    }


    private _code: string;
    public get code(): string {
        return this._code;
    }
    public set code(v: string) {
        this._code = v;
    }
}


