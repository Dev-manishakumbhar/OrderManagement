import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { stringify } from 'querystring';
// import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData:any={}; 
  u:any;
  rememberMe!:boolean;
  p:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
   this.getCookies()
  }
  

  sendData(username:any,psw1:any, rememberMe: boolean){
    console.log("login");
    const userName=this.formData.username;
    const password = this.formData.password;
    
    if(rememberMe){
      this.remeberMe(userName, password);
    }
      


    if(userName!="order" && password!="order"){
     alert("Username or password is incorrect");
    }
    else{
      this.router.navigateByUrl("/order")
    }
    
  }
  
  

 remeberMe(userName:any, password:any) {
  let credentials ={
    'userName' : userName,
    'password' : password,
    'time' : new Date().getTime()
  };
  localStorage['credentials'] = JSON.stringify(credentials);
}

loadStuff() {
  return JSON.parse(localStorage.getItem("credentials") || '');
}

  setCookie(){
    var user=document.getElementById('userName')
    var psw=document.getElementById('password')
    

    document.cookie="username="+user+";path=http://localhost:4200/";
    document.cookie="passw="+psw+";path=http://localhost:4200/";
   

  }
  getCookies()
  {
  
    console.log(document.cookie);
   var u= this.getCookie("username")
   var p= this.getCookie("passw")
  document.getElementById('userName')
    document.getElementById('password')
    // sessionStorage.getItem("custName")
    // sessionStorage.getItem("password")
  }

  getCookie(data:any){
      var name= data + "=";
      var decode= decodeURIComponent(document.cookie)
      var val = decode.split(",");
      for(var i=0;i<val.length;i++){
        var c=val[i];
        while(c.charAt(0) == " "){
          c= c.substring(1);
        }
        if(c.indexOf(name)==0){
          return c.substring(name.length,c.length);
        }
      }
      return ""
  }


  
  

}
