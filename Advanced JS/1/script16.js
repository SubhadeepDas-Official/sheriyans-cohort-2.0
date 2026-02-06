let users = [
    "abc@gmail.com",
    "def@gmail.com",
    "ghi@gmail.com",
    "klm@gmail.com"
]

function sendEmail(emails){
    return new Promise((resolve, reject)=> {
        let time = Math.floor(Math.random()*5)
        setTimeout(() => {
            let probability = Math.floor(Math.random()*10)
            if(probability <= 5) resolve ("Email sent successfully")
            else reject("Email not sent")
        }, time*1000);
    })
}

async function sendEmails(userList){
    let allResponses = userList.map(function(email){
        return sendEmail(email)
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        })
    })

    let ans = await Promise.all(allResponses)
    ans.forEach(function(status){
        console.log(status)
    })
}
sendEmails(users)