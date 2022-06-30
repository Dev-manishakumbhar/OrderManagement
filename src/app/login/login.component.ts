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
  constructor(private router:Router) { }

  ngOnInit(): void {
   this.getCookies()
  }
  

  sendData(username:any,psw1:any){
    console.log("login");
    var name=this.formData.username;
    var psw = this.formData.password;
  
    
    if(name!="manisha" && psw!="Rwyh9b@20"){
     
     alert("Plz Enter valid username and password");

    }
    else{
      this.router.navigateByUrl("/order")
    }
    
  }
  
  setCookie(){
    var user=document.getElementById('userName')?.nodeValue
    var psw=document.getElementById('password')?.nodeValue
    document.cookie="username="+user+";path=http://localhost:4200/";
    document.cookie="passw="+psw+";path=http://localhost:4200/";
   

  }
  getCookies()
  {
  
    console.log(document.cookie);
   var u= this.getCookie("username");
   var p= this.getCookie("passw");
   document.getElementById('userName')
  document.getElementById('password')
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
      return  ""
  }


  
  

}
