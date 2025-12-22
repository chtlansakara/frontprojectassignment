export class Project {
  // id should be optional as it is created automatically by the API
  id?:Number;
  name:String;
  constructor( name:String, id?:Number){
    this.id = id;
    this.name = name;
  }
}
