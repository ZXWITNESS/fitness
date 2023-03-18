const menu = {
    list() {
        return [{
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-full",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "教练",
                    "menuJump": "列表",
                    "tableName": "jiaolian"
                }], "menu": "教练管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-time",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "用户",
                    "menuJump": "列表",
                    "tableName": "yonghu"
                }], "menu": "用户管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-medal",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "课程类型",
                    "menuJump": "列表",
                    "tableName": "kechengleixing"
                }], "menu": "课程类型管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-newshot",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "学生风采",
                    "menuJump": "列表",
                    "tableName": "xueshengfengcai"
                }], "menu": "学生风采管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-paint",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "关于我们",
                    "menuJump": "列表",
                    "tableName": "guanyuwomen"
                }], "menu": "关于我们管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-vipcard",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "场地信息",
                    "menuJump": "列表",
                    "tableName": "changdixinxi"
                }], "menu": "场地信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-brand",
                    "buttons": ["新增", "查看", "修改", "删除", "查看评论"],
                    "menu": "课程信息",
                    "menuJump": "列表",
                    "tableName": "kechengxinxi"
                }], "menu": "课程信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-brand",
                    "buttons": ["查看", "删除"],
                    "menu": "课程购买",
                    "menuJump": "列表",
                    "tableName": "kechenggoumai"
                }], "menu": "课程购买管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-explore",
                    "buttons": ["查看", "删除"],
                    "menu": "课程预约",
                    "menuJump": "列表",
                    "tableName": "kechengyuyue"
                }], "menu": "课程预约管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-news",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "公告信息",
                    "tableName": "news"
                }, {
                    "appFrontIcon": "cuIcon-similar",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "轮播图管理",
                    "tableName": "config"
                }], "menu": "系统管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-skin",
                    "buttons": ["查看", "课程购买", "课程预约"],
                    "menu": "课程信息列表",
                    "menuJump": "列表",
                    "tableName": "kechengxinxi"
                }], "menu": "课程信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "管理员",
            "tableName": "users"
        }, {
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-brand",
                    "buttons": ["查看"],
                    "menu": "课程信息",
                    "menuJump": "列表",
                    "tableName": "kechengxinxi"
                }], "menu": "课程信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-brand",
                    "buttons": ["查看"],
                    "menu": "课程购买",
                    "menuJump": "列表",
                    "tableName": "kechenggoumai"
                }], "menu": "课程购买管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-explore",
                    "buttons": ["查看", "审核"],
                    "menu": "课程预约",
                    "menuJump": "列表",
                    "tableName": "kechengyuyue"
                }], "menu": "课程预约管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-skin",
                    "buttons": ["查看", "课程购买", "课程预约"],
                    "menu": "课程信息列表",
                    "menuJump": "列表",
                    "tableName": "kechengxinxi"
                }], "menu": "课程信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "教练",
            "tableName": "jiaolian"
        }, {
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-brand",
                    "buttons": ["查看", "支付"],
                    "menu": "课程购买",
                    "menuJump": "列表",
                    "tableName": "kechenggoumai"
                }], "menu": "课程购买管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-explore",
                    "buttons": ["查看"],
                    "menu": "课程预约",
                    "menuJump": "列表",
                    "tableName": "kechengyuyue"
                }], "menu": "课程预约管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-taxi",
                    "buttons": ["新增", "查看"],
                    "menu": "日志作业",
                    "menuJump": "列表",
                    "tableName": "rizhizuoye"
                }], "menu": "日志作业管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-favor",
                    "buttons": ["查看", "删除"],
                    "menu": "我的收藏管理",
                    "tableName": "storeup"
                }], "menu": "我的收藏管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-skin",
                    "buttons": ["查看", "课程购买", "课程预约"],
                    "menu": "课程信息列表",
                    "menuJump": "列表",
                    "tableName": "kechengxinxi"
                }], "menu": "课程信息模块"
            }],
            "hasBackLogin": "否",
            "hasBackRegister": "否",
            "hasFrontLogin": "是",
            "hasFrontRegister": "是",
            "roleName": "用户",
            "tableName": "yonghu"
        }]
    }
}
export default menu;
