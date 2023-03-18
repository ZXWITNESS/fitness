package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.XueshengfengcaiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.XueshengfengcaiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.XueshengfengcaiView;


/**
 * 学生风采
 *
 * @author 
 * @email 
 * @date 2022-02-16 19:47:06
 */
public interface XueshengfengcaiService extends IService<XueshengfengcaiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<XueshengfengcaiVO> selectListVO(Wrapper<XueshengfengcaiEntity> wrapper);
   	
   	XueshengfengcaiVO selectVO(@Param("ew") Wrapper<XueshengfengcaiEntity> wrapper);
   	
   	List<XueshengfengcaiView> selectListView(Wrapper<XueshengfengcaiEntity> wrapper);
   	
   	XueshengfengcaiView selectView(@Param("ew") Wrapper<XueshengfengcaiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<XueshengfengcaiEntity> wrapper);
   	

}

