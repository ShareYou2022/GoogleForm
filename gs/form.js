function doPost(e){
    // 取得表單位置
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
  
    // 取得傳輸資料（依照鍵名取值）
    var param = e.parameter;
    var name = param.name;
    var mail = param.mail;
    var area = param.area;
  
    // 將資料插入表單(陣列表示一橫列)
    sheet.appendRow([name,mail,area]);
  
    // 返回執行訊息
    return ContentService.createTextOutput('success');
  }
  
  