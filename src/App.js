import MainApp from "./lib/components/MainApp";
import SettingApp from "./lib/components/SettingApp";
import IsmailScreen from "./lib/components/IsmailScreen";
import YuniScreen from "./lib/components/YuniScreen";

function App() {
  if (window.location.pathname === "/yuni") {
    return <YuniScreen />;
  }
  if (window.location.pathname === "/ismail") {
    return <IsmailScreen />;
  }
  if (window.location.pathname === "/setting") {
    return <SettingApp />;
  }
  return (
    <div style={{ backgroundColor: "#ebebeb", margin: 0, height: "100vh" }}>
      <MainApp />
    </div>
  );
}
export default App;
