// ＤＯＭ読み込み完了後発火
document.addEventListener("DOMContentLoaded",function (eve) {
  setTimeout("mater_expand('#access_line')", 3000);  //メータ上昇
  setTimeout("percent_up('#access_per_num')", 3000);  //パーセンテージ上昇
  if(document.getElementById('#access_line')){
    setTimeout("change_location('')", 12000); //画面の移動
  }
  setTimeout("mater_expand('#steal_line')", 3000);  //メータ上昇
  setTimeout("percent_up('#steal_per_num')", 3000);  //パーセンテージ上昇
  if(document.getElementById('#steal_line')){
    setTimeout("change_location('')", 12000); //画面の移動
  }
});
document.addEventListener("DOMContentLoaded", function (eve){
  rewrite();
  init();
});


//グローバル変数記述部
var i = 1;
var use_card_num = 1;
var maps;

var user_name = "koga";   //ここにユーザのデータをおねがいします
var user_number = "0000";

// 関数記述部
function mater_expand(target_name) {
  var line = document.querySelector(target_name);
  line.classList.add('fullwidth');
}

function percent_up(target_name) {
  var num = document.querySelector(target_name);
  num.textContent = i;
  if(i < 100){
    setTimeout(function(){
      i++;
      percent_up(target_name)
    }, 63);
  }
}

function change_location(target_name) {
  // document.location(target_name);
}

function judge_lea() {
  // 入力された文字列
  var user_name = document.querySelector('#user_name');
  var user_number = document.querySelector('#user_number');
  var user_address = document.querySelector('#user_address');
  var user_tel = document.querySelector('#user_tel')
  // 入力されるべき文字列
  var user_name_ans = document.querySelector('#hack_name3').textContent;
  var user_number_ans = document.querySelector('#mynumber2').textContent;
  var user_address_ans = document.querySelector('.address').textContent;
  var user_tel_ans = document.querySelector('.tel_num').textContent;

  if(user_name.value === user_name_ans && user_number.value === user_number_ans && user_address.value === user_address_ans && user_tel.value === user_tel_ans){
    console.log("Yes"); //テスト用
    change_location("");  //次のページ（不正口座開設（完了）画面）に遷移する
  }
  else
  {
    // user_name.value = user_name_ans; //答え自動補完：↓4行(テスト用)
    // user_number.value = user_number_ans;
    // user_address.value = user_address_ans;
    // user_tel.value = user_tel_ans;
    console.log("No");  //テスト用
  }
}

function judge() {
  // 入力された文字列
  var user_name = document.querySelector('#user_name');
  var user_number = document.querySelector('#user_number');
  var user_address = document.querySelector('#user_address');
  var user_tel = document.querySelector('#user_tel')
  // 入力されるべき文字列
  var user_name_ans = document.querySelector('#hack_name3').textContent;
  var user_number_ans = document.querySelector('#mynumber2').textContent;
  var user_address_ans = document.querySelector('.address').textContent;
  var user_tel_ans = document.querySelector('.tel_num').textContent;

  if(user_name.value === user_name_ans && user_number.value === user_number_ans && user_address.value === user_address_ans ){
    console.log("Yes"); //テスト用
    change_location("");  //次のページ（不正口座開設（完了）画面）に遷移する
  }
  else
  {
    user_name.value = user_name_ans; //答え自動補完：↓３行(テスト用)
    user_number.value = user_number_ans;
    user_address.value = user_address_ans;
    user_tel.value = user_tel_ans;
    console.log("No");  //テスト用
  }
}

function rewrite() {
  var name_arr = Array.apply(null,document.querySelectorAll(".hack_name"));  //NodeList型をＡｒｒａｙ型に変換して代入
  var number_arr = Array.apply(null,document.querySelectorAll(".mynumber"));
  name_arr.map(function (value){
     value.textContent = user_name;
  });
  number_arr.map(function (value){
    value.textContent = user_number;
  });
  console.log(number_arr); //テスト用
}

function usecard() {
  var yen = document.querySelector('#yen_counter');
  yen.textContent = use_card_num * 10000;
  use_card_num++;
  bills_ani();
}

function bills_ani() {
  var bills_stack = document.querySelector('#bills_stack');
  var bills_tnp = document.createElement('div');
  bills_tnp.classList.add('bills');
  if(i == 1){
    bills_tnp.style.display = 'block';
    bills_tnp.classList.add('yen_ani' + i++);
    setTimeout(function () {
        bills_tnp.style.display = 'none'
      },2000);
    }else{
    bills_tnp.style.display = 'block';
    bills_tnp.classList.add('yen_ani' + i--);
    setTimeout(function () {
        bills_tnp.style.display = 'none'
    },2000);
  }
  bills_stack.appendChild(bills_tnp);
}

function init() {
  var latlng = new google.maps.LatLng(34.663709, 135.518600);
      var opts = {
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: latlng
      };
  maps = new google.maps.Map(document.querySelector("#google_map"), opts);
  var infoWindowOpts = {
        position: new google.maps.LatLng(34.663805, 135.518600),
        content: user_name + "の住所はここですね？"
      };
  var infowin = new google.maps.InfoWindow(infoWindowOpts);
  infowin.open(maps);

  for(i= 0;i < 10; i++){
    var comment_stack = document.querySelector('#comment_stack');
    var comment_tnp = document.createElement('div');
    var comment_arr = new Array(6).fill();
    comment_arr[0] = "え、>>500の住所ってｗｗｗｗ";
    comment_arr[1] = "特定厨乙ｗｗｗｗ";
    comment_arr[2] = "ｗｗｗｗｗｗｗｗｗｗｗ";
    comment_arr[3] = "ここって学校じゃねｗｗｗｗｗ";
    comment_arr[4] = "や、やめてくださいよ…！！";
    comment_arr[5] = user_name + "って誰だよｗｗｗｗ";


    var rand_num = Math.floor(Math.random()*6);
    comment_tnp.textContent = comment_arr[rand_num];

    comment_tnp.classList.add('comment');
    var a = comment_stack.appendChild(comment_tnp);
    // rand_num = Math.floor(Math.random()*6);
    a.style.top = ((rand_num　+ 1) * 20) + "%";
  }
}


//python -m SimpleHTTPServer
