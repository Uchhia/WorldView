import styles from "./CountryList.module.css";
import Spinner from "./Spinner.jsx";
import CountryItem from "./CountryItem.jsx";
import Message from "./Message.jsx";

function CountryList({ isloading, cities }) {
  if (isloading) return <Spinner />;

  if (cities.length === 0)
    return <Message message="Add you first city by clicking on map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <div>
      <ul className={styles.countryList}>
        {countries.map((country, index) => (
          <CountryItem country={country} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
