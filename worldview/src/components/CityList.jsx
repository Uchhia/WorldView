import styles from "./CityList.module.css";
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem.jsx";
import Message from "./Message.jsx";
function CityList({ isloading, cities }) {
  if (isloading) return <Spinner />;

  if (cities.length === 0)
    return <Message message="Add you first city by clicking on map" />;
  return (
    <div>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
}

export default CityList;
