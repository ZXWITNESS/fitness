package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.RizhizuoyeEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.RizhizuoyeVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.RizhizuoyeView;


/**
 * 日志作业
 *
 * @author 
 * @email 
 * @date 2022-02-16 19:47:06
 */
public interface RizhizuoyeService extends IService<RizhizuoyeEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<RizhizuoyeVO> selectListVO(Wrapper<RizhizuoyeEntity> wrapper);
   	
   	RizhizuoyeVO selectVO(@Param("ew") Wrapper<RizhizuoyeEntity> wrapper);
   	
   	List<RizhizuoyeView> selectListView(Wrapper<RizhizuoyeEntity> wrapper);
   	
   	RizhizuoyeView selectView(@Param("ew") Wrapper<RizhizuoyeEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<RizhizuoyeEntity> wrapper);
   	

}

