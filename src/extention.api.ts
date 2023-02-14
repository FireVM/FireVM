//type float= `${number}.${number}`
type Verion = `${"rc"|"dbg"|"dev"}.${number}.${number}`
type Id = `${string}.${string}`
type Description = string

class Metadata {
    public version: Verion
    public data:Date
    public id:Id
    public description:Description
    constructor(version:Verion,data:Date,id:Id,description:Description){
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
class Extension {
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
const metaData = new Metadata("rc.1.0",new Date(),"com.example.extension","This is a example extension")
const extension = new Extension(metaData)