var app = new Vue({
    el:"#app",
    data:{
        message:"Hello Vue!"
    }
})

var app2 = new Vue({
    el:"#app-2",
    data:{
        message:"页面加载于" + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el:"#app-3",
    data:{
        seen:false
    }
})

var app4 = new Vue({
    el:"#app-4",
    data:{
        todos:[
            {text:"学习 Javascript"},
            {text:"学习 Vue"},
            {text:"整个项目"}
        ]
    }
})