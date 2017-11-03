<template>
  <div>
    <div class="test">
      
    <!-- <div>

    <form>
      <div class="field">
        <label>昵称</label><input type="text" placeholder="好听的名字" name="nickname">
      </div>
      <div class="field">
        <label>邮箱</label><input type="email" placeholder="联系你的邮箱" name="nickname">
      </div>
      <div class="field">
        <textarea class="comment-context" name="context" placeholder="你想要说点什么？"></textarea>
      </div>
      <div class="field text-r">
        <button>提交</button>
      </div>
    </form>
    </div>-->
    <div class="comments-text">目前还未添加</div>
  </div> 
</div>
</template>

<script>

export default {
  data () {
    return {
      
    }
  },
  components: {

  },
  created () {
  },
  mounted(){

  },
  computed: {
    locaStore () {
       return 45;
    },
  },
  methods: {
   
  }
}
</script>

<style>
.test{
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  display: block;
  /*width: 100%;*/
  padding:20px 18px;
  height:100%;
  background: #fff;
}
.field{
  width:100%;
  /*max-width: 640px;*/
  margin-top: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  min-height: 28px;
}
.field label{
  border:1px solid #ccc;
  width:90px;
  font-size: 14px;
  height:28px;
  line-height:28px;
  border-right:0;
  border-right:none;
  text-align: center;
}
.field input[type="text"],input[type="email"]{
   max-width:400px;
   padding:0 10px;
   flex: 1 auto;
   border:1px solid #ccc;
}
.field button{
  cursor: pointer;
  display: block;
  width:90px;
  height:30px;
  background: #0095ea;
  border:0;
  border:none;
  border:1px solid #0895fd;
  color:#fff;
  font-size: 14px;
  /*display: inline-block;*/
}
.text-r{
      /*justify-content: right;*/
  /*text-align: right;*/
}
.comment-context{
    width: 100%;
    height: 10em;
    min-height: 10em;
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
    margin: 0;
    font: 14.3333px Arial;
    padding:6px;
    line-height: 1.3em;
    letter-spacing:1px;
    border: 1px solid #ccc;
    overflow-y:auto; 
    resize:none;
}
.comments-text{
  min-height: 200px;
  width:100%;
  margin-top: 20px;
  text-align: center;
}
@media screen and (max-width: 701px){
.field label{
    display: none;
  }

}
</style>
