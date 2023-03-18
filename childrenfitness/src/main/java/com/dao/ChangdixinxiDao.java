package com.dao;

import com.entity.ChangdixinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.ChangdixinxiVO;
import com.entity.view.ChangdixinxiView;


/**
 * 场地信息
 * 
 * @author 
 * @email 
 * @date 2022-02-16 19:47:06
 */
public interface ChangdixinxiDao extends BaseMapper<ChangdixinxiEntity> {
	
	List<ChangdixinxiVO> selectListVO(@Param("ew") Wrapper<ChangdixinxiEntity> wrapper);
	
	ChangdixinxiVO selectVO(@Param("ew") Wrapper<ChangdixinxiEntity> wrapper);
	
	List<ChangdixinxiView> selectListView(@Param("ew") Wrapper<ChangdixinxiEntity> wrapper);

	List<ChangdixinxiView> selectListView(Pagination page,@Param("ew") Wrapper<ChangdixinxiEntity> wrapper);
	
	ChangdixinxiView selectView(@Param("ew") Wrapper<ChangdixinxiEntity> wrapper);
	
//在对应的dao方法中 一样要指定 @Param(Constants.WRAPPER) Wrapper<User> ew,其中Constants.WRAPPER="ew"源码中可以看到
}
