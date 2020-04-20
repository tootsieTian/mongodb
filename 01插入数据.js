//插入一些数据
var workmate1 = {
    name:'tootsie',
    age:22,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date()
}
var workmate2 = {
    name:'toots',
    age:20,
    sex:0,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'幼教'
    },
    regeditTime:new Date()
}
var workmate3 = {
    name:'tom',
    age:33,
    sex:1,
    job:'后端',
    skill:{
        skillOne:'GO',
        skillTwo:'Java',
        skillThree:'PHP'
    },
    regeditTime:new Date()
}
var db = connect('company');
var workArray = [workmate1,workmate2,workmate3]
db.workmate.insert(workArray);
print('插入成功')