
function search(){
  let searchType =   document.getElementById("searchType").value;
  if(searchType == 1){
    search_regex();
  }else{
    search_keyword();
  }
}

function search_regex(){
    let keyword = document.getElementById("search").value;
    let res ="";

    $.ajax({
        url: 'http://localhost:8080/regex', // Replace with your backend endpoint URL
        type: 'GET', // or 'POST' depending on your backend
        data: {
            regex: keyword
        },
        success: function (data) {
            console.log('Success:', data);
            document.getElementById("response").innerHTML="";
            document.getElementById("chercher").innerHTML = "Vous Cherchez par Regex :"+keyword;

            let bk ="";
            for (const book of data) {
                bk="";
                bk ='<article class="cta"><div class="cta__text-column"><h2>Titre '+book.title+'</h2><p> Author : <span class="author">  '+book.author+' </span> Language : <span class="lang">'+book.language+' </span>  Occurance : <span class="lang"> '+book.occur+' </span></p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">Read all about it</a></div></article>';
                res+=bk;
                console.log(book.occur);
            }
            document.getElementById("response").innerHTML=res;
        },
        error: function (error) {
            // Handle the error response
            console.error('Error:', error);
        }
    });
}

function search_keyword(){
    let keyword = document.getElementById("search").value;
    let res ="";
    $.ajax({
        url: 'http://localhost:8080/kmp', // Replace with your backend endpoint URL
        type: 'GET', // or 'POST' depending on your backend
        data: {
            kmp: keyword
        },
        success: function (data) {
            console.log('Success:', data);
            document.getElementById("chercher").innerHTML = "Vous Cherchez par mot clé :"+keyword;
            document.getElementById("response").innerHTML="";
            let bk ="";
            for (const book of data) {
                bk="";
                bk ='<article class="cta"><div class="cta__text-column"><h2>Titre '+book.title+'</h2><p> Author : <span class="author">  '+book.author+' </span> Language : <span class="lang">'+book.language+' </span>  Occurance : <span class="lang"> '+book.occur+' </span></p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio">Read all about it</a></div></article>';
                res+=bk;
                console.log(book.occur);
            }
            document.getElementById("response").innerHTML=res;
        },
        error: function (error) {
            // Handle the error response
            console.error('Error:', error);
        }
    });

}