export class MenuModel {
    constructor(title:string,url:string,icon:string){
        this.Title = title;
        this.Url = url;
        this.Icon = icon;
    }
    public Title:string;
    public Url:string;
    public Icon:string;
}