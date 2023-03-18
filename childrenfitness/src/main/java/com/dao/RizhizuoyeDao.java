package com.dao;

import com.entity.RizhizuoyeEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.RizhizuoyeVO;
import com.entity.view.RizhizuoyeView;


/**
 * 日志作业
 * 
 * @author 
 * @email 
 * @date 2022-02-16 19:47:06
 */
public interface RizhizuoyeDao extends BaseMapper<RizhizuoyeEntity> {
	
	List<RizhizuoyeVO> selectListVO(@Param("ew") Wrapper<RizhizuoyeEntity> wrapper);
	
	RizhizuoyeVO selectVO(@Param("ew") Wrapper<RizhizuoyeEntity> wrapper);
	
	List<RizhizuoyeView> selectListView(@Param("ew") Wrapper<RizhizuoyeEntity> wrapper);

	List<RizhizuoyeView> selectListView(Pagination page,@Param("ew") Wrapper<RizhizuoyeEntity> wrapper);
	
	RizhizuoyeView selectView(@Param("ew") Wrapper<RizhizuoyeEntity> wrapper);
	

}
