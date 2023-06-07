import VueRouter from "vue-router"
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {isAuth: false,title: '关于'},
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { isAuth: false, title: '主页' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            // path: 'detail/:id/:name',
                            path: 'detail',
                            component: Detail,
                            meta: { isAuth: true, title: '详情' },
                            props($route){
                                return {
                                    id: $route.query.id,
                                    name: $route.query.name,
                                }
                            },
                        },
                    ],
                },
            ],
        },
    ]
})

router.beforeEach((to, from , next)=>{
    // if(to.path==='/home/message' || to.name==='xinwen'){
    if (to.meta.isAuth){
        if(localStorage.getItem('school')==='atguigu'){
            next()
        }else{
            alert('无权限')
            return
        }
    }
    next()
})
router.afterEach((to,from)=>{
    document.title = to.meta.title
})
export default  router
