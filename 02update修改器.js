var db = connect('company')

//update不可以直接指定修改
db.workmate.update({'name':'tom'},{'age':22})   //导致了要修改的这条文件里的属性只剩age

//要用$set修改
db.workmate.update({'name':'toots'},{"$set":{'age':10}})  //修改成功

//$set修改嵌套数据
db.workmate.update({'name':'tootsie'},{$set:{'skill.skillOne':'HTML'}})  //可以使用对象调用的方式

//$unset删除文件中的一个属性
db.workmate.update({'name':'tootsie'},{$unset:{'skill.skillTwo':''}})   //直接将要删除的key

//$inc用来对数字进行运算
db.workmate.update({'name':'tootsie'},{$inc:{'age':-10}})

//multi用于添加一个集合属性(即mysql里的属性，添加一列)
db.workmate.update({},{$set:{'class':''}},{multi:true})

//upsert，找不到值的情况下，直接插入这条数据
db.workmate.update({'name':'xiaowang'},{$set:{'age':'12342'}},{upsert:true})


print('成功')
