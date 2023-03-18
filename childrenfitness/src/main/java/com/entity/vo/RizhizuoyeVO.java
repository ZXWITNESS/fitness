package com.entity.vo;

import com.entity.RizhizuoyeEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
 

/**
 * 日志作业
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2022-02-16 19:47:06
 */
public class RizhizuoyeVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 姓名
	 */
	
	private String xingming;
		
	/**
	 * 上课图片
	 */
	
	private String shangketupian;
		
	/**
	 * 日志内容
	 */
	
	private String rizhineirong;
		
	/**
	 * 发布时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date fabushijian;
		
	/**
	 * 用户id
	 */
	
	private Long userid;
				
	
	/**
	 * 设置：姓名
	 */
	 
	public void setXingming(String xingming) {
		this.xingming = xingming;
	}
	
	/**
	 * 获取：姓名
	 */
	public String getXingming() {
		return xingming;
	}
				
	
	/**
	 * 设置：上课图片
	 */
	 
	public void setShangketupian(String shangketupian) {
		this.shangketupian = shangketupian;
	}
	
	/**
	 * 获取：上课图片
	 */
	public String getShangketupian() {
		return shangketupian;
	}
				
	
	/**
	 * 设置：日志内容
	 */
	 
	public void setRizhineirong(String rizhineirong) {
		this.rizhineirong = rizhineirong;
	}
	
	/**
	 * 获取：日志内容
	 */
	public String getRizhineirong() {
		return rizhineirong;
	}
				
	
	/**
	 * 设置：发布时间
	 */
	 
	public void setFabushijian(Date fabushijian) {
		this.fabushijian = fabushijian;
	}
	
	/**
	 * 获取：发布时间
	 */
	public Date getFabushijian() {
		return fabushijian;
	}
				
	
	/**
	 * 设置：用户id
	 */
	 
	public void setUserid(Long userid) {
		this.userid = userid;
	}
	
	/**
	 * 获取：用户id
	 */
	public Long getUserid() {
		return userid;
	}
			
}
