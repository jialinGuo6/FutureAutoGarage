/**
 * FutureAutoGarage - HomePage Component - 网站主页
 * 
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Last Updated: 2025-11-04
 * 
 * 应用主页面，包含路由配置和Banner和GotoBox组件
 * 1. 同级目录（相同文件夹） 导入规则: ./page/HomePage
 * 2. 子级目录 导入规则: ../page/HomePage
 * 3. 父级目录 导入规则: ../../page/HomePage
 * 4. 不同文件夹导入规则: import { AllSeasonTires } from "./AllSeasonTires";
 */

import Banner from "../components/Banner"; // 在components文件夹下
import GotoBox from "../components/GotoBox";
import { useNavigate} from "react-router-dom";
import { Typography, Grid } from '@mui/material';



export default function HomePage() {
     // 状态管理
   // const [code, setCode] = useState(null); // room code default to null
   // const [showDialog, setShowDialog] = useState(false);  // 新增：控制对话框,默认不显示
   // const { showLoading, hideLoading } = useLoading();
    const navigate = useNavigate();  // 新增：用于重定向，跳转到房间页面
    //<Navigate> 是组件，只能在render中使用
    // navigate() 是函数，可以在事件处理器中调用
   /* // 清理过期房间
    const cleanupExpiredRooms = async () => {
        try {
            await axios.delete('/api/cleanup-rooms/');
        } catch (error) {
            console.error('Cleanup error:', error);
        }
    };

    检查用户是否在房间中
    const checkUserInRoom = async () => {
        showLoading();
        try {
            const response = await axios.get('/api/user-in-room/');
            const data = response.data;
            // 直接信任后端返回的session状态
            setCode(data.code);
            // 如果后端返回了code，说明用户在房间中
            if (data.code) {
                setShowDialog(true);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            hideLoading();
        }
    };
    // 组件加载时清理过期房间并检查用户状态
    useEffect(() => {
        cleanupExpiredRooms();
        checkUserInRoom();
    }, []);
    // 用户选择重新进入房间
    const handleRejoinRoom = () => {
        setShowDialog(false);
        //用户点击按钮时需要立即跳转，所以用函数式的 navigate()
        navigate(`/room/${code}`); //命令式导航:在事件处理函数中使用，所以不用=>声明式导航:<Navigate to={`/room/${code}`} /> 
    };
    // 用户选择留在主页
    const handleStayHome = () => {
        setShowDialog(false);
        setCode(null);  // 清除房间码
    }; */
    // 渲染主页
    return (
        <div style={{ padding: '20px' }}>
                <Banner />
                <Grid container spacing={100} direction="column" alignItems="center" sx={{ mt: 2 }}>
                    <Grid>
                        <Typography variant="h4" component="h1" sx={{ marginBottom: '24px', textAlign: 'center', color: '#2c3e50', fontWeight: 600 }}>
                             Future Service
                        </Typography>

                        <Typography component='h4' variant='h5' sx={{ textAlign: 'center', mt: 2}}>
                            Professional, Accurate, Effective, Honest, and All for Customers.
                        </Typography>
                    </Grid>
                </Grid>
                <GotoBox/>
        </div>
    );
}
// link 和 navigate 都是用于导航的
// link 用于导航到其他页面，navigate 用于导航到当前页面
// 区别在于 link 会在新的页面打开，而 navigate 会在当前页面进行跳转