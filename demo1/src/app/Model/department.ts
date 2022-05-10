export class Department {
  id:number=0;
  location:string="";
  deptName:string="";
  constructor(id:number,location:string,deptName:string) {
    this.id=id;
    this.location=location;
    this.deptName=deptName;
  }
}
