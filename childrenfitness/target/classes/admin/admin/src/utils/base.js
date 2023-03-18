const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootcd8ka/",
            name: "springbootcd8ka",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootcd8ka/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "少儿体适能培训管理小程序"
        } 
    }
}
export default base
