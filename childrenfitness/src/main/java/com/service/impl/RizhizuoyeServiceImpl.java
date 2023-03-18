package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.RizhizuoyeDao;
import com.entity.RizhizuoyeEntity;
import com.service.RizhizuoyeService;
import com.entity.vo.RizhizuoyeVO;
import com.entity.view.RizhizuoyeView;

@Service("rizhizuoyeService")
public class RizhizuoyeServiceImpl extends ServiceImpl<RizhizuoyeDao, RizhizuoyeEntity> implements RizhizuoyeService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<RizhizuoyeEntity> page = this.selectPage(
                new Query<RizhizuoyeEntity>(params).getPage(),
                new EntityWrapper<RizhizuoyeEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<RizhizuoyeEntity> wrapper) {
		  Page<RizhizuoyeView> page =new Query<RizhizuoyeView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<RizhizuoyeVO> selectListVO(Wrapper<RizhizuoyeEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public RizhizuoyeVO selectVO(Wrapper<RizhizuoyeEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<RizhizuoyeView> selectListView(Wrapper<RizhizuoyeEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public RizhizuoyeView selectView(Wrapper<RizhizuoyeEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
