var db = connect('company')

//dbrunCommand()用于返回修改状态
//false：第一句末尾的false是upsert的简写，代表没有此条数据时不增加;
//true：true是multi的简写，代表修改所有。
db.workmate.update({'name':'xiaowang'},{$set:{'book2':'被讨厌的勇气'}},false,true)
var result =  db.runCommand({getLastError:1})
//返回的是json字符
printjson(result)

//db.listCommands( ):查看所有的Commad命令

// findAndModify，查找集合并修改
// query：需要查询的条件/文档
// sort: 进行排序
// remove：[boolean]是否删除查找到的文档，值填写true，可以删除。
// new:[boolean]返回更新前的文档还是更新后的文档。
// fields：需要返回的字段
// upsert：没有这个值是否增加。
var myModify = {
    findAndModify:'workmate',   //要查找的集合
    query:{name:'xiaowang'},     //要查找的文件
    update:{$set:{age:666}},     //要修改的数据
    new:true                     //是否查看结果
}   
var resultTwo = db.runCommand(myModify);
printjson(resultTwo)