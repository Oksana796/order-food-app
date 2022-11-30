import "./MealForm.css";

const MealForm = (props) => {
  return (
    <form className="form">
      <div className="input">
        <label htmlFor="amount">Amount</label>
        <input
          id={props.id}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>

      <button>Add</button>
    </form>
  );
};

export default MealForm;
