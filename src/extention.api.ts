//type float= `${number}.${number}`
type Verion = `${"rc"|"dbg"|"dev"}.${number}.${number}`
type Id = `${string}.${string}`
type Description = string

class Metadata {
    public version: Verion
    public data:number
    public id:Id
    public description:Description
    constructor(version:Verion,data:number,id:Id,description:Description){
        this.version = version
        this.data = data
        this.id = id
        this.description = description
    }
}
interface Extensioninterface {
    getMetaData():Metadata
    getTimeLoaded():number
}
class Extension implements Extensioninterface{
    private _TimeLoad:number
    private _metaData:Metadata
    constructor(metaData:Metadata){
        this._metaData = metaData
        this._TimeLoad = Date.now()
    }
    getMetaData():Metadata{
        return this._metaData
    }
    getTimeLoaded():number{
        return this._TimeLoad
    }
    log(msg:any){
        console.log(`ext:${this._metaData.id} msg:${msg}`)
    }
}

const extension = new Extension(
    new Metadata("dbg.1.0",
    Date.now(),
    "com.example.extension",
    "This is a example extension"
    )
)