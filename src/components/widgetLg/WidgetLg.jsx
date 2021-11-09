import './widgetLg.css';

const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/originals/5e/50/fa/5e50fa16044abc13c3088987a07a7d9f.jpg"
              alt=""
              className="widgetLgImg"
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;