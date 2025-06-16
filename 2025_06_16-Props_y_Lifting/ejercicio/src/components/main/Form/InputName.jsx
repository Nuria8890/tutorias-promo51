import PropTypes from "prop-types";

function InputName({ onChangeValues }) {
  const handleChangeName = (event) => {
    // console.log(event.target.value);
    onChangeValues(event.target.value);
  };

  return (
    <>
      <label htmlFor="name">Nombre del usuario:</label>
      <input type="text" id="name" onChange={handleChangeName} />
    </>
  );
}

export default InputName;

InputName.propTypes = {
  onChangeValues: PropTypes.func.isRequired,
};
