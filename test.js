function doIt() {
    console.log("talk")
}

function cancelIt() {
    console.log("cancel");
}

var AI = {
    task: [],
    talk: function() {
        this.task.push(setTimeout(doIt));
        //this.task.pop();
        return this;
    },
    cancel: function() {
        if (this.task.length) {
            clearTimeout(this.task.pop());
            setTimeout(function() {
                cancelIt();
            })
        } else {
            setTimeout(function() {
                console.log("natask");
            })
        }
        return this;
    },
    sleep: function(num) {
        this.task.push(setTimeout(function() {
            console.log('延迟' + num + '秒后执行');
            doIt();
        }, num * 1000));
        return this;
    }
}

AI.sleep(1).sleep(2).cancel();
AI.cancel();