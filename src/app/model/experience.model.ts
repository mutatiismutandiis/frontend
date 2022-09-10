export class experience{
    id?: number;
    title: String;
    time: String;
    location: String;
    description: String;

    constructor(title: String, time: String, location: String, description: String){
        this.title = title;
        this.time = time;
        this.location = location;
        this.description = description;
    }
}