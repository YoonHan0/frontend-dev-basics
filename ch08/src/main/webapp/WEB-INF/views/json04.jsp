<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script>
$(function() {
	var vo = {
		name: "둘리",
		password: "1234",
		message: "호이잇"
	};
	$("button").click(function(){
		$.ajax({
			url: "${pageContext.request.contextPath }/api/post02",	
			async: true,
			type: "post",
			dataType: "json",									// 받는 content Type
			contentType: "application/json",	// 보내는 데이터 (default)
			data: JSON.stringify(vo),		// JS 객체를 String 형태로 변환
			success: function(response) {			// vo에서 return받은 데이터가 json형식으로 담겨있음 response에
				if(response.result === "fail") {
					console.error(response.message);
					return;
				}
				
				var vo = response.data;
				
				var htmls = "";
				htmls += ("<h3>" + vo.no + "</h3>");
				htmls += ("<h4>" + vo.name + "</h4>");
				htmls += ("<h5>" + vo.message + "</h5>");
				
				document.getElementById("data").innerHTML = htmls;
				
			},
			error: function(xhr, status, error) {
				console.error(status, error);
			}
		});
	});
});
</script>
</head>
<body>
	<h1>AJAX Test: JSON 04 Format Data: $.ajax() 함수 사용하기</h1>
	
	<button>데이터 가져오기(post, delete, put)</button>
	<div id="data"></div>
</body>
</html>