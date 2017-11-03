<template>
  <div>
   <div class="bgf">
   <div class="goBack"><i class="fa fa-angle-left" @click="goBack"></i> <span>请您多说几句吧</span></div>
   <form id="myform">
   	<div><input type="text" class="title" name="title" placeholder="标题最多50个字"></div>
   	<div><input type="text" class="tags" name="tags" placeholder="标签若有多个，请以英文状态的逗号隔开"></div>
    <div class="input-text">
         <!-- <label>填写内容 *（不填写则默认为空）</label> -->
         <textarea id="desc" class="context desc" placeholder="此处描述不超过200个字符" name="desc" maxlength="200"></textarea>
         <div id="context" class="context" name="context" contenteditable="true" tabindex="1"></div>
    </div>
<!--       <span>上传图片</span> -->
      <div class="showall clearfix">
        <div id="showimgs" class="clearfix"></div>
        <div class="addimg" @click="updialog"><i class="fa fa-plus" aria-hidden="true"></i></div>
     </div>
      <input type="file" id="images" name="images" ref="images"  @change="getFile($event)" multiple/>
      <!-- <input type="text" name="ooo"> -->
      <br/>
      <div class="bt"><button type="submit" class="upbtn" @click="submitForm($event)">提交</button></div>
	</form>
  </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { add_article } from "../../api/article"
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      usersid: '',
      file: ''
    }
  },
  mounted() {
    console.log(this.userInfo)
    this.username = this.userInfo.users_name
    this.usersid = this.userInfo.id
  },
  computed:{
     ...mapGetters(['userInfo'])
  },
  methods:{
    goBack (){
      window.history.go(-1);
    },
  	getFile (event) {
      this.file = event.target.files;
      this.uploadShow();
    },
    async submitForm(event) {
      const that = this
      event.preventDefault();
      let formData = new FormData(document.getElementById('myform'));
      if(!this.username || !this.usersid){
        return alert("请登录");
      }
      formData.append('username', this.username);
      formData.append('usersid', this.usersid);
      formData.append('context', that.return2Br(document.getElementById('context').innerHTML));
      // console.log(formData);
      let config = {
        method: 'post',
        headers: {
          'Accept': 'text/html;'
        }
      }
      let res = await add_article(formData,config)
      this.callback(res)
    },
    callback({code,data,message}){
      console.log("message",message);
    },
    uploadShow (e) {
      if (document.getElementById("images").files.length === 0) { return; }
      let oFReader = [],rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
      let show=document.getElementById("showimgs"),html='';
      show.innerHTML='';
      var oFile = document.getElementById("images").files;
      for(let i=0,len = oFile.length; i<len; i++){
        console.log("key",oFile[i]);
        oFReader[i]= new FileReader();
        oFReader[i].onloadend = function (oFREvent) {
          html = `<img src=${oFREvent.target.result} id=img_${i} style="width:60px; height:60px; margin:2px 2px 0 0; float:left;" />`
          show.innerHTML+=html;
        };
        oFReader[i].readAsDataURL(oFile[i]);
      }
      oFReader=null;
     // console.log(oFile);
     // if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }
     // oFReader.readAsDataURL(oFile);
    },
    updialog:function(){
      document.getElementById("images").click();
    },
    return2Br(str) { 
      return str.replace(/\r?\n/g,"<br />"); 
    }
  }
}
</script>

<style>
#images{
   visibility: hidden;
   height:0px;
   width:0px;
}
#myform{
	max-width: 700px;
	padding:0 18px;
	margin:10px auto 0 auto;
}
#myform input[type=text]{
	border:0;
	display: block;
	padding:2px 2%;
	/*margin:5px auto;*/
	width:96%;
}
#myform .title{
	height:30px;
	font-size: 16px;
	border-bottom: 1px solid #ccc !important;
}
#myform .tags{
	margin:15px 0;
	border-bottom: 1px solid #ccc !important;
	/*border-left: 1px solid #ccc !important;*/
}
.addimg{
   float: left;
   width:60px;
   height:60px;
   border:1px #ccc dashed;
   font-size: 30px;
   font-weight:normal;
   color: #666;
   text-align: center;
   line-height: 60px;
   cursor: pointer;
}
.context {
    /*max-width: 640px;*/
    width: 100%;
    height: 15em;
    outline: none;
    font-family: inherit;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 14.3333px Arial;
    padding:6px;
    line-height: 1.3em;
    letter-spacing:1px;
    border: 1px solid #ccc;
    overflow-y:auto;
    resize: none;
   }
.desc{
  height:8em !important;
}
#myform  .upbtn{
	width: 100%;
    display: inline-block;
    padding: 6px 22px;
    color:#fff;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    background-color: #1E90FF;
    border-color: #2e6da4;
    border: 1px solid transparent;
    border-radius: 4px;
}
.goBack{
	/*width:100%;*/
  /*padding:10px 0;*/
  text-align: center;
  line-height: 50px;
  height:50px;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.goBack i, .goBack span{
  display: block;
  position: absolute;
  top:0;
  left:0;
  width:100%;
}
.goBack i{
  line-height: 50px;
  width:20px;
  z-index: 2;
  padding: 0 14px;
  font-size: 24px;
}
.goBack span{
}
</style>
