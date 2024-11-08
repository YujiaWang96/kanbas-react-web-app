import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ children }: { children: any }) {
  //这里的children是允许被传回的数据，就一旦state里是有符合的用户账号密码，就把这个children打包给展示出来，也就是登陆后的一系列信息，课程等组件，回忆是不是有个父组件参数children对应着子组件中间夹着的数据，就是这个。子组件就传到kanbas下index那个路由的界面
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/Kanbas/Account/Signin" />;
  }
}
