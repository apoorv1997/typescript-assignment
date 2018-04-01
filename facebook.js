var SocialProfile = /** @class */ (function () {
    function SocialProfile(Name, Birthday, age, Hobbies, gender) {
        var _this = this;
        this.getFirstName = function () {
            var firstName = _this.Name.split(" ");
            return firstName[0];
        };
        this.getFullName = function () {
            return _this.Name;
        };
        this.getBirthday = function () {
            return _this.Birthday;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getHobbies = function () {
            return _this.Hobbies;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.Name = Name;
        this.Birthday = Birthday;
        this.age = age;
        this.Hobbies = Hobbies;
        this.gender = gender;
    }
    return SocialProfile;
}());
var getUserDetails = function () {
    var name = document.getElementById("name").value;
    var birthday = document.getElementById("birthdate").value;
    var age = document.getElementById("age").value;
    var hobbies = document.getElementById("hobbies").value;
    var gender = document.getElementById("gender").value;
    var newUser = new SocialProfile(name, birthday, age, hobbies, gender);
    console.log("Name of the user is " + newUser.getFullName());
    console.log(newUser.getFirstName() + "'s Birthday is on " + newUser.getBirthday());
    console.log(newUser.getFirstName() + "'s age is " + newUser.getAge());
    console.log("His hobbies are " + newUser.getHobbies());
    console.log("His gender is " + newUser.getGender());
};
