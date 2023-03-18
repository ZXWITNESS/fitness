package com.dao;

import com.entity.KechenggoumaiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.KechenggoumaiVO;
import com.entity.view.KechenggoumaiView;


/**
 * 课程购买
 * 
 * @author 
 * @email 
 * @date 2022-02-16 19:47:06
 */
public interface KechenggoumaiDao extends BaseMapper<KechenggoumaiEntity> {
	
	List<KechenggoumaiVO> selectListVO(@Param("ew") Wrapper<KechenggoumaiEntity> wrapper);
	
	KechenggoumaiVO selectVO(@Param("ew") Wrapper<KechenggoumaiEntity> wrapper);
	
	List<KechenggoumaiView> selectListView(@Param("ew") Wrapper<KechenggoumaiEntity> wrapper);

	List<KechenggoumaiView> selectListView(Pagination page,@Param("ew") Wrapper<KechenggoumaiEntity> wrapper);
	
	KechenggoumaiView selectView(@Param("ew") Wrapper<KechenggoumaiEntity> wrapper);
	

}
