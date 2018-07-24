$(document).ready(function () {
    $('#test').hide();
}) ;

document.getElementById("myBtn").onclick =  function () {
    // snippet per SDK facebook
    window.fbAsyncInit = function() {
        FB.init({
            appId            : '621735731527771',    // id app #SocialUniversity2018
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v3.0'
        });

        // token valido fino a 7 settembre 2018
        var pageAccessToken = 'EAAI1dyFsAFsBAHGykv6pgIuJq3sYntlRvEIdtZApxMH2yhZBZBOvx646Q0oqktCk5dsCKjFiQptJvs4fTgtwSLau7MNBZAZCS6DxfCzb6hNyrf5jonIplHZCqX7hDQfjV1tv2VxZABnV2vGRUEv93Epwk0lgFyhYIAZD\n';

        //acquisizione dei post della pagina
        // noinspection JSAnnotator
        FB.api('/struggletodecide?fields=name,feed',
            {access_token : pageAccessToken},
            function(response) {
                // console.log(response);
                var myJSON, myObj, i, txt;
                myJSON = JSON.stringify(response);
                myObj = JSON.parse(myJSON);
                //document.getElementById("demo").innerHTML = myJSON;
                console.log(myObj);

                txt = "<table id='myTable' cellpadding='6px'><thead><tr><td>"+ myObj.name +
                    "</td></tr></thead><tbody>";
                for(i in myObj.feed.data){
                    txt += "<tr><td>" + myObj.feed.data[i].message + "</td>"+
                        "<td>" + myObj.feed.data[i].story +  "</td>" +
                        "<td>" + myObj.feed.data[i].created_time +  "</td>" +
                        "</tr>";
                }
                txt += "</tbody></table>";

                document.getElementById("demo").innerHTML = txt;

            });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    $('#test').show();

};

function exportTable() {
    //definisce le informazioni del nostro file Excel
    var tab_text = '<html xmlns:x = "urn:schemas-microsoft-com:office:excel">';
    tab_text += "<head><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>";
    tab_text += "<x:Name>Test Sheet</x:Name>";
    tab_text += "<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>";
    tab_text += "</x:ExcelWorksheets></x:ExcelWorkbook></xml></head>";

    tab_text += "<body><table border='1px'>";
    tab_text += $("#myTable").html();
    tab_text += "</table></body></html>";

    // indica come leggere il dato: file excel
    var data_type = 'data:application/vnd.ms_excel';

    $('#test').attr('href', data_type + ',' + encodeURIComponent(tab_text));
    $('#test').attr('download', 'Test fbFeed.xls');
}
