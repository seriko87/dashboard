import Chart from '../../components/chart/Chart';
import Featured from '../../components/featuredInfo/Featured';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Chart
        data={userData}
        title={'User Analytics'}
        grid={true}
        dataKey={'Active User'}
      />

      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
