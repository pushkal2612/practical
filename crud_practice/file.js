const {log}=require ("console")
const fs=require ("fs")

const createFile =(data)=>{
    const alldata=loaddata()
    const duplicate=alldata.find(ele=>{
        return ele.name == data.name
    })
    if(duplicate)
    {
        console.log("name already exist!!");
        return ;
    }
    alldata.push(data)
    const jsondata=JSON.stringify(alldata)
    fs.writeFile("data.json",jsondata,(err,data)=>{
        console.log("file created...");
    })
}
const ViewFile=()=>{
    const alldata = loaddata()
    console.log(alldata);
}
const loaddata=()=>{
    try{
        const data=fs.readFileSync("data.json","utf-8")
        return JSON.parse(data);
    }
    catch(error)
    {
        return [];
    }
}
const removedata=(name)=>{
    const alldata = loaddata()
    const xyz = alldata.filter(ele=>{
        return ele.name != name;
    })
    
    const jsondata=JSON.stringify(xyz)
    fs.writeFile("data.json",jsondata,(err,data)=>{
        console.log("data remove...");
    })
}
module.exports={createFile,ViewFile,removedata}