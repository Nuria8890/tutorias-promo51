import PropTypes from "prop-types";

import InputName from "./InputName";
import InputSurname from "./InputSurname";

function Form({ onChangeValues }) {
  return (
    <form>
      <InputName onChangeValues={onChangeValues} />
      <InputSurname />
    </form>
  );
}

export default Form;

Form.propTypes = {
  onChangeValues: PropTypes.func.isRequired,
};
