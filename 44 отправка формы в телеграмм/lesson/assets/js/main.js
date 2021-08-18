$(function(){
    $("#feedback_form").on("submit", function(e){
        e.preventDefault();
        sendMessage($(this));
    });
    $("input, textarea").on("focus", function(){
        if($(this).parents(".form_row").hasClass("has_err")){
            if($(this).attr("name")!=="email"){
                $(this).parents(".form_row").removeClass("has_err");
                $(this).next("div").text("");
            }
        }
    });
    $("input[name='email']").on('keyup', function(){
        if(!validateEmail($(this).val())){
            $(this).parents(".form_row").addClass("has_err");
            $(this).next("div").text("Invalid email adress");
        }else{
            $(this).parents(".form_row").removeClass("has_err");
            $(this).next("div").text("");
        }
    })
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


function sendMessage($form){
    const BOT_TOKEN = '1868758005:AAFgwAos7OsqEj3SOED9FgCKKspGO5USmGQ';
    const CHAT_ID = '-1001207500168';
    const nameee = namee.value;
    const emaill = email.value;
    const phonee = phone.value;
    const messagee = message.value;
    const text = 'Name:'+nameee+
    '\ Email:'+emaill+
    '\ Phone:'+phonee+
    '\ Message:'+messagee;
        
    let valid = true;
    $("form").find('*[data-required]').each(function(){
        if($(this).val()===''){
            valid = false;
            $(this).parents(".form_row").addClass("has_err");
            $(this).next("div").text("Field is requaired");
        }else{
            if($(this).attr("name")==="email"){
                if(!validateEmail($(this).val())){
                    valid = false;
                    $(this).parents(".form_row").addClass("has_err");
                    $(this).next("div").text("Invalid email adress");
                }
            }
        }
    });
    if(valid){
        axios
        .get('https://api.telegram.org/bot'+BOT_TOKEN+'/sendMessage?chat_id='+CHAT_ID+'&text='+text)
        .then((resp)=>{
            console.log(resp.data.ok)
            if(resp.data.ok===true){
                topPanel.success('Ваши данные отправленны', true);
                $("#feedback_form").trigger('reset');
            }else{
                topPanel.warning('error', true);
            }
        })
        .catch((err)=>{
            alert(err);
        });
    }
}


const topPanel = {
    info(text = "Some text here", autoclose = true) {
      this.showPanel(text, "info", autoclose);
    },
    success(text = "Some text here", autoclose = true) {
      this.showPanel(text, "success", autoclose);
    },
    danger(text = "Some text here", autoclose = false) {
      this.showPanel(text, "danger", autoclose);
    },
    warning(text = "Some text here", autoclose = false) {
      this.showPanel(text, "warning", autoclose);
    },
    showPanel(text, type, autoclose) {
      let btn = autoclose
        ? ""
        : '<button onclick="topPanel.closePanel()>&times;</button>';
      let h = `<div id="top_panel" class="panel_${type}">
          <p>${text}</p>${btn}<div></div>`;
      if (document.getElementById("top_panel") !== null) {
        this.closePanel();
      }
      document
        .getElementsByTagName("body")[0]
        .insertAdjacentHTML("afterbegin", h);
      if (autoclose) {
        const _this = this;
        setTimeout(function () {
          _this.closePanel();
        }, 3000);
      }
    },
    closePanel() {
      document.getElementById("top_panel").remove();
    },
  };

