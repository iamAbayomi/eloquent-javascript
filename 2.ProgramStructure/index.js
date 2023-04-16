function loopTraingle(){
    for(var i=1; i<=7; i+=1){
        let output = ""
        for(var x=0; x<i; x++ ){
            output += "#"
        }
        console.log(output)
    }
}

loopTraingle()