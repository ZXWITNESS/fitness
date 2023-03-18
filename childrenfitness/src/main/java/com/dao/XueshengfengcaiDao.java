package com.dao;

import com.entity.XueshengfengcaiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.XueshengfengcaiVO;
import com.entity.view.XueshengfengcaiView;


/**
 * 学生风采
 * 
 * @author 
 * @email 
 * @date 2022-02-16 19:47:06
 */
public interface XueshengfengcaiDao extends BaseMapper<XueshengfengcaiEntity> {
	
	List<XueshengfengcaiVO> selectListVO(@Param("ew") Wrapper<XueshengfengcaiEntity> wrapper);
	
	XueshengfengcaiVO selectVO(@Param("ew") Wrapper<XueshengfengcaiEntity> wrapper);
	
	List<XueshengfengcaiView> selectListView(@Param("ew") Wrapper<XueshengfengcaiEntity> wrapper);

	List<XueshengfengcaiView> selectListView(Pagination page,@Param("ew") Wrapper<XueshengfengcaiEntity> wrapper);
	
	XueshengfengcaiView selectView(@Param("ew") Wrapper<XueshengfengcaiEntity> wrapper);
	

}
