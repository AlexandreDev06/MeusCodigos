<%-- 
    Document   : calculo
    Created on : 09/11/2020, 22:03:59
    Author     : Alex
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Calculando...</title>
    </head>
    <body>
      <% 
       String txt_Peso, txt_Altura;
       float peso = 0F, altura = 0F, imc = 0F;
       
       txt_Peso= request.getParameter("peso");
       txt_Altura = request.getParameter("altura");
       
       if( !txt_Peso.equals("")){
       peso = Float.parseFloat(txt_Peso);
       }    
       if ( !txt_Altura.equals("")){
       altura = Float.parseFloat(txt_Altura);
       }
       
       if ( peso <=0 || altura <= 0){
           out.print("Peso ou altura incorreto.");
       }else{
       imc = (peso / (altura * altura));
       out.print("Valor do IMC = "+ imc + "<br>");
       }
       %>
    </body>
</html>
