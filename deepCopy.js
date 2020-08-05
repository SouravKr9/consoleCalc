class Snapshot {
    obj;

    Snapshot(obj) {
        this.obj = JSON.parse(JSON.stringify(obj));
    }

    print(path){
        let p = path.split(".");
        let res = obj[p[0]];
        //console.log(res);
        for(let i=1;i<p.length;i++){
            res =  res[p[i]];
        }

        console.log(res);
        return this;
    }
};


let obj = {
    a:1,
    b:{
        a:2,
        c:[1,2,3],
        d:{
            a:3
        }
    }
};

const mySnapshot = new Snapshot(obj);

mySnapshot.print("a")
    .print("b.c")
    .print("b.d.a");