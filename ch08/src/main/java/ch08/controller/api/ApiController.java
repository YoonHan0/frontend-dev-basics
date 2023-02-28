package ch08.controller.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import ch08.dto.JsonResult;
import ch08.dto.XmlResult;
import ch08.vo.GuestbookVo;

@Controller
@RequestMapping("/api")
public class ApiController {

	@ResponseBody
	@RequestMapping(value="/text", method=RequestMethod.GET)
	public String text() {
		return "Text 데이타";
	}

	@ResponseBody
	@RequestMapping(value="/html", method=RequestMethod.GET)
	public String html() {
		return "<h1>Ajax 연습</h1><p>HTML 데이터</p>";
	}

	@ResponseBody
	@RequestMapping(value="/xml", method=RequestMethod.GET)
	public XmlResult xml() {
		XmlResult.GuestbookVo vo = new XmlResult.GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");

		return XmlResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/json", method=RequestMethod.GET)
	public JsonResult json() {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호이~");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/post01", method=RequestMethod.POST)
	public JsonResult post01(GuestbookVo vo) {
		// service -> repo : db insert 작업 완료 (했다치고)
		
		vo.setNo(1L);		// 원래는 DB에 insert한 값 가져오는 단계인데 넣었다치고 그냥 직접 입력
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping(value="/post02", method=RequestMethod.POST)
	public JsonResult post02(@RequestBody GuestbookVo vo) {
		// service -> repo : db insert 작업 완료 (했다치고)
		
		vo.setNo(1L);		// 원래는 DB에 insert한 값 가져오는 단계인데 넣었다치고 그냥 직접 입력
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	
}