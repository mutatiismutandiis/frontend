export class person{
    id?: number;
    name: String;
    lastname: String;
    img: String;
    aboutme: String;

    constructor(name: String, lastname: String, img: String, aboutme: String){
        this.name = name;
        this.lastname = lastname;
        this.img = img;
        this.aboutme = aboutme;
    }
}