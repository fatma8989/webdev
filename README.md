# webdev
db.authers.insert({"mobile" :  7890 ,  "email" : "bnm@gmail.com" ,"name" : "bnm", "age" : 30})

db.authers.insert({"mobile" : 45678 ,  "email" : "xcv@gmail.com" ,"name" : "fxcv", "age" : 29})

db.authers.insert({"mobile" : 25678 ,  "email" : "asd@gmail.com" ,"name" : "asd", "age" : 70})

db.authers.insert({"mobile" : 14578 ,  "email" : "iop@gmail.com" ,"name" : "iop", "age" : 90})




db.books.insert({ "name" : "qwe" , "relesedate" : 2004 , "sales" : 3 , "authername" : "bnm" })

db.books.insert({ "name" : "rty" , "relesedate" : 2009 , "sales" : 20 , "authername" : "fxcv" })

db.books.insert({ "name" : "ujkl" , "relesedate" : 2010 , "sales" : 15 , "authername" : "asd" })


db.books.insert({ "name" : "uio" , "relesedate" : 2012 , "sales" : 18 , "authername" : "iop" })

db.books.insert({ "name" : "fghjk" , "relesedate" : 2015 , "sales" : 8 , "authername" : "asd" })

db.books.insert({ "name" : "qwe" , "relesedate" : 2016 , "sales" : 6 , "authername" : "bnm" })

db.books.insert({ "name" : "qwe" , "relesedate" : 2016 , "sales" : 6 , "authername" : "iop" })




db.resident.insert({ "country" : "kw" , "authername" : "iop" })
db.resident.insert({ "country" : "bh", "authername" : "bnm" })
db.resident.insert({ "country" : "ksa", "authername" : "asd" })
db.resident.insert({ "country" : "uae", "authername" : "fxcv" })
db.resident.insert({ "country" :"omn", "authername" : "fatma" })



db.resident.update({"authername":"fatma"},
{"$set":{"country":"USA"}})
