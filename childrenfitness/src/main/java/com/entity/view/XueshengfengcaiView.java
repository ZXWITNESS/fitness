package com.entity.view;

import com.entity.XueshengfengcaiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 学生风采
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-02-16 19:47:06
 */
@TableName("xueshengfengcai")
public class XueshengfengcaiView  extends XueshengfengcaiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public XueshengfengcaiView(){
	}
 
 	public XueshengfengcaiView(XueshengfengcaiEntity xueshengfengcaiEntity){
 	try {
			BeanUtils.copyProperties(this, xueshengfengcaiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
