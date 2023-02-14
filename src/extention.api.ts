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
    private TimeLoad:number
    private metaData:Metadata
    constructor(metaData:Metadata){
        this.metaData = metaData
        this.TimeLoad = Date.now()
    }
    getMetaData():Metadata{
        return this.metaData
    }
    getTimeLoaded():number{
        return this.TimeLoad
    }
}

const extension = new Extension(
    new Metadata("dbg.1.0",
    Date.now(),
    "com.example.extension",
    "This is a example extension"
    )
)