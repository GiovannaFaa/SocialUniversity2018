window.onload =  function () {
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
                console.log(response);
            }

        );
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
};