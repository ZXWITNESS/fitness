package com.entity.view;

import com.entity.RizhizuoyeEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 日志作业
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-02-16 19:47:06
 */
@TableName("rizhizuoye")
public class RizhizuoyeView  extends RizhizuoyeEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public RizhizuoyeView(){
	}
 
 	public RizhizuoyeView(RizhizuoyeEntity rizhizuoyeEntity){
 	try {
			BeanUtils.copyProperties(this, rizhizuoyeEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
