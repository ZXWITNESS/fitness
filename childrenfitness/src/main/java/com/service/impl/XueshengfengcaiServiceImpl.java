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


import com.dao.XueshengfengcaiDao;
import com.entity.XueshengfengcaiEntity;
import com.service.XueshengfengcaiService;
import com.entity.vo.XueshengfengcaiVO;
import com.entity.view.XueshengfengcaiView;

@Service("xueshengfengcaiService")
public class XueshengfengcaiServiceImpl extends ServiceImpl<XueshengfengcaiDao, XueshengfengcaiEntity> implements XueshengfengcaiService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<XueshengfengcaiEntity> page = this.selectPage(
                new Query<XueshengfengcaiEntity>(params).getPage(),
                new EntityWrapper<XueshengfengcaiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<XueshengfengcaiEntity> wrapper) {
		  Page<XueshengfengcaiView> page =new Query<XueshengfengcaiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<XueshengfengcaiVO> selectListVO(Wrapper<XueshengfengcaiEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public XueshengfengcaiVO selectVO(Wrapper<XueshengfengcaiEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<XueshengfengcaiView> selectListView(Wrapper<XueshengfengcaiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public XueshengfengcaiView selectView(Wrapper<XueshengfengcaiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
