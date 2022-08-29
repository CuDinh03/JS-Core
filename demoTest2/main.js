class NhanVien{
    name;
    age;
    gender;
    location;
    l;
    constructor(name, age,gender,location,l) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.location = location;
        this.l = l;
    }
    show(name, age,gender,location,l){
        document.getElementById('text').innerText = name+ " " + age + " " + gender+ " " + location+ " " + l ;
    }
}
let nv1 = new NhanVien();
nv1.show('toan','18','nam','hanoi','100xu');