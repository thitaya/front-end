import Link from 'next/link'
import { Breadcrumb, Icon } from 'antd';


const Navbar = () => {
    return (
        <div>

            <nav className="nav-shadow" >
            
                <Breadcrumb >
                <Breadcrumb.Item   className="head-name">
                 <Icon type="file" style={{ fontSize: 16, color: '#ffffff' }} />
                       <span> TN Daily </span>
                 </Breadcrumb.Item>
               
                    <Breadcrumb.Item href="">
                        <Icon type="file" style={{ fontSize: 16, color: '#ffffff' }} />
                        <span>รายงานประจำวัน</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="setting"  style={{ fontSize: 16, color: '#ffffff' }}/>
                        <span>ตั้งค่า</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <Icon type="user" style={{ fontSize: 16, color: '#ffffff' }} />
                        <span>Username</span>
                        <Icon type="caret-down"  style={{ fontSize: 10, color: '#ffffff' }}/>
                    </Breadcrumb.Item>
                  
                </Breadcrumb>
            </nav>
        </div>
    )
}
export default Navbar