

class SocialProfile {
    Name:string;
    protected Birthday:string;
   protected age:number;
    Hobbies:string;
    gender:string;

     constructor (Name:string,Birthday:string,age:any,Hobbies:string,gender:string ){
        this.Name=Name;
        this.Birthday=Birthday;
        this.age=age;
        this.Hobbies=Hobbies;
        this.gender=gender;
    }
    getFirstName = () => {
        let firstName = this.Name.split(" ");
        return firstName[0];
    }
    getFullName = () => {
        return this.Name;
    }
    getBirthday = () => {
        return this.Birthday;
    }
    getAge = () => {
        return this.age;
    }
    getHobbies = () => {
        return this.Hobbies;
    }
    getGender = () => {
        return this.gender;
    }
} 



let getUserDetails = () =>{
    let name =(<HTMLInputElement>document.getElementById("name")).value;
    let birthday = (<HTMLInputElement>document.getElementById("birthdate")).value;
    let age = (<HTMLInputElement>document.getElementById("age")).value;
    let hobbies = (<HTMLInputElement>document.getElementById("hobbies")).value;
    let gender = (<HTMLInputElement>document.getElementById("gender")).value;
        
    let newUser = new SocialProfile(name,birthday,age,hobbies,gender);

    console.log(`Name of the user is ${newUser.getFullName()}`);
    console.log(`${newUser.getFirstName()}'s Birthday is on ${newUser.getBirthday()}`);
    console.log(`${newUser.getFirstName()}'s age is ${newUser.getAge()}`);
    console.log(`His hobbies are ${newUser.getHobbies()}`);
    console.log(`His gender is ${newUser.getGender()}`);
}

    

   