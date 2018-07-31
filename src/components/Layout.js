import { Collapse } from 'antd';
import Navname from '../components/Navname'

const Panel = Collapse.Panel;

const text = `
 55
`;

const LayoutComponent =()=> {
  
    return (
      <div>
        <Navname/>
        <Collapse accordion>
    <Panel showArrow={false}  header="Mapmagic" key="1" >
      <p>{text}</p>
    </Panel>
    <Panel showArrow={false}  header="Jop Thai" key="2">
      <p>{text}</p>
    </Panel>
    <Panel showArrow={false}  header="Shop Thinknet" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
        
      </div>
    )
  }


export default LayoutComponent;