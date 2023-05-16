var input = document.querySelectorAll('input');
for(i=0; i<input.length; i++){
    input[i].setAttribute('size',input[i].getAttribute('placeholder').length);
}
const { createApp } = Vue

createApp({
    data() {
        return {
            newTask:{
                text:"",
                done:false,
                important: false
            },
            taskList: [
                {text :"lavare l'auto", done: false, important : false},
                {text :"pagare il bollo", done: true, important : false},
                {text :"fare gli esercizi", done: false, important : false},
                {text :"imparare ad assegnare classi con oggetti!", done: true, important : true}
            ],
            inputError : false
        }
    },
    methods: {
        addTask(){
            if (this.newTask.text.length>3) {
                this.inputError = false                
                // this.taskList.unshift({
                //     text : this.newTask.text,
                //     done :false
                // }) se metti un ogetto da un'altra parte restano comunque collegati quindi devi creare una copia e pushare quella.
                let x = {...this.newTask}
                if (x.text.includes("!")) {
                    x.important= true
                }
                this.taskList.unshift(x)
                this.newTask.text=""
            } else {
                this.inputError = true
            }
        },
        removeTask(i){
            this.taskList.splice(i, 1)
        },
        changeStatus(i){
            this.taskList[i].done = !this.taskList[i].done
        }
    }
}).mount('#app')