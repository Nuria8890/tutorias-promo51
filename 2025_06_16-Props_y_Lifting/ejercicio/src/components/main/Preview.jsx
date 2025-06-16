import PropTypes from "prop-types";

function Preview({ name }) {
  return (
    <>
      <p>Nombre del usuario: {name}</p>
      <p>Apellido del usuario:</p>
    </>
  );
}

export default Preview;
Preview.propTypes = {
  name: PropTypes.string.isRequired,
};
