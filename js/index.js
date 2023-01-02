window.onload=function(){
    // 填入 script url
    var url='https://script.google.com/macros/s/AKfycbwQTk81oUuck1a-wKqV6vwzNZD60cAInIAkqYs52zxzNjBLV22RjjgnqFNB6VH6UC0/exec';
    document.getElementById("btn").onclick=function(){
        // 取得表單資料
        var name =document.getElementById("name").value;
        var mail =document.getElementById("mail").value;
        var area =document.getElementById("area").value;

        // 建立傳輸格式
        var formdata =new FormData();
        // 鍵值對形式
        formdata.append("name",name);
        formdata.append("mail",mail);
        formdata.append("area",area);
        // 設定傳輸方式
        var config = {
            method: 'POST',
            body:formdata,
            redirect: 'follow'
        };
        // 進行傳輸
        fetch(url, config)
        .then(response => response.text())
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log('error', error));
    }
}