console.log('hello')

//3b21fc2348b141e8abb64155b20a3fbb
let country='in'
let apiKey='3b21fc2348b141e8abb64155b20a3fbb'

let news = document.getElementById('news');
const xhr=new XMLHttpRequest();
xhr.open('GET','Access-Control-Allow-Origin:https://newsapi.org/v2/top-headlines?country=in&apiKey=3b21fc2348b141e8abb64155b20a3fbb',true)

xhr.onload=function(){
    if(this.status==200){
    let json=JSON.parse(this.responseText);
    console.log('hello');
    console.log(json);
    json=json.articles;
    let index=0;
    for(i in json){
         index+=1
        let getNews=`
<div class="card">
    <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                News ${index}:${json[i].title}
                        </button>
        </h2>
    </div>

    <div id="collapse${index}" class=" collapse " aria-labelledby="heading${index}"
        data-parent="#news">
        <div class="card-body">
            ${json[i].content}<a href="${json[i].url}" target="_blank">read more here</a>
                    </div>
    </div>
</div>`

   news.innerHTML+=getNews;

    }
    }
    else{
        console.log('error');
    }
}
xhr.send();





