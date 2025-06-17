class Demo {
    constructor(name) {
        this.name = name;
        console.log("Parent class called: " + this.name);
    }

    getMsg() {
        console.log("Hello from " + this.name);
    }
}

class Demo1 extends Demo {
    constructor(name) {
        super(name);
        console.log("Child class called: " + this.name);
    }

    getdata() {
        console.log('data');
        this.getMsg();
    }
}


const OBJ = new Demo1("Demo");
OBJ.getdata();