import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add first city" />;

  // Extract countries from cities array without duplcates
  //   const countries = [...new Set(cities.map((city) => city.country))];

  const countries = cities.reduce((accu, city) => {
    if (!accu.map((e) => e.country).includes(city.country)) {
      return [...accu, { country: city.country, emoji: city.emoji }];
    } else {
      return accu;
    }
  }, []);

  return (
    <ul className={styles.cityList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
