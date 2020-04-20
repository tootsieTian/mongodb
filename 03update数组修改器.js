var db = connect('company')

//$push追加数组
db.workmate.update({'name':'xiaowang'},{$push{test:'testpush11'}})

//$ne查找是否存在，如果不存在就执行操作，存在则不执行
db.workmate.update({'name':'xiaowang','test':{$ne:'testpush1111'}},{$push:{'test':'testne'}})   //test数组中不存在testpush1111 就在数组中添加testne，存在则不执行操作

//$addToSet，同$ne，存在则不添加，不存在则添加
db.workmate.update({'name':'xiaowang'},{$addToSet:{'test':'testaddToSet'}})

//$each批量追加，要配合addToSet
var newTest = ['testeach','testeach11','testeach222']
db.workmate.update({'name':'toots'},{$addToSet:{'test':{$each:newTest}}})

//$pop删除数组值，1表示从数组末端，-1表示从数组开端
db.workmate.update({'name':'xiaowang'},{$pop:{'test':-1}})

//用$set进行定位修改
db.workmate.update({'name':'xiaowang'},{$set:{'test.1':'test定位修改'}})

print('成功')
