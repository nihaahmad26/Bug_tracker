import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data =[];
    data.push(new bugModel({
    _id:23456789,
    name: "Crash on Load",
    details: "Crashes after 3 seconds",
    steps:"open applications and it will crash",
    version: "V2.0",
    assigned: "Niha",
    creator: "Wiha",
    priority: 1,
    time: "23:38",
}))
    data.push(new bugModel({
    _id:23456790,
    name: "Wont load",
    details: "Crashes after 3 seconds",
    steps:"open applications and it will crash",
    version: "V2.0",
    assigned: "Niha",
    creator: "Wiha",
    priority: 3,
    time: "23:38",
}))

    let sorted = data.sort((a,b)=>{return a.priority - b.priority})
    return sorted;
}